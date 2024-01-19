import { MessageEventType } from '../constants/enums';
import {
  ConfigType,
  IConnectMessage,
  ISignMessage,
  SimpleSignerResponse,
} from '../types';
import openPopup from './open-popup';

/**
 * Handles SimpleSigner messages and events, returns a promise with the message response data or rejects on error.
 *
 * @param {ConfigType<T>} param - An object containing the URL, origin, and postConfig.
 * @param {string} param.url - The SimpleSigner URL to open in a popup window.
 * @param {string} param.origin - The SimpleSigner origin URL of the message event.
 * @param {T} param.postConfig - Configuration object to send via postMessage after the popup window is ready.
 * @return {Promise<SimpleSignerResponse<T>>} A promise that resolves to a SimpleSignerResponse.
 */
const messageHandler = async <T extends ISignMessage | IConnectMessage>({
  url,
  origin,
  ...postConfig
}: ConfigType<T>): Promise<SimpleSignerResponse<T>> => {
  const popupWindow = openPopup(url, '_blank');

  return new Promise((resolve, reject) => {
    let ready = false;

    const timeout = setTimeout(() => {
      if (!ready) {
        reject('Window timeout');
        window.removeEventListener('message', handleMessage);
      }
    }, 5000);

    const handleMessage = (e: MessageEvent<SimpleSignerResponse<T>>) => {
      if (e.origin === origin) {
        const messageResponse = e.data;

        switch (messageResponse.type) {
          case MessageEventType.READY:
            ready = true;
            popupWindow.postMessage(postConfig, origin);
            clearTimeout(timeout);
            break;
          case MessageEventType.CANCEL:
            reject('User cancelled process');
            window.removeEventListener('message', handleMessage);
            break;
          default:
            resolve(messageResponse);
            window.removeEventListener('message', handleMessage);
            break;
        }
      }
    };
    window.addEventListener('message', handleMessage);
  });
};

export default messageHandler;

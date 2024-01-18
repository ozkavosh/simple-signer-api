import { MessageEventType } from '../constants/enums';
import openPopup from './open-popup';

const messageHandler = async <T extends ISignMessage | IConnectMessage>(
  url: string,
  simpleSignerOrigin: string,
): Promise<SimpleSignerResponse<T>> => {
  openPopup(url, '_blank');

  return new Promise((resolve, reject) => {
    let ready = false;

    const timeout = setTimeout(() => {
      if (!ready) {
        reject('Window timeout');
        window.removeEventListener('message', handleMessage);
      }
    }, 3000);

    const handleMessage = (e: MessageEvent<SimpleSignerResponse<T>>) => {
      if (e.origin === simpleSignerOrigin) {
        const messageResponse = e.data;

        switch (messageResponse.type) {
          case MessageEventType.READY:
            ready = true;
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

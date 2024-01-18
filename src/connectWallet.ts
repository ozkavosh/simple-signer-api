import { Network } from './constants/enums';
import SimpleSignerError from './errors/simple-signer-error';
import getUrl from './helpers/get-url';
import messageHandler from './helpers/message-handler';

export const connectWallet = async (
  network: Network,
): Promise<IConnectMessage> => {
  try {
    const url = `${getUrl(network)}/connect`;

    const {
      message: { publicKey, wallet },
    } = await messageHandler<IConnectMessage>(url, getUrl(network));

    return {
      publicKey,
      wallet,
    };
  } catch (err: unknown) {
    if (typeof err === 'string') {
      throw new SimpleSignerError(err);
    }

    throw err;
  }
};

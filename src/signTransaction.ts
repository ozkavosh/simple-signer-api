import { Network } from './constants/enums';
import SimpleSignerError from './errors/simple-signer-error';
import getUrl from './helpers/get-url';
import messageHandler from './helpers/message-handler';

export const signTransaction = async (
  transactionXDR: string,
  network: Network,
): Promise<string> => {
  try {
    const url = `${getUrl(network)}/sign/?xdr=${transactionXDR}`;

    const {
      message: { signedXDR },
    } = await messageHandler<ISignMessage>(url, getUrl(network));

    return signedXDR;
  } catch (err: unknown) {
    if (typeof err === 'string') {
      throw new SimpleSignerError(err);
    }

    throw err;
  }
};

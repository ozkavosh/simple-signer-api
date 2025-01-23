import { Network } from './constants/enums';
import SimpleSignerError from './errors/simple-signer-error';
import getUrl from './helpers/get-url';
import messageHandler from './helpers/message-handler';
import { IOperationGroup, ISignMessage } from './types';

/**
 * Signs a transaction using the provided transaction XDR and network.
 *
 * @param {string} transactionXDR - The transaction XDR to sign.
 * @param {Network | string} network - The network to use for signing the transaction. Either a `Network` enum value or a custom simple signer deployment URL.
 * @param {object} [extraConfig] - Additional configuration options.
 * @param {string} [extraConfig.description] - An optional description.
 * @param {IOperationGroup[]} [extraConfig.operationGroups] - An optional array of operation groups.
 * @return {Promise<string>} A promise that resolves to the signed XDR string.
 */
export const signTransaction = async (
  transactionXDR: string,
  network: Network | string,
  extraConfig?: {
    description?: string;
    operationGroups?: IOperationGroup[];
  },
): Promise<string> => {
  try {
    const origin = getUrl(network);
    const url = `${origin}/sign`;

    const {
      message: { signedXDR },
    } = await messageHandler<ISignMessage>({
      url,
      origin,
      xdr: transactionXDR,
      ...extraConfig,
    });

    return signedXDR;
  } catch (err: unknown) {
    if (typeof err === 'string') {
      throw new SimpleSignerError(err);
    }

    throw err;
  }
};

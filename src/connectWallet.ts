import { Network, WalletType } from './constants/enums';
import SimpleSignerError from './errors/simple-signer-error';
import getUrl from './helpers/get-url';
import messageHandler from './helpers/message-handler';
import { IConnectMessage } from './types';

/**
 * Connects a wallet of the specified network.
 *
 * @param {Network} network - The network to connect the wallet to.
 * @param {WalletType[]} wallets - (Optional) An array of wallet types to connect to. Defaults to all SimpleSigner available wallets.
 * @return {Promise<IConnectMessage>} - A promise that resolves to an `IConnectMessage` object containing the public key and wallet information.
 */
export const connectWallet = async (
  network: Network,
  wallets?: WalletType[],
): Promise<IConnectMessage> => {
  try {
    const origin = getUrl(network);
    const url = `${origin}/connect`;

    const {
      message: { publicKey, wallet },
    } = await messageHandler<IConnectMessage>({
      url,
      origin,
      wallets: wallets || [],
    });

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

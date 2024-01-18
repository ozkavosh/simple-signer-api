import { describe, expect, it, jest } from '@jest/globals';
import { Network, WalletType } from '../constants/enums';

jest.mock('..', () => ({
  connectWallet: () =>
    Promise.resolve({
      publicKey: 'test',
      wallet: WalletType.SECRETKEY,
    }),
}));

import { connectWallet } from '..';

describe('connectWallet', () => {
  it('returns a wallet', async () => {
    const wallet = await connectWallet(Network.PUBNET);
    expect(wallet).toStrictEqual({
      publicKey: 'test',
      wallet: WalletType.SECRETKEY,
    });
  });
});

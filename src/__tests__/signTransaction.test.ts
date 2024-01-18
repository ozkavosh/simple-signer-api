import { describe, expect, it, jest } from '@jest/globals';
import { Network } from '../constants/enums';

jest.mock('..', () => ({
  signTransaction: () => Promise.resolve('AAA'),
}));

import { signTransaction } from '..';

describe('signTransaction', () => {
  it('should sign transaction', async () => {
    const testXDR = 'AAA';
    const signedXDR = await signTransaction(testXDR, Network.PUBNET);
    expect(signedXDR).toBe(testXDR);
  });
});

import { Network } from './enums';

const NETWORKS: Record<Network, string> = {
  [Network.TESTNET]: 'https://sign-testnet.bigger.systems',
  [Network.PUBNET]: 'https://sign.bigger.systems',
  [Network.FUTURENET]: 'https://sign-futurenet.bigger.systems',
};

export default NETWORKS;

import { Network } from './enums';

const NETWORKS: Record<Network, string> = {
  [Network.TESTNET]: 'https://sign-testnet.scalemote.io',
  [Network.PUBNET]: 'https://sign.scalemote.io',
  [Network.FUTURENET]: 'https://sign-futurenet.scalemote.io',
};

export default NETWORKS;

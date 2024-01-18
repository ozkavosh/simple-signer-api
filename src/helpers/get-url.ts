import { Network } from '../constants/enums';
import NETWORKS from '../constants/networks';

const getUrl = (network: Network) => {
  return NETWORKS[network];
};

export default getUrl;

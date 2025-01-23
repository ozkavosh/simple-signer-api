import { Network } from '../constants/enums';
import NETWORKS from '../constants/networks';

/**
 * Retrieves the URL associated with the given network.
 *
 * @param {Network} network - The network for which to retrieve the origin URL.
 * @return {string} The URL associated with the given network.
 */
const getUrl = (network: Network | string): string => {
  if (!(network in NETWORKS)) {
    const parsedUrl = new URL(network);
    return parsedUrl.origin;
  }

  return NETWORKS[network];
};

export default getUrl;

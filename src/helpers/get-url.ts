import { Network } from '../constants/enums';
import NETWORKS from '../constants/networks';

/**
 * Retrieves the URL associated with the given network.
 *
 * @param {Network} network - The network for which to retrieve the URL.
 * @return {string} The URL associated with the given network.
 */
const getUrl = (network: Network): string => {
  return NETWORKS[network];
};

export default getUrl;

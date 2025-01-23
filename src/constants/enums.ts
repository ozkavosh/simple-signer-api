export enum Network {
  TESTNET = 'testnet',
  PUBNET = 'pubnet',
  FUTURENET = 'futurenet',
}

export enum WalletType {
  SECRETKEY = 'privateKey',
  ALBEDO = 'albedo',
  FREIGHTER = 'freighter',
  RABET = 'rabet',
  WALLET_CONNECT = 'walletConnect',
  XBULL = 'xbull',
  LOBSTR = 'lobstr',
}

export enum MessageEventType {
  CONNECT = 'onConnect',
  CANCEL = 'onCancel',
  SIGN = 'onSign',
  READY = 'onReady',
}

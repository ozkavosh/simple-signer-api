interface ISignMessage {
  signedXDR: string;
}

interface IConnectMessage {
  publicKey: string;
  wallet: import('./constants/enums').WalletType;
}

interface SimpleSignerResponse<T extends ISignMessage | IConnectMessage> {
  type: import('./constants/enums').MessageEventType;
  page: string;
  message: T;
}

interface IResponse<T extends ISignMessage | IConnectMessage> {
  message: T;
}

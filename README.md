# Simple Stellar Signer API

Handles [Simple Stellar Signer](https://github.com/ScaleMote/simple-stellar-signer) popup window message-based implementation and networks, exposing its methods to handle directly as **async** functions.

## How to use

Install package with:

        npm i simple-stellar-signer-api
        
Import methods into your code such as:

        import { connectWallet, Network } from 'simple-stellar-signer-api'
        
        const handleConnect = async () => {
            try {
                const { publicKey, wallet } = await connectWallet(Network.FUTURENET);
                //Do something with results...
            } catch (err: unknown){
                console.error(err);
            }
        }

## Methods

All methods handle window popup, message and event handling then returns either a resolve with message data on success or reject with a string message on error.

`connectWallet`
- Params: 
    - network: [Network](#network)
    - **(Optional)** wallets: [WalletType[]](#wallettype)
- Returns:
   - wallet: { publicKey: string, wallet: [WalletType](#wallettype) }

`signTransaction`
- Params:
    - transactionXDR: string
    - network: [Network](#network)
    - **(Optional)** extraConfig: { description?: string, operationGroups?: OperationGroup[] } 
- Returns:
    - signedXDR: string
    
## Exported Enums
### Network
---
`pubnet`
`testnet`
`futurenet`

### WalletType
---
`albedo`
`freighter`
`rabet`
`privateKey`
`walletConnect`
`xbull`


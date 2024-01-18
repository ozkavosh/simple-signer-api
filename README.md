# Simple Stellar Signer API
---
Handles [Simple Stellar Signer](https://github.com/ScaleMote/simple-stellar-signer) popup window message-based implementation and networks, exposing its methods to handle directly as **async** functions.

## How to use
---
Install package with:

        npm i simple-stellar-signer-api
        
Import methods into your code such as:

        import { connectWallet } from 'simple-stellar-signer-api'
        
        const handleConnect = async () => {
            try {
                const { publicKey, wallet } = await connectWallet("futurenet");
                //Do something with results...
            } catch (err: unknown){
                console.error(err);
            }
        }

## Methods
---
`connectWallet`
- Params: 
    - network: [Network](#network) 
- Returns:
   - wallet: { publicKey: string, wallet: WalletType }

`signTransaction`
- Params:
    - transactionXDR: string
    - network: [Network](#network)
- Returns:
    - signedXDR: string
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
`secretkey`
`walletconnect`
`xbull`

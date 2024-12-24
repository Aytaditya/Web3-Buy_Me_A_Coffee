"use client";
import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { ConnectButton, useActiveAccount } from "thirdweb/react"


const BuyMeCoffee = () => {
    const account=useActiveAccount()
  return (
    <>
    {account && (
        <div className=" p-[2rem] rounded-lg w-[500px]">
        <ConnectButton chain={chain} client={client} />
        </div>
    )}
    </>
  )
}

export default BuyMeCoffee

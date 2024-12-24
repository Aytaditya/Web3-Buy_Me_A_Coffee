import { chain } from "@/app/chain"
import { client } from "@/app/client"
import { getContract } from "thirdweb"
import { contractABI } from "./contractABI"

const contractAddress="0xA6d8d1a79c86165002b08d8250f180063Edc4d0D"

export const contract=getContract({
    client:client,
    chain:chain,
    address:contractAddress,
    abi:contractABI,
})
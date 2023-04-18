import { ethers } from "ethers"

type Nominal<T extends string> = { readonly [k in T as `__${k}__`]: void }

const isAddress = (val: string): val is Address => ethers.isAddress(val)

export type Address = string & Nominal<"address">

export type Member = {
    wallet: Address
    name: string
}
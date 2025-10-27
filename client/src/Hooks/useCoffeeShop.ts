import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { abi } from "../contants/ABI.json";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export const useCoffeeShop = (address: string) => {
  const { writeContractAsync } = useWriteContract();
  const navigate = useNavigate();
  const [hash, setHash] = useState<`0x${string}` | undefined>(undefined);
  const { clearCart } = useCart();

  const { isLoading, isSuccess, isError } = useWaitForTransactionReceipt({
    hash,
  });

  if (isSuccess) {
    navigate(`/payment-success/${hash}`);
    clearCart();
  }
  if (isError) navigate(`/payment-failure/${hash}`);

  const buyCoffee = async (itemName: string[], value: bigint) => {
    console.log("value", value);
    try {
      const txHash = await writeContractAsync({
        address: address as `0x${string}`,
        abi,
        functionName: "buyCoffee",
        args: [itemName],
        value: value,
      });
      setHash(txHash);
    } catch (error: any) {
      console.error(error.shortMessage, error.details);
    }
  };

  return { buyCoffee, isLoading };
};

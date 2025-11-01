import { useContractRead } from "wagmi";
import { COFFEE_SHOP_SMART_ADDRESS, CONTRACT_ABI } from "../contants/constants";
import { useEffect, useState } from "react";
import { formatEther } from "viem";
import "../styles/SippersPage.css";
import Navbar from "../components/Navbar";

interface Coffee {
  sender: string;
  itemName: string[];
  timestamp: bigint;
  amount: bigint;
}

const SippersPage = () => {
  const [transactions, setTransactions] = useState<Coffee[]>([]);

  const { data: coffeeData } = useContractRead({
    address: COFFEE_SHOP_SMART_ADDRESS,
    abi: CONTRACT_ABI,
    functionName: "getAllCoffees",
  });

  useEffect(() => {
    if (coffeeData) {
      setTransactions(coffeeData as Coffee[]);
    }
  }, [coffeeData]);

  return (
    <>
      <Navbar />
      <div className="sippers-container">
        <div className="sippers-content">
          <h1 className="sippers-title">Haven Sippers Transactions</h1>

          <div className="transactions-table-container">
            <div className="table-wrapper">
              <table className="transactions-table">
                <thead>
                  <tr>
                    <th>Sipper Address</th>
                    <th>Items Ordered</th>
                    <th>Amount (ETH)</th>
                    <th>Date & Time</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx, index) => (
                    <tr key={index}>
                      <td>
                        <span className="wallet-address">
                          {`${tx.sender.slice(0, 6)}...${tx.sender.slice(-4)}`}
                        </span>
                      </td>
                      <td>{tx.itemName.join(", ")}</td>
                      <td>{formatEther(tx.amount)}</td>
                      <td>
                        {new Date(Number(tx.timestamp) * 1000).toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {transactions.length === 0 && (
              <div className="empty-state">
                <p>No coffee transactions yet. Be the first to buy! ☕</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SippersPage;

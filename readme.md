# 🪙 Brew Haven — a coffee ordering app

A decentralized “Buy Me a Coffee” platform powered by Ethereum Smart Contracts. Users can buy coffee (one-time ETH payments) and view a history of sippers and items purchased.

🚀 Table of Contents

- About the Project
- Features
- Tech Stack
- Smart Contract Overview
- Architecture
- Screenshots / Demo
- Getting Started
- Environment Variables
- Deployment
- Future Improvements
- Contributing
- License

## About the Project

Brew Haven is an Ethereum-based dApp (Sepolia testnet) that lets visitors "buy a coffee" for the shop owner. Each purchase records the buyer address, list of items, timestamp and amount on-chain. The frontend uses RainbowKit for wallet connections and wagmi/viem for contract reads/writes.

Important: this project is built for the Ethereum / EVM family (Sepolia testnet for development).

## Features

- Connect wallet via RainbowKit
- Buy coffee (payable function) with a list of item names
- View a table of all transactions (Sippers) showing address, items, amount (ETH) and timestamp
- Real-time RPC integration via Alchemy for improved UX
- Pure CSS themed UI (coffee colors and imagery)
- Client-only architecture (no backend)

## Tech Stack

- Solidity (Smart Contract)
- Hardhat (development & deployment)
- React (Vite + TypeScript)
- RainbowKit (wallet UI)
- wagmi + viem (contract interactions)
- Pure CSS for styling
- Node.js (recommended v20)
- Etherscan / Block explorer (for verification)
- Chain: Ethereum (Sepolia testnet)
- Package manager: npm

## Smart Contract Overview

Contract file: `smart_contract/contracts/CoffeeShop.sol`

Key functions:

- `buyCoffee(string[] calldata itemName) external payable` — Called by the buyer. Requires `msg.value > 0`. The contract forwards payment to owner and stores a `Coffee` struct with `sender`, `itemName[]`, `timestamp`, and `amount`.
- `getAllCoffees() public view returns (Coffee[] memory)` — Returns all recorded purchases. Use this on the frontend to populate the Sippers table.

Event:

- `CoffeePurchased(address indexed buyer, string[] itemName, uint256 amountInETH, uint256 timestamp)` — emitted on each purchase.

Deployed contract (Sepolia):

- `0xCb68ad5Ff470495fF09C36c1c974b5010cfb056A`

Security note: For demo purposes the contract forwards ETH directly to the owner (`payable(owner).transfer(msg.value)`). In production consider safer withdrawal patterns (pull payments) and auditing.

## Architecture

- Frontend (client/) — React app that connects to wallets (RainbowKit) and reads/writes the contract with wagmi + viem.
- Smart contracts (smart_contract/) — Hardhat project with `CoffeeShop.sol`, deployment script and compiled artifacts.
- Data flow: User -> Wallet -> buyCoffee(tx) -> Contract stores Coffee -> Frontend reads via `getAllCoffees()` to render Sippers table.
- RPC provider: Alchemy (Sepolia) used by the frontend for reliable reads/writes.

## Screenshots / Demo

- Sippers page screenshot: ![Sippers page](/client/src/assets/sippers-screenshot.png)
- Menu / Checkout screenshot: ![Menu page](/client/src/assets/menu-screenshot.png)

Live demo (if deployed): add your deployed Vercel URL here

## Getting Started

### Prerequisites

- Node.js v20 (recommended)
- npm
- An Alchemy Sepolia RPC URL
- A wallet (MetaMask or other RainbowKit-compatible wallet)

### Run the frontend (development)

```powershell
cd client
npm install
npm run dev
```

Open the printed Vite URL (typically http://localhost:5173) and connect your wallet via RainbowKit.

### Smart contract (compile & deploy to Sepolia)

```powershell
cd smart_contract
npm install
npx hardhat compile
# deploy (example)
npx hardhat run scripts/deploy.js --network sepolia
```

## Environment Variables

Create `.env` in `smart_contract/` and `.env.local` (or `.env`) in `client/` as needed. Do NOT commit these files.

Required (examples):

- `SEPOLIA_URL` — Your Alchemy Sepolia RPC URL (example: `https://eth-sepolia.g.alchemy.com/v2/<KEY>`)
- `PRIVATE_KEY` — Deployer/private key (keep this secret; used only for deployment)

Frontend (Vite) example env variables (optional):

- `VITE_RPC_URL` — Sepolia RPC URL used by the client (if required)
- `VITE_CONTRACT_ADDRESS` — `0xCb68ad5Ff470495fF09C36c1c974b5010cfb056A`

## Deployment

### Frontend

- Recommended host: Vercel. Build command: `npm run build` (in `client/`).
- Configure the Vite env variables on Vercel (prefix with `VITE_`).

### Smart contract

- Use Hardhat to deploy to Sepolia. After deploy, consider verifying the contract on Etherscan (hardhat-etherscan plugin) and update frontend constants.

## Future Improvements

- Add pagination and filtering to `SippersPage` for large transaction lists
- Build an owner dashboard for withdrawals, statistics and admin actions
- Add unit and integration tests for the contract and frontend
- Add export (CSV) and advanced search on transactions

## Contributing

- Open an issue to discuss large changes.
- Fork, branch, and send a PR. Keep PRs focused and include notes about testing.

## License

MIT — see the `LICENSE` file for full text.

---

If you'd like, I can also:

- Add a `.env.local.example` file in `client/` and `.env.example` in `smart_contract/` to show required vars (I can create these files for you).
- Add a small deploy helper script that writes the deployed contract address into `client/src/contants/constants.ts` after a successful Hardhat deploy.
- Insert your screenshots into the README once you attach them.

Tell me which of those you'd like next and I'll implement it.

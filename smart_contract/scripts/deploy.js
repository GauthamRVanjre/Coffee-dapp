const { ethers } = require("ethers");
require("dotenv").config();

async function main() {
  const url = process.env.SEPOLIA_URL;

  let artifacts = await hre.artifacts.readArtifact("CoffeeShop");

  const provider = new ethers.providers.JsonRpcProvider(url);

  let privateKey = process.env.PRIVATE_KEY;

  let wallet = new ethers.Wallet(privateKey, provider);

  // Create an instance of a Faucet Factory
  let factory = new ethers.ContractFactory(
    artifacts.abi,
    artifacts.bytecode,
    wallet
  );
  //   console.log("factory", factory);

  let coffeeShop = await factory.deploy();

  console.log("coffeeShop address:", await coffeeShop.address);

  await coffeeShop.deployed();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });
const { FEE, VRF_COORDINATOR, LINK_TOKEN, KEY_HASH } = require("./constant");

async function main() {
  const randomWinnerGame = await ethers.deployContract("RandomWinnerGame", [
    VRF_COORDINATOR,
    LINK_TOKEN,
    KEY_HASH,
    FEE,
  ]);

  await randomWinnerGame.waitForDeployment();

  // await deployedRandomWinnerGameContract.deployed();

  console.log("Verify Contract Address:", randomWinnerGame.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

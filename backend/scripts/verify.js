const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

const { FEE, VRF_COORDINATOR, LINK_TOKEN, KEY_HASH } = require("./constant");
async function main() {
  await hre.run("verify:verify", {
    address: "0x295E7a241F809905d5BA5E02C34FdA523A368a57",
    constructorArguments: [VRF_COORDINATOR, LINK_TOKEN, KEY_HASH, FEE],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

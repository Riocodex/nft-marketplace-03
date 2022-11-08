const hre = require ("hardhat")

async function main(){
  const Lock = await hre.ethers.getContractFactory("Lock")
  const lock = await lock.deploy()

  await lock.deployed();

  console.log(
    `Lock with 1 ETH and unlock with timestamp ${unlockTime} deployed to ${lock.address}`
  );

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
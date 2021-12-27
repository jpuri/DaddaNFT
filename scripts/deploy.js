async function main() {
  const DaddaNFT = await ethers.getContractFactory("DaddaNFT");

  // Start deployment, returning a promise that resolves to a contract object
  const daddaNFT = await DaddaNFT.deploy();
  console.log("Contract deployed to address:", daddaNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

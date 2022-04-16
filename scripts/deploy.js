const main =  async () => {
    const nftContractFactory = await hre.ethers.getContractFactory("LitNFT")
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();

    console.log("Contract deployed at:", nftContract.address);

    let txn = await nftContract.makeLitNFT();
    await txn.wait();
    console.log("NFT minted succesfully...");

}

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    }catch(e){
        console.log(e);
        process.exit(1);
    }
}

runMain()
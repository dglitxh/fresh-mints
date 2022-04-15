const main = async () => {
    nftContractFactory = await hre.ethers.getContractFactory("LitNFT")
    nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();

    console.log("ntfContract deployed at:", nftContract.address)

    let txn = await nftContract.makeLitNFT();
    await txn.wait();
    
    
    txn = await nftContract.makeLitNFT();
    await txn.wait();

}

const runMain = async () => {
    try{
        await main()
        process.exit(0)
    }catch(e){
        console.log(e)
        process.exit(1)
    }
}

runMain()
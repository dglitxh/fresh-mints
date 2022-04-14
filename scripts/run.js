const main = async () => {
    nftContractFactory = await hre.ethers.getContractFactory("LitNFT")
    nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();

    console.log("ntfContract deployed at:", nftContract.address)
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
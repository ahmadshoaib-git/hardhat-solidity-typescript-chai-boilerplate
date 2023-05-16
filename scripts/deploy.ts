import { ethers } from 'hardhat';

async function main() {
    const Test = await ethers.getContractFactory('Test');
    const deployedTest = await Test.deploy();
    await deployedTest.deployed();
    console.log(`Deployed to ${deployedTest.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


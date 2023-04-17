import { run } from "hardhat";

async function main() {
    const tokenAddress = "0xC1B92cd61e0AcAEb4678AA2757Fc21aC09555910";
    const constructorArguments: any[] = [100000000]; // Add constructor arguments if needed
    
    try {
        await run("verify:verify", {
            address: tokenAddress,
            constructorArguments: constructorArguments,
            contract: "contracts/Stakex.sol:Stakex"
        });
        console.log(`Token verified at address ${tokenAddress}`);
    } catch (error: any) {
        console.error("Token verification failed:", error.message);
    }
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});
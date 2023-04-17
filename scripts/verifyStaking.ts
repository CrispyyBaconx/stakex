import { run } from "hardhat";

async function main() {
    const poolAddress = "0x6535a4e977885Cba7FA99B00ee64D4e7C83fD847";
    const constructorArguments: any[] = ["0xC1B92cd61e0AcAEb4678AA2757Fc21aC09555910"]; // Add constructor arguments if needed
    
    try {
        await run("verify:verify", {
            address: poolAddress,
            constructorArguments: constructorArguments,
        });
        console.log(`Pool verified at address ${poolAddress}`);
    } catch (error: any) {
        console.error("Pool verification failed:", error.message);
    }
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});
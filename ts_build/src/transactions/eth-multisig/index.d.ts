import { ETHTxProvider } from '../eth';
export declare class ETHMULTISIGTxProvider extends ETHTxProvider {
    getMultisigContract(multisigContractAddress: string): import("web3/eth/contract").default;
    create(params: {
        recipients: Array<{
            address: string;
            amount: string;
        }>;
        nonce: number;
        gasPrice: number;
        data: string;
        gasLimit: number;
        multisigContractAddress: string;
        network: string;
        chainId?: number;
    }): string;
    instantiateEncodeData(params: {
        addresses: Array<string>;
        requiredConfirmations: number;
        multisigGnosisContractAddress: string;
        dailyLimit: number;
    }): string;
    addOwnerEncodeData(params: {
        newOwnerAddress: string;
        multisigContractAddress: string;
    }): string;
    removeOwnerEncodeData(params: {
        newOwnerAddress: string;
        multisigContractAddress: string;
    }): string;
    replaceOwnerEncodeData(params: {
        oldOwnerAddress: string;
        newOwnerAddress: string;
        multisigContractAddress: string;
    }): string;
    changeRequirementEncodedData(params: {
        requiredConfirmations: number;
        multisigContractAddress: string;
    }): string;
    changeDailyLimitEncodedData(params: {
        requiredConfirmations: number;
        multisigContractAddress: string;
    }): string;
    confirmTransactionEncodeData(params: {
        multisigContractAddress: string;
        transactionId: number;
    }): string;
    revokeConfirmationEncodeData(params: {
        multisigContractAddress: string;
        transactionId: number;
    }): string;
    executeTransactionEncodeData(params: {
        multisigContractAddress: string;
        transactionId: number;
    }): string;
    submitEncodeData(params: {
        recipients: Array<{
            address: string;
            amount: string;
        }>;
        multisigContractAddress: string;
        data: string;
    }): string;
}
//# sourceMappingURL=index.d.ts.map
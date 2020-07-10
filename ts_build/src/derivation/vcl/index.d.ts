import { IDeriver } from '..';
export declare abstract class AbstractVircleLibDeriver implements IDeriver {
    abstract vircleLib: any;
    deriveAddress(network: any, pubKey: any, addressIndex: any, isChange: any): any;
    derivePrivateKey(network: any, xPriv: any, addressIndex: any, isChange: any): {
        address: any;
        privKey: any;
        pubKey: any;
    };
}
export declare class VclDeriver extends AbstractVircleLibDeriver {
    vircleLib: any;
}
//# sourceMappingURL=index.d.ts.map
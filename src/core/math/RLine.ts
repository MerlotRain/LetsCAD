import { RBox } from "./RBox";
import { RShape } from "./RShape";

export class RLine extends RShape {
    getBoundingBox(): RBox {
        throw new Error("Method not implemented.");
    }
    setZ(z: number): void {
        throw new Error("Method not implemented.");
    }
    getLength(): number {
        throw new Error("Method not implemented.");
    }
}

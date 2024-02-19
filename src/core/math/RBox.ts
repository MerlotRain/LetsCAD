import { RVector } from "./RVector";

export class RBox {
	c1: RVector;
	c2: RVector;
	constructor(c1: RVector, c2: RVector) {
		this.c1 = c1;
		this.c2 = c2;
	}

	isValid(): boolean {
		return true;
	}

	getMinimum(): RVector {
		return RVector.getMinimum(this.c1, this.c2);
	}
	getMaximum(): RVector {
		return RVector.getMaximum(this.c1, this.c2);
	}
}

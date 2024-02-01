import { CVector } from "./CVector";

export class CBox {
	c1: CVector;
	c2: CVector;
	constructor(c1: CVector, c2: CVector) {
		this.c1 = c1;
		this.c2 = c2;
	}

	isValid(): boolean {
		return true;
	}
}

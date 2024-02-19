import { isNormal, isSane } from "../../Utils";
import { RBox } from "./RBox";

export class RVector {
	private x: number;
	private y: number;
	private z: number;
	private valid: boolean;

	static invalid(): RVector {
		return new RVector(0, 0, 0, false);
	}
	static nullVector(): RVector {
		return new RVector(0, 0, 0, true);
	}
	static nanVector(): RVector {
		return new RVector(Number.NaN, Number.NaN, Number.NaN, true);
	}

	constructor(x: number = 0.0, y: number = 0.0, z: number = 0.0, valid_in: boolean = true) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.valid = valid_in && isNormal(x) && isNormal(y) && isNormal(z);
	}

	set(vx: number, vy: number, vz: number = 0.0) {
		this.x = vx;
		this.y = vy;
		this.z = vz;
		this.valid = true;
	}
	setPolar(radius: number, angle: number) {
		this.x = radius * Math.cos(angle);
		this.y = radius * Math.sin(angle);
		this.z = 0;
		this.valid = isNormal(radius) && isNormal(angle);
	}
	get2D(): RVector {
		return new RVector(this.x, this.y);
	}

	isValid(): boolean {
		return this.valid;
	}
	isZero(): boolean {
		return Math.abs(this.x) < 1e-9 && Math.abs(this.y) < 1e-9 && Math.abs(this.z) < 1e-9;
	}
	isSane(): boolean {
		return this.isValid() && isSane(this.x) && isSane(this.y) && isSane(this.z);
	}
	isNaN(): boolean {
		return Number.isNaN(this.x) || Number.isNaN(this.y) || Number.isNaN(this.z);
	}

	isInside(b: RBox): boolean {
		return false;
	}

	get X() {
		return this.x;
	}
	set X(x: number) {
		this.x = x;
	}
	get Y() {
		return this.y;
	}
	set Y(y: number) {
		this.y = y;
	}
	get Z() {
		return this.z;
	}
	set Z(z: number) {
		this.z = z;
	}

	setAngle(a: number) {
		const m = this.getMagnitude();
		this.setPolar(m, a);
	}

	getAngle(): number {
		var ret = 0.0;
		const m = this.getMagnitude2D();

		if (m > 1.0e-6) {
			let dp = RVector.getDotProduct(this, new RVector(1.0, 0.0));
			if (dp / m >= 1.0) {
				ret = 0.0;
			} else if (dp / m < -1.0) {
				ret = Math.PI;
			} else {
				ret = Math.acos(dp / m);
			}
			if (this.y < 0.0) {
				ret = 2 * Math.PI - ret;
			}
		}
		return ret;
	}

	getMagnitude(): number {
		if (!this.valid) {
			return Number.NaN;
		}
		return Math.sqrt(this.x ** 2 + this.y ** 2 + this.z ** 2);
	}
	getMagnitude2D(): number {
		if (!this.valid) {
			return Number.NaN;
		}
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}

	static getDotProduct(v1: RVector, v2: RVector): number {
		return 0.0;
	}
	static getMinimum(v1: RVector, v2: RVector): RVector {
		return new RVector(Math.min(v1.X, v2.X), Math.min(v1.Y, v2.Y), Math.min(v1.Z, v2.Z), v1.valid && v2.valid);
	}
	static getMaximum(v1: RVector, v2: RVector): RVector {
		return new RVector(Math.max(v1.X, v2.X), Math.max(v1.Y, v2.Y), Math.max(v1.Z, v2.Z), v1.valid && v2.valid);
	}
}

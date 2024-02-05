import { isNormal } from "../../Utils";

export class RVector {
	x: number;
	y: number;
	z: number;
	valid: boolean;

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
}

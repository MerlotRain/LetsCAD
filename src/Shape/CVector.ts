import { isNormal } from "../Utils";

export class CVector {
	x: number;
	y: number;
	z: number;
	valid: boolean;

	constructor(x?: number, y?: number, z?: number) {
		this.x = x || 0;
		this.y = y || 0;
		this.z = z || 0;
		this.valid = true;
	}

	set(vx: number, vy: number, vz?: number) {
		this.x = vx;
		this.y = vy;
		this.z = vz || 0;
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
			let dp = CVector.getDotProduct(this, new CVector(1.0, 0.0));
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

	static getDotProduct(v1: CVector, v2: CVector): number {
		return 0.0;
	}
}

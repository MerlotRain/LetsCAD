import { RBox } from "./RBox";
import { RShape, RShapeType } from "./RShape";
import { RVector } from "./RVector";

export class RArc extends RShape {
	private center: RVector;
	private radius: number;
	private startAngle: number;
	private endAngle: number;
	private reversed: boolean;

	constructor(center?: RVector, radius?: number, startAngle?: number, endAngle?: number, reversed?: boolean) {
		super();
		this.center = center ?? RVector.invalid();
		this.radius = radius ?? 0.0;
		this.startAngle = startAngle ?? 0.0;
		this.endAngle = endAngle ?? 0.0;
		this.reversed = reversed ?? false;
	}

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

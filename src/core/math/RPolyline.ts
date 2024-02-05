import { RBox } from "./RBox";
import { RShape, RShapeType } from "./RShape";
import { RVector } from "./RVector";

export class RPolyline extends RShape {
	override getShapeType(): RShapeType {
		return RShapeType.Polyline;
	}

	isDirected(): boolean {
		return true;
	}

	isFlat(): boolean {
		return false;
	}

	getVectorProperties(): Array<RVector> {
		throw new Error("Method not implemented.");
	}
	getDoubleProperties(): Array<number> {
		throw new Error("Method not implemented.");
	}
	getBoolProperties(): Array<boolean> {
		throw new Error("Method not implemented.");
	}

	clear(): void {}
	normalize(tolerance: number = Number.EPSILON) {}

	prependShape(shape: RShape): boolean {
		return false;
	}
	appendShape(shape: RShape, prepend: boolean = false): boolean {
		return false;
	}
	appendShapeAuto(shape: RShape): boolean {
		return false;
	}
	appendShapeTrim(shape: RShape): boolean {
		return false;
	}
	closeTrim(): boolean {
		return false;
	}

	appendVertex(x: number, y: number, bulge: number = 0.0, w1: number = 0.0, w2: number = 0.0): void {}

	getBoundingBox(): RBox {
		throw new Error("Method not implemented.");
	}
	setZ(z: number): void {
		throw new Error("Method not implemented.");
	}
	getLength(): number {
		throw new Error("Method not implemented.");
	}
	constructor() {
		super();
	}
}

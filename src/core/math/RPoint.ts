import { RBox } from "./RBox";
import { RShape, RShapeType } from "./RShape";
import { RVector } from "./RVector";
import { From } from "../RS";
import { RLine } from "./RLine";

export class CPoint extends RShape {
	position: RVector;

	constructor() {
		super();
		this.position = new RVector();
	}

	override getShapeType(): RShapeType {
		return RShapeType.Point;
	}

	getBoundingBox(): RBox {
		return new RBox(this.position, this.position);
	}
	setZ(z: number): void {
		this.position.z = z;
	}
	getLength(): number {
		return 0.0;
	}

	getEndPoints(): Array<RVector> {
		return [];
	}
	getMiddlePoints(): Array<RVector> {
		return [];
	}
	getCenterPoints(): Array<RVector> {
		return [];
	}
	getPointsWithDistanceToEnd(distance: number, from: From = From.FromStart): Array<RVector> {
		return [];
	}
	getPointCloud(segmentLength: number): Array<RVector> {
		return [];
	}

	getAngleAt(distance: number, from: From = From.FromStart): number {
		return 0.0;
	}
	getVectorTo(point: RVector, limited: boolean = true, strictRange: number = 1e300): RVector {
		return new RVector();
	}

	move(offset: RVector): boolean {
		return false;
	}
	rotate(rotation: number, center?: RVector): boolean {
		return false;
	}
	scale(scaleFactors: RVector, center?: RVector): boolean {
		return false;
	}
	mirror(axis: RLine): boolean {
		return false;
	}
}

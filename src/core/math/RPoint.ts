import { RBox } from "./RBox";
import { RShape, RShapeType } from "./RShape";
import { RVector } from "./RVector";

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
}

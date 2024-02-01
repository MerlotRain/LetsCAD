import { CBox } from "./CBox";
import { CShape, CShapeType } from "./CShape";
import { CVector } from "./CVector";

export class CPoint extends CShape {
	position: CVector;

	constructor() {
		super();
		this.position = new CVector();
	}

	override getShapeType(): CShapeType {
		return CShapeType.Point;
	}

	getBoundingBox(): CBox {
		return new CBox(this.position, this.position);
	}

	setZ(z: number): void {
		this.position.z = z;
	}
	getLength(): number {
		return 0.0;
	}
}

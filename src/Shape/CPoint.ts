///<reference path="CShape.ts" />
///<reference path="CVector.ts" />
///<reference path="CBox.ts" />

namespace Shape {
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
}

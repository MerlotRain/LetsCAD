///<reference path="CVector.ts" />
///<reference path="CPoint.ts" />
///<reference path="CBox.ts" />

namespace Shape {
	export enum CShapeType {
		Unknown = -1,
		Point,
		Line,
		Arc,
		Circle,
		Ellipse,
		Polyline,
		Spline,
		Triangle,
		XLine,
		Ray,
	}

	export abstract class CShape {
		constructor() {}

		isValid(): boolean {
			return true;
		}

		getShapeType(): CShapeType {
			return CShapeType.Unknown;
		}

		static isPointShape(shape: CShape): boolean {
			return shape.getShapeType() == CShapeType.Point;
		}
		static isLineShape(shape: CShape): boolean {
			return shape.getShapeType() == CShapeType.Line;
		}
		static isArcShape(shape: CShape): boolean {
			return shape.getShapeType() == CShapeType.Arc;
		}
		static isCircleShape(shape: CShape): boolean {
			return shape.getShapeType() == CShapeType.Circle;
		}
		static isEllipseShape(shape: CShape): boolean {
			return shape.getShapeType() == CShapeType.Ellipse;
		}
		static isPolylineShape(shape: CShape): boolean {
			return shape.getShapeType() == CShapeType.Polyline;
		}
		static isSplineShape(shape: CShape): boolean {
			return shape.getShapeType() == CShapeType.Spline;
		}
		static isTriangleShape(shape: CShape): boolean {
			return shape.getShapeType() == CShapeType.Triangle;
		}
		static isXLineShape(shape: CShape): boolean {
			return shape.getShapeType() == CShapeType.XLine;
		}
		static isRayShape(shape: CShape): boolean {
			return shape.getShapeType() == CShapeType.Ray;
		}

		isInterpolated(): boolean {
			return false;
		}

		abstract getBoundingBox(): CBox;

		to2D(): void {
			this.setZ(0.0);
		}

		abstract setZ(z: number): void;
		abstract getLength(): number;
	}
}

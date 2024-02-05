import { RBox } from "./RBox";

export enum RShapeType {
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

export abstract class RShape {
	constructor() {}

	isValid(): boolean {
		return true;
	}

	getShapeType(): RShapeType {
		return RShapeType.Unknown;
	}

	static isPointShape(shape: RShape): boolean {
		return shape.getShapeType() == RShapeType.Point;
	}
	static isLineShape(shape: RShape): boolean {
		return shape.getShapeType() == RShapeType.Line;
	}
	static isArcShape(shape: RShape): boolean {
		return shape.getShapeType() == RShapeType.Arc;
	}
	static isCircleShape(shape: RShape): boolean {
		return shape.getShapeType() == RShapeType.Circle;
	}
	static isEllipseShape(shape: RShape): boolean {
		return shape.getShapeType() == RShapeType.Ellipse;
	}
	static isPolylineShape(shape: RShape): boolean {
		return shape.getShapeType() == RShapeType.Polyline;
	}
	static isSplineShape(shape: RShape): boolean {
		return shape.getShapeType() == RShapeType.Spline;
	}
	static isTriangleShape(shape: RShape): boolean {
		return shape.getShapeType() == RShapeType.Triangle;
	}
	static isXLineShape(shape: RShape): boolean {
		return shape.getShapeType() == RShapeType.XLine;
	}
	static isRayShape(shape: RShape): boolean {
		return shape.getShapeType() == RShapeType.Ray;
	}

	isInterpolated(): boolean {
		return false;
	}

	abstract getBoundingBox(): RBox;

	to2D(): void {
		this.setZ(0.0);
	}

	abstract setZ(z: number): void;
	abstract getLength(): number;
}

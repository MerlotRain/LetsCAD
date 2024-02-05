export interface RSpatialIndexVisitor {
	visitData(id: number, pos: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;

	visitNode(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
}

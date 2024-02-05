import { RSpatialIndexVisitor } from "./RSpatialIndexVisitor";
import { RBox } from "./math/RBox";

export class RSpatialIndexDebugVisitor implements RSpatialIndexVisitor {
	private matches: Array<{ id: number; pos: number }>;

	constructor() {
		this.matches = new Array<{ id: number; pos: number }>();
	}
	visitData(id: number, pos: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) {
		let p = {
			id: id,
			pos: pos,
		};
		console.log(`id:{id} pos:{pos} box:({x1}, {y1}, {z1} / {x2}, {y2}, {z2})`);

		if (-1 === this.matches.indexOf(p)) {
			this.matches.push(p);
		}
	}
	visitNode(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number) {
		throw new Error("Method not implemented.");
	}
}

export abstract class RSpatialIndex {
	constructor() {}

	bulkLoad(ids: Array<number>, bbs: Array<Array<RBox>>) {}
	bulkLoadSimple(ids: Array<number>, bbs: Array<RBox>) {}
	abstract addToIndex(id: number, pos: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
	addToIndexBox(id: number, bb: RBox | Array<RBox>): void {}
	abstract removeFromIndex(id: number, pos: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;

	removeFromIndexBox(id: number, bb: RBox | Array<RBox>) {}
}

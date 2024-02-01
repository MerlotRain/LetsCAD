/**
 * @file Exception.ts
 * @description dxf exception
 */

export class GroupCodeExc extends Error {
	private groupCode: number;

	constructor(gc: number) {
		super(`GroupCode ${gc} not found`);
		this.name = "GroupCodeExc";
		this.groupCode = gc;
	}

	getGroupCode(): number {
		return this.groupCode;
	}
}

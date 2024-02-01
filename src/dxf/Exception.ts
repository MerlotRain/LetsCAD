/**
 * @file Exception.ts
 * @description dxf exception
 */

namespace Dxf {
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
}

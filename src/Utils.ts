namespace CMath {
	export function isNormal(v: number): boolean {
		return Number.isNaN(v) || Number.isFinite(v);
	}
}

export function isNormal(v: number): boolean {
	return Number.isNaN(v) || Number.isFinite(v);
}

export function isSane(v: number): boolean {
	return !Number.isNaN(v) && !Number.isFinite(v) && v > -1e12 && v < 1e12;
}

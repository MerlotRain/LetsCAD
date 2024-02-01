/**
 * @file Attribute.ts
 * @description dxf data attribute structure
 */

/**
 * Storing and passing around attributes.
 * Attributes are the layer name, color, width and line type.
 *
 */
export class DL_Attributes {
	/** Layer name for this entity or NULL for no layer. */
	private layer: string;
	/** Color number. (0 = BYBLOCK, 256 = BYLAYER) */
	private color: number;
	private color24: number;
	/** Line thickness. Default to zero. -1 = BYLAYER, -2 = BYBLOCK, -3 = default width */
	private width: number;
	/** Line type name or "BYLAYER" or "BYBLOCK". Defaults to "BYLAYER" */
	private lineType: string;
	private lineTypeScale: number;
	private handle: number;
	private inPaperSpace: boolean;

	constructor(
		layer: string,
		color: number,
		width: number,
		lineType: string,
		lineTypeScale: number,
	) {
		this.layer = layer;
		this.color = color;
		this.color24 = -1;
		this.width = width;
		this.lineType = lineType;
		this.lineTypeScale = lineTypeScale;
		this.handle = -1;
		this.inPaperSpace = false;
	}

	get getLayer(): string {
		return this.layer;
	}

	set setLayer(layer: string) {
		this.layer = layer;
	}

	get getColor(): number {
		return this.color;
	}

	set setColor(color: number) {
		this.color = color;
	}

	get getColor24(): number {
		return this.color24;
	}

	set setColor24(color24: number) {
		this.color24 = color24;
	}

	get getWidth(): number {
		return this.width;
	}

	set setWidth(width: number) {
		this.width = width;
	}

	get getLineType(): string {
		if (this.lineType.length === 0) return "BYLAYER";
		else return this.lineType;
	}

	set setLineType(lineType: string) {
		this.lineType = lineType;
	}

	get getLineTypeScale(): number {
		return this.lineTypeScale;
	}

	set setLineTypeScale(lineTypeScale: number) {
		this.lineTypeScale = lineTypeScale;
	}

	get getHandle(): number {
		return this.handle;
	}

	set setHandle(handle: number) {
		this.handle = handle;
	}

	get getInPaperSpace(): boolean {
		return this.inPaperSpace;
	}

	set setInPaperSpace(inPaperSpace: boolean) {
		this.inPaperSpace = inPaperSpace;
	}
}

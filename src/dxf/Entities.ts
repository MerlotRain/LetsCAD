/**
 * @file Entities.ts
 * @description dxf data structure
 */

namespace Dxf {
	/**
	 * Layer Data
	 */
	export class DL_LayerData {
		/** Layer name */
		name: string;
		/** Layer flags. (1 = frozen, 2 = frozen by default, 4 = locked) */
		flags: number;
		/** Layer is off */
		off: boolean;
		constructor(name: string, flags: number, off?: boolean) {
			this.name = name;
			this.flags = flags;
			this.off = off || false;
		}
	}

	/**
	 * Block Data
	 */
	export class DL_BlockData {
		/** Block name. */
		name: string;
		/** Block flags. (not used currently) */
		flags: number;
		/** X Coordinate of base point. */
		bpx: number;
		/** Y Coordinate of base point. */
		bpy: number;
		/** Z Coordinate of base point. */
		bpz: number;

		constructor(
			name: string,
			flags: number,
			bpx: number,
			bpy: number,
			bpz: number,
		) {
			this.name = name;
			this.flags = flags;
			this.bpx = bpx;
			this.bpy = bpy;
			this.bpz = bpz;
		}
	}

	/**
	 * LineType Data
	 */
	export class DL_LineTypeData {
		/** LineType name */
		name: string;
		/** LineType description */
		description: string;
		/** LineType flags */
		flags: number;
		/** Number of dashes */
		numberOfDashes: number;
		/** Pattern length */
		patternLength: number;
		pattern: number[];

		constructor(
			name: string,
			description: string,
			flags: number,
			numberOfDashes: number,
			patternLength: number,
			pattern?: number[],
		) {
			this.name = name;
			this.description = description;
			this.flags = flags;
			this.numberOfDashes = numberOfDashes;
			this.patternLength = patternLength;
			this.pattern = pattern ?? [];
		}
	}

	/**
	 * Style Data
	 */
	export class DL_StyleData {
		/** Style name */
		name: string;
		/** Style flags */
		flags: number;
		/** Fixed text height */
		fixedTextHeight: number;
		/** Width factor */
		widthFactor: number;
		/** Oblique angle */
		obliqueAngle: number;
		/** Text generation flags */
		textGenerationFlags: number;
		/** Last height used */
		lastHeightUsed: number;
		/** Primary font file */
		primaryFontFile: string;
		/** Big font file name */
		bigFontFile: string;
		/** Bold */
		bold: boolean;
		/** Italic */
		italic: boolean;

		constructor(
			name: string,
			flags: number,
			fixedTextHeight: number,
			widthFactor: number,
			obliqueAngle: number,
			textGenerationFlags: number,
			lastHeightUsed: number,
			primaryFontFile: string,
			bigFontFile: string,
			bold?: boolean,
			italic?: boolean,
		) {
			this.name = name;
			this.flags = flags;
			this.fixedTextHeight = fixedTextHeight;
			this.widthFactor = widthFactor;
			this.obliqueAngle = obliqueAngle;
			this.textGenerationFlags = textGenerationFlags;
			this.lastHeightUsed = lastHeightUsed;
			this.primaryFontFile = primaryFontFile;
			this.bigFontFile = bigFontFile;
			this.bold = bold ?? false;
			this.italic = italic ?? false;
		}
	}
}

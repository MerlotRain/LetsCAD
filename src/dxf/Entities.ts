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

	/**
	 * Point Data.
	 */
	export class DL_PointData {
		/*! X Coordinate of the point. */
		x: number;
		/*! Y Coordinate of the point. */
		y: number;
		/*! Z Coordinate of the point. */
		z: number;

		constructor(x: number = 0.0, y: number = 0.0, z: number = 0.0) {
			this.x = x;
			this.y = y;
			this.z = z;
		}
	}

	/**
	 * Line Data.
	 */
	export class DL_LineData {
		/*! X Start coordinate of the point. */
		x1: number;
		/*! Y Start coordinate of the point. */
		y1: number;
		/*! Z Start coordinate of the point. */
		z1: number;

		/*! X End coordinate of the point. */
		x2: number;
		/*! Y End coordinate of the point. */
		y2: number;
		/*! Z End coordinate of the point. */
		z2: number;

		constructor(
			x1: number,
			y1: number,
			z1: number,
			x2: number,
			y2: number,
			z2: number,
		) {
			this.x1 = x1;
			this.y1 = y1;
			this.z1 = z1;
			this.x2 = x2;
			this.y2 = y2;
			this.z2 = z2;
		}
	}

	/**
	 * XLine Data.
	 */
	export class DL_XLineData {
		/*! X base point. */
		bx: number;
		/*! Y base point. */
		by: number;
		/*! Z base point. */
		bz: number;

		/*! X direction vector. */
		dx: number;
		/*! Y direction vector. */
		dy: number;
		/*! Z direction vector. */
		dz: number;

		constructor(
			bx: number,
			by: number,
			bz: number,
			dx: number,
			dy: number,
			dz: number,
		) {
			this.bx = bx;
			this.by = by;
			this.bz = bz;
			this.dx = dx;
			this.dy = dy;
			this.dz = dz;
		}
	}

	/**
	 * Ray Data.
	 */
	export class DL_RayData {
		/*! X base point. */
		bx: number;
		/*! Y base point. */
		by: number;
		/*! Z base point. */
		bz: number;

		/*! X direction vector. */
		dx: number;
		/*! Y direction vector. */
		dy: number;
		/*! Z direction vector. */
		dz: number;

		constructor(
			bx: number,
			by: number,
			bz: number,
			dx: number,
			dy: number,
			dz: number,
		) {
			this.bx = bx;
			this.by = by;
			this.bz = bz;
			this.dx = dx;
			this.dy = dy;
			this.dz = dz;
		}
	}

	/**
	 * Arc Data.
	 */
	export class DL_ArcData {
		/*! X Coordinate of center point. */
		cx: number;
		/*! Y Coordinate of center point. */
		cy: number;
		/*! Z Coordinate of center point. */
		cz: number;

		/*! Radius of arc. */
		radius: number;
		/*! StartAngle of arc in degrees. */
		angle1: number;
		/*! EndAngle of arc in degrees. */
		angle2: number;

		constructor(
			cx: number,
			cy: number,
			cz: number,
			radius: number,
			angle1: number,
			angle2: number,
		) {
			this.cx = cx;
			this.cy = cy;
			this.cz = cz;
			this.radius = radius;
			this.angle1 = angle1;
			this.angle2 = angle2;
		}
	}

	/**
	 * Circle Data.
	 */
	export class DL_CircleData {
		/*! X Coordinate of center point. */
		cx: number;
		/*! Y Coordinate of center point. */
		cy: number;
		/*! Z Coordinate of center point. */
		cz: number;

		/*! Radius of arc. */
		radius: number;

		constructor(cx: number, cy: number, cz: number, radius: number) {
			this.cx = cx;
			this.cy = cy;
			this.cz = cz;
			this.radius = radius;
		}
	}

	/**
	 * Polyline Data.
	 */
	export class DL_PolylineData {
		/*! Number of vertices in this polyline. */
		size: number;

		/*! Number of vertices in m direction if polyline is a polygon mesh. */
		m: number;

		/*! Number of vertices in n direction if polyline is a polygon mesh. */
		n: number;

		/*! elevation of the polyline. */
		elevation: number;

		/*! Flags */
		flags: number;

		constructor(
			size: number,
			m: number,
			n: number,
			flags: number,
			elevation: number = 0.0,
		) {
			this.size = size;
			this.m = m;
			this.n = n;
			this.elevation = elevation;
			this.flags = flags;
		}
	}

	/**
	 * Vertex Data.
	 */
	export class DL_VertexData {
		/*! X Coordinate of the vertex. */
		x: number;
		/*! Y Coordinate of the vertex. */
		y: number;
		/*! Z Coordinate of the vertex. */
		z: number;
		/*! Bulge of vertex.
		 * (The tangent of 1/4 of the arc angle or 0 for lines) */
		bulge: number;

		constructor(
			x: number = 0.0,
			y: number = 0.0,
			z: number = 0.0,
			bulge: number = 0.0,
		) {
			this.x = x;
			this.y = y;
			this.z = z;
			this.bulge = bulge;
		}
	}

	/**
	 * Trace Data / solid data / 3d face data.
	 */
	export class DL_TraceData {
		/*! Thickness */
		thickness: number;

		/*! Points */
		x: Array<number>;
		y: Array<number>;
		z: Array<number>;

		constructor(
			thickness: number,
			x: Array<number>,
			y: Array<number>,
			z: Array<number>,
		) {
			this.thickness = thickness;
			this.x = x;
			this.y = y;
			this.z = z;
		}
	}

	/**
	 * Spline Data.
	 */
	export class DL_SplineData {
		/*! Degree of the spline curve. */
		degree: number;

		/*! Number of knots. */
		nKnots: number;

		/*! Number of control points. */
		nControl: number;

		/*! Number of fit points. */
		nFit: number;

		/*! Flags */
		flags: number;

		tangentStartX: number;
		tangentStartY: number;
		tangentStartZ: number;
		tangentEndX: number;
		tangentEndY: number;
		tangentEndZ: number;

		constructor(
			degree: number,
			nKnots: number,
			nControl: number,
			nFit: number,
			flags: number,
		) {
			this.degree = degree;
			this.nKnots = nKnots;
			this.nControl = nControl;
			this.nFit = nFit;
			this.flags = flags;
			this.tangentStartX = 0.0;
			this.tangentStartY = 0.0;
			this.tangentStartZ = 0.0;
			this.tangentEndX = 0.0;
			this.tangentEndY = 0.0;
			this.tangentEndZ = 0.0;
		}
	}

	/**
	 * Spline knot data.
	 */
	export class DL_KnotData {
		/*! Knot value. */
		k: number;
		constructor(k: number = 0.0) {
			this.k = k;
		}
	}

	/**
	 * Spline control point data.
	 */
	export class DL_ControlPointData {
		/*! X coordinate of the control point. */
		x: number;
		/*! Y coordinate of the control point. */
		y: number;
		/*! Z coordinate of the control point. */
		z: number;
		/*! Weight of control point. */
		w: number;

		constructor(
			x: number = 0.0,
			y: number = 0.0,
			z: number = 0.0,
			weight: number = 1.0,
		) {
			this.x = x;
			this.y = y;
			this.z = z;
			this.w = weight;
		}
	}

	/**
	 * Spline fit point data.
	 */
	export class DL_FitPointData {
		/*! X coordinate of the fit point. */
		x: number;
		/*! Y coordinate of the fit point. */
		y: number;
		/*! Z coordinate of the fit point. */
		z: number;

		constructor(x: number, y: number, z: number) {
			this.x = x;
			this.y = y;
			this.z = z;
		}
	}

	/**
	 * Ellipse Data.
	 */
	export class DL_EllipseData {
		/*! X Coordinate of center point. */
		cx: number;
		/*! Y Coordinate of center point. */
		cy: number;
		/*! Z Coordinate of center point. */
		cz: number;

		/*! X coordinate of the endpoint of the major axis. */
		mx: number;
		/*! Y coordinate of the endpoint of the major axis. */
		my: number;
		/*! Z coordinate of the endpoint of the major axis. */
		mz: number;

		/*! Ratio of minor axis to major axis.. */
		ratio: number;
		/*! StartAngle of ellipse in rad. */
		angle1: number;
		/*! EndAngle of ellipse in rad. */
		angle2: number;

		constructor(
			cx: number,
			cy: number,
			cz: number,
			mx: number,
			my: number,
			mz: number,
			ratio: number,
			angle1: number,
			angle2: number,
		) {
			this.cx = cx;
			this.cy = cy;
			this.cz = cz;
			this.mx = mx;
			this.my = my;
			this.mz = mz;
			this.ratio = ratio;
			this.angle1 = angle1;
			this.angle2 = angle2;
		}
	}

	/**
	 * Insert Data.
	 */
	export class DL_InsertData {
		/*! Name of the referred block. */
		name: string;
		/*! X Coordinate of insertion point. */
		ipx: number;
		/*! Y Coordinate of insertion point. */
		ipy: number;
		/*! Z Coordinate of insertion point. */
		ipz: number;
		/*! X Scale factor. */
		sx: number;
		/*! Y Scale factor. */
		sy: number;
		/*! Z Scale factor. */
		sz: number;
		/*! Rotation angle in degrees. */
		angle: number;
		/*! Number of columns if we insert an array of the block or 1. */
		cols: number;
		/*! Number of rows if we insert an array of the block or 1. */
		rows: number;
		/*! Values for the spacing between cols. */
		colSp: number;
		/*! Values for the spacing between rows. */
		rowSp: number;

		constructor(
			name: string,
			ipx: number,
			ipy: number,
			ipz: number,
			sx: number,
			sy: number,
			sz: number,
			angle: number,
			cols: number,
			rows: number,
			colSp: number,
			rowSp: number,
		) {
			this.name = name;
			this.ipx = ipx;
			this.ipy = ipy;
			this.ipz = ipz;
			this.sx = sx;
			this.sy = sy;
			this.sz = sz;
			this.angle = angle;
			this.cols = cols;
			this.rows = rows;
			this.colSp = colSp;
			this.rowSp = rowSp;
		}
	}

	/**
	 * MText Data.
	 */
	export class DL_MTextData {
		/*! X Coordinate of insertion point. */
		ipx: number;
		/*! Y Coordinate of insertion point. */
		ipy: number;
		/*! Z Coordinate of insertion point. */
		ipz: number;
		/*! X Coordinate of X direction vector. */
		dirx: number;
		/*! Y Coordinate of X direction vector. */
		diry: number;
		/*! Z Coordinate of X direction vector. */
		dirz: number;
		/*! Text height */
		height: number;
		/*! Width of the text box. */
		width: number;
		/**
		 * Attachment point.
		 *
		 * 1 = Top left, 2 = Top center, 3 = Top right,
		 * 4 = Middle left, 5 = Middle center, 6 = Middle right,
		 * 7 = Bottom left, 8 = Bottom center, 9 = Bottom right
		 */
		attachmentPoint: number;
		/**
		 * Drawing direction.
		 *
		 * 1 = left to right, 3 = top to bottom, 5 = by style
		 */
		drawingDirection: number;
		/**
		 * Line spacing style.
		 *
		 * 1 = at least, 2 = exact
		 */
		lineSpacingStyle: number;
		/**
		 * Line spacing factor. 0.25 .. 4.0
		 */
		lineSpacingFactor: number;
		/*! Text string. */
		text: string;
		/*! Style string. */
		style: string;
		/*! Rotation angle. */
		angle: number;

		constructor(
			ipx: number,
			ipy: number,
			ipz: number,
			dirx: number,
			diry: number,
			dirz: number,
			height: number,
			width: number,
			attachmentPoint: number,
			drawingDirection: number,
			lineSpacingStyle: number,
			lineSpacingFactor: number,
			text: string,
			style: string,
			angle: number,
		) {
			this.ipx = ipx;
			this.ipy = ipy;
			this.ipz = ipz;
			this.dirx = dirx;
			this.diry = diry;
			this.dirz = dirz;
			this.height = height;
			this.width = width;
			this.attachmentPoint = attachmentPoint;
			this.drawingDirection = drawingDirection;
			this.lineSpacingStyle = lineSpacingStyle;
			this.lineSpacingFactor = lineSpacingFactor;
			this.text = text;
			this.style = style;
			this.angle = angle;
		}
	}

	/**
	 * Text Data.
	 */
	export class DL_TextData {
		/*! X Coordinate of insertion point. */
		ipx: number;
		/*! Y Coordinate of insertion point. */
		ipy: number;
		/*! Z Coordinate of insertion point. */
		ipz: number;

		/*! X Coordinate of alignment point. */
		apx: number;
		/*! Y Coordinate of alignment point. */
		apy: number;
		/*! Z Coordinate of alignment point. */
		apz: number;

		/*! Text height */
		height: number;
		/*! Relative X scale factor. */
		xScaleFactor: number;
		/*! 0 = default, 2 = Backwards, 4 = Upside down */
		textGenerationFlags: number;
		/**
		 * Horizontal justification.
		 *
		 * 0 = Left (default), 1 = Center, 2 = Right,
		 * 3 = Aligned, 4 = Middle, 5 = Fit
		 * For 3, 4, 5 the vertical alignment has to be 0.
		 */
		hJustification: number;
		/**
		 * Vertical justification.
		 *
		 * 0 = Baseline (default), 1 = Bottom, 2 = Middle, 3= Top
		 */
		vJustification: number;
		/*! Text string. */
		text: string;
		/*! Style (font). */
		style: string;
		/*! Rotation angle of dimension text away from default orientation. */
		angle: number;

		constructor(
			ipx: number,
			ipy: number,
			ipz: number,
			apx: number,
			apy: number,
			apz: number,
			height: number,
			xScaleFactor: number,
			textGenerationFlags: number,
			hJustification: number,
			vJustification: number,
			text: string,
			style: string,
			angle: number,
		) {
			this.ipx = ipx;
			this.ipy = ipy;
			this.ipz = ipz;
			this.apx = apx;
			this.apy = apy;
			this.apz = apz;
			this.height = height;
			this.xScaleFactor = xScaleFactor;
			this.textGenerationFlags = textGenerationFlags;
			this.hJustification = hJustification;
			this.vJustification = vJustification;
			this.text = text;
			this.style = style;
			this.angle = angle;
		}
	}

	/**
	 * Arc Aligned Text Data.
	 */
	export class DL_ArcAlignedTextData {
		/*! Text string */
		text: string;
		/*! Font name */
		font: string;
		/*! Style */
		style: string;

		/*! X coordinate of arc center point. */
		cx: number;
		/*! Y coordinate of arc center point. */
		cy: number;
		/*! Z coordinate of arc center point. */
		cz: number;
		/*! Arc radius. */
		radius: number;

		/*! Relative X scale factor. */
		xScaleFactor: number;
		/*! Text height */
		height: number;
		/*! Character spacing */
		spacing: number;
		/*! Offset from arc */
		offset: number;
		/*! Right offset */
		rightOffset: number;
		/*! Left offset */
		leftOffset: number;
		/*! Start angle (radians) */
		startAngle: number;
		/*! End angle (radians) */
		endAngle: number;
		/*! Reversed character order:
		 * false: normal
		 * true: reversed
		 */
		reversedCharacterOrder: boolean;
		/*! Direction
		 * 1: outward from center
		 * 2: inward from center
		 */
		direction: number;
		/*! Alignment:
		 * 1: fit
		 * 2: left
		 * 3: right
		 * 4: center
		 */
		alignment: number;
		/*! Side
		 * 1: convex
		 * 2: concave
		 */
		side: number;
		/*! Bold flag */
		bold: boolean;
		/*! Italic flag */
		italic: boolean;
		/*! Underline flag */
		underline: boolean;
		/*! Character set value. Windows character set identifier. */
		characterSet: number;
		/*! Pitch and family value. Windows pitch and character family identifier. */
		pitch: number;
		/*! Font type:
		 * false: TTF
		 * true: SHX
		 */
		shxFont: boolean;
		/*! Wizard flag */
		wizard: boolean;
		/*! Arc handle/ID */
		arcHandle: number;

		constructor() {
			this.text = "";
			this.font = "";
			this.style = "";
			this.cx = 0.0;
			this.cy = 0.0;
			this.cz = 0.0;
			this.radius = 0.0;
			this.xScaleFactor = 0.0;
			this.height = 0.0;
			this.spacing = 0.0;
			this.offset = 0.0;
			this.rightOffset = 0.0;
			this.leftOffset = 0.0;
			this.startAngle = 0.0;
			this.endAngle = 0.0;
			this.reversedCharacterOrder = false;
			this.direction = 0.0;
			this.alignment = 0.0;
			this.side = 0.0;
			this.bold = false;
			this.italic = false;
			this.underline = false;
			this.characterSet = 0.0;
			this.pitch = 0.0;
			this.shxFont = false;
			this.wizard = false;
			this.arcHandle = 0.0;
		}
	}

	/**
	 * Block attribute data.
	 */
	export class DL_AttributeData extends DL_TextData {
		/*! Tag. */
		tag: string;
		constructor(
			ipx: number,
			ipy: number,
			ipz: number,
			apx: number,
			apy: number,
			apz: number,
			height: number,
			xScaleFactor: number,
			textGenerationFlags: number,
			hJustification: number,
			vJustification: number,
			text: string,
			style: string,
			angle: number,
			tag: string,
		) {
			super(
				ipx,
				ipy,
				ipz,
				apx,
				apy,
				apz,
				height,
				xScaleFactor,
				textGenerationFlags,
				hJustification,
				vJustification,
				text,
				style,
				angle,
			);
			this.tag = tag;
		}
	}

	/**
	 * Generic Dimension Data.
	 */
	export class DL_DimensionData {
		/*! X Coordinate of definition point. */
		dpx: number;
		/*! Y Coordinate of definition point. */
		dpy: number;
		/*! Z Coordinate of definition point. */
		dpz: number;
		/*! X Coordinate of middle point of the text. */
		mpx: number;
		/*! Y Coordinate of middle point of the text. */
		mpy: number;
		/*! Z Coordinate of middle point of the text. */
		mpz: number;
		/**
		 * Dimension type.
		 *
		 * 0   Rotated, horizontal, or vertical
		 * 1   Aligned
		 * 2   Angular
		 * 3   Diametric
		 * 4   Radius
		 * 5   Angular 3-point
		 * 6   Ordinate
		 * 64  Ordinate type. This is a bit value (bit 7)
		 *     used only with integer value 6. If set,
		 *     ordinate is X-type; if not set, ordinate is
		 *     Y-type
		 * 128 This is a bit value (bit 8) added to the
		 *     other group 70 values if the dimension text
		 *     has been positioned at a user-defined
		 *    location rather than at the default location
		 */
		dimType: number;
		/**
		 * Attachment point.
		 *
		 * 1 = Top left, 2 = Top center, 3 = Top right,
		 * 4 = Middle left, 5 = Middle center, 6 = Middle right,
		 * 7 = Bottom left, 8 = Bottom center, 9 = Bottom right,
		 */
		attachmentPoint: number;
		/**
		 * Line spacing style.
		 *
		 * 1 = at least, 2 = exact
		 */
		lineSpacingStyle: number;
		/**
		 * Line spacing factor. 0.25 .. 4.0
		 */
		lineSpacingFactor: number;
		/**
		 * Text string.
		 *
		 * Text string entered explicitly by user or null
		 * or "<>" for the actual measurement or " " (one blank space).
		 * for suppressing the text.
		 */
		text: string;
		/*! Dimension style (font name). */
		style: string;
		/**
		 * Rotation angle of dimension text away from
		 * default orientation.
		 */
		angle: number;
		/**
		 * Linear factor style override.
		 */
		linearFactor: number;
		/**
		 * Dimension scale (dimScale) style override.
		 */
		dimScale: number;
		arrow1Flipped: number;
		arrow2Flipped: number;

		constructor(
			dpx: number,
			dpy: number,
			dpz: number,
			mpx: number,
			mpy: number,
			mpz: number,
			dimType: number,
			attachmentPoint: number,
			lineSpacingStyle: number,
			lineSpacingFactor: number,
			text: string,
			style: string,
			angle: number,
			linearFactor: number,
			dimScale: number,
			arrow1Flipped: number,
			arrow2Flipped: number,
		) {
			this.dpx = dpx;
			this.dpy = dpy;
			this.dpz = dpz;
			this.mpx = mpx;
			this.mpy = mpy;
			this.mpz = mpz;
			this.dimType = dimType;
			this.attachmentPoint = attachmentPoint;
			this.lineSpacingStyle = lineSpacingStyle;
			this.lineSpacingFactor = lineSpacingFactor;
			this.text = text;
			this.style = style;
			this.angle = angle;
			this.linearFactor = linearFactor;
			this.dimScale = dimScale;
			this.arrow1Flipped = arrow1Flipped;
			this.arrow2Flipped = arrow2Flipped;
		}
	}

	/**
	 * Aligned Dimension Data.
	 */
	export class DL_DimAlignedData {
		/*! X Coordinate of Extension point 1. */
		epx1: number;
		/*! Y Coordinate of Extension point 1. */
		epy1: number;
		/*! Z Coordinate of Extension point 1. */
		epz1: number;

		/*! X Coordinate of Extension point 2. */
		epx2: number;
		/*! Y Coordinate of Extension point 2. */
		epy2: number;
		/*! Z Coordinate of Extension point 2. */
		epz2: number;

		constructor(
			epx1: number,
			epy1: number,
			epz1: number,
			epx2: number,
			epy2: number,
			epz2: number,
		) {
			this.epx1 = epx1;
			this.epy1 = epy1;
			this.epz1 = epz1;
			this.epx2 = epx2;
			this.epy2 = epy2;
			this.epz2 = epz2;
		}
	}

	/**
	 * Linear (rotated) Dimension Data.
	 */
	export class DL_DimLinearData {
		/*! X Coordinate of Extension point 1. */
		dpx1: number;
		/*! Y Coordinate of Extension point 1. */
		dpy1: number;
		/*! Z Coordinate of Extension point 1. */
		dpz1: number;

		/*! X Coordinate of Extension point 2. */
		dpx2: number;
		/*! Y Coordinate of Extension point 2. */
		dpy2: number;
		/*! Z Coordinate of Extension point 2. */
		dpz2: number;

		/*! Rotation angle (angle of dimension line) in degrees. */
		angle: number;
		/*! Oblique angle in degrees. */
		oblique: number;

		constructor(
			dpx1: number,
			dpy1: number,
			dpz1: number,
			dpx2: number,
			dpy2: number,
			dpz2: number,
			angle: number,
			oblique: number,
		) {
			this.dpx1 = dpx1;
			this.dpy1 = dpy1;
			this.dpz1 = dpz1;
			this.dpx2 = dpx2;
			this.dpy2 = dpy2;
			this.dpz2 = dpz2;
			this.angle = angle;
			this.oblique = oblique;
		}
	}

	/**
	 * Radial Dimension Data.
	 */
	export class DL_DimRadialData {
		/*! X Coordinate of definition point. */
		dpx: number;
		/*! Y Coordinate of definition point. */
		dpy: number;
		/*! Z Coordinate of definition point. */
		dpz: number;

		/*! Leader length */
		leader: number;

		constructor(dpx: number, dpy: number, dpz: number, leader: number) {
			this.dpx = dpx;
			this.dpy = dpy;
			this.dpz = dpz;
			this.leader = leader;
		}
	}

	/**
	 * Diametric Dimension Data.
	 */
	export class DL_DimDiametricData {
		/*! X Coordinate of definition point (DXF 15). */
		dpx: number;
		/*! Y Coordinate of definition point (DXF 25). */
		dpy: number;
		/*! Z Coordinate of definition point (DXF 35). */
		dpz: number;

		/*! Leader length */
		leader: number;

		constructor(dpx: number, dpy: number, dpz: number, leader: number) {
			this.dpx = dpx;
			this.dpy = dpy;
			this.dpz = dpz;
			this.leader = leader;
		}
	}

	/**
	 * Angular Dimension Data.
	 */
	export class DL_DimAngular2LData {
		/*! X Coordinate of definition point 1. */
		dpx1: number;
		/*! Y Coordinate of definition point 1. */
		dpy1: number;
		/*! Z Coordinate of definition point 1. */
		dpz1: number;

		/*! X Coordinate of definition point 2. */
		dpx2: number;
		/*! Y Coordinate of definition point 2. */
		dpy2: number;
		/*! Z Coordinate of definition point 2. */
		dpz2: number;

		/*! X Coordinate of definition point 3. */
		dpx3: number;
		/*! Y Coordinate of definition point 3. */
		dpy3: number;
		/*! Z Coordinate of definition point 3. */
		dpz3: number;

		/*! X Coordinate of definition point 4. */
		dpx4: number;
		/*! Y Coordinate of definition point 4. */
		dpy4: number;
		/*! Z Coordinate of definition point 4. */
		dpz4: number;

		constructor(
			dpx1: number,
			dpy1: number,
			dpz1: number,
			dpx2: number,
			dpy2: number,
			dpz2: number,
			dpx3: number,
			dpy3: number,
			dpz3: number,
			dpx4: number,
			dpy4: number,
			dpz4: number,
		) {
			this.dpx1 = dpx1;
			this.dpy1 = dpy1;
			this.dpz1 = dpz1;
			this.dpx2 = dpx2;
			this.dpy2 = dpy2;
			this.dpz2 = dpz2;
			this.dpx3 = dpx3;
			this.dpy3 = dpy3;
			this.dpz3 = dpz3;
			this.dpx4 = dpx4;
			this.dpy4 = dpy4;
			this.dpz4 = dpz4;
		}
	}

	/**
	 * Angular Dimension Data (3 points version).
	 */
	export class DL_DimAngular3PData {
		/*! X Coordinate of definition point 1 (extension line 1 end). */
		dpx1: number;
		/*! Y Coordinate of definition point 1. */
		dpy1: number;
		/*! Z Coordinate of definition point 1. */
		dpz1: number;

		/*! X Coordinate of definition point 2 (extension line 2 end). */
		dpx2: number;
		/*! Y Coordinate of definition point 2. */
		dpy2: number;
		/*! Z Coordinate of definition point 2. */
		dpz2: number;

		/*! X Coordinate of definition point 3 (center). */
		dpx3: number;
		/*! Y Coordinate of definition point 3. */
		dpy3: number;
		/*! Z Coordinate of definition point 3. */
		dpz3: number;

		constructor(
			dpx1: number,
			dpy1: number,
			dpz1: number,
			dpx2: number,
			dpy2: number,
			dpz2: number,
			dpx3: number,
			dpy3: number,
			dpz3: number,
		) {
			this.dpx1 = dpx1;
			this.dpy1 = dpy1;
			this.dpz1 = dpz1;
			this.dpx2 = dpx2;
			this.dpy2 = dpy2;
			this.dpz2 = dpz2;
			this.dpx3 = dpx3;
			this.dpy3 = dpy3;
			this.dpz3 = dpz3;
		}
	}

	/**
	 * Ordinate Dimension Data.
	 */
	export class DL_DimOrdinateData {
		/*! X Coordinate of definition point 1. */
		dpx1: number;
		/*! Y Coordinate of definition point 1. */
		dpy1: number;
		/*! Z Coordinate of definition point 1. */
		dpz1: number;

		/*! X Coordinate of definition point 2. */
		dpx2: number;
		/*! Y Coordinate of definition point 2. */
		dpy2: number;
		/*! Z Coordinate of definition point 2. */
		dpz2: number;

		/*! True if the dimension indicates the X-value, false for Y-value */
		xType: boolean;

		constructor(
			dpx1: number,
			dpy1: number,
			dpz1: number,
			dpx2: number,
			dpy2: number,
			dpz2: number,
			xType: boolean,
		) {
			this.dpx1 = dpx1;
			this.dpy1 = dpy1;
			this.dpz1 = dpz1;
			this.dpx2 = dpx2;
			this.dpy2 = dpy2;
			this.dpz2 = dpz2;
			this.xType = xType;
		}
	}

	/**
	 * Leader (arrow).
	 */
	export class DL_LeaderData {
		/*! Arrow head flag (71). */
		arrowHeadFlag: number;
		/*! Leader path type (72). */
		leaderPathType: number;
		/*! Leader creation flag (73). */
		leaderCreationFlag: number;
		/*! HookLine direction flag (74). */
		hookLineDirectionFlag: number;
		/*! HookLine flag (75) */
		hookLineFlag: number;
		/*! Text annotation height (40). */
		textAnnotationHeight: number;
		/*! Text annotation width (41) */
		textAnnotationWidth: number;
		/*! Number of vertices in leader (76). */
		verticesSize: number;
		/*! Dimension scale (dimScale) style override. */
		dimScale: number;

		constructor(
			arrowHeadFlag: number,
			leaderPathType: number,
			leaderCreationFlag: number,
			hookLineDirectionFlag: number,
			hookLineFlag: number,
			textAnnotationHeight: number,
			textAnnotationWidth: number,
			verticesSize: number,
			dimScale: number,
		) {
			this.arrowHeadFlag = arrowHeadFlag;
			this.leaderPathType = leaderPathType;
			this.leaderCreationFlag = leaderCreationFlag;
			this.hookLineDirectionFlag = hookLineDirectionFlag;
			this.hookLineFlag = hookLineFlag;
			this.textAnnotationHeight = textAnnotationHeight;
			this.textAnnotationWidth = textAnnotationWidth;
			this.verticesSize = verticesSize;
			this.dimScale = dimScale;
		}
	}

	/**
	 * Leader Vertex Data.
	 */
	export class DL_LeaderVertexData {
		/*! X Coordinate of the vertex. */
		x: number;
		/*! Y Coordinate of the vertex. */
		y: number;
		/*! Z Coordinate of the vertex. */
		z: number;

		constructor(x: number = 0.0, y: number = 0.0, z: number = 0.0) {
			this.x = x;
			this.y = y;
			this.z = z;
		}
	}

	/**
	 * Hatch data.
	 */
	export class DL_HatchData {
		/*! Number of boundary paths (loops). */
		numLoops: number;
		/*! Solid fill flag (true=solid, false=pattern). */
		solid: boolean;
		/*! Pattern scale or spacing */
		scale: number;
		/*! Pattern angle in degrees */
		angle: number;
		/*! Pattern name. */
		pattern: string;
		/*! Pattern origin */
		originX: number;
		originY: number;

		constructor(
			numLoops: number,
			solid: boolean,
			scale: number,
			angle: number,
			pattern: string,
			originX: number,
			originY: number,
		) {
			this.numLoops = numLoops;
			this.solid = solid;
			this.scale = scale;
			this.angle = angle;
			this.pattern = pattern;
			this.originX = originX;
			this.originY = originY;
		}
	}

	/**
	 * Hatch boundary path (loop) data.
	 */
	export class DL_HatchLoopData {
		/*! Number of edges in this loop. */
		numEdges: number;

		constructor(numEdges: number) {
			this.numEdges = numEdges;
		}
	}

	/**
	 * Hatch edge data.
	 */
	export class DL_HatchEdgeData {
		/**
		 * Set to true if this edge is fully defined.
		 */
		defined: boolean;

		/**
		 * Edge type. 1=line, 2=arc, 3=elliptic arc, 4=spline.
		 */
		edgeType: number;

		// line edges:

		/*! Start point (X). */
		x1: number;
		/*! Start point (Y). */
		y1: number;
		/*! End point (X). */
		x2: number;
		/*! End point (Y). */
		y2: number;

		/*! Center point of arc or ellipse arc (X). */
		cx: number;
		/*! Center point of arc or ellipse arc (Y). */
		cy: number;
		/*! Arc radius. */
		radius: number;
		/*! Start angle of arc or ellipse arc. */
		angle1: number;
		/*! End angle of arc or ellipse arc. */
		angle2: number;
		/*! Counterclockwise flag for arc or ellipse arc. */
		ccw: boolean;

		/*! Major axis end point (X). */
		mx: number;
		/*! Major axis end point (Y). */
		my: number;
		/*! Axis ratio */
		ratio: number;

		/*! Spline degree */
		degree: number;
		rational: boolean;
		periodic: boolean;
		/*! Number of knots. */
		nKnots: number;
		/*! Number of control points. */
		nControl: number;
		/*! Number of fit points. */
		nFit: number;

		controlPoints: Array<Array<number>>;
		knots: Array<number>;
		weights: Array<number>;
		fitPoints: Array<number>;

		startTangentX: number;
		startTangentY: number;

		endTangentX: number;
		endTangentY: number;

		/** Polyline boundary vertices (x y [bulge])*/
		vertices: Array<Array<number>>;

		constructor(
			defined: boolean,
			edgeType: number,
			x1: number,
			y1: number,
			x2: number,
			y2: number,
			cx: number,
			cy: number,
			radius: number,
			angle1: number,
			angle2: number,
			ccw: boolean,
			mx: number,
			my: number,
			ratio: number,
			degree: number,
			rational: boolean,
			periodic: boolean,
			nKnots: number,
			nControl: number,
			nFit: number,
			controlPoints: Array<Array<number>>,
			knots: Array<number>,
			weights: Array<number>,
			fitPoints: Array<number>,
			startTangentX: number,
			startTangentY: number,
			endTangentX: number,
			endTangentY: number,
			vertices: Array<Array<number>>,
		) {
			this.defined = defined;
			this.edgeType = edgeType;
			this.x1 = x1;
			this.y1 = y1;
			this.x2 = x2;
			this.y2 = y2;
			this.cx = cx;
			this.cy = cy;
			this.radius = radius;
			this.angle1 = angle1;
			this.angle2 = angle2;
			this.ccw = ccw;
			this.mx = mx;
			this.my = my;
			this.ratio = ratio;
			this.degree = degree;
			this.rational = rational;
			this.periodic = periodic;
			this.nKnots = nKnots;
			this.nControl = nControl;
			this.nFit = nFit;
			this.controlPoints = controlPoints;
			this.knots = knots;
			this.weights = weights;
			this.fitPoints = fitPoints;
			this.startTangentX = startTangentX;
			this.startTangentY = startTangentY;
			this.endTangentX = endTangentX;
			this.endTangentY = endTangentY;
			this.vertices = vertices;
		}
		// closed;
	}

	/**
	 * Image Data.
	 */
	export class DL_ImageData {
		/*! Reference to the image file 
            (unique, used to refer to the image def object). */
		ref: string;
		/*! X Coordinate of insertion point. */
		ipx: number;
		/*! Y Coordinate of insertion point. */
		ipy: number;
		/*! Z Coordinate of insertion point. */
		ipz: number;
		/*! X Coordinate of u vector along bottom of image. */
		ux: number;
		/*! Y Coordinate of u vector along bottom of image. */
		uy: number;
		/*! Z Coordinate of u vector along bottom of image. */
		uz: number;
		/*! X Coordinate of v vector along left side of image. */
		vx: number;
		/*! Y Coordinate of v vector along left side of image. */
		vy: number;
		/*! Z Coordinate of v vector along left side of image. */
		vz: number;
		/*! Width of image in pixel. */
		width: number;
		/*! Height of image in pixel. */
		height: number;
		/*! Brightness (0..100, default = 50). */
		brightness: number;
		/*! Contrast (0..100, default = 50). */
		contrast: number;
		/*! Fade (0..100, default = 0). */
		fade: number;

		constructor(
			ref: string,
			ipx: number,
			ipy: number,
			ipz: number,
			ux: number,
			uy: number,
			uz: number,
			vx: number,
			vy: number,
			vz: number,
			width: number,
			height: number,
			brightness: number,
			contrast: number,
			fade: number,
		) {
			this.ref = ref;
			this.ipx = ipx;
			this.ipy = ipy;
			this.ipz = ipz;
			this.ux = ux;
			this.uy = uy;
			this.uz = uz;
			this.vx = vx;
			this.vy = vy;
			this.vz = vz;
			this.width = width;
			this.height = height;
			this.brightness = brightness;
			this.contrast = contrast;
			this.fade = fade;
		}
	}

	/**
	 * Image Definition Data.
	 */
	export class DL_ImageDefData {
		/*! Reference to the image file 
            (unique, used to refer to the image def object). */
		ref: string;

		/*! Image file */
		file: string;

		constructor(ref: string, file: string) {
			this.ref = ref;
			this.file = file;
		}
	}

	/**
	 * Dictionary data.
	 */
	export class DL_DictionaryData {
		handle: string;

		constructor(handle: string) {
			this.handle = handle;
		}
	}

	/**
	 * Dictionary entry data.
	 */
	export class DL_DictionaryEntryData {
		name: string;
		handle: string;

		constructor(name: string, handle: string) {
			this.name = name;
			this.handle = handle;
		}
	}

	export class DL_Attributes {}
}

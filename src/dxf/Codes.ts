/**
 * @file Codes.ts
 * @description dxf data structure
 */

export namespace Dxf {
	/**
	 * Standard DXF colors.
	 */
	export enum Color {
		black = 250,
		green = 3,
		red = 1,
		brown = 15,
		yellow = 2,
		cyan = 4,
		magenta = 6,
		gray = 8,
		blue = 5,
		l_blue = 163,
		l_green = 121,
		l_cyan = 131,
		l_red = 23,
		l_magenta = 221,
		l_gray = 252,
		white = 7,
		bylayer = 256,
		byblock = 0,
	}

	/**
	 * Version numbers for the DXF Format.
	 */
	export enum Version {
		AC1009_MIN, //R12, minimalistic
		AC1009, //R12
		AC1012,
		AC1014,
		AC1015, //R2000
	}

	/**
	 * Extended color palette:
	 * The first entry is only for direct indexing starting with [1]
	 * Color 1 is red (1,0,0)
	 */
	export const dxfColor: number[][] = [
		[0, 0, 0], // unused
		[1, 0, 0], // 1
		[1, 1, 0],
		[0, 1, 0],
		[0, 1, 1],
		[0, 0, 1],
		[1, 0, 1],
		[1, 1, 1], // black or white
		[0.5, 0.5, 0.5],
		[0.75, 0.75, 0.75],
		[1, 0, 0], // 10
		[1, 0.5, 0.5],
		[0.65, 0, 0],
		[0.65, 0.325, 0.325],
		[0.5, 0, 0],
		[0.5, 0.25, 0.25],
		[0.3, 0, 0],
		[0.3, 0.15, 0.15],
		[0.15, 0, 0],
		[0.15, 0.075, 0.075],
		[1, 0.25, 0], // 20
		[1, 0.625, 0.5],
		[0.65, 0.1625, 0],
		[0.65, 0.4063, 0.325],
		[0.5, 0.125, 0],
		[0.5, 0.3125, 0.25],
		[0.3, 0.075, 0],
		[0.3, 0.1875, 0.15],
		[0.15, 0.0375, 0],
		[0.15, 0.0938, 0.075],
		[1, 0.5, 0], // 30
		[1, 0.75, 0.5],
		[0.65, 0.325, 0],
		[0.65, 0.4875, 0.325],
		[0.5, 0.25, 0],
		[0.5, 0.375, 0.25],
		[0.3, 0.15, 0],
		[0.3, 0.225, 0.15],
		[0.15, 0.075, 0],
		[0.15, 0.1125, 0.075],
		[1, 0.75, 0], // 40
		[1, 0.875, 0.5],
		[0.65, 0.4875, 0],
		[0.65, 0.5688, 0.325],
		[0.5, 0.375, 0],
		[0.5, 0.4375, 0.25],
		[0.3, 0.225, 0],
		[0.3, 0.2625, 0.15],
		[0.15, 0.1125, 0],
		[0.15, 0.1313, 0.075],
		[1, 1, 0], // 50
		[1, 1, 0.5],
		[0.65, 0.65, 0],
		[0.65, 0.65, 0.325],
		[0.5, 0.5, 0],
		[0.5, 0.5, 0.25],
		[0.3, 0.3, 0],
		[0.3, 0.3, 0.15],
		[0.15, 0.15, 0],
		[0.15, 0.15, 0.075],
		[0.75, 1, 0], // 60
		[0.875, 1, 0.5],
		[0.4875, 0.65, 0],
		[0.5688, 0.65, 0.325],
		[0.375, 0.5, 0],
		[0.4375, 0.5, 0.25],
		[0.225, 0.3, 0],
		[0.2625, 0.3, 0.15],
		[0.1125, 0.15, 0],
		[0.1313, 0.15, 0.075],
		[0.5, 1, 0], // 70
		[0.75, 1, 0.5],
		[0.325, 0.65, 0],
		[0.4875, 0.65, 0.325],
		[0.25, 0.5, 0],
		[0.375, 0.5, 0.25],
		[0.15, 0.3, 0],
		[0.225, 0.3, 0.15],
		[0.075, 0.15, 0],
		[0.1125, 0.15, 0.075],
		[0.25, 1, 0], // 80
		[0.625, 1, 0.5],
		[0.1625, 0.65, 0],
		[0.4063, 0.65, 0.325],
		[0.125, 0.5, 0],
		[0.3125, 0.5, 0.25],
		[0.075, 0.3, 0],
		[0.1875, 0.3, 0.15],
		[0.0375, 0.15, 0],
		[0.0938, 0.15, 0.075],
		[0, 1, 0], // 90
		[0.5, 1, 0.5],
		[0, 0.65, 0],
		[0.325, 0.65, 0.325],
		[0, 0.5, 0],
		[0.25, 0.5, 0.25],
		[0, 0.3, 0],
		[0.15, 0.3, 0.15],
		[0, 0.15, 0],
		[0.075, 0.15, 0.075],
		[0, 1, 0.25], // 100
		[0.5, 1, 0.625],
		[0, 0.65, 0.1625],
		[0.325, 0.65, 0.4063],
		[0, 0.5, 0.125],
		[0.25, 0.5, 0.3125],
		[0, 0.3, 0.075],
		[0.15, 0.3, 0.1875],
		[0, 0.15, 0.0375],
		[0.075, 0.15, 0.0938],
		[0, 1, 0.5], // 110
		[0.5, 1, 0.75],
		[0, 0.65, 0.325],
		[0.325, 0.65, 0.4875],
		[0, 0.5, 0.25],
		[0.25, 0.5, 0.375],
		[0, 0.3, 0.15],
		[0.15, 0.3, 0.225],
		[0, 0.15, 0.075],
		[0.075, 0.15, 0.1125],
		[0, 1, 0.75], // 120
		[0.5, 1, 0.875],
		[0, 0.65, 0.4875],
		[0.325, 0.65, 0.5688],
		[0, 0.5, 0.375],
		[0.25, 0.5, 0.4375],
		[0, 0.3, 0.225],
		[0.15, 0.3, 0.2625],
		[0, 0.15, 0.1125],
		[0.075, 0.15, 0.1313],
		[0, 1, 1], // 130
		[0.5, 1, 1],
		[0, 0.65, 0.65],
		[0.325, 0.65, 0.65],
		[0, 0.5, 0.5],
		[0.25, 0.5, 0.5],
		[0, 0.3, 0.3],
		[0.15, 0.3, 0.3],
		[0, 0.15, 0.15],
		[0.075, 0.15, 0.15],
		[0, 0.75, 1], // 140
		[0.5, 0.875, 1],
		[0, 0.4875, 0.65],
		[0.325, 0.5688, 0.65],
		[0, 0.375, 0.5],
		[0.25, 0.4375, 0.5],
		[0, 0.225, 0.3],
		[0.15, 0.2625, 0.3],
		[0, 0.1125, 0.15],
		[0.075, 0.1313, 0.15],
		[0, 0.5, 1], // 150
		[0.5, 0.75, 1],
		[0, 0.325, 0.65],
		[0.325, 0.4875, 0.65],
		[0, 0.25, 0.5],
		[0.25, 0.375, 0.5],
		[0, 0.15, 0.3],
		[0.15, 0.225, 0.3],
		[0, 0.075, 0.15],
		[0.075, 0.1125, 0.15],
		[0, 0.25, 1], // 160
		[0.5, 0.625, 1],
		[0, 0.1625, 0.65],
		[0.325, 0.4063, 0.65],
		[0, 0.125, 0.5],
		[0.25, 0.3125, 0.5],
		[0, 0.075, 0.3],
		[0.15, 0.1875, 0.3],
		[0, 0.0375, 0.15],
		[0.075, 0.0938, 0.15],
		[0, 0, 1], // 170
		[0.5, 0.5, 1],
		[0, 0, 0.65],
		[0.325, 0.325, 0.65],
		[0, 0, 0.5],
		[0.25, 0.25, 0.5],
		[0, 0, 0.3],
		[0.15, 0.15, 0.3],
		[0, 0, 0.15],
		[0.075, 0.075, 0.15],
		[0.25, 0, 1], // 180
		[0.625, 0.5, 1],
		[0.1625, 0, 0.65],
		[0.4063, 0.325, 0.65],
		[0.125, 0, 0.5],
		[0.3125, 0.25, 0.5],
		[0.075, 0, 0.3],
		[0.1875, 0.15, 0.3],
		[0.0375, 0, 0.15],
		[0.0938, 0.075, 0.15],
		[0.5, 0, 1], // 190
		[0.75, 0.5, 1],
		[0.325, 0, 0.65],
		[0.4875, 0.325, 0.65],
		[0.25, 0, 0.5],
		[0.375, 0.25, 0.5],
		[0.15, 0, 0.3],
		[0.225, 0.15, 0.3],
		[0.075, 0, 0.15],
		[0.1125, 0.075, 0.15],
		[0.75, 0, 1], // 200
		[0.875, 0.5, 1],
		[0.4875, 0, 0.65],
		[0.5688, 0.325, 0.65],
		[0.375, 0, 0.5],
		[0.4375, 0.25, 0.5],
		[0.225, 0, 0.3],
		[0.2625, 0.15, 0.3],
		[0.1125, 0, 0.15],
		[0.1313, 0.075, 0.15],
		[1, 0, 1], // 210
		[1, 0.5, 1],
		[0.65, 0, 0.65],
		[0.65, 0.325, 0.65],
		[0.5, 0, 0.5],
		[0.5, 0.25, 0.5],
		[0.3, 0, 0.3],
		[0.3, 0.15, 0.3],
		[0.15, 0, 0.15],
		[0.15, 0.075, 0.15],
		[1, 0, 0.75], // 220
		[1, 0.5, 0.875],
		[0.65, 0, 0.4875],
		[0.65, 0.325, 0.5688],
		[0.5, 0, 0.375],
		[0.5, 0.25, 0.4375],
		[0.3, 0, 0.225],
		[0.3, 0.15, 0.2625],
		[0.15, 0, 0.1125],
		[0.15, 0.075, 0.1313],
		[1, 0, 0.5], // 230
		[1, 0.5, 0.75],
		[0.65, 0, 0.325],
		[0.65, 0.325, 0.4875],
		[0.5, 0, 0.25],
		[0.5, 0.25, 0.375],
		[0.3, 0, 0.15],
		[0.3, 0.15, 0.225],
		[0.15, 0, 0.075],
		[0.15, 0.075, 0.1125],
		[1, 0, 0.25], // 240
		[1, 0.5, 0.625],
		[0.65, 0, 0.1625],
		[0.65, 0.325, 0.4063],
		[0.5, 0, 0.125],
		[0.5, 0.25, 0.3125],
		[0.3, 0, 0.075],
		[0.3, 0.15, 0.1875],
		[0.15, 0, 0.0375],
		[0.15, 0.075, 0.0938],
		[0.33, 0.33, 0.33], // 250
		[0.464, 0.464, 0.464],
		[0.598, 0.598, 0.598],
		[0.732, 0.732, 0.732],
		[0.866, 0.866, 0.866],
		[1, 1, 1], // 255
	];

	// DXF Group Codes:

	// Strings
	export const DL_STRGRP_START: number = 0;
	export const DL_STRGRP_END: number = 9;

	// Coordinates
	export const DL_CRDGRP_START: number = 10;
	export const DL_CRDGRP_END: number = 19;

	// Real values
	export const DL_RLGRP_START: number = 38;
	export const DL_RLGRP_END: number = 59;

	// Short integer values
	export const DL_SHOGRP_START: number = 60;
	export const DL_SHOGRP_END: number = 79;

	// New in Release 13,
	export const DL_SUBCLASS: number = 100;

	// More coordinates
	export const DL_CRD2GRP_START: number = 210;
	export const DL_CRD2GRP_END: number = 239;

	// Extended data strings
	export const DL_ESTRGRP_START: number = 1000;
	export const DL_ESTRGRP_END: number = 1009;

	// Extended data reals
	export const DL_ERLGRP_START: number = 1010;
	export const DL_ERLGRP_END: number = 1059;

	export const DL_Y8_COORD_CODE: number = 28;
	export const DL_Z0_COORD_CODE: number = 30;
	export const DL_Z8_COORD_CODE: number = 38;

	export const DL_POINT_COORD_CODE: number = 10;
	export const DL_INSERT_COORD_CODE: number = 10;

	export const DL_THICKNESS: number = 39;
	export const DL_FIRST_REAL_CODE: number = 134;
	export const DL_LAST_REAL_CODE: number = 59;
	export const DL_FIRST_INT_CODE: number = 60;
	export const DL_ATTFLAGS_CODE: number = 70;
	export const DL_PLINE_FLAGS_CODE: number = 70;
	export const DL_LAYER_FLAGS_CODE: number = 70;
	export const DL_FLD_LEN_CODE: number = 73; // Inside ATTRIB resbuf
	export const DL_LAST_INT_CODE: number = 79;
	export const DL_X_EXTRU_CODE: number = 210;
	export const DL_Y_EXTRU_CODE: number = 220;
	export const DL_Z_EXTRU_CODE: number = 230;
	export const DL_COMMENT_CODE: number = 999;

	// Start and endpoints of a line
	export const DL_LINE_START_CODE: number = 10; // Followed by x coord
	export const DL_LINE_END_CODE: number = 11; // Followed by x coord

	// Some codes used by blocks
	export const DL_BLOCK_FLAGS_CODE: number = 70; // An int containing flags
	export const DL_BLOCK_BASE_CODE: number = 10; // Origin of block definition
	export const DL_XREF_DEPENDENT: number = 16; // If a block contains an XREF
	export const DL_XREF_RESOLVED: number = 32; // If a XREF resolved ok
	export const DL_REFERENCED: number = 64; // If a block is ref'd in DWG

	export const DL_XSCALE_CODE: number = 41;
	export const DL_YSCALE_CODE: number = 42;
	export const DL_ANGLE_CODE: number = 50;
	export const DL_INS_POINT_CODE: number = 10; // Followed by x of ins pnt
	export const DL_NAME2_CODE: number = 3; // Second appearance of name

	// Some codes used by circle entities
	export const DL_CENTER_CODE: number = 10; // Followed by x of center
	export const DL_RADIUS_CODE: number = 40; // Followed by radius of circle

	export const DL_COND_OP_CODE: number = -4; // Conditional op,ads_ssget

	// When using ads_buildlist you MUST use RTDXF0 instead of these
	export const DL_ENTITY_TYPE_CODE: number = 0; // Then there is LINE, 3DFACE..
	export const DL_SES_CODE: number = 0; // Start End String Code
	export const DL_FILE_SEP_CODE: number = 0; // File separator
	export const DL_SOT_CODE: number = 0; // Start Of Table
	export const DL_TEXTVAL_CODE: number = 1;
	export const DL_NAME_CODE: number = 2;
	export const DL_BLOCK_NAME_CODE: number = 2;
	export const DL_SECTION_NAME_CODE: number = 2;
	export const DL_ENT_HAND_CODE: number = 5; // What follows is hexa string
	export const DL_TXT_STYLE_CODE: number = 7; // Inside attributes
	export const DL_LAYER_NAME_CODE: number = 8; // What follows is layer name
	export const DL_FIRST_XCOORD_CODE: number = 10; // Group code x of 1st coord
	export const DL_FIRST_YCOORD_CODE: number = 20; // Group code y of 1st coord
	export const DL_FIRST_ZCOORD_CODE: number = 30; // Group code z of 1st coord
	export const DL_L_START_CODE: number = 10;
	export const DL_L_END_CODE: number = 11;
	export const DL_TXTHI_CODE: number = 40;
	export const DL_SCALE_X_CODE: number = 41;
	export const DL_SCALE_Y_CODE: number = 42;
	export const DL_SCALE_Z_CODE: number = 43;
	export const DL_BULGE_CODE: number = 42; // Used in PLINE verts for arcs
	export const DL_ROTATION_CODE: number = 50;
	export const DL_COLOUR_CODE: number = 62; // What follows is a color int
	export const DL_LTYPE_CODE: number = 6; // What follows is a lineType

	// Attribute flags
	export const DL_ATTS_FOLLOW_CODE: number = 66;
	export const DL_ATT_TAG_CODE: number = 2;
	export const DL_ATT_VAL_CODE: number = 1;
	export const DL_ATT_FLAGS_CODE: number = 70; // 4 1 bit flags as follows...
	export const DL_ATT_INVIS_FLAG: number = 1;
	export const DL_ATT_CONST_FLAG: number = 2;
	export const DL_ATT_VERIFY_FLAG: number = 4; // Prompt and verify
	export const DL_ATT_PRESET_FLAG: number = 8; // No prompt and no verify

	// PLINE defines
	// Flags
	export const DL_OPEN_PLINE: number = 0x00;
	export const DL_CLOSED_PLINE: number = 0x01;
	export const DL_POLYLINE3D: number = 0x08;
	export const DL_PFACE_MESH: number = 0x40;
	export const DL_PGON_MESH: number = 0x10;
	// Vertices follow entity, required in POLYLINES
	export const DL_VERTS_FOLLOW_CODE: number = 66; // Value should always be 1
	export const DL_VERTEX_COORD_CODE: number = 10;

	// LAYER flags
	export const DL_FROZEN: number = 1;
	export const DL_FROZEN_BY_DEF: number = 2;
	export const DL_LOCKED: number = 4;
	export const DL_OBJECT_USED: number = 64; // Object is ref'd in the dwg

	export const DL_BLOCK_EN_CODE: number = -2; // Block entity definition
	export const DL_E_NAME: number = -1; // Entity name

	// Extended data codes
	export const DL_EXTD_SENTINEL: number = -3;
	export const DL_EXTD_STR: number = 1000;
	export const DL_EXTD_APP_NAME: number = 1001;
	export const DL_EXTD_CTL_STR: number = 1002;
	export const DL_EXTD_LYR_STR: number = 1003;
	export const DL_EXTD_CHUNK: number = 1004;
	export const DL_EXTD_HANDLE: number = 1005;
	export const DL_EXTD_POINT: number = 1010;
	export const DL_EXTD_POS: number = 1011;
	export const DL_EXTD_DISP: number = 1012;
	export const DL_EXTD_DIR: number = 1013;
	export const DL_EXTD_FLOAT: number = 1040;
	export const DL_EXTD_DIST: number = 1041;
	export const DL_EXTD_SCALE: number = 1042;
	export const DL_EXTD_INT16: number = 1070;
	export const DL_EXTD_INT32: number = 1071;

	// UCS codes for use in ads_trans
	export const DL_WCS_TRANS_CODE: number = 0;
	export const DL_UCS_TRANS_CODE: number = 1;
	export const DL_DCS_TRANS_CODE: number = 2;
	export const DL_PCS_TRANS_CODE: number = 3;
}

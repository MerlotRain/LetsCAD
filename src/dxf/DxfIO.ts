import * as fs from "fs";
import { DL_CreationInterface } from "./CreationInterface";
import { Version } from "./Codes";
import { DL_DimensionData, DL_HatchEdgeData } from "./Entities";
import { DL_Attributes } from "./Attributes";
import { DL_Writer } from "./DxfWriter";

namespace ObjectType {
	export let DL_UNKNOWN: 0;
	export let DL_LAYER: 10;
	export let DL_BLOCK: 11;
	export let DL_ENDBLK: 12;
	export let DL_LINETYPE: 13;
	export let DL_STYLE: 20;
	export let DL_SETTING: 50;
	export let DL_ENTITY_POINT: 100;
	export let DL_ENTITY_LINE: 101;
	export let DL_ENTITY_POLYLINE: 102;
	export let DL_ENTITY_LWPOLYLINE: 103;
	export let DL_ENTITY_VERTEX: 104;
	export let DL_ENTITY_SPLINE: 105;
	export let DL_ENTITY_KNOT: 106;
	export let DL_ENTITY_CONTROLPOINT: 107;
	export let DL_ENTITY_ARC: 108;
	export let DL_ENTITY_CIRCLE: 109;
	export let DL_ENTITY_ELLIPSE: 110;
	export let DL_ENTITY_INSERT: 111;
	export let DL_ENTITY_TEXT: 112;
	export let DL_ENTITY_MTEXT: 113;
	export let DL_ENTITY_DIMENSION: 114;
	export let DL_ENTITY_LEADER: 115;
	export let DL_ENTITY_HATCH: 116;
	export let DL_ENTITY_ATTRIB: 117;
	export let DL_ENTITY_IMAGE: 118;
	export let DL_ENTITY_IMAGEDEF: 119;
	export let DL_ENTITY_TRACE: 120;
	export let DL_ENTITY_SOLID: 121;
	export let DL_ENTITY_3DFACE: 122;
	export let DL_ENTITY_XLINE: 123;
	export let DL_ENTITY_RAY: 124;
	export let DL_ENTITY_ARCALIGNEDTEXT: 125;
	export let DL_ENTITY_SEQEND: 126;
	export let DL_XRECORD: 200;
	export let DL_DICTIONARY: 210;
}

export class DxfIO {
	private version: Version;
	private vertices?: Array<number>;
	private maxVertices: number;
	private vertexIndex: number;

	private knots?: Array<number>;
	private maxKnots: number;
	private knotIndex: number;

	private weights?: Array<number>;
	private weightIndex: number;

	private controlPoints?: Array<number>;
	private maxControlPoints: number;
	private controlPointIndex: number;

	private fitPoints?: Array<number>;
	private maxFitPoints: number;
	private fitPointIndex: number;

	private leaderVertices?: Array<number>;
	private maxLeaderVertices: number;
	private leaderVertexIndex: number;

	private firstHatchLoop: boolean;
	private hatchEdge?: DL_HatchEdgeData;
	private hatchEdges?: Array<Array<DL_HatchEdgeData>>;

	private xRecordHandle: string;
	private xRecodeValues: boolean;

	// Only the useful part of the group code
	private groupCodeTmp: string;
	// ...same as integer
	private groupCode: number;
	// Only the useful part of the group value
	private groupValue: string;
	// Current entity type
	private currentObjectType: number;
	// Value of the current setting
	private settingValue: string;
	// Key of the current setting (e.g. "$ACADVER")
	private settingKey: string;
	// Stores the group codes
	private values?: Map<number, string>;
	// First call of this method. We initialize all group values in
	//  the first call.
	private firstCall: boolean;
	// Attributes of the current entity (layer, color, width, line type)
	private attrib?: DL_Attributes;
	// library version. hex: 0x20003001 = 2.0.3.1
	private libVersion: number;
	// app specific dictionary handle:
	private appDictionaryHandle: number;
	// handle of standard text style, referenced by dimStyle:
	private styleHandleStd: number;

	constructor() {
		this.version = Version.AC1009;
		this.vertices = undefined;
		this.maxVertices = 0;
		this.vertexIndex = 0;

		this.knots = undefined;
		this.maxKnots = 0;
		this.knotIndex = 0;

		this.weights = undefined;
		this.weightIndex = 0;

		this.controlPoints = undefined;
		this.maxControlPoints = 0;
		this.controlPointIndex = 0;

		this.fitPoints = undefined;
		this.maxFitPoints = 0;
		this.fitPointIndex = 0;

		this.leaderVertices = undefined;
		this.maxLeaderVertices = 0;
		this.leaderVertexIndex = 0;

		this.firstHatchLoop = true;
		this.hatchEdge = undefined;
		this.hatchEdges = undefined;

		this.xRecordHandle = "";
		this.xRecodeValues = false;

		this.groupCodeTmp = "";
		this.groupCode = 0;
		this.groupValue = "";
		this.currentObjectType = 0;
		this.settingValue = "";
		this.settingKey = "";
		this.values = new Map<number, string>();
		this.firstCall = true;
		this.attrib = undefined;
		this.libVersion = 0;
		this.appDictionaryHandle = 0;
		this.styleHandleStd = 0;
	}

	in(file: string, creation: DL_CreationInterface): boolean {
		return true;
	}
	processDXFGroup(
		creation: DL_CreationInterface,
		groupCode: number,
		groupValue: string,
	): boolean {
		return false;
	}
	addSetting(creation: DL_CreationInterface) {}
	addLayer(creation: DL_CreationInterface) {}
	addLineType(creation: DL_CreationInterface) {}
	addBlock(creation: DL_CreationInterface) {}
	endBlock(creation: DL_CreationInterface) {}
	addTextStyle(creation: DL_CreationInterface) {}

	addPoint(creation: DL_CreationInterface) {}
	addLine(creation: DL_CreationInterface) {}
	addXLine(creation: DL_CreationInterface) {}
	addRay(creation: DL_CreationInterface) {}

	addPolyline(creation: DL_CreationInterface) {}
	addVertex(creation: DL_CreationInterface) {}

	addSpline(creation: DL_CreationInterface) {}

	addArc(creation: DL_CreationInterface) {}
	addCircle(creation: DL_CreationInterface) {}
	addEllipse(creation: DL_CreationInterface) {}
	addInsert(creation: DL_CreationInterface) {}

	addTrace(creation: DL_CreationInterface) {}
	add3dFace(creation: DL_CreationInterface) {}
	addSolid(creation: DL_CreationInterface) {}

	addMText(creation: DL_CreationInterface) {}
	addText(creation: DL_CreationInterface) {}
	addArcAlignedText(creation: DL_CreationInterface) {}

	addAttribute(creation: DL_CreationInterface) {}

	getDimData(): DL_DimensionData | undefined {
		return undefined;
	}
	addDimLinear(creation: DL_CreationInterface) {}
	addDimAligned(creation: DL_CreationInterface) {}
	addDimRadial(creation: DL_CreationInterface) {}
	addDimDiametric(creation: DL_CreationInterface) {}
	addDimAngular(creation: DL_CreationInterface) {}
	addDimAngular3P(creation: DL_CreationInterface) {}
	addDimOrdinate(creation: DL_CreationInterface) {}

	addLeader(creation: DL_CreationInterface) {}

	addHatch(creation: DL_CreationInterface) {}
	addHatchLoop() {}
	addHatchEdge() {}
	handleHatchData(creation: DL_CreationInterface) {}

	addImage(creation: DL_CreationInterface) {}
	addImageRef(creation: DL_CreationInterface) {}

	addComment(creation: DL_CreationInterface, comment: string) {}

	addDictionary(creation: DL_CreationInterface) {}
	addDictionaryEntry(creation: DL_CreationInterface) {}

	handleXRecordData(creation: DL_CreationInterface) {}
	handleDictionaryData(creation: DL_CreationInterface) {}

	handleXData(creation: DL_CreationInterface) {}
	handleMTextData(creation: DL_CreationInterface) {}
	handleLWPolylineData(creation: DL_CreationInterface) {}
	handleSplineData(creation: DL_CreationInterface) {}
	handleLeaderData(creation: DL_CreationInterface) {}
	handleLinetypeData(creation: DL_CreationInterface) {}

	endEntity(creation: DL_CreationInterface) {}
	endSequence(creation: DL_CreationInterface) {}
}

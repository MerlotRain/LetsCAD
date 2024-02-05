import {
	DL_ArcAlignedTextData,
	DL_ArcData,
	DL_AttributeData,
	DL_BlockData,
	DL_CircleData,
	DL_ControlPointData,
	DL_DimAlignedData,
	DL_DimAngular2LData,
	DL_DimAngular3PData,
	DL_DimDiametricData,
	DL_DimLinearData,
	DL_DimOrdinateData,
	DL_DimRadialData,
	DL_DimensionData,
	DL_EllipseData,
	DL_FitPointData,
	DL_InsertData,
	DL_KnotData,
	DL_LayerData,
	DL_LeaderData,
	DL_LeaderVertexData,
	DL_LineData,
	DL_LineTypeData,
	DL_MTextData,
	DL_PointData,
	DL_PolylineData,
	DL_RayData,
	DL_SplineData,
	DL_StyleData,
	DL_TextData,
	DL_TraceData,
	DL_VertexData,
	DL_XLineData,
	DL_HatchData,
	DL_DictionaryData,
	DL_ImageData,
	DL_ImageDefData,
	DL_HatchLoopData,
	DL_HatchEdgeData,
	DL_DictionaryEntryData,
	DL_Extrusion,
} from "./dl_entities";

import { DL_Attributes } from "./dl_attributes";

export interface DL_CreationInterface {
	/**
	 * Called for every code / value tuple of the DXF file. The complete DXF file
	 * contents can be handled by the implementation of this function.
	 */
	processCodeValuePair(groupCode: number, groupValue: string): void;

	/**
	 * Called when a section (entity, table entry, etc.) is finished.
	 */
	endSection(): void;

	/**
	 * Called for every layer.
	 */
	addLayer(data: DL_LayerData): void;

	/**
	 * Called for every linetype.
	 */
	addLinetype(data: DL_LineTypeData): void;

	/**
	 * Called for every dash in linetype pattern
	 */
	addLinetypeDash(length: number): void;

	/**
	 * Called for every block. Note: all entities added after this
	 * command go into this block until endBlock() is called.
	 *
	 * @see endBlock()
	 */
	addBlock(data: DL_BlockData): void;

	/** Called to end the current block */
	endBlock(): void;

	/** Called for every text style */
	addTextStyle(data: DL_StyleData): void;

	/** Called for every point */
	addPoint(data: DL_PointData): void;

	/** Called for every line */
	addLine(data: DL_LineData): void;

	/** Called for every xline */
	addXLine(data: DL_XLineData): void;

	/** Called for every ray */
	addRay(data: DL_RayData): void;

	/** Called for every arc */
	addArc(data: DL_ArcData): void;

	/** Called for every circle */
	addCircle(data: DL_CircleData): void;

	/** Called for every ellipse */
	addEllipse(data: DL_EllipseData): void;

	/** Called for every polyline start */
	addPolyline(data: DL_PolylineData): void;

	/** Called for every polyline vertex */
	addVertex(data: DL_VertexData): void;

	/** Called for every spline */
	addSpline(data: DL_SplineData): void;

	/** Called for every spline control point */
	addControlPoint(data: DL_ControlPointData): void;

	/** Called for every spline fit point */
	addFitPoint(data: DL_FitPointData): void;

	/** Called for every spline knot value */
	addKnot(data: DL_KnotData): void;

	/** Called for every insert. */
	addInsert(data: DL_InsertData): void;

	/** Called for every trace start */
	addTrace(data: DL_TraceData): void;

	/** Called for every 3dface start */
	add3dFace(data: DL_TraceData): void;

	/** Called for every solid start */
	addSolid(data: DL_TraceData): void;

	/** Called for every multi Text entity. */
	addMText(data: DL_MTextData): void;

	/**
	 * Called for additional text chunks for MTEXT entities.
	 * The chunks come at 250 character in size each. Note that
	 * those chunks come <b>before</b> the actual MTEXT entity.
	 */
	addMTextChunk(text: string): void;

	/** Called for every text entity. */
	addText(data: DL_TextData): void;

	/** Called for every arc aligned text entity. */
	addArcAlignedText(data: DL_ArcAlignedTextData): void;

	/** Called for every block Attribute entity. */
	addAttribute(data: DL_AttributeData): void;

	/**
	 * Called for every aligned dimension entity.
	 */
	addDimAlign(data: DL_DimensionData, edata: DL_DimAlignedData): void;
	/**
	 * Called for every linear or rotated dimension entity.
	 */
	addDimLinear(data: DL_DimensionData, edata: DL_DimLinearData): void;

	/**
	 * Called for every radial dimension entity.
	 */
	addDimRadial(data: DL_DimensionData, edata: DL_DimRadialData): void;

	/**
	 * Called for every diametric dimension entity.
	 */
	addDimDiametric(data: DL_DimensionData, edata: DL_DimDiametricData): void;

	/**
	 * Called for every angular dimension (2 lines version) entity.
	 */
	addDimAngular(data: DL_DimensionData, edata: DL_DimAngular2LData): void;

	/**
	 * Called for every angular dimension (3 points version) entity.
	 */
	addDimAngular3P(data: DL_DimensionData, edata: DL_DimAngular3PData): void;

	/**
	 * Called for every ordinate dimension entity.
	 */
	addDimOrdinate(data: DL_DimensionData, edata: DL_DimOrdinateData): void;

	/**
	 * Called for every leader start.
	 */
	addLeader(data: DL_LeaderData): void;

	/**
	 * Called for every leader vertex
	 */
	addLeaderVertex(data: DL_LeaderVertexData): void;

	/**
	 * Called for every hatch entity.
	 */
	addHatch(data: DL_HatchData): void;

	/**
	 * Called for every image entity.
	 */
	addImage(data: DL_ImageData): void;

	/**
	 * Called for every image definition.
	 */
	linkImage(data: DL_ImageDefData): void;

	/**
	 * Called for every hatch loop.
	 */
	addHatchLoop(data: DL_HatchLoopData): void;

	/**
	 * Called for every hatch edge entity.
	 */
	addHatchEdge(data: DL_HatchEdgeData): void;

	/**
	 * Called for every XRecord with the given handle.
	 */
	addXRecord(handle: string): void;

	/**
	 * Called for XRecords of type string.
	 */
	addXRecordString(code: number, value: string): void;

	/**
	 * Called for XRecords of type double.
	 */
	addXRecordReal(code: number, value: number): void;

	/**
	 * Called for XRecords of type int.
	 */
	addXRecordInt(code: number, value: number): void;

	/**
	 * Called for XRecords of type bool.
	 */
	addXRecordBool(code: number, value: boolean): void;

	/**
	 * Called for every beginning of an XData section of the given application.
	 */
	addXDataApp(appId: string): void;

	/**
	 * Called for XData tuples.
	 */
	addXDataString(code: number, value: string): void;

	/**
	 * Called for XData tuples.
	 */
	addXDataReal(code: number, value: number): void;

	/**
	 * Called for XData tuples.
	 */
	addXDataInt(code: number, value: number): void;

	/**
	 * Called for dictionary objects.
	 */
	addDictionary(data: DL_DictionaryData): void;

	/**
	 * Called for dictionary entries.
	 */
	addDictionaryEntry(data: DL_DictionaryEntryData): void;

	/**
	 * Called after an entity has been completed.
	 */
	endEntity(): void;

	/**
	 * Called for every comment in the DXF file (code 999).
	 */
	addComment(comment: string): void;

	/**
	 * Called for every vector variable in the DXF file (e.g. "$EXTMIN").
	 */
	setVariableVector(key: string, v1: number, v2: number, v3: number, code: number): void;

	/**
	 * Called for every string variable in the DXF file (e.g. "$ACADVER").
	 */
	setVariableString(key: string, value: string, code: number): void;

	/**
	 * Called for every int variable in the DXF file (e.g. "$ACADMAINTVER").
	 */
	setVariableInt(key: string, value: number, code: number): void;

	/**
	 * Called for every double variable in the DXF file (e.g. "$DIMEXO").
	 */
	setVariableDouble(key: string, value: number, code: number): void;

	/**
	 * Called when a SEQEND occurs (when a POLYLINE or ATTRIB is done)
	 */
	endSequence(): void;

	/** Sets the current attributes for entities. */
	setAttributes(attrib: DL_Attributes): void;

	/** @return the current attributes used for new entities. */
	getAttributes(): DL_Attributes;

	/** Sets the current attributes for entities. */
	setExtrusion(dx: number, dy: number, dz: number, elevation: number): void;

	/** @return the current attributes used for new entities. */
	getExtrusion(): DL_Extrusion;
}

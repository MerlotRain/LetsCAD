import { DL_LayerData, DL_LineTypeData } from "./Entities";

export interface DL_CreationInterface {
	progressCodeValuePair(groupCode: number, groupValue: string): void;
	endSection(): void;

	addLayer(data: DL_LayerData): void;
	addLineType(data: DL_LineTypeData): void;
}

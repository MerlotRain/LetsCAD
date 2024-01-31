///<reference path="Entities.ts" />

namespace Dxf {
	export interface DL_CreationInterface {
		progressCodeValuePair(groupCode: number, groupValue: string): void;
		endSection(): void;

		addLayer(data: DL_LayerData): void;
		addLineType(data: DL_LineTypeData): void;
	}
}

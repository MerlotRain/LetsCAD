import * as fs from "fs";
import { Version } from "./dl_codes";
import { DL_Attributes } from "./dl_attributes";

export class DL_Writer {
	private stream: fs.WriteStream;
	private version: Version;
	private m_handle: number;
	private m_modelSpaceHandle: number;
	private m_paperSpaceHandle: number;
	private m_paperSpace0Handle: number;

	constructor(filename: string, version: Version) {
		this.stream = fs.createWriteStream(filename);
		this.version = version;
		this.m_handle = 0x30;
		this.m_modelSpaceHandle = 0;
		this.m_paperSpaceHandle = 0;
		this.m_paperSpace0Handle = 0;
	}
	/**
	 * Generic section for section 'name'.
	 * @param name section name
	 */
	section(name: string) {
		this.dxfString(0, "SECTION");
		this.dxfString(2, name);
	}
	/**
	 * Section HEADER
	 */
	sectionHeader() {
		this.section("HEADER");
	}
	/**
	 * Section TABLES
	 */
	sectionTables() {
		this.section("TABLES");
	}
	/**
	 * Section BLOCKS
	 */
	sectionBlocks() {
		this.section("BLOCKS");
	}
	/**
	 * Section ENTITIES
	 */
	sectionEntities() {
		this.section("ENTITIES");
	}
	/**
	 * Section CLASSES
	 */
	sectionClasses() {
		this.section("CLASSES");
	}
	/**
	 * Section OBJECTS
	 */
	sectionObjects() {
		this.section("OBJECTS");
	}
	/**
	 * End of a section.
	 */
	sectionEnd() {
		this.dxfString(0, "ENDSEC");
	}
	/**
	 * Generic table for table 'name' with 'num' entries:
	 * @param name table name
	 * @param num entries count
	 * @param h
	 */
	table(name: string, num: number, h: number = 1) {
		this.dxfString(0, "TABLE");
		this.dxfString(2, name);
		if (this.version >= Version.AC1015) {
			if (h == 0) {
				this.handle();
			} else {
				this.dxfHex(5, h);
			}
			this.dxfString(100, "AcDbSymbolTable");
		}
		this.dxfInt(70, num);
	}
	/**
	 * Table for layers.
	 * @param num Number of layers in total.
	 */
	tableLayers(num: number) {
		this.table("LAYER", num, 2);
	}
	/**
	 * Table for line types.
	 * @param num Number of line types in total.
	 */
	tableLineTypes(num: number) {
		this.table("LTYPE", num, 5);
	}
	/**
	 * Table for application id.
	 * @param num Number of registered applications in total.
	 */
	tableAppid(num: number) {
		this.table("APPID", num, 9);
	}
	/**
	 * Table for text style.
	 * @param num Number of text styles.
	 */
	tableStyle(num: number) {
		this.table("STYLE", num, 3);
	}
	/**
	 * End of a table.
	 */
	tableEnd(num: number) {
		this.dxfString(0, "ENDTAB");
	}
	/**
	 * End of the DXF file.
	 */
	dxfEOF() {
		this.dxfString(0, "EOF");
	}
	/**
	 * Comment.
	 */
	comment(text: string) {
		this.dxfString(999, text);
	}
	/**
	 * Entity
	 */
	entity(entTypeName: string) {
		this.dxfString(0, entTypeName);
		if (this.version >= Version.AC1015) {
			this.handle();
		}
	}

	entityAttributes(attrib: DL_Attributes) {
		// layer name:
		this.dxfString(8, attrib.getLayer);

		// R12 doesn't accept BYLAYER values. The value has to be missing
		//   in that case.
		if (this.version >= Version.AC1015 || attrib.getColor != 256) {
			this.dxfInt(62, attrib.getColor);
		}
		if (this.version >= Version.AC1015 && attrib.getColor24 != -1) {
			this.dxfInt(420, attrib.getColor24);
		}
		if (this.version >= Version.AC1015) {
			this.dxfInt(370, attrib.getWidth);
		}
		if (this.version >= Version.AC1015) {
			this.dxfReal(48, attrib.getLineTypeScale);
		}

		const lintType = attrib.getLineType.toLocaleUpperCase();
		if (this.version >= Version.AC1015 || lintType === "BYLAYER") {
			this.dxfString(6, attrib.getLineType);
		}

		// handle:
		this.dxfHex(5, attrib.getHandle);
		this.dxfReal(48, attrib.getLineTypeScale);
	}

	/**
	 * Subclass.
	 */
	subClass(sub: string) {
		this.dxfString(100, sub);
	}

	/**
	 * Layer (must be in the TABLES section LAYER).
	 */
	tableLayerEntry(h: number = 0) {
		this.dxfString(0, "LAYER");
		if (this.version >= Version.AC1015) {
			if (h == 0) {
				this.handle();
			} else {
				this.dxfHex(5, h);
			}
			this.dxfString(100, "AcDbSymbolTableRecord");
			this.dxfString(100, "AcDbLayerTableRecord");
		}
	}

	/**
	 * Line type (must be in the TABLES section LTYPE).
	 * @param h
	 */
	tableLineTypeEntry(h: number = 0) {
		this.dxfString(0, "LAYER");
		if (this.version >= Version.AC1015) {
			if (h == 0) {
				this.handle();
			} else {
				this.dxfHex(5, h);
			}
			this.dxfString(100, "AcDbSymbolTableRecord");
			this.dxfString(100, "AcDbLinetypeTableRecord");
		}
	}
	/**
	 * Appid (must be in the TABLES section APPID).
	 * @param h
	 */
	tableAppidEntry(h: number = 0) {
		this.dxfString(0, "LAYER");
		if (this.version >= Version.AC1015) {
			if (h == 0) {
				this.handle();
			} else {
				this.dxfHex(5, h);
			}
			this.dxfString(100, "AcDbSymbolTableRecord");
			this.dxfString(100, "AcDbRegAppTableRecord");
		}
	}
	/**
	 * Block (must be in the TABLES section BLOCK).
	 * @param h
	 */
	sectionBlockEntry(h: number = 0) {
		this.dxfString(0, "BLOCK");
		if (this.version >= Version.AC1015) {
			if (h == 0) {
				this.handle();
			} else {
				this.dxfHex(5, h);
			}

			this.dxfString(100, "AcDbEntity");
			if (h == 0x1c) {
				this.dxfInt(67, 1);
			}
			this.dxfString(8, "0");
			this.dxfString(100, "AcDbBlockBegin");
		}
	}
	/**
	 * End of Block (must be in the section BLOCKS).
	 * @param h
	 */
	sectionBlockEntryEnd(h: number = 0) {
		this.dxfString(0, "ENDBLK");
		if (this.version >= Version.AC1015) {
			if (h == 0) {
				this.handle();
			} else {
				this.dxfHex(5, h);
			}
			this.dxfString(100, "AcDbEntity");
			if (h == 0x1d) {
				this.dxfInt(67, 1);
			}
			this.dxfString(8, "0");
			this.dxfString(100, "AcDbBlockEnd");
		}
	}

	color(col: number = 256) {
		this.dxfInt(62, col);
	}
	linetype(lt: string) {
		this.dxfString(6, lt);
	}
	linetypeScale(scale: number) {
		this.dxfReal(48, scale);
	}
	lineWeight(lw: number) {
		this.dxfInt(370, lw);
	}

	coord(gc: number, x: number, y: number, z: number = 0) {
		this.dxfReal(gc, x);
		this.dxfReal(gc + 10, y);
		this.dxfReal(gc + 20, z);
	}

	handle(gc: number = 5): number {
		this.dxfHex(gc, this.m_handle);
		return this.m_handle++;
	}
	getNextHandle(): number {
		return this.m_handle;
	}

	/**
	 * Write real number to dxf file
	 */
	dxfReal(gc: number, value: number): void {
		let str: string;
		if (this.version == Version.AC1009_MIN) {
			str = value.toFixed(6);
		} else {
			str = value.toFixed(16);
		}
		// fix for german locale:
		str = str.replace(",", ".");

		// cut away those zeros at the end:
		let dot: boolean = false;
		let end: number = -1;
		for (let i: number = 0; i < str.length; ++i) {
			if (str.at(i) == ".") {
				dot = true;
				end = i + 2;
				continue;
			} else if (dot && str.at(i) != "0") {
				end = i + 1;
			}
		}
		this.dxfString(gc, str);
	}
	dxfInt(gc: number, value: number): void {
		let str: string = gc < 10 ? "  " : gc < 100 ? " " : "";
		this.stream.write(`{str}{gc}\n{value}\n`);
	}
	dxfBoolean(gc: number, value: boolean): void {
		this.dxfInt(gc, value ? 1 : 0);
	}
	dxfHex(gc: number, value: number): void {
		this.dxfString(gc, value.toString(16));
	}
	dxfString(gc: number, value: string): void {
		let str = gc < 10 ? "  " : gc < 100 ? " " : "";
		this.stream.write(`{str}{gc}\n{value}\n`);
	}
}

import * as fs from "fs";

export class DxfIO {}
fs.open("test.dxf", "b", (err) => {
	if (err) throw err;
});
var stream: fs.WriteStream = fs.createWriteStream("test.dxf");

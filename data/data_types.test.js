import { dataTypes } from "./data_types";

describe("test for data type", () => {

    let x = 10;

    it("test for data type number", () => {
        expect(dataTypes(x)).toBe(`${x}-число`);
    });
});


describe("test for data type", () => {

    let x = "привет";

    it("test for data type string", () => {
        expect(dataTypes(x)).toBe(`${x}-строка`);
    });
});

describe("test for data type", () => {

    let x = null;

    it("test for data type undefined", () => {
        expect(dataTypes(x)).toBe(`Тип ${x} не определён`);
    });
});

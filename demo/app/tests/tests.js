var CfalertDialog = require("nativescript-cfalert-dialog").CfalertDialog;
var cfalertDialog = new CfalertDialog();

describe("greet function", function() {
    it("exists", function() {
        expect(cfalertDialog.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(cfalertDialog.greet()).toEqual("Hello, NS");
    });
});
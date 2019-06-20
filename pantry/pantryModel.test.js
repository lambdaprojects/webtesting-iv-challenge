const PantryModel = require("./pantryModel");
const db = require("../data/dbconfig");

describe("TS2::Testing PantryModel.js", () => {
  beforeEach(async () => {
    await db("pantry").truncate();
  });
  describe("TS2.1:: Test Insert", () => {
    it("TC5: Test get /pantry to return all pantry items", async () => {
      const res = await PantryModel.add({
        item_name: "Sugar",
        item_description: "Grocery item",
        item_quantity: 2
      });
      const pantryItems = await db("pantry");
      expect(pantryItems).toHaveLength(1);
    });
  });
});

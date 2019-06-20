const PantryModel = require("./pantryModel");
const db = require("../data/dbconfig");

describe("TS2::Testing PantryModel.js", () => {
  beforeEach(async () => {
    await db("pantry").truncate();
  });
  describe("TS2.1:: Test Insert", () => {
    it("TC5: Positive - Test for inserting records", async () => {
      await PantryModel.add({
        item_name: "Sugar",
        item_description: "Grocery item",
        item_quantity: 2
      });
      const pantryItems = await db("pantry");
      expect(pantryItems).toHaveLength(1);
    });

    it("TC6: Positive - Should add multiple records", async () => {
      await PantryModel.add({
        item_name: "Sugar",
        item_description: "Grocery item",
        item_quantity: 2
      });
      await PantryModel.add({
        item_name: "Salt",
        item_description: "Grocery item",
        item_quantity: 1
      });
      const pantryItems = await db("pantry");
      expect(pantryItems).toHaveLength(2);
    });
  });

  describe("TS2.2:: Test Get()", () => {
    it("TC5: Positive - Test for retrieving records", async () => {
      await PantryModel.add({
        item_name: "Sugar",
        item_description: "Grocery item",
        item_quantity: 2
      });
      const pantryItems = await db("pantry");
      console.log(pantryItems);
      expect(pantryItems[0].item_name).toBe("Sugar");
    });
  });
});

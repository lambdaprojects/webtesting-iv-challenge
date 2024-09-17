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
    it("TC7: Positive - Test for retrieving records", async () => {
      await PantryModel.add({
        item_name: "Sugar",
        item_description: "Grocery item",
        item_quantity: 2
      });
      const pantryItems = await db("pantry");
      expect(pantryItems[0].item_name).toBe("Sugar");
    });

    it("TC8: Positive - Test for retrieving multiple records", async () => {
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
      await PantryModel.add({
        item_name: "Rice",
        item_description: "Grocery item",
        item_quantity: 2
      });
      const pantryItems = await db("pantry");
      expect(pantryItems).toHaveLength(3);
    });
  });

  describe("TS2.3:: Test delete()", () => {
    it("TC9: Positive - Delete a single item", async () => {
      await PantryModel.add({
        item_name: "Sugar",
        item_description: "Grocery item",
        item_quantity: 2
      });
      let pantryItems = await db("pantry")
        .where({ id: "1" })
        .first();
      await PantryModel.remove(pantryItems.id);
      pantryItems = await db("pantry");
      expect(pantryItems).toHaveLength(0);
    });

    it("TC10: Positive - Delete multiple items", async () => {
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
      let pantryItems = await db("pantry")
        .where({ id: "1" })
        .first();
      await PantryModel.remove(pantryItems.id);
      pantryItems = await db("pantry")
        .where({ id: "2" })
        .first();
      await PantryModel.remove(pantryItems.id);
      pantryItems = await db("pantry");
      expect(pantryItems).toHaveLength(0);
    });
  });
});

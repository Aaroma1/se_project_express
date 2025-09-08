const router = require("express").Router();
const {
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");
const {
  validateCardBody,
  validateClothingItemID,
} = require("../middlewares/validation");

router.post("/items", validateCardBody, createItem);
router.delete("/items/:itemId", validateClothingItemID, deleteItem);
router.put("/items/:itemId/likes", validateClothingItemID, likeItem);
router.delete("/items/:itemId/likes", validateClothingItemID, dislikeItem);

module.exports = router;

const router = require("express").Router();

const userRouter = require("./users");
const clothingItemsRouter = require("./clothingItems");

router.use("/users", userRouter);
router.use("/", clothingItemsRouter);

module.exports = router;

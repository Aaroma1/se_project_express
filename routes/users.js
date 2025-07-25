const express = require("express");
const router = require("express").Router();
const { getCurrentUser, updateCurrentUser } = require("../controllers/users");

// const { getUsers, createUser, getUser } = require("../controllers/users");

// router.get("/", getUsers);
// router.get("/:userId", getUser);
// router.post("/", createUser);

router.get("/me", getCurrentUser);
router.patch("/me", updateCurrentUser);

module.exports = router;

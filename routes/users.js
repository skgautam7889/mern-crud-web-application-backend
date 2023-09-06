const { createUser } = require("../controllers/UserController");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Let's build a CRUD API!");
});

router.post("/create", createUser)

module.exports = router;

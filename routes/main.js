const express = require("express");
const router = express.Router();

const { login, dashboard } = require("../controllers/main");

const authMiddleware = require("../middleware/auth");

// The get request first goes through authMiddleware and, if successfel, will move on to dashboard
router.route("/dashboard").get(authMiddleware, dashboard);
router.route("/login").post(login);

module.exports = router;

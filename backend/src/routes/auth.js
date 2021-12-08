const express = require("express");
const router = express.Router();

const auth = require("../controllers/auth");
const { verifyAccessToken } = require("../helpers/jwt");

router.post("/register", auth.Register);
router.post("/login", auth.Login);
router.post("/refresh_token", auth.RefreshToken);
router.post("/logout", auth.Logout);
router.get("/me", verifyAccessToken, auth.Me);

module.exports = router;

import { Router } from "express";

interface IAuth {
  registration: () => {};
  login: () => {};
  getUser: () => {};
}

const wrappers = require("../../midlleware/wrappers");
const isAuth = require("../../midlleware/isAutorization");

const ctr: IAuth = require("../../controller/authController");

const router = Router();

router.post("/registration", wrappers(ctr.registration));
router.post("/login", wrappers(ctr.login));
router.get("/user", isAuth, wrappers(ctr.getUser));

module.exports = router;

import Express from "express";

const router = Express.Router();

//all routes in here are starting with /users
router.get("/", (req, res) => {
  res.send("Hello from Users");
});

export default router;

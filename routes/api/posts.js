var router = require("express").Router();
const Post = require("../../models/post");

/*GET all Posts http://localhost:3000/api/posts/ */
router.get("/", async (req, res) => {
  const rows = await Post.getAll();
  res.json(rows);
});

router.get("/getsome", async (req, res) => {
  console.log(req.headers.number);
  const rows = await Post.getSome(parseInt(req.headers.number));
  res.json(rows);
});

router.get("/getone", async (req, res) => {
  console.log("Mira lo que tengo en el body" + req.body.id);
  try {
    const rows = await Post.getOne(parseInt(req.body.id));
    res.json(rows);
  } catch (err) {
    console.log("el error es: " + err);
  }
});

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await Post.create(req.body);
    res.json(result);
  } catch (error) {
    console.log("El error es: " + error);
  }
});

module.exports = router;

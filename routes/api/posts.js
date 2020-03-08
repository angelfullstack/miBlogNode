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
  console.log("Mira lo que tengo en el body" + req.headers.id);
  try {
    const rows = await Post.getOne(parseInt(req.headers.id));
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

router.delete("/", async (req,res)=>{
  try{
    console.log(req.headers.id)
    const result = await Post.deleteById(req.headers.id);
    res.json(result);
  }catch(err){
    console.log(err);
  }
})

module.exports = router;

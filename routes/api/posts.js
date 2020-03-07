var router = require("express").Router();
const post = require("../../models/post");

/*GET all Posts http://localhost:3000/api/posts/ */
router.get("/", async (req, res, next) =>{
  const rows = await post.getAll();
  res.json(rows);
});


router.get('/getsome', async (req,res,next)=>{
  console.log(req.headers.number)
  const rows= await post.getSome(parseInt(req.headers.number));
  res.json(rows);
})
module.exports = router;

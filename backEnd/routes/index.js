const router=require("express").Router();


router.use("/user",require("./userRouter.js"));
router.use("/algo",require("./algorithms.js"));
router.use("/book",require("./bookRouter.js"));
router.use("/dashboard",require("./dashboardRouter.js"));

module.exports=router; 



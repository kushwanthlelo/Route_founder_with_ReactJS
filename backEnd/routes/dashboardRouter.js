//import required modules
const express=require("express");
const router=express.Router();
const dashboardContrller=require("../controllers/dashboardController")
router.post('/specificuser',dashboardContrller.specificUser);
router.post('/updateuser',dashboardContrller.updateUser);
router.post('/deleteuser',dashboardContrller.deleteUser);
router.post("/allpaths",dashboardContrller.showPaths);
router.post("/specificpath",dashboardContrller.specificPath);
router.post('/deletepath',dashboardContrller.deletePath);
router.post("/updatepath",dashboardContrller.updatePath);

router.get('/',function(req,res){
    res.send("404 page not found");
})
module.exports=router;
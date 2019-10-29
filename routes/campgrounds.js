var express=require("express");
var router=express.Router();
var Campground=require("../models/campground");
var middleware=require("../middleware");






router.get("/",function(req,res){
     Campground.find({},function(err,allCampgrounds){
          if(err)
          console.log("Error aa gyi");
          else{
            
    res.render("index",{campgrounds:allCampgrounds,currentUser:req.user});
          }
     });
    });
    //create 
    router.post("/",function(req,res){
      var name=req.body.name;
      var image=req.body.image;
      var description=req.body.description;
      var author={
           id:req.user._id,
           username:req.user.username
      }

      var newCampground={name:name,image:image,description:description,author:author};
   
      Campground.create(newCampground,function(err,newlyCreated){
       if(err)
       console.log("Are yrr error aa gyi!");
       else{
          req.flash("success","Campground added successfully!");
       
      res.redirect("/campgrounds");}
      });
    });
 



    router.get("/new",middleware.isLoggedIn,function(req,res){
     res.render("new");
});

router.get("/:id",function(req,res){
     Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
          if(err)
          console.log("Error oops!!");
          else{
          
          res.render("show",{campground:foundCampground,currentUser:req.user});
          }
     });
});


router.get("/:id/edit",middleware.checkCampgroundOwnership,function(req,res){
     //is user logged in
     
    //does uesr owns that campground
    //if no redirect
    //if yes redirect
     Campground.findById(req.params.id,function(err,foundCampground){
        if(err){
             req.flash("error","Campground not found");
        console.log("error");}
        else{

           res.render("edit",{campground:foundCampground});}
     });





});

router.put("/:id",function(req,res){
    Campground.findByIdAndUpdate(req.params.id,req.body.campground,function(err,updatedCampground){
         if(err)
         res.redirect("/campgrounds");
         else{
              
          req.flash("success","Campground edited successfully");
              res.redirect("/campgrounds/"+req.params.id);
         }

    });      




});


router.delete("/:id",middleware.checkCampgroundOwnership,function(req,res){
Campground.findByIdAndDelete(req.params.id,function(err){
     if(err)
       res.redirect("/campgrounds");
       else{
            
          req.flash("error","Campground deleted successfully");
       res.redirect("/campgrounds");
}})
});




module.exports=router;
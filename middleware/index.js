var Campground=require("../models/campground");
var Comment=require("../models/comment");


var middlewareObj={};

middlewareObj.checkCampgroundOwnership=function(req,res,next){
             if(req.isAuthenticated()){
         
        
                  Campground.findById(req.params.id,function(err,foundCampground){
                       if(err){
                        req.flash("error","Campground not found");
                        res.redirect("back");
                        
                        }
                       else{
                            if(req.user._id.equals(foundCampground.author.id)){
                              next();
                            }
                            else{
                                
                        req.flash("error","You dont have permission to do that");
                                 res.redirect("back");
                            }
                       
             }
                         
                  });
             }
             else{
                 req.flash("error","You need to be logged into do that!");
                  res.redirect("back");
             }
             
        
        
             
        }
        


        middlewareObj.checkCommentOwnership=function(req,res,next){
    if(req.isAuthenticated()){


         Comment.findById(req.params.comment_id,function(err,foundComment){
              if(err)
                 res.redirect("back");
              else{
                   if(req.user._id.equals(foundComment.author.id)){
                     next();
                   }
                   else{
             req.flash("error","You require permission to do that");

                        res.redirect("back");
                   }
              
    }
                
         });
    }
    else{
        

         res.redirect("back");
    }
    


    
}

middlewareObj.isLoggedIn=function(req,res,next){
     if(req.isAuthenticated())
        return next();
        req.flash("error","Please Login First!");
   res.redirect("/login");
  }





module.exports=middlewareObj;

        
        
        
        
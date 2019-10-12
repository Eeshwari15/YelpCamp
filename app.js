var express=require("express"),
    app=express(),
    bodyParser=require("body-parser"),
    mongoose=require("mongoose");
mongoose.connect("mongodb://localhost/yelp_camp");

//Schema Setup
var campgroundSchema=new mongoose.Schema({
     name:String,
     image:String,
     description:String
});
var Campground=mongoose.model("Campground",campgroundSchema);
//  Campground.create(
//       { name:"Granite Hill",
//       image:"https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//        description:"This is a granite hill,Beautiful granite!!" 
//      },function(Err,campground){
//            if(Err)
//            console.log("Error occured");
//            else{
//                 console.log("Add ho gya");
//                 console.log(campground);
//            }
//      }
// );




app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
res.render("landing");
});
//INDEX-show all campgrounds
app.get("/campgrounds",function(req,res){
    
     Campground.find({},function(err,allCampgrounds){
          if(err)
          console.log("Error aa gyi");
          else{
            
    res.render("index",{campgrounds:allCampgrounds});
          }
     });
    });
    //create 
    app.post("/campgrounds",function(req,res){
      var name=req.body.name;
      var image=req.body.image;
      var description=req.body.description;
      var newCampground={name:name,image:image,description:description};
      Campground.create(newCampground,function(err,newlyCreated){
       if(err)
       console.log("Are yrr error aa gyi!");
       else
       
      res.redirect("/campgrounds");
      });
    });
    //NEW-show form to create new campground
    app.get("/campgrounds/new",function(req,res){
         res.render("new");
    });
   
    app.get("/campgrounds/:id",function(req,res){
         Campground.findById(req.params.id,function(err,foundCampground){
              if(err)
              console.log("Error oops!!");
              else
              res.render("show",{campground:foundCampground});
         });
});



app.listen(3000,function(){
 console.log("started");
});

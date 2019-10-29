var express=require("express"),
    app=express(),
    bodyParser=require("body-parser"),
    mongoose=require("mongoose"),
    methodOverride=require("method-override"),
    Campground=require("./models/campground"),
    passport=require("passport"),
    localStrategy=require("passport-local"),
    User=require("./models/user"),
    seedDB=require("./seed"),
    flash=require("connect-flash");

var commentRoutes=require("./routes/comments"),
    
    campgroundRoutes=require("./routes/campgrounds"),
    
    indexRoutes=require("./routes/index");

mongoose.connect("mongodb://localhost/yelp_camp");

app.use(flash());

app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.set("view engine","ejs");
app.use(express.static("public"));

seedDB();
app.use(require("express-session")({
     secret:"Once again Rusty wins the cutest dog",
     resave:false,
     saveUninitialized:false
}));
app.use(function(req,res,next){
    res.locals.currentUser=req.user;
    res.locals.error=req.flash("error");
    res.locals.success=req.flash("success");
    
    next();
});


app.use(passport.initialize());
app.use(passport.session());
app.use("/campgrounds",campgroundRoutes);

app.use("/campgrounds/:id/comments",commentRoutes);

app.use(indexRoutes);
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.listen(3000,function(){
});

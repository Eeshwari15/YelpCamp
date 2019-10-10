var express=require("express");
var app=express();
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extende:true}));
app.set("view engine","ejs");
app.get("/",function(req,res){
res.render("landing");
});

app.get("/campgrounds",function(req,res){
    var campgrounds=[
        
           {name:"Salmon Creek",image:"https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
          {name:"Granite Hill",image:"https://images.unsplash.com/photo-1532339142463-fd0a8979791a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
          {name:"Mountain Goat's Rest",image:"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
          {name:"Shalmon Creek",image:"https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
          {name:"Mountain Goat's Rest",image:"https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
          {name:"Granite Hill",image:"https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
          {name:"Goat's Rest",image:"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
          {name:"Hill Granite",image:"https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
          {name:"Creek Salmon",image:"https://images.unsplash.com/photo-1525811902-f2342640856e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},

     ]
    res.render("campgrounds",{campgrounds:campgrounds});
    });
    
    app.post("/campgrounds",function(req,res){
      res.send("Yu hit");
    });
    app.get("/campgrounds/new",function(req,res){
         res.render("new");
    });

app.listen(3000,function(){
 console.log("started");
});

var monngoose=require("mongoose");
var Campgrounds=require("./models/campground");

var Comment=require("./models/comment");
data=[
{
    name:"Omkareshwar",
    image:"http://www.mptourism.com/sites/default/files/styles/poi_image_2/public/pointofintrest/Sidhnath%20Temple.jpg?itok=jKoGULo1",
    description:"It can only be termed as a blessing, by Lords and mother nature, that Omkareshwar, the sacred island, is shaped like Om - the holiest symbol of Hinduism. Not surprising then that this serene town is also one of the 12 Jyotirlinga shrines in India. Pilgrims in unimaginable numbers visit the shrine every year, seeking the blessings of Lord Shiva."

},
{
    name:"Maheshwar",
    image:"http://www.mptourism.com/sites/default/files/styles/poi_image_2/public/pointofintrest/Ahilya%20Bai%20Fort%20and%20Palace.jpg?itok=6PDDfLlq",
    description:"Situated on the banks of river Narmada, Maheshwar appeals to both, the pilgrim as well as the tourist in you. The town possesses a treasure trove of beautiful temples that calm the soul, alongside man-made creations that please the eyes."
},
{
    name:"Ujjain",
    image:"http://www.mptourism.com/sites/default/files/styles/poi_image_3/public/pointofintrest/Ram%20Ghat_0.jpg?itok=emmXzDZP",
    description:"One of Hinduism’s seven sacred cities, Ujjain boasts a wealth of cultural heritage, largely in the form of temples."

}
]
function seedDB(){

    Campgrounds.remove({},function(err){
        if(err)
        console.log(erorororor);
        else
        console.log("Removed evrything");
    data.forEach(function(seed){
        Campgrounds.create(seed,function(err,campground)
        {
            if(err)
            console.log(err);
                else {
                    console.log("Added"); Comment.create(
                        {
                            text:"This place is awesome",
                            author:"Homer"
                        },function(err,comment){
                            if(err)
                            console.log(err);
                            else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created");
                                } 
                            });
        
                }
        });
    });
});
}
module.exports=seedDB;
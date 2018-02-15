angular.module("Demo",[])
    .controller("instagramCtrl" ,instagramCtrl)
    .factory("instagramcss",instagramcss)

function instagramCtrl(){

   insta =this;
   insta.opt =[]
   insta.arr =[
       {name:"1977",filter:"filter-1977"},
       {name:"aden ",filter:"filter-aden"},
       {name:"amaro",filter:"filter-amaro"},
       {name:"ashby",filter:"filter-ashby"},
       {name:"brooklyn",filter:"filter-brooklyn"},
       {name:"brannan",filter:"filter-brannan"},
       {name:"charmes",filter:"filter-charmes"},
       {name:"clarendon",filter:"filter-clarendon"},
       {name:"crema",filter:"filter-crema"},
       {name:"dogpatch",filter:"filter-dogpatch"},
       {name:"earlybird",filter:"filter-earlybird"},
       {name:"gingham",filter:"filter-gingham"},
       {name:"ginza",filter:"filter-ginza"},
       {name:"hefe",filter:"filter-hefe"},
       {name:"helena",filter:"filter-helena"},
       {name:"hudson",filter:"filter-hudson"},
       {name:"knkwell",filter:"filter-inkwell"},
       {name:"kelvin",filter:"filter-kelvin"},
       {name:"kuno",filter:"filter-kuno"},
       {name:"lark",filter:"filter-lark"},
       {name:"lofi",filter:"filter-lofi"},
       {name:"ludwig",filter:"filter-ludwig"},
       {name:"maven",filter:"filter-maven"},
       {name:"mayfair",filter:"filter-mayfair"},
       {name:"moon",filter:"filter-moon"},
       {name:"nashville",filter:"filter-nashville"},
       {name:"perpetua",filter:"filter-perpetua"},
       {name:"poprocket",filter:"filter-poprocket"},
       {name:"reyes",filter:"filter-reyes"},
       {name:"rise",filter:"filter-rise"},
       {name:"sierra",filter:"filter-sierra"},
       {name:"skyline",filter:"filter-skyline"},
       {name:"slumber",filter:"filter-slumber"},
       {name:"stinson",filter:"filter-stinson"},
       {name:"sutro",filter:"filter-sutro"},
       {name:"toaster",filter:"filter-toaster"},
       {name:"valencia",filter:"filter-valencia"},
       {name:"vesper",filter:"filter-vesper"},
       {name:"walden",filter:"filter-walden"},
       {name:"willow",filter:"filter-willow"},
       {name:"xpro-ii",filter:"filter-xpro-ii"}
       
    ]


   console.log("hello")

    for (var i=0;i<insta.arr.length;i++){
            insta.option = insta.arr[i].name;
        // console.log(insta.arr[i].name);
        console.log(insta.option)
        insta.opt.push(insta.option)

    }
   
 // console.log("checkingoptions"+insta.opt);

 


}

function instagramcss(){
    return [
        { 

        }
    ]
}
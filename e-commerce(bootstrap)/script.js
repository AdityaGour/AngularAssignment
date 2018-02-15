angular.module("aditya",[])
    .controller("adiFirst",adiFirst)
    .factory("productData", productData)


function adiFirst(productData){

   var adi = this;
   console.log("hello")
   adi.check = productData;
     console.log(adi.check);
adi.pd =  productData[0].products;

adi.rating1 = productData[0].products[0];
console.log(adi.rating1)
  
 adi.changesort = function(type){
        adi.sorttype = type
      }

      adi.changename =function(name){
        adi.sortname =name;
      }
       adi.showrating = function(rate){
         {


          }
          adi.sortrating = rate
          console.log(rate);
           console.log()
           }
        console.log(productData[0].products[0].rating)
        adi.star = function(){}
}
function productData(){
    console.log("hello function");
    return [
    {name:"Shoes",
            products:[
                {name:"Nike AC",image:"images/c1.jpg",des:"Best Quality Brand shoes ",rating:3,price:2500,company:"Nike"},
                {name:"Adidas shoes",image:"images/c2.jpg",des:"Best Quality Brand shoes ",rating:5,price:5000,company:"Adidas"},
                {name:"Reebok",image:"images/c4.jpg",des:"Best Quality Brand shoes" ,rating:2,price:2000,company:"Reebok"},
                {name:"Bata AC",image:"images/c5.jpg",des:"Best Quality Brand shoes ",rating:5,price:7500,company:"Bata"},
                {name:"PUMA shoes",image:"images/c3.jpg",des:"Best Quality Brand shoes ",rating:1,price:9000, company:"Puma"},
                {name:"Nike Air",image:"images/c1.jpg",des:"Best Quality Brand shoes ",rating:3,price:5500,company:"Nike"},
            ]
        },
    {name:"Books",
            products:[
                {name:"Nike AC",image:"images/c1.jpg",des:"bhai danger shoes h",rating:3},
                {name:"Adidas shoes",image:"images/c2.jpg",des:"bhai danger shoes h",rating:5},
                {name:"Nike AC",image:"images/c3.jpg",des:"bhai danger shoes h",rating:2},
                {name:"Nike AC",image:"images/c4.jpg",des:"bhai danger shoes h",rating:1},
            ]
        },
    {name:"Phones",
        products:[
            {name:"Nike AC",image:"images/c1.jpg",des:"bhai danger shoes h",rating:3},
            {name:"Adidas shoes",image:"images/c2.jpg",des:"bhai danger shoes h",rating:5},
            {name:"Nike AC",image:"images/c3.jpg",des:"bhai danger shoes h",rating:2},
            {name:"Nike AC",image:"images/c4.jpg",des:"bhai danger shoes h",rating:1},
        ]
    },
    {name:"Electronic",
        products:[
            {name:"Nike AC",image:"images/c1.jpg",des:"bhai danger shoes h",rating:3},
            {name:"Adidas shoes",image:"images/c2.jpg",des:"bhai danger shoes h",rating:5},
            {name:"Nike AC",image:"images/c3.jpg",des:"bhai danger shoes h",rating:2},
            {name:"Nike AC",image:"images/c4.jpg",des:"bhai danger shoes h",rating:1},
        ]
    }
      ];
     
}






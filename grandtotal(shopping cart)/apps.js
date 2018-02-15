angular.module("appDemo",[])
     .controller("productCtrl",productCtrl)
     .factory("productList",productList )

function productCtrl(productList)
    {
         console.log("hello") 
         product = this;
          
         product.productslist = productList || JSON.parse(localStorage.getItem("productList"));
        // console.log(product.productslist.name)
        
        
   /*-----Add items---*/     
    product.add =function(productList){
        
    //    var xxyy = product.productl1.push({name:product.name,qty:product.qty,rate:product.rate}) 

       product.productslist.push({name:product.name,qty:product.qty,rate:product.rate}) 
        console.log("xxyy")
        console.log(product.productslist)
        product.name =""; product.qty="";product.rate="";
        product.gtotal();
    }
      /*----remove Items---*/

    product.removeitem = function(index){
       var xyz= product.productslist.splice(index,1)
        console.log(xyz)
        product.gtotal();
    }
    product.gtotal =function(productList){
        product.total=0;
        for(var i=0;i< product.productslist.length;i++){
        product.total =product.total + product.productslist[i].qty*product.productslist[i].rate ;
        //console.log(product.productslist[i].qty*product.productslist[i].rate );
     }
        return product.total 
    console.log( product.total )
                 
        //  product.total = (parseFloat(tot) + product.total);
        
        // console.log(parseInt(product.total));
        
        // console.log("hello122121", product.productslist);
    }
           
}      

    function productList(){
        return localStorage.setItem("tasks",JSON.stringify(productList)) || [
            {
                name:"maggi",qty:"3",rate:"10",price:30
            },
            {
                name:"maggi1",qty:"5",rate:"10",price:50
            },
            {
                name:"maggi2",qty:"8",rate:"10",price:80
            },
            {
                name:"maggi3",qty:"2",rate:"10",price:20
            },
            {
                name:"maggi4",qty:"50",rate:"10",price:500
            },
            {
                name:"maggi5",qty:"1",rate:"10",price:10
            }

        ]
    }
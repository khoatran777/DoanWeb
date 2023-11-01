const btn = document.querySelectorAll("button")
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){
        var btnItem = event.target
        var product = btnItem.parentElement.parentElement
        var productImg = product.querySelector("img").src
        var nameItem = product.querySelector("a").innerText
        var priceProduct = product.querySelector("p").innerHTML
        addcart(productImg,nameItem,priceProduct)
        
    })
})
function showcart(){
    var x= document.getElementById("showcart")
    if(x.style.display=="block"){
        x.style.display ="none"
    } else{
        x.style.display ="block"
    }
}
function checkcart(){
    var x=document.getElementById("kiemtracart")
    var addtr =document.querySelectorAll('tr')
    for (i=0;i<1;i++){
        if(addtr.length==1){
            x.style.display="block"
        } else{
            x.style.display="none"
        }
    }

}
//Thêm vào giỏ hàng
function addcart(productImg,nameItem,priceProduct){
    var addtr= document.createElement("tr")
    var carItem =document.querySelectorAll('tbody tr')
    for (var i=0;i<carItem.length;i++){
        var productlap=document.querySelectorAll(".tensp")
        tang= parseInt(document.querySelector(".tangg").value);
        if(productlap[i].innerHTML==nameItem){
            tang += 1;
            document.querySelector(".tangg").value =tang;
            return
        }
        carttotal()
    }
    var trcontent = '<td><img src="'+productImg+'" style="width: 70px;"></td> <td class=tensp>'+nameItem+'</td> <td class=giaa>'+priceProduct+'</td> <td><input onclick="refresh()" class="tangg" style="width: 40px" type="text" value="1"></td> <td class="price-total"><span class="xoa"><i class="fa-solid fa-trash"></i></span</td>'
    addtr.innerHTML= trcontent
    var cartTable =document.querySelector("tbody")
    cartTable.append(addtr)
    carttotal()
    deletecart()
}
function carttotal(){
    var carItem =document.querySelectorAll('tbody tr')
    var tatalC= 0
    for (var i=0;i<carItem.length;i++){
        var inputValue= carItem[i].querySelector(".tangg").value
        var priceProduct= carItem[i].querySelector('.giaa').innerHTML
        console.log(priceProduct)
        priceProduct=parseInt(priceProduct,) 
        totalpriceA = inputValue*priceProduct
        tatalC = tatalC+totalpriceA
        checkcart()
    }
    var cartTotalAll= document.getElementById("tien")
    cartTotalAll.innerHTML=tatalC.toLocaleString('de-DE')
}
function deletecart(){
    var carItem =document.querySelectorAll('tbody tr')
    for (var i=0;i<carItem.length;i++){
        var productdelete =document.querySelectorAll(".xoa")
        productdelete[i].addEventListener("click",function(event){
            var xoa=event.target
            var Delete= xoa.parentElement.parentElement.parentElement
            Delete.remove()
            carttotal()
            checkcart()
        })
    }
    
}

const btn = document.querySelectorAll("#them")
console.log(btn)
btn.forEach(function(button,index){
    button.addEventListener("click",function(event){
        var btnItem =event.target
        var product = btnItem.parentElement.parentElement
        var productImg = product.querySelector("img").src
        var nameItem = product.querySelector("h1").innerText
        var priceProduct = product.querySelector("span").innerHTML
        addcart(priceProduct,nameItem,productImg)
    })
})
function addcart(priceProduct,nameItem,productImg){
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
    var trcontent = '<td><img src="'+productImg+'" style="width: 70px;"></td> <td class=tensp>'+nameItem+'</td> <td class=giaa>'+priceProduct+'</td> <td><input class="tangg" style="width: 40px" type="text" value="1"></td> <td class="price-total"><span class="xoa"><i class="fa-solid fa-trash"></i></span</td>'
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
        console.log(inputValue)
        var priceProduct= carItem[i].querySelector('.giaa').innerHTML
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
            console.log(Delete)
            checkcart()
        })
    }
    
}
var i=1;
var N= 2;
function next(){
    if(i<N){
        i+=1;

    }else{
        i=1;
    }
    document.getElementById("slide").setAttribute("src","/img/Sanpham/"+i+".jpg");
}
function back(){
    if(i>1){
        i-=1;
    }else{
        i=N;
    }
    document.getElementById("slide").setAttribute("src","/img/Sanpham/"+i+".jpg");
}
function plus(x){
    var a= parseInt(document.getElementById(x).value)
    console.log(a)
    if(a>=0){
        a+=1;
    }
    document.getElementById(x).value=a;
    document.getElementsByClassName(x).value=
    console.log()
}
function sub(x){
    a= parseInt(document.getElementById(x).value)
    if(a>0){
        a-=1;
    }
    document.getElementById(x).value=a;

}
function showcart(){
    var x= document.getElementById("showcart")
    if(x.style.display=="none"){
        x.style.display ="block"
    } else{
        x.style.display ="none"
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
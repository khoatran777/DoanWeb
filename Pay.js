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
function addcart(){
    let cart=JSON.parse(localStorage.getItem("cart"));
    if(cart!= null){
        var kq= "";
        for(let i=0; i<cart.length; i++){
            kq+=`
            <tbody>
                <tr>
                    <td><img style="width: 250px;" src="`+cart[i]["hinh"]+`" /></td>
                    <td>`+cart[i]["ten"]+`</td>
                    <td>`+cart[i]["gia"]+`</td>
                    <td></td>
                    <td class="price-total"><span class="xoa"><i class="fa-solid fa-trash"></i></span</td>
                </tr>
            </tbody>
            `;
        }
        document.getElementById("data-output").innerHTML=kq;
        console.log(kq)
    }
    deletecart()
}

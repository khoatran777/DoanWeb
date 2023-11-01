// function singup(){
//     var c=document.getElementById("thongbao")
//     var Tk= document.getElementById("Tk").value;
//     var Mk=document.getElementById("Mk").value;
//     if(Tk==="Trantrongkhoa"&&Mk==="Trantrongkhoa"){
//         window.open("/index.html")
//     } else{
//         c.style.display="block"
//     }
// }
function showpass(){
    console.log
    var Mk = document.getElementById("Mk");
    if(Mk.type==="password"){
        Mk.type ="text";
    } else{
        console.log(Mk)
        Mk.type ="password"
    }
    
}
function login(){
    event.preventDefault();
    var username =document.getElementById("Tk").value;
    var matkhau =document.getElementById("Mk").value;
    var user =localStorage.getItem(username);
    var data  =JSON.parse(user);
    if (user==null){
        alert("vui lòng nhập thông tin")
    }else if(username==data.username && username== data.username&& matkhau==data.matkhau){
        alert("dang nhap thanh cong")
        window.location.href="index.html"
    }
}
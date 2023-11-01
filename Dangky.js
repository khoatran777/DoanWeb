function singup(){
    event.preventDefault();
    var username =document.getElementById("name").value;
    var matkhau =document.getElementById("Mk").value;
    var user= {
        username : username,
        matkhau: matkhau,
    }
    var json = JSON.stringify(user);
    localStorage.setItem(username,json);
    alert("Dang ky thanh cong")

}
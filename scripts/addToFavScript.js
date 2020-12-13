let currentUserId=localStorage.getItem('userId');
//let loggedIn=localStorage.getItem('loggedIn');

function addToFav(element,id){
    if(loggedIn=="true"){
    element.classList.add("red-color");
    db.collection("Items").doc(id).get().then(doc=>{
        let provider=doc.data().Provider;
        let name=doc.data()["Product Name"];
        let location=doc.data().Location;
        let price=doc.data().Price;
        let phone=doc.data()["Phone Number"];
        let image=doc.data()["Image Url"];
        let obj={
        "Product Name":name,
        Provider:provider,
        Location:location,
        "Phone Number":phone,
        Price:price,
        "Image Url":image,
        counter:100,
        id:id
        }
        db.collection("Users").doc(currentUserId).collection("Favorite").add(obj).then(done=>{
            alert("تم اضافة الخدمة الى المفضلات");
        });
    });
}else{
    alert("الرجاء تسجيل الدخول")
}
}

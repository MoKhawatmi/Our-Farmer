let container=document.getElementById("servicesContainer");
let title=document.getElementById("servicesTitle");
let loggedUserId=localStorage.getItem('userId');
let loggedIn=localStorage.getItem('loggedIn');
let idArray=[];

if(loggedIn=="true"){
    db.collection('Users').doc(loggedUserId).get().then(user=>{
        user.ref.collection('Favorite').get().then(snapshots=>{
            snapshots.docs.forEach(doc=>{
                idArray.push(doc.data().id);
                console.log(doc.data().id);
            });
        }).then(done=>{
            fun();
        });
    })
}else{
    fun();
}




function fun(){
    let page=window.location.search;
if(page.indexOf("water")!=-1){
    
    title.innerHTML="خدمات الماء"
    db.collection('Items').where("Category","==","Water").get().then(snapshot => {
        container.innerHTML=snapshot.docs.map(getServices).join("");
    });

}else if(page.indexOf("tools")!=-1){

    title.innerHTML="خدمات الادوات"
    db.collection('Items').where("Category","==","Tools").get().then(snapshot => {
        container.innerHTML=snapshot.docs.map(getServices).join("");
    });

}else if(page.indexOf("seeds")!=-1){
    title.innerHTML="خدمات البذور"
    db.collection('Items').where("Category","==","Seeds").get().then(snapshot => {
        container.innerHTML=snapshot.docs.map(getServices).join("");
    });

}else if(page.indexOf("fruits")!=-1){
    title.innerHTML="خدمات المحاصيل"
    db.collection('Items').where("Category","==","FAndV").get().then(snapshot => {
        container.innerHTML=snapshot.docs.map(getServices).join("");
    });

}
}

function getServices(json){
    
    let provider=json.data().Provider;
    let name=json.data()["Product Name"];
    let location=json.data().Location;
    let phone=json.data()["Phone Number"]
    let price=json.data().Price;
    let image=json.data()["Image Url"];
    let id=json.id;
    console.log(id);


    return `
    <div class="service card mb-3">
    <div class="card-header row bg-success font-weight-bold justify-content-between mx-0">
        <i class="fa fa-heart fa-2x ${idArray.indexOf(id)!=-1?'red-color':''}" aria-hidden="true" onclick="addToFav(this,'${id}')"></i>
        ${provider}
    </div>
    <div class="row no-gutters" onclick="window.open('serviceDetails.html?serviceId=${id}','mywindow');">
      <div class="col-md-4">
        <img src="${image?image:"./assets/blank.jpg"}" class="consultant-image card-img">
      </div>
      <div class="col-md-8">
        <div dir="rtl" class="card-body">
          <h5 class="card-title text-right">اسم الخدمة: ${name}</h5>
            <h6 class="text-right text-success">المنطقة: ${location}</h6>
            <h6 class="text-right text-success">رقم الهاتف: ${phone}</h6>
            <h6 class="text-right text-danger">السعر: ${price} دينار</h6>
        </div>
      </div>
    </div>
  </div>
    
    `
}
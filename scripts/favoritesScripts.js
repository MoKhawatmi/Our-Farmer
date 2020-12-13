let loggedUserId=localStorage.getItem('userId');
let favoritesContainer=document.getElementById('fav');

db.collection('Users').doc(loggedUserId).get().then(doc=>{

    doc.ref.collection('Favorite').get().then(favorites=>{
        console.log(favorites);
        favoritesContainer.innerHTML=favorites.docs.map(renderFav).join("");
    });

});

function renderFav(doc){
    let provider=doc.data().Provider;
    let name=doc.data()["Product Name"];
    let location=doc.data().Location;
    let price=doc.data().Price;
    let phone=doc.data()["Phone Number"];
    let image=doc.data()["Image Url"];
    let id=doc.id;
    let mainId=doc.data().id;
    return `
    
    <div class="service card mb-3">
    <div class="card-header row bg-success font-weight-bold justify-content-between mx-0">
        <i id="favorited-service" class="fa fa-heart fa-2x" aria-hidden="true" onClick=removeFav(this,'${id}')></i>
        ${provider}
    </div>
    <div class="row no-gutters" onclick="window.open('serviceDetails.html?serviceId=${mainId?mainId:id}','mywindow');">
      <div class="col-md-4">
        <img src=${image?image:"./assets/blank.jpg"} class="card-img h-100">
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

function removeFav(element,id){
  db.collection('Users').doc(loggedUserId).collection('Favorite').doc(id).delete().then(done=>{
    element.classList.add("white-color");
    alert("تم حذف الخدمة من المفضلات");
  });
 
}

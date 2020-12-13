//get consultants

let consContainer=document.getElementById("consultants-grid");

db.collection('Users').where("Role","==","3").get().then(snapshot => {
    consContainer.innerHTML=snapshot.docs.map(getCons).join("");
});

    function getCons(json){
    let name=json.data()["First Name"]+" "+json.data()["Last Name"];
    let image=json.data()["Image Url"];
    let phone=json.id;
    let rating;
    let sum=0;
     json.ref.collection("Rating").get().then(snapshot=>{
      snapshot.docs.forEach(doc=>{
        sum+=doc.data().Rating;
      });
      rating=sum/snapshot.docs.length;
    }); 
    
    return `
    <div class="service card mb-3" onclick="window.open('profile.html?userId=${phone}','mywindow');">
    <div class="card-header row bg-success font-weight-bold justify-content-between mx-0">
        <ul class="m-0 p-0">
            <li class="d-inline"> <spian class="fa fa-star fa-2x checked"></span></li>
            <li class="d-inline"> <span class="fa fa-star fa-2x checked"></span></li>
            <li class="d-inline"> <span class="fa fa-star fa-2x checked"></span></li>
            <li class="d-inline"> <span class="fa fa-star fa-2x checked"></span></li>
            <li class="d-inline"> <span class="fa fa-star fa-2x checked"></span></li>
        </ul>
    </div>
    <div class="row no-gutters">
      <div class="col-md-4">
        <img class="consultant-image" src="${image?image:"./assets/blank.jpg"}" class="card-img">
      </div>
      <div class="col-md-8">
        <div dir="rtl" class="card-body text-right">
          <h5 class="card-title text-right text-success">اسم المستشار: ${name}</h5>
            <h6 class="text-right text-success">رقم الهاتف: ${phone}</h6>                        
        </div>
      </div>
    </div>
  </div>
    `
}

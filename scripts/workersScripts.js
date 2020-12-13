//get workers

let workerContainer=document.getElementById("worker-grid");

db.collection('Users').where("Role","==","4").get().then(snapshot => {
    workerContainer.innerHTML=snapshot.docs.map(getWorker).join("");
});

function getWorker(json){
    let name=json.data()["First Name"]+" "+json.data()["Last Name"];
    let image=json.data()["Image Url"];
    let phone=json.id;
    let age=json.data().Age;
    let location=json.data().Location;
    let userId=json.id;

    return `
    <div class="service card mb-3" onclick="window.open('profile.html?userId=${userId}','mywindow');">
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
                      <img class="consultant-image card-img" src="${image?image:"./assets/blank.jpg"}">
                      </div>
                      <div class="col-md-8">
                        <div dir="rtl" class="card-body text-right">
                          <h5 class="card-title text-right text-success">اسم المزارع: ${name}</h5>
                            <h6 class="text-right text-success">رقم الهاتف: ${phone}</h6>
                            <h6 class="text-right text-success">العمر: ${age}</h6>
                            <h6 class="text-right text-success">المنطقة: ${location}</h6>
                        </div>
                      </div>
                    </div>
                  </div>
    
    `
}

{/* <div class="service card mb-3">
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
        <img class="consultant-image card-img" src="${image?image:"./blank.jpg"}">
      </div>
      <div class="col-md-8">
        <div class="card-body text-right">
          <h5 class="card-title text-right text-success">${name}</h5>
            <h6 class="text-right text-success">${phone}</h6>                        
        </div>
      </div>
    </div>
  </div> */}
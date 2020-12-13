let resultContainer=document.getElementById("result-container");
let header=document.getElementById("resultsForHeader");

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('search');

header.innerHTML=`"نتائج البحث عن خدمات "${myParam}`;

db.collection('Items').get().then(snapshot => {
    resultContainer.innerHTML=snapshot.docs.filter((doc)=>{
        return (doc.data()["Product Name"].indexOf(myParam)!=-1);
    }).map(getServices).join("");
});

function getServices(json){
    let provider=json.data().Provider;
    let name=json.data()["Product Name"];
    let location=json.data().Location;
    let phone=json.data()["Phone Number"]
    let price=json.data().Price;
    let image=json.data()["Image Url"];
    let id=json.id;

    return `
    <div class="service card mb-3" onclick="window.open('serviceDetails.html?serviceId=${id}','mywindow');">
    <div class="card-header row bg-success font-weight-bold justify-content-end mx-0">
        ${provider}
    </div>
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src="${image?image:"./assets/blank.jpg"}" class="consultant-image card-img">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title text-right">الاسم: ${name}</h5>
            <h6 class="text-right text-success">المنطقة: ${location}</h6>
            <h6 class="text-right text-success">رقم الهاتف: ${phone}</h6>
            <h6 class="text-right text-danger">السعر: ${price} دينار</h6>
        </div>
      </div>
    </div>
  </div>
    
    `
}
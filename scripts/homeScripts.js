//get news:
let newsContainer=document.getElementById("news");
db.collection('News').get().then(snapshot => {
    newsContainer.innerHTML=snapshot.docs.map(getNews).slice(0,6).join("");
});

function getNews(json){
    //name,date,image of news
    
    let name=json.data().Name;
    let date=json.data().Date;
    let image=json.data()["Image Url"];
    let newsId=json.id;
    return `
    <div class="col-3 border border-success rounded m-3 p-3 text-center">
                      <img class="img-item" src="${image}">
                      <hr class="bg-success"/>
                      <a href="nDetails.html?newsId=${newsId}">   <h4 class="link text-left text-success">${name}</h4></a>
                      <h6 class="text-left text-success">${date}</h6>
                    </div>
    `
}

//get latest services:
let servicesContainer=document.getElementById("latestServices");


db.collection('Items').get().then(snapshot => {
    servicesContainer.innerHTML=snapshot.docs.map(getServices).slice(0,6).join("");
});

    function getServices(json){
    let name=json.data()["Product Name"];
    let provider=json.data().Provider;
    let image=json.data()["Image Url"];
    let serviceId=json.id;

    return `
    <div class="col-3 border border-success rounded m-3 p-3 text-center">
                      <img class="img-item" src="${image?image:"./assets/blank.jpg"}">
                      <hr class="bg-success"/>
                      <a href="serviceDetails.html?serviceId=${serviceId}">   <h4 class="link text-left text-success">${name}</h4></a>
                      <h6 class="text-left text-success">${provider}</h6>
                    </div>
    `
}

//get top-rated consultants
let consContainer=document.getElementById("consultants");
db.collection('Users').where("Role","==","3").get().then(snapshot => {
    consContainer.innerHTML=snapshot.docs.map(getCons).slice(0,4).join("");
});

function getCons(json){
    let name=json.data()["First Name"]+" "+json.data()["Last Name"];
    let image=json.data()["Image Url"];
    let id=json.id;
    return `
    
    <div class="col-3 text-center">
                        <img class="img-sizing border border-primary rounded-circle" src=${image?image:"./assets/blank.jpg"}>
                       <a href="./profile.html?userId=${id}"> <h4 class="text-center text-success">${name}</h4></a>
                        <h6 class="text-center text-success">5/5</h6>
                    </div>
    `
}
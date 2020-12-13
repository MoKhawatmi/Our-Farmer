const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('serviceId');
let loggedIn=localStorage.getItem('loggedIn');
let userName=localStorage.getItem('userName');
let currentUserId=localStorage.getItem('userId');

let detailsContainer=document.getElementById("detailsContainer");
let reviewsContainer=document.getElementById("reviewsContainer");
let starRating=1;
let idArray=[];

if(loggedIn=="true"){
db.collection("Users").doc(currentUserId).get().then(doc=>{
    doc.ref.collection("Favorite").get().then(snapshots=>{
        snapshots.docs.forEach(doc=>{
            idArray.push(doc.data().id);
        })
    }).then(done=>{
        db.collection("Items").doc(myParam).get().then(doc=>{
            detailsContainer.innerHTML= renderService(doc);
                doc.ref.collection("Review").get().then(reviews=>{
                    if(reviews.docs.length>0){
                        reviewsContainer.innerHTML=reviews.docs.map(renderReviews).join("");
                }
                    else{
                        reviewsContainer.innerHTML="<h3 class='text-right text-success'>لا تتوفر مراجعات حاليا</h3>"
                    }
                });
            
        });
    })
})
}else{
    db.collection("Items").doc(myParam).get().then(doc=>{
        detailsContainer.innerHTML= renderService(doc);
            doc.ref.collection("Review").get().then(reviews=>{
                if(reviews.docs.length>0){
                    reviewsContainer.innerHTML=reviews.docs.map(renderReviews).join("");
            }
                else{
                    reviewsContainer.innerHTML="<h3 class='text-right text-success'>لا تتوفر مراجعات حاليا</h3>"
                }
            });
        
    });
}


function renderService(json){
    let name=json.data()["Product Name"];
    let provider=json.data().Provider;
    let location=json.data().Location;
    let phone=json.data()["Phone Number"];
    let price=json.data().Price;
    let description=json.data().Description;
    let image=json.data()["Image Url"]
    let id=json.id;
    

    return `
    
    <div class="container bg-success mb-3 justify-content-center mx-auto">
    <div class="row justify-content-center">
    <h2 class="text-center text-white align-self-center">${name}</h2>
    </div>
    <div class="row justify-content-center">
    <h5 class="text-center text-white align-self-center">${provider}</h5>
    </div>
</div>

<div class="container">
    <div class="row justify-content-between">
       <div class="col"> <img width="300" height="300" src="${image? image:""}"></div>
       <div class="col text-right"> <i class="fa fa-heart fa-2x ${idArray.indexOf(id)!=-1?"red-color":""}" onclick="favClick(this,'${id}')" aria-hidden="true"></i>
        <h4 class="text-success text-right mt-5">:الوصف</h4>
           <p class="text-success text-right">${description}</p>
    </div>
    </div>
</div>


<div class="container">
    <div class="row justify-content-between">
       <div class="col text-right">
           <h4 class="text-success">المنطقة: ${location}</h4>
           <h4 class="text-success">رقم الهاتف: ${phone}</h4>
           <h4 class="text-success">السعر: ${price} دينار</h4> 
       </div>
    </div>
</div>
    
    `
}

function renderReviews(json){

    let date=json.data()["Review Date"];
    let text=json.data()["Review Text"];
    let rate=parseInt(json.data()["Review Rate"]);
    let name=json.data()["Reviewer Name"];

    console.log(rate);
    let deadStars=5-rate;
    let starDiv="";
    
    for(let j=0;j<rate;j++){
        starDiv+=`<li class="d-inline"> <span class="fa fa-star checked"></span> </li>`;
    }

    for(let i=0;i<deadStars;i++){
        starDiv+=`<li class="d-inline"> <span class="fa fa-star"></span> </li>`;
    }


    return `
    <div class="row mt-3">
    <div class="review-item col">
        <div class="d-inline text-left">
            <ul class="stars m-0 p-0 d-inline">
                ${starDiv}
            </ul>
        </div>
        <h5 class="text-white text-right">${name}</h5>
        <h6 class="text-white text-right">${date}</h6>
        <p class="text-white font-weight-bold text-right">${text}</p>
    </div>
</div>
    `
}

let bar=document.getElementById("rating-bar");

bar.addEventListener('click',evt=>{
    evt.preventDefault();
    let index=starsArr.indexOf(evt.target.parentNode);
    starRating=index+1;
    console.log(starRating);
});

let reviewForm=document.getElementById("reviewForm");
reviewForm.addEventListener('submit',evt=>{
    evt.preventDefault();
    if(loggedIn=="true"){
    let reviewText=reviewForm['reviewText'].value;
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let today = new Date();
    let date=today.getDate()+"-"+months[today.getMonth()]+"-"+today.getFullYear();
    let review={
        "Review Date":date,
        "Review Rate":starRating+"",
        "Review Text":reviewText,
        "Reviewer Name":userName,
        counter: "100"
    }
    db.collection("Items").doc(myParam).collection("Review").doc(currentUserId).set(review);
    alert("تمت اضافة المراجعة بنجاح");
    
}else{
    alert("الرجاء تسجيل الدخول لتتمكن من المراجعة");
}
});

function favClick(element,id){
    if(loggedIn=="true"){
    if(idArray.indexOf(id)==-1){
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
    }
}else{
    alert("الرجاء تسجيل الدخول");
}
}

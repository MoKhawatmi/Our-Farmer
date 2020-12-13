const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('newsId');
let newsContainer=document.getElementById("newsContainer");

db.collection("News").doc(myParam).get().then(doc=>{
    newsContainer.innerHTML=renderNews(doc);
});

function renderNews(doc){
let title=doc.data().Name;
let description=doc.data().Description;
let date=doc.data().Date;
let image=doc.data()["Image Url"];

    return `<div class="col-6">
    <img class="w-100" src="${image?image:""}">
</div>

<div class="col-6">
    <h2 class="text-success font-weight-bold text-right">${title}</h2>
    <h5 class="text-primary font-weight-bold text-right">${date}</h5>
    <p class="text-success font-weight-bold text-right">${description}</p>

</div>`
}
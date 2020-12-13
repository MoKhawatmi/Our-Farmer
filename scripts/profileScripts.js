let loggedUserId=localStorage.getItem('userId');
let pageOwner=false;
const urlParams = new URLSearchParams(window.location.search);
let myParam = urlParams.get('userId');
myParam = "+" + myParam.trim();

console.log(loggedUserId+"  "+myParam);
console.log(loggedUserId==myParam);

if(loggedUserId==myParam){
     pageOwner=true;
     console.log(pageOwner);
}else{
     pageOwner=false;
     console.log(pageOwner);
}

let profileContainer=document.getElementById("profileContainer");
db.collection("Users").doc(myParam).get().then(doc => {
    let role = doc.data().Role;
    switch (role) {
        case "1":
            renderUser(doc);
            break;
        case "2":
            renderBusiness(doc);
            break;
        case "3":
            console.log(role);
            renderConsultant(doc);
            break;
        case "4":
            renderWorker(doc);
            break;
    }
});

function renderUser(doc) {
    let name=doc.data()["First Name"]+" "+doc.data()["Last Name"];
    let age=doc.data().Age;
    let phone=doc.id;
    let image=doc.data()["Image Url"];
    let location=doc.data().Location;

    profileContainer.innerHTML=`
    <div class="row justify-content-end m-0">
<div class="card mb-3 mx-4 w-75">
    <div class="card-header row bg-success pr-0 mx-0">
        <div class="col">
        <h5 class="text-right text-white">:معلومات المستخدم</h5>
        </div>
    </div>
    <div class="row no-gutters">
      <div class="d-flex flex-column col-md-3 justify-content-end">
      ${pageOwner?'<button class="btn btn-outline-primary font-weight-bold w-75 m-3" onclick="window.open(`editProfile.html`,`mywindow`);">تعديل الحساب</button>':""}
      </div>
      <div class="col-md-5">
        <div dir="rtl" class="card-body pl-0">
          <h5 class="card-title text-right text-success">اسم المستخدم: ${name}</h5>
            <h6 class="text-right text-success">رقم الهاتف: ${phone}</h6>
            <h6 class="text-right text-success">العمر: ${age}</h6>
            <h6 class="text-right text-success">المنطقة: ${location}</h6>
        </div>
      </div>
      <div class="col-md-4">
      <img id="userImage" src="${image? image:"./blank.jpg"}" class="duh card-img border border-success border-top-0 profile-image"><label for="image-input">${pageOwner?'<img class="nuh" style="width: 10%; height: 10%;" src="./cam.png">':""}</label></img> 
      <input type="file" id="image-input" style="display:none;" accept="image/*" onchange="uploadImage('${loggedUserId}')" /> 
      ${pageOwner?`<i class="fa fa-times removeImage" onclick="removeImage()" aria-hidden="true"></i>`:""}       </div>
    </div>
  </div>
</div>
    `;
}

function renderBusiness(doc) {
    let name=doc.data()["First Name"]+" "+doc.data()["Last Name"];
    let age=doc.data().Age;
    let phone=doc.id;
    let image=doc.data()["Image Url"];
    let location=doc.data().Location;

    profileContainer.innerHTML=`<div class="row justify-content-end">
    <div class="card mb-3 mx-4 w-75">
        <div class="card-header row bg-success pr-0 mx-0">
            <div class="col">
            <h5 class="text-right text-white">:معلومات المستخدم</h5>
            </div>
        </div>
        <div class="row no-gutters">
        <div class="d-flex flex-column col-md-3 justify-content-between">
        <div class="d-flex flex-row m-3">
        ${pageOwner?'<button onclick="window.open(`addService.html`,`mywindow`);" class="btn btn-outline-success">اضف خدمة</button>':""}
        
        </div>
        <div class="d-flex flex-row align-items-end justify-content-start">
        ${pageOwner?'<button class="btn btn-outline-primary font-weight-bold w-75 m-3" onclick="window.open(`editProfile.html`,`mywindow`);">تعديل الحساب</button>':""}
        </div>
        </div>
          <div class="col-md-5">
            <div dir="rtl" class="card-body pl-0">
            <h5 class="card-title text-right text-success">اسم المستخدم: ${name}</h5>
            <h6 class="text-right text-success">رقم الهاتف: ${phone}</h6>
            <h6 class="text-right text-success">العمر: ${age}</h6>
            <h6 class="text-right text-success">المنطقة: ${location}</h6>
            </div>
          </div>
          <div class="col-md-4">
          <img id="userImage" src="${image? image:"./blank.jpg"}" class="duh card-img border border-success border-top-0 profile-image"><label for="image-input">${pageOwner?'<img class="nuh" style="width: 10%; height: 10%;" src="./cam.png">':""}</label></img> 
          <input type="file" id="image-input" style="display:none;" accept="image/*" onchange="uploadImage('${loggedUserId}')" />   
          ${pageOwner?`<i class="fa fa-times removeImage" onclick="removeImage()" aria-hidden="true"></i>`:""} 
          </div>
        </div>
      </div>
    </div>`
}

function renderConsultant(doc) {
    let name=doc.data()["First Name"]+" "+doc.data()["Last Name"];
    let age=doc.data().Age;
    let phone=doc.id;
    let image=doc.data()["Image Url"];
    let location=doc.data().Location;

    let list=document.createElement('ul');
    list.setAttribute('id',"rating-bar");
    list.setAttribute('class',"stars m-0 p-0 d-inline");
    list.innerHTML=`  <li class="d-inline"> <span class="fa fa-star fa-2x"></span></li>
    <li class="d-inline"> <span class="fa fa-star fa-2x"></span></li>
    <li class="d-inline"> <span class="fa fa-star fa-2x"></span></li>
    <li class="d-inline"> <span class="fa fa-star fa-2x"></span></li>
    <li class="d-inline"> <span class="fa fa-star fa-2x"></span></li>`
    
    starsArr=Array.from(list.children);
    list.addEventListener('mouseover',evt=>{
            let index=starsArr.indexOf(evt.target.parentNode);
            let light=index;
            let dark=4-index;
            for(let i=0;i<light;i++){
                starsArr[i].classList.add("checked");
            }
            for(let i=light;i<dark;i++){
                starsArr[i].classList.remove("checked");
            }
    });

    list.addEventListener('mouseout',evt=>{
        for(let i=0;i<5;i++){
            starsArr[i].classList.remove("checked");
        }
    });

        
    profileContainer.innerHTML=`
    <div class="row justify-content-end m-0">
    <div class="col ml-5">
        ${pageOwner?'<button class="btn btn-outline-success" onclick="window.open(`addpost.html`,`mywindow`);">كتابة منشور</button>':""}
    </div>
    <div class="card mb-3 mx-4 w-75">
        <div class="card-header row bg-success pr-0 mx-0">
            <div class="col">
            <h5 class="text-right text-white">:معلومات المستخدم</h5>
            </div>
        </div>
        <div class="row no-gutters">
            <div class="d-flex flex-column col-md-3 justify-content-between">
            <div class="d-flex flex-row m-3">
                <ul class="stars m-0 p-0 d-inline">
                    <li class="d-inline"> <span class="fa fa-star fa-2x checked"></span></li>
                    <li class="d-inline"> <span class="fa fa-star fa-2x checked"></span></li>
                    <li class="d-inline"> <span class="fa fa-star fa-2x checked"></span></li>
                    <li class="d-inline"> <span class="fa fa-star fa-2x checked"></span></li>
                    <li class="d-inline"> <span class="fa fa-star fa-2x checked"></span></li>
            </ul>
            <h6 class="text-right text-success d-inline">:التقييم</h6> 
            </div>
            <div class="d-flex flex-row align-items-end justify-content-start">
            ${pageOwner?'<button class="btn btn-outline-primary font-weight-bold w-75 m-3" onclick="window.open(`editProfile.html`,`mywindow`);">تعديل الحساب</button>':""}
            </div>
            </div>
          <div class="col-md-5">
            <div dir="rtl" class="card-body pl-0">
            <h5 class="card-title text-right text-success">اسم المستخدم: ${name}</h5>
            <h6 class="text-right text-success">رقم الهاتف: ${phone}</h6>
            <h6 class="text-right text-success">العمر: ${age}</h6>
            <h6 class="text-right text-success">المنطقة: ${location}</h6>
            </div>
          </div>
          <div class="col-md-4">
          <img id="userImage" src="${image? image:"./blank.jpg"}" class="duh card-img border border-success border-top-0 profile-image"><label for="image-input">${pageOwner?'<img class="nuh" style="width: 10%; height: 10%;" src="./cam.png">':""}</label></img> 
          <input type="file" id="image-input" style="display:none;" accept="image/*" onchange="uploadImage('${loggedUserId}')" />   
          ${pageOwner?`<i class="fa fa-times removeImage" onclick="removeImage()" aria-hidden="true"></i>`:""}    
          </div>
        </div>
      </div>
    </div>
    
    <hr class="bg-success"/>
    
    <div class="container">
        <div class="row justify-content-center">
            <div id="rateDiv" class="col-sm-6">
                
            <h4 id="rateHeader" class="text-right text-success d-inline mx-3">:قم بتقييم هذا المستشار</h4>
            </div>
        </div>
    </div>
    
    <div class="my-4 bg-success py-3">
        <h2 class="text-center text-white">اخر المنشورات</h2>
    </div>
    
    <div id="postsContainer" class="posts">
        
    </div>
    `;
    rateDiv=document.getElementById('rateDiv');
    rateDiv.insertBefore(list,document.getElementById('rateHeader'));

    calcPosts(doc);
}

function renderWorker(doc) {
    let name=doc.data()["First Name"]+" "+doc.data()["Last Name"];
    let age=doc.data().Age;
    let phone=doc.id;
    let image=doc.data()["Image Url"];
    let location=doc.data().Location;
    let exp=doc.data().PE;
    let projects=doc.data().PP;
    let skills=doc.data().Skills;
    let about=doc.data().About;

    let list=document.createElement('ul');
    list.setAttribute('id',"rating-bar");
    list.setAttribute('class',"stars m-0 p-0 d-inline");
    list.innerHTML=`  <li class="d-inline"> <span class="fa fa-star fa-2x"></span></li>
    <li class="d-inline"> <span class="fa fa-star fa-2x"></span></li>
    <li class="d-inline"> <span class="fa fa-star fa-2x"></span></li>
    <li class="d-inline"> <span class="fa fa-star fa-2x"></span></li>
    <li class="d-inline"> <span class="fa fa-star fa-2x"></span></li>`
    
    starsArr=Array.from(list.children);
    list.addEventListener('mouseover',evt=>{
            let index=starsArr.indexOf(evt.target.parentNode);
            let light=index;
            let dark=4-index;
            for(let i=0;i<light;i++){
                starsArr[i].classList.add("checked");
            }
            for(let i=light;i<dark;i++){
                starsArr[i].classList.remove("checked");
            }
    });

    list.addEventListener('mouseout',evt=>{
        for(let i=0;i<5;i++){
            starsArr[i].classList.remove("checked");
        }
    });


    profileContainer.innerHTML=`<div class="row justify-content-end m-0">
    <div class="col ml-5">
    </div>
    <div class="card mb-3 mx-4 w-75">
        <div class="card-header row bg-success pr-0 mx-0">
            <div class="col">
            <h5 class="text-right text-white">:معلومات المستخدم</h5>
            </div>
        </div>
        <div class="row no-gutters">
        <div class="d-flex flex-column col-md-3 justify-content-between">
        <div class="d-flex flex-row m-3">
            <ul class="stars m-0 p-0 d-inline">
                <li class="d-inline"> <span class="fa fa-star fa-2x checked"></span></li>
                <li class="d-inline"> <span class="fa fa-star fa-2x checked"></span></li>
                <li class="d-inline"> <span class="fa fa-star fa-2x checked"></span></li>
                <li class="d-inline"> <span class="fa fa-star fa-2x checked"></span></li>
                <li class="d-inline"> <span class="fa fa-star fa-2x checked"></span></li>
        </ul>
        <h6 class="text-right text-success d-inline">:التقييم</h6> 
        </div>
        <div class="d-flex flex-row align-items-end justify-content-start">
        ${pageOwner?'<button class="btn btn-outline-primary font-weight-bold w-75 m-3" onclick="window.open(`editProfile.html`,`mywindow`);">تعديل الحساب</button>':""}
        </div>
        </div>
          <div class="col-md-5">
            <div dir="rtl" class="card-body pl-0">
            <h5 class="card-title text-right text-success">اسم المستخدم: ${name}</h5>
            <h6 class="text-right text-success">رقم الهاتف: ${phone}</h6>
            <h6 class="text-right text-success">العمر: ${age}</h6>
            <h6 class="text-right text-success">المنطقة: ${location}</h6>
            </div>
          </div>
          <div class="col-md-4">
          <img id="userImage" src="${image? image:"./blank.jpg"}" class="duh card-img border border-success border-top-0 profile-image"><label for="image-input">${pageOwner?'<img class="nuh" style="width: 10%; height: 10%;" src="./cam.png">':""}</label></img> 
          <input type="file" id="image-input" style="display:none;" accept="image/*" onchange="uploadImage('${loggedUserId}')" />  
          ${pageOwner?`<i class="fa fa-times removeImage" onclick="removeImage()" aria-hidden="true"></i>`:""}  
            </div>
        </div>
      </div>
    </div>

    <div class="container">
        <div class="row justify-content-center">
            <div id="rateDiv" class="col-sm-6 text-center">
                
            <h4 id="rateHeader" class="text-right text-success d-inline mx-3">:قم بتقييم هذا المزارع</h4>
            </div>
        </div>
    </div>
    
    <div class="my-4 bg-success py-3">
        <h2 class="text-center text-white"> المهارات والخبرات</h2>
    </div>
    
    <div class="skills">
        <div class="pr-3 my-3">
            <h3 class="text-right text-white">نبذة</h3>
            <p class="text-right text-white">${about}</p>
        </div>
        
        <div class="pr-3 my-3">
            <h3 class="text-right text-white">المهارات</h3>
            <p class="text-right text-white">${skills} </p>
        </div>
    
        <div class="pr-3 my-3">
            <h3 class="text-right text-white">الخبرات السابقة </h3>
            <p class="text-right text-white">${exp} </p>
        </div>
    
        <div class="pr-3 my-3">
            <h3 class="text-right text-white">المشاريع السابقة </h3>
            <p class="text-right text-white">${projects}</p>
        </div>
    </div>`

    rateDiv=document.getElementById('rateDiv');
    rateDiv.insertBefore(list,document.getElementById('rateHeader'));

}


    function calcPosts(doc){
    let postsContainer=document.getElementById("postsContainer");
    doc.ref.collection("Posts").get().then(posts=>{
        if(posts.docs.length>0){
            postsContainer.innerHTML=posts.docs.map(renderPosts).join("");
    }
        else{
            postsContainer.innerHTML="<h3 class='text-right text-success'>لا تتوفر منشورات حاليا</h3>"
        }
    });
}
    function renderPosts(doc){
        let title=doc.data().Title;
        let text=doc.data().Text;
        let id=doc.id;
        return `
        <div id="postDiv" class="answer border border-white pr-3 my-3">
        <h3 class="text-right text-white">${title}</h3>
        <p class="text-right text-white">${text}</p>
        ${pageOwner?`<button class="btn btn-danger m-2" onclick="deletePost('${id}')">حذف المنشور</button>`:""}
        </div>
        `
    }

  function deletePost(id){
      console.log(id);
    if(confirm("سيتم حذف المنشور هل انت متأكد؟")){
        db.collection('Users').doc(loggedUserId).get().then(doc=>{
            doc.ref.collection("Posts").doc(id).delete().then(deleted=>{
                location.reload();
            });
          });
    }
  }

  function uploadImage(id){
    let imageInput= document.getElementById("image-input");
    let imageUrl;
    let image=imageInput.files[0];
    let imageName=image.name;
    let storageRef=firebase.storage().ref('images/'+imageName);
    let uploadTask=storageRef.put(image);
    uploadTask.on('state_changed',function (snapshot) {
        //observe state change events such as progress , pause ,resume
        //get task progress by including the number of bytes uploaded and total
        //number of bytes
        let progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log("upload is " + progress +" done");
    },function (error) {
        //handle error here
        console.log(error.message);
    },function () {
       //handle successful uploads on complete
        uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {
            //get your upload image url here...
            console.log(downlaodURL);
            imageUrl=downlaodURL;
            db.collection("Users").doc(id).update({"Image Url":imageUrl }).then(done=>{
                localStorage.setItem('image',imageUrl);
                alert("تم تعديل الصورة بنجاح")
            });
        })
    });
}


function removeImage(){
    let image=document.getElementById("userImage");
    if(image.getAttribute("src")=="./assets/blank.jpg"){
        console.log("nothing");
    }else{
        if(confirm("سيتم حذف الصورة الشخصية هل انت متأكد؟")){
        db.collection('Users').doc(loggedUserId).update({"Image Url":"" }).then(done=>{
            localStorage.setItem('image',"");
        alert("تم حذف الصورة بنجاح");
    });
}
}
}
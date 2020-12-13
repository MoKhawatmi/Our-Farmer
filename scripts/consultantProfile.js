document.write(`<div class="row justify-content-end">
<div class="col ml-5">
    <button class="btn btn-outline-success" onclick="window.open('addpost.html','mywindow');">كتابة منشور</button>
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
        <button class="btn btn-outline-primary font-weight-bold w-75 m-3" onclick="window.open('editProfile.html','mywindow');">تعديل الحساب</button>
        </div>
        </div>
      <div class="col-md-5">
        <div class="card-body pl-0">
          <h5 class="card-title text-right text-success">${name}</h5>
            <h6 class="text-right text-success">${phone}</h6>
            <h6 class="text-right text-success">${age}</h6>
            <h6 class="text-right text-success">${location}</h6>
        </div>
      </div>
      <div class="col-md-4">
      <img src="${image? image:"./assets/blank.jpg"}" class="duh card-img border border-success border-top-0"><span><img class="nuh" style="width: 10%; height: 10%;" src="./cam.png"></span></img>
      </div>
    </div>
  </div>
</div>

<hr class="bg-success"/>

<div class="container">
    <div class="row justify-content-center">
        <div class="col-sm-6">
            <ul id="rating-bar" class="stars m-0 p-0 d-inline">
                <li class="d-inline"> <span class="fa fa-star fa-2x"></span></li>
                <li class="d-inline"> <span class="fa fa-star fa-2x"></span></li>
                <li class="d-inline"> <span class="fa fa-star fa-2x"></span></li>
                <li class="d-inline"> <span class="fa fa-star fa-2x"></span></li>
                <li class="d-inline"> <span class="fa fa-star fa-2x"></span></li>
        </ul>
        <h4 class="text-right text-success d-inline mx-3">:قم بتقييم هذا المستشار</h4>
        </div>
    </div>
</div>

<div class="my-4 bg-success py-3">
    <h2 class="text-center text-white">اخر المنشورات</h2>
</div>

<div id="postsContainer" class="posts">
    <div class="answer border border-white pr-3 my-3">
        <h3 class="text-right text-white">عنوان المنشور</h3>
        <p class="text-right text-white">نص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالة</p>
        <button class="btn btn-danger m-2" onclick="deletePost()"> حذف المنشور</button>
    </div>

    <div class="answer border border-white pr-3 my-3">
        <h3 class="text-right text-white">عنوان المنشور</h3>
        <p class="text-right text-white">نص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالة</p>
        <button class="btn btn-danger m-2" onclick="deletePost()"> حذف المنشور</button>
    </div>

    <div class="answer border border-white pr-3 my-3">
        <h3 class="text-right text-white">عنوان المنشور</h3>
        <p class="text-right text-white">نص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالةنص الرسالة</p>
        <button class="btn btn-danger m-2" onclick="deletePost()"> حذف المنشور</button>
    </div>
</div>

<script src="./scripts/deletePost.js" charset="UTF-8"></script>
<script src="./scripts/ratingBarScript.js"></script>
`);
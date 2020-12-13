document.write(`<div class="row justify-content-end">
<div class="card mb-3 mx-4 w-75">
    <div class="card-header row bg-success pr-0 mx-0">
        <div class="col">
        <h5 class="text-right text-white">:معلومات المستخدم</h5>
        </div>
    </div>
    <div class="row no-gutters">
    <div class="d-flex flex-column col-md-3 justify-content-between">
    <div class="d-flex flex-row m-3">
    <button onclick="window.open('addService.html','mywindow');" class="btn btn-outline-success">اضف خدمة</button>
    </div>
    <div class="d-flex flex-row align-items-end justify-content-start">
    <button class="btn btn-outline-primary font-weight-bold w-75 m-3" onclick="window.open('editProfile.html','mywindow');">تعديل الحساب</button>
    </div>
    </div>
      <div class="col-md-5">
        <div class="card-body pl-0">
          <h5 class="card-title text-right text-success">:الاسم</h5>
            <h6 class="text-right text-success">:البريد الالكتروني</h6>
            <h6 class="text-right text-success">:الهاتف</h6>
            <h6 class="text-right text-success">:العمر</h6>
            <h6 class="text-right text-success">:المنطقة</h6>
        </div>
      </div>
      <div class="col-md-4">
      <img src="./assets/blank.jpg" class="duh card-img border border-success border-top-0"><span><img class="nuh" style="width: 10%; height: 10%;" src="./cam.png"></span></img>
      </div>
    </div>
  </div>
</div>`);
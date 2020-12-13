let logIn=localStorage.getItem("loggedIn");
let userId=localStorage.getItem("userId");
let image=localStorage.getItem("image");


console.log("1"+logIn);
if(logIn=="true"){
  console.log("2"+logIn);
  document.write(`<header>
  <div class="nav1">
  <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
      <a class="navbar-brand text-success" href="./index.html">
        <img src="./assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
        مُزارعنا
      </a>
      <form class="form-inline my-2 my-lg-0 w-50" action="./searchResults.html" method="GET">
          <input class="form-control mr-sm-2" type="search" name="search" placeholder="بحث" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">بحث</button>
        </form>
  
      <ul class="navbar-nav">
                    <li class="nav-item row align-items-center mr-1">
                      <a id="logOut" class="nav-link" href="">تسجيل الخروج</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="./profile.html?userId=${userId}"><img class="border border-black rounded-circle" width="50px" height="50px" src="${image?image:'./assets/blank.jpg'}"></a>
                    </li>
                  </ul>
    </nav>
    </div>`);
}else{
  console.log("10"+logIn);
  document.write(`<header>
<div class="nav1">
<nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between">
    <a class="navbar-brand text-success" href="./index.html">
      <img src="./assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
      مُزارعنا
    </a>
    <form class="form-inline my-2 my-lg-0 w-50" action="./searchResults.html" method="GET">
        <input class="form-control mr-sm-2" type="search" name="search" placeholder="بحث" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">بحث</button>
      </form>
      
      <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="./signIn.html">تسجيل الدخول</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="./signUp.html">تسجيل</a>
      </li>
    </ul>

  </nav>
  </div>`);
}

console.log("3"+logIn);


  document.write(`<div class="nav2 mb-5">
<nav class="navbar navbar-expand-lg navbar-dark bg-success">
    <div id="navbarNav" class="mx-auto">
    <ul class="navbar-nav">
    
    <li class="nav-item mx-4 border border-light rounded-pill">
        <a class="nav-link text-white" href="./requestWorker.html">اطلب عامل</a>
      </li>
      
      <li class="nav-item mx-4 border border-light rounded-pill">
        <a class="nav-link text-white" href="services.html?type=water">خدمات الماء</a>
      </li>
      
      <li class="nav-item mx-4 border border-light rounded-pill">
        <a class="nav-link text-white" href="services.html?type=seeds">خدمات البذور</a>
      </li>
      
      <li class="nav-item mx-4 border border-light rounded-pill">
        <a class="nav-link text-white" href="services.html?type=fruits">خدمات المحاصيل</a>
      </li>

      <li class="nav-item mx-4 border border-light rounded-pill">
        <a class="nav-link text-white" href="services.html?type=tools">الادوات الزراعية</a>
      </li>

      <li class="nav-item mx-4 outline-success border border-light rounded-pill">
        <a class="nav-link text-white" href=${logIn=="true"?"favorite.html":"./signIn.html"}>الخدمات المفضلة</a>
      </li>

      <li class="nav-item mx-4 outline-success border border-light rounded-pill">
        <a class="nav-link text-white" href="consultants.html">المستشارون الزراعيون</a>
      </li>
         </ul>
    </div>
 </nav>
 </div>
</header>`);

let logOut=document.getElementById('logOut');
if(logOut){
logOut.addEventListener('click',evt=>{
            evt.preventDefault();
            console.log("4"+logIn);
            localStorage.setItem('loggedIn',false);
            console.log("5"+logIn);
            localStorage.setItem('userId',"");
            localStorage.setItem('image',"");
            localStorage.setItem('userName',"");
            location.reload();
});}
console.log("6"+logIn);

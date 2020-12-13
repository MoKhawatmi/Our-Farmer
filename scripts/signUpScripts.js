let form=document.getElementById('signup-form');
let phone;
let newUser={};
let selector=document.getElementById('role-select');
            selector.addEventListener('change',evt=>{
                if(evt.target.value==3){
                    inputCertificate=document.createElement('div');
                    inputCertificate.setAttribute('class','form-group row justify-content-center');
                    inputCertificate.innerHTML=`
                    <input class="col-sm-4 form-control border border-success" id="certificate" type="file" name="certificate" required>
                    <label class="col-sm-3 font-weight-bold" for="certificate">شهادة الممارسة</label>
                    <br/>
                    `
                    form.insertBefore(inputCertificate,document.getElementById('sub'));
                }
            });

            form.addEventListener('submit',evt=>{
                evt.preventDefault();
                if(form["phone"].value.charAt(0)==0){
                    phone=form["phone"].value.replace("0","+962");
                }

                let pass=document.getElementById('pass');
                originalPass=pass.value;
                let repass=document.getElementById('repass');
                if(repass.value!=pass.value){
                    alert("كلمة المرور لا تنطبق مع خانة اعادة كلمة المرور");
                    return;
                }else{
                selectedRole=selector.value;
                switch(selectedRole){
                    case "1":
                        regBasic();
                        break;
                    case "2":
                        regBusiness();
                        break;
                    case "3":
                        regConsultant();
                        break;
                    case "4":
                        regWorker();
                        break;
                }}
            });

function regBasic(){
    newUser={
        "First Name":form["fname"].value,
        "Last Name":form["lname"].value,
        "Image Url":"",
         Age:form["age"].value,
         Password:form["pass"].value,
         Location:form["city"].value,
         Role:form["role"].value
    }
    sessionStorage.setItem("newUserPhone",phone);
    console.log(phone);
    db.collection("Users").doc(phone).set(newUser).then(done=>{
        alert("تم التسجيل بنجاح");
        window.location.replace("index.html");
    });
    
    
}

function regBusiness(){
    newUser={
        "First Name":form["fname"].value,
        "Last Name":form["lname"].value,
        "Image Url":"",
         Age:form["age"].value,
         Password:form["pass"].value,
         Location:form["city"].value,
         Role:form["role"].value
    }
    sessionStorage.setItem("newUserPhone",phone);
    console.log(phone);
    db.collection("Users").doc(phone).set(newUser).then(done=>{
        alert("تم التسجيل بنجاح");
        window.location.replace("index.html");
    });
    
}

function regConsultant(){
    let fileUrl;
    //get your select file
    var file=form["certificate"].files[0];
    //now get your file name
    var fileName=file.name;
    //firebase  storage reference
    //it is the path where yyour file will store
    var storageRef=firebase.storage().ref('CVs/'+fileName);
    //upload file to selected storage reference

    var uploadTask=storageRef.put(file);

    uploadTask.on('state_changed',function (snapshot) {
        var progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log("upload is " + progress +" done");
    },function (error) {
        //handle error here
        console.log(error.message);
    },function () {
       //handle successful uploads on complete

        uploadTask.snapshot.ref.getDownloadURL().then(function (downlaodURL) {
            //get your upload file url here...
            fileUrl=downlaodURL;
            console.log(downlaodURL);
            newUser={
                "First Name":form["fname"].value,
                "Last Name":form["lname"].value,
                "Image Url":"",
                 Age:form["age"].value,
                 Password:form["pass"].value,
                 Location:form["city"].value,
                 Role:form["role"].value,
                 CV:fileUrl
            }
        
            sessionStorage.setItem("newUserPhone",phone);
            console.log(phone);
            db.collection("Users").doc(phone).set(newUser).then(done=>{
                alert("تم التسجيل بنجاح");
                window.location.replace("index.html");
            });
        });
    });
}

function regWorker(){
    newUser={
        "First Name":form["fname"].value,
        "Last Name":form["lname"].value,
        "Image Url":"",
         Age:form["age"].value,
         Password:form["pass"].value,
         Location:form["city"].value,
         Role:form["role"].value
    }
    let obj=JSON.stringify(newUser);
    sessionStorage.setItem("newUserObj",obj);
    sessionStorage.setItem("newUserPhone",phone);
    console.log(phone);
    window.location.replace("workerRegForm.html");
    
}
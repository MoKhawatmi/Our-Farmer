let loggedUserId=localStorage.getItem('userId');
if(!loggedUserId){
    window.location.replace("index.html");
}

let editForm=document.getElementById("edit-form");
editForm.addEventListener('submit',evt=>{
    evt.preventDefault();
    let name=editForm['name'].value;
    let lname=editForm['lname'].value;
    let pass=editForm['pass'].value;
    let repass=editForm['repass'].value;
    let location=editForm['area'].value;
    let age=editForm['age'].value;

    let obj={};
    if(name){
        obj["First Name"]=name;
    }
    if(lname){
        obj["Last Name"]=lname;
    }
    if(pass && repass){
        if(pass===repass){
            obj.Password=pass;
        }else{
            alert("يجب تطابق كلمة المرور مع اعادة كلمة المرور");
        }
    }
    if(location){
        obj.Location=location;
    }
    if(age){
        obj.age=age;
    }

    db.collection("Users").doc(loggedUserId).update(obj).then(done=>{
        alert("تم تعديل البيانات بنجاح");
    });   
});
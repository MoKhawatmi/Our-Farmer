let loggedUserId=localStorage.getItem('userId');
let username=localStorage.getItem('userName');
let imageInput=document.getElementById("productImage");

let form=document.getElementById('addServicForm');
form.addEventListener('submit',evt=>{
    evt.preventDefault();
    let product={};
    let name=form["productName"].value;
    let type=form["type"].value;
    let location=form["area"].value;
    let price=form["price"].value;
    let description=form["productDescription"].value;
    let imageUrl;

    if(imageInput.files[0]){
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
             product={
                Category:type,
                Description:description,
                Location:location,
                "Phone Number":loggedUserId,
                "Product Name":name,
                Price:price,
                Provider:username,
                "Image Url":imageUrl,
                counter:"100"
            };
            db.collection('Items').add(product).then(done=>{
                alert("تمت الاضافة بنجاح");
                window.location.href("index.html");
            });
        });
    });
    }else{
        product={
            Category:type,
            Description:description,
            Location:location,
            "Phone Number":loggedUserId,
            "Product Name":name,
            Price:price,
            Provider:username,
            counter:"100"
        };
        db.collection('Items').add(product).then(done=>{
            alert("تمت الاضافة بنجاح");
            window.location.href("index.html");
        });
        
    }
    
    

    

});
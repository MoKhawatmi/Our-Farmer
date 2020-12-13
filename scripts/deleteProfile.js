function deleteProfile(event){
    event.preventDefault();
    if(confirm("هل انت متأكد انك تريد اغلاق حسابك نهائيا؟")){
        //code to delete profile
        console.log("deleted");
    }else{
        //do nothing
        console.log("not");
    }
}

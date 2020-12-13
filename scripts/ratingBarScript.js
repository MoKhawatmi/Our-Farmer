let ratingBar=document.getElementById('rating-bar');
            starsArr=Array.from(ratingBar.children);
            ratingBar.addEventListener('mouseover',(evt)=>{
                 switch(starsArr.indexOf(evt.target.parentNode)){
                     case 0:
                     starsArr[0].classList.add("checked");
                     break;
                     case 1:
                     starsArr[0].classList.add("checked");
                     starsArr[1].classList.add("checked");
                     break;
                     case 2:
                     starsArr[0].classList.add("checked");
                     starsArr[1].classList.add("checked");
                     starsArr[2].classList.add("checked");
                     break;
                     case 3:
                     starsArr[0].classList.add("checked");
                     starsArr[1].classList.add("checked");
                     starsArr[2].classList.add("checked");
                     starsArr[3].classList.add("checked");
                     break;
                     case 4:
                     starsArr[0].classList.add("checked");
                     starsArr[1].classList.add("checked");
                     starsArr[2].classList.add("checked");
                     starsArr[3].classList.add("checked");
                     starsArr[4].classList.add("checked");
                     break;
                 }
            });

            ratingBar.addEventListener('mouseout',(evt)=>{
                 switch(starsArr.indexOf(evt.target.parentNode)){
                     case 0:
                     starsArr[0].classList.remove("checked");
                     break;
                     case 1:
                     starsArr[0].classList.remove("checked");
                     starsArr[1].classList.remove("checked");
                     break;
                     case 2:
                     starsArr[0].classList.remove("checked");
                     starsArr[1].classList.remove("checked");
                     starsArr[2].classList.remove("checked");
                     break;
                     case 3:
                     starsArr[0].classList.remove("checked");
                     starsArr[1].classList.remove("checked");
                     starsArr[2].classList.remove("checked");
                     starsArr[3].classList.remove("checked");
                     break;
                     case 4:
                     starsArr[0].classList.remove("checked");
                     starsArr[1].classList.remove("checked");
                     starsArr[2].classList.remove("checked");
                     starsArr[3].classList.remove("checked");
                     starsArr[4].classList.remove("checked");
                     break;
                 }
            });
const input = document.getElementById("inputID");
const box = document.getElementById("box-link");
const line = document.getElementById("border-line");

// selection of suggestion links....
const div1 = document.getElementById("div-1");
const div2 = document.getElementById("div-2");
const div3 = document.getElementById("div-3");
const div4 = document.getElementById("div-4");
const div5 = document.getElementById("div-5");
const div6 = document.getElementById("div-6");


div1.addEventListener("click" , function(){
    var text = 'all';
    localStorage.setItem("UserSearchText" , text);

    window.location.href = '/' +'search-results' +'.html';
})

div2.addEventListener("click" , function(){
    var text = 'work';
    localStorage.setItem("UserSearchText" , text);

    window.location.href = '/' +'search-results' +'.html';
})
div3.addEventListener("click" , function(){
    var text = 'skill';
    localStorage.setItem("UserSearchText" , text);

    window.location.href = '/' +'search-results' +'.html';
})
div4.addEventListener("click" , function(){
    var text = 'about';
    localStorage.setItem("UserSearchText" , text);

    window.location.href = '/' +'search-results' +'.html';
})
div5.addEventListener("click" , function(){
    var text = 'experience';
    localStorage.setItem("UserSearchText" , text);

    window.location.href = '/' +'search-results' +'.html';
})
div6.addEventListener("click" , function(){
    var text = 'social';
    localStorage.setItem("UserSearchText" , text);

    window.location.href = '/' +'search-results' +'.html';
})




    

input.addEventListener("click", function () {
    input.classList.remove("before-click-input");
    input.classList.add("links-show");

    box.classList.remove("link-display");

    line.classList.remove("display-line");

})




//cross btn display functionality
input.addEventListener("click", function () {
    const span = document.getElementById("span-cross");
    span.classList.remove("cross-display");
    cross.classList.add("cross");

    // if(cross.style.display === "none"){
    //     cross.style.display = "";
    // } else{
    //     cross.style.display = "none"
    // }
})


// clear-btn search functionality
const cross = document.getElementById("crossBtn");
cross.addEventListener("click", function () {
    const span = document.getElementById("span-cross");
    input.value = "";
    // location.reload();  
    div1.style.display = "";
    div2.style.display = "";
    div3.style.display = "";
    div4.style.display = "";
    div5.style.display = "";
    div6.style.display = "";

    if (span.classList.contains(cross)) {

    } else {

        span.classList.remove("cross");
        span.classList.add("cross-display");
    }
})

// suggestion box functionality
const span = document.getElementById("span-cross");
if(screen.width > 550){
    window.addEventListener("mouseup", function (e) {
       
        if ((e.target != box)
            && (e.target.parentNode.parentNode != box)
            && (e.target.parentNode.parentNode.parentNode != box)
            && (e.target.parentNode.parentNode.parentNode!= box)) {
            input.classList.remove("links-show")
            input.classList.add("before-click-input");
    
            box.classList.add("link-display");
    
            line.classList.add("display-line");
    
            span.classList.add("cross-display");
    
          
        }
    })
}



// remove btn working 
const btn1 = document.getElementById("remove-btn-1");
const btn2 = document.getElementById("remove-btn-2");
const btn3 = document.getElementById("remove-btn-3");
const btn4 = document.getElementById("remove-btn-4");
const btn5 = document.getElementById("remove-btn-5");
const btn6 = document.getElementById("remove-btn-6");

btn1.addEventListener("click", function () {
    const div1 = document.getElementById("div-1");
    div1.style.display = "none";
})
btn2.addEventListener("click", function () {
    const div2 = document.getElementById("div-2");
    div2.style.display = "none";
})
btn3.addEventListener("click", function () {
    const div3 = document.getElementById("div-3");
    div3.style.display = "none";
})
btn4.addEventListener("click", function () {
    const div4 = document.getElementById("div-4");
    div4.style.display = "none";
})
btn5.addEventListener("click", function () {
    const div5 = document.getElementById("div-5");
    div5.style.display = "none";
})
btn6.addEventListener("click", function () {
    const div6 = document.getElementById("div-6");
    div6.style.display = "none";
})

// search fileter functionality
// function seachefilter() {
//     let inputFilter = document.getElementById("inputID").value.toUpperCase();
//     let searchText = box.getElementsByTagName('div');
    
//     for (let i = 0; i < searchText.length; i++) {
//         let text = searchText[i].getElementsByTagName("a")[0];

//         if (text) {
//             let textvalue = text.innerHTML || text.textContent;

//             if (textvalue.toUpperCase().indexOf(inputFilter) > -1) {
//                 searchText[i].style.display = "";

//             } else {
//                 searchText[i].style.display = "none";
//                 // let testVar = searchText[6];               
//                 // if(testVar.style.display == "none"){
//                 //     console.log("yessss")
//                 // } else{
//                 //     console.log("noooo")
//                 // }
//             } 

             

//         }
        
//     }
// }


//redirection of search term
input.addEventListener("keyup", function (e) {
    e.preventDefault();
    if (e.keyCode === 13) {
        //getting input value from user and converting to lowercase;
        let redirectValue = input.value.toLowerCase();
        // console.log(redirectValue);

        switch (true) {
            case (redirectValue === 'all'):

                //assigning to url pat
                var url = '/' + 'search-results' +'.html'

                // redirecting to input value
                window.location.href = url

                var text = input.value.toLowerCase();
                localStorage.setItem("UserSearchText" , text);

                break;
            case (redirectValue === 'work'):

                //assigning to url path
                // var url = `http://127.0.0.1:5500/pages/${redirectValue}.html`
                var url = '/' + 'search-results' +'.html'

                // redirecting to input value
                window.location.href = url

                var text = input.value.toLowerCase();
               localStorage.setItem("UserSearchText" , text);

                break;
            case (redirectValue === 'about'):

                //assigning to url path
                // var url = `http://127.0.0.1:5500/pages/${redirectValue}.html`
                var text = input.value.toLowerCase();
                localStorage.setItem("UserSearchText" , text);

                var url =  '/' +'search-results' +'.html';

                // redirecting to input value
                window.location.href = url


                break;
            case (redirectValue === 'social'):

                //assigning to url path
                // var url = `http://127.0.0.1:5500/pages/${redirectValue}.html`
                var url= '/' +'search-results' +'.html';

                // redirecting to input value
                window.location.href = url

                var text = input.value.toLowerCase();
                localStorage.setItem("UserSearchText" , text);

                break;
            case (redirectValue === 'experience'):

                //assigning to url path
                // var url = `http://127.0.0.1:5500/pages/${redirectValue}.html`
                var url = '/' +'search-results' +'.html';

                // redirecting to input value
                window.location.href = url

                var text = input.value.toLowerCase();
                localStorage.setItem("UserSearchText" , text);

                break;
            case (redirectValue === 'skill'):

                //assigning to url path
                // var url = `http://127.0.0.1:5500/pages/${redirectValue}.html`
                var url = '/' +'search-results' +'.html';

                // redirecting to input value
                window.location.href = url

                var text = input.value.toLowerCase();
                localStorage.setItem("UserSearchText" , text);

                break;

             

            default: 

            var text = input.value.toLowerCase();
            localStorage.setItem("UserSearchText" , text);

            var url = '/' + 'search-results' +'.html'
           window.location.href = url;
            
        //input text passing to anoter page
        
         
           
          
      }
    }
  })



//menu items show and hide functionality
const btnMenuItem = document.getElementById("btn-menu-item");
const menuBox = document.getElementById("menu-item-display");

btnMenuItem.addEventListener("click" , function(){

   if(menuBox.classList.contains("menu-item-display-hide")){

       menuBox.classList.remove("menu-item-display-hide");


   }  else{
    menuBox.classList.add("menu-item-display-hide");

   }
})

//closing menu div - if clicked anywhere in document
window.onclick = function(e){
 
    if(e.target.id === 'menu-img-id'){
        // menuBox.classList.add("menu-item-display-hide");
    } else{
        menuBox.classList.add("menu-item-display-hide");
    }
}


//functionality to show and hide user profile
const profileBox = document.getElementById("user-profile-id");
const profileBtn = document.getElementById("user-profile-btn");
profileBtn.addEventListener("click" , function(){
    if(profileBox.classList.contains("user-profile-display")){
        profileBox.classList.remove("user-profile-display");
    }  else{
        profileBox.classList.add("user-profile-display");
    }
})

//closing menu div - if clicked anywhere in document
document.onclick = function(e){
   
if(e.target.id === 'user-profile-img'){
  
} else{
 
  profileBox.classList.add("user-profile-display")
}
}


// javascript on mobile version 
const arrow = document.getElementById("arrowID");
const nav = document.getElementById("navID");
const myLogo = document.getElementById("my-logo-img-id");
const main = document.getElementById("mainID");
const searchIcon = document.querySelector(".search-icon");
const voice = document.getElementById("voiceID");
input.addEventListener('click' , function(){
    if(screen.width < 621){
       nav.style.display = "none";
       myLogo.style.display = "none";
       main.style.marginTop = 0;
       searchIcon.style.display = "none";
       input.style.border = "none";
       box.style.border = "none";
       voice.style.display = "none";
       arrow.classList.remove("arrow-back-display");

        }
})

//display of arrow back
arrow.addEventListener("click" , function(){
    nav.style.display = "";
       myLogo.style.display = "";
       searchIcon.style.display = "";
       input.style.border = "";
       box.style.border = "";
      voice.style.display = "";
       arrow.classList.add("arrow-back-display");

       input.classList.remove("links-show")
       input.classList.add("before-click-input");
       box.classList.add("link-display");
       line.classList.add("display-line");
       span.classList.add("cross-display");
})


//menu btn working 
//about btn working 
const menuBtnAbout = document.getElementById("meun-btn-about");
menuBtnAbout.addEventListener("click" , function(){

    var text = 'about';
    localStorage.setItem("UserSearchText" , text);

    var url =  '/' +'search-results' +'.html';

    // redirecting to input value
    window.location.href = url

})

//work btn working 
const menuBtnWork = document.getElementById("menu-btn-work");
menuBtnWork.addEventListener("click" , function(){

    var text = 'work';
    localStorage.setItem("UserSearchText" , text);

    var url =  '/' +'search-results' +'.html';

    // redirecting to input value
    window.location.href = url

})

//social btn working
const menuBtnSocial = document.getElementById("menu-btn-social");
menuBtnSocial.addEventListener("click" , function(){

    var text = 'social';
    localStorage.setItem("UserSearchText" , text);

    var url =  '/' +'search-results' +'.html';

    // redirecting to input value
    window.location.href = url

})



//menu item skill btn working 
const menuItemSkillBtn = document.getElementById("menu-item-skill-btn");
menuItemSkillBtn.addEventListener("click" , function(){
 
    var text = 'skill';
    localStorage.setItem("UserSearchText" , text);

    var url =  '/' +'search-results' +'.html';

    // redirecting to input value
    window.location.href = url
  })

  

//user profile working
//contact btn working 
const userBtnSocial = document.getElementById("user-profile-social-btn");
userBtnSocial.addEventListener("click" , function(){

    var text = 'social';
    localStorage.setItem("UserSearchText" , text);

    var url =  '/' +'search-results' +'.html';

    // redirecting to input value
    window.location.href = url

})

//about btn working
const userBtnAbout = document.getElementById("user-profile-about-btn");
userBtnAbout.addEventListener("click" , function(){

    var text = 'about';
    localStorage.setItem("UserSearchText" , text);

    var url =  '/' +'search-results' +'.html';

    // redirecting to input value
    window.location.href = url

})

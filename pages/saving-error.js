
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



//redirection of search term
let redirectValue = input.value.toLowerCase()
input.addEventListener("keyup", function (e) {
    e.preventDefault();
    if (e.keyCode === 13) {
        //getting input value from user and converting to lowercase;
      ;
        // console.log(redirectValue);

        switch (true) {
            case (redirectValue === 'all'):

                //assigning to url path
                var url = '/' + 'pages/' + redirectValue +'.html'

                // redirecting to input value
                window.location.href = url

                break;
            case (redirectValue === 'work'):

                //assigning to url path
                // var url = `http://127.0.0.1:5500/pages/${redirectValue}.html`
                var url = '/' + 'pages/' + redirectValue +'.html'

                // redirecting to input value
                window.location.href = url

                break;
            case (redirectValue === 'about'):

                //assigning to url path
                // var url = `http://127.0.0.1:5500/pages/${redirectValue}.html`
                var url = '/' + 'pages/' + redirectValue +'.html'

                // redirecting to input value
                window.location.href = url

                break;
            case (redirectValue === 'contact'):

                //assigning to url path
                // var url = `http://127.0.0.1:5500/pages/${redirectValue}.html`
                var url = '/' + 'pages/' + redirectValue +'.html'

                // redirecting to input value
                window.location.href = url

                break;
            case (redirectValue === 'thought'):

                //assigning to url path
                // var url = `http://127.0.0.1:5500/pages/${redirectValue}.html`
                var url = '/' + 'pages'+ redirectValue +'.html'

                // redirecting to input value
                window.location.href = url

                break;
            case (redirectValue === 'writting'):

                //assigning to url path
                // var url = `http://127.0.0.1:5500/pages/${redirectValue}.html`
                var url = '/' + 'pages/' + redirectValue +'.html'

                // redirecting to input value
                window.location.href = url

                break;

            default: window.location.href = '/' +'pages' + 'error' +'.html'

        } 
    }
})







// content 
const content = [
    {
      id: 1,
      category: "about",
      link: `/about#me`,
      name: "Me, Myself and I",
      excerpt: `I am a developer and technical writer located in Cameroon. 
      I have a passion for creating dynamic, responsive, adaptable websites.
      Problem solver, high-attention to detail, and creative person. I strive for 
      clarity, simplicity and creativity in my work`
    },
    {
      id: 2,
      category: "about",
      link: `about#skills`,
      name: "An overview of my technical skills and interests",
      excerpt: `HTML, CSS, JavaScript, React, GraphQL, Gatsby, Python, Open Source, Hugo, 
      Documentation, UI Design, UX Research, Inkscape.`
    },
    { 
      id: 3,
      category: "works",
      link: "https://github.com/enjeck/TutCode",
      name: "TutCode - site to simultaneously  view tutorials and code",
      excerpt: `A website where people can simultaneously code and watch/read
      tutorials. It's a more convenient way to learn and practice
      how to code (with HTML, CSS and JavaScript) on the same page`
    },
    { 
      id: 4,
      category: "works",
      link: `abc.xyz`,
      name: "Gfolio (this website)",
      excerpt: `A personal website simulating the Google Search platform. Developed with
      HTML, CSSS and React`
    },
    { 
      id: 5,
      category: "works",
      link: "https://enjeck.com/",
      name: "Personal Website",
      excerpt: `My personal website, designed and developed from scratch. It
      features a lot of hover effects, custom styling and a blog.`
    },
    { id: 6,
      category: "works",
      link: "https://github.com/enjeck/libre-logos",
      name: "Libre Logos",
      excerpt: `A project to provide free logos to open source projects.
      Website and logos designed and built by yours truly. 
      The website is responsive and the individual logo pages are 
      programmatically-generated.`
    },
    
   
    
  ];

const links = document.getElementById("content-link");
const title = document.getElementById("content-title");
const dis = document.getElementById("content-discription");
const container = document.querySelector(".container");

window.addEventListener("DOMContentLoaded" , function(){
    let myContent = content.map(function(item){
        

        if(item.category === redirectValue){
            return `
            <br>
            <p id="content-link">${item.link}</p>
            <h3 id="content-title" class="link-title">${item.name}</h3>
            <p id="content-discription">${item.excerpt}</p>
            <br>`
        }
    }) 
       
     
     myContent = myContent.join("");
     console.log(myContent);
     container.innerHTML = myContent;

   

   
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
function seachefilter() {
    let inputFilter = document.getElementById("inputID").value.toUpperCase();
    let searchText = box.getElementsByTagName('div');

    for (let i = 0; i < searchText.length; i++) {
        let text = searchText[i].getElementsByTagName("a")[0];

        if (text) {
            let textvalue = text.innerHTML || text.textContent;

            if (textvalue.toUpperCase().indexOf(inputFilter) > -1) {
                searchText[i].style.display = "";

            } else {
                searchText[i].style.display = "none";

            }
        }

    }
}




input.addEventListener("keyup" , function(e){
    e.preventDefault();
    if(e.keyCode === 13){

        
            let val =  input.value;
            console.log(val);
            input.value.innerHTML = val;
        
        
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
       searchIcon.style.display = "none";
       input.style.border = "none";
       box.style.border = "none";
       voice.style.display = "none";
       arrow.classList.remove("arrow-back-display");

        } else{
            console.log("else statement")
        }
})

//display of arrow back
arrow.addEventListener("click" , function(){
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





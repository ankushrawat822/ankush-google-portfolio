const content = [
  {
    optional: "all",
    category: "about",
    link: `${window.location.origin}#me`,
    name: "Me, Myself and I",
    excerpt: `I am 19 year old, web developer located in Indore, India. 
    I have a passion for creating dynamic, responsive, adaptable websites.
    Problem solver, high-attention to detail, and creative person. I strive for 
    clarity, simplicity and creativity in my work`
  },
  {

    category: "about",
    optional: "all",
    link: `${window.location.origin}#academic`,
    name: "An Overview of my Education",
    excerpt: `I am currently a student in Computer Science Engineering (Btech) from College Medicaps, Indore.I had finished my secondary high school studies at St.Norbert School.`
  },

  {
    category: "work",
    optional: "all",
    link: "https://anku5h-3js.netlify.app/",
    name: " Another Cool Portfolio ",
    excerpt: `Created using THREE js library for rendering and animating 3D models on a simple portfolio website.`
  },

  {
    category: "work",
    optional: "all",
    link: `${window.location.origin}`,
    name: "Portfolio (this website)",
    excerpt: `A personal website simulating the Google Search engine. Developed with
    HTML, CSS and JavaScript`
  },

  {
    category: "work",
    link: "https://agile-global.vercel.app/",
    name: "Agile Global ",
    excerpt: `When I was working as fron-end developer intern at agumentik, I Developed front-end of Official website of Agile Globle using React JS and Tailwind CSS`
  },

  {
    category: "work",
    link: "https://gol-travel-bv26.vercel.app/",
    name: "Gol Travel",
    excerpt: `When I was working as fron-end developer intern at agumentik, I Developed front-end of a traveling website using React JS and Tailwind CSS`
  },

  {
    category: "work",
    optional: "all",
    link: "https://3d-text-ankush.netlify.app",
    name: "3-D Text ",
    excerpt: `An Amazing personal site created using three js library.`
  },

  {
    category: "work",
    optional: "all",
    link: "https://text-read-by-ankush.netlify.app/",
    name: "Text-Read",
    excerpt: ` A website that helps to determine how long it will take to read a text, as well as the quantity of words, characters, and sentences. Additionally, you can convert the text to uppercase and lowercase.`
  },

  {
    category: "work",
    optional: "all",
    link: "https://ui-design-ankush-rawat.netlify.app/",
    name: " Cards UI design ",
    excerpt: `React-based UI design for a website providing a weekly summary of ordinary activity.`
  },

  {
    category: "experience",
    link: "https://agile-global.vercel.app/",
    name: "Agile Global ",
    excerpt: `When I was working as fron-end developer intern at agumentik, I Developed front-end of Official website of Agile Globle using React JS and Tailwind CSS`
  },
 
  {
    category: "experience",
    link: "https://leciendigitals-test.netlify.app/",
    name: "Lecien Digitals",
    excerpt: `I worked for Lecien Digitals as a freelance web developer, where I developed a simple static website for them.`
  },

  {
    category: "experience",
    link: "https://gol-travel-bv26.vercel.app/",
    name: "Gol Travel",
    excerpt: `When I was working as fron-end developer intern at agumentik, I Developed front-end of a traveling website using React JS and Tailwind CSS`
  },

  {
    category: "social",
    optional: "all",
    link: "mailto:ankushrawat037@gmail.com",
    name: "Gmail",
    excerpt: `Send me an email for requests, suggestions, comments or anything. `,
  },
  {

    category: "social",
    optional: "all",
    link: "https://www.instagram.com/ankush_822/",
    name: "Instagram",
    excerpt: `Connect me on Instagram`
  },

  {
    category: "about",
    optional: "all",
    link: `${window.location.origin}#hobbies`,
    name: "My Few Hobbies and Interests",
    excerpt: `I am interested in new and evolving technologies such as Web3, AI, Cyber Security, etc. and besides that, I enjoy watching anime, listening to podcasts, musics... `
  },
  
  {
    category: "skill",
    optional: "all",
    link: `${window.location.origin}#skills`,
    name: "Fron-End Skills",
    excerpt: `I like to code things from scratch, and enjoy bringing ideas to life in the browser. Languages I can speak are HTML , CSS , JavaScript.`,
  },
  {
    optional: "all",
    category: "skill",
    link: `${window.location.origin}#skills`,
    name: "Frameworks and Dev Tools",
    excerpt: `I have experience with a variety of development tools and frameworks, including React, ThreeJS, Bootstrap, Tailwind, Figma, Material UI , Github , canva.
    `,
  },

  {
    
    category: "skill",
    link: `${window.location.origin}#skills`,
    name: "WebGL",
    excerpt: `I've been studying and honing my skills in webgl for the recent months, and I now have a fundamental comprehension of how to render and animate 3D models on a website.`,
  },

  {
    optional: "all",
    category: "skill",
    link: `${window.location.origin}#skills`,
    name: "C / C++",
    excerpt: `I am well-versed in the core programming languages C and C++, as well as data structures and algorithms.
    `,
  },

  {
    category: "skill",
    optional: "all",
    link: `${window.location.origin}#skills`,
    name: "Soft Skills",
    excerpt: ` My ability to manage my time effectively, communicate effectively, solve problems collaboratively, be creative, and work well with others are some of my soft abilities. `,
  },

  {
    optional: "all",
    category: "social",
    link: "https://www.linkedin.com/in/ankushrawat822/",
    name: "LinkedIn",
    excerpt: `Connect and share experiences with me on Linkdin`
  },
  {
    optional: "all",
    category: "social",
    link: "https://github.com/ankushrawat822",
    name: "GitHub",
    excerpt: `View my projects and code.`
  }, 
  {
    category: "social",
    optional: "all",
    link: "https://discordapp.com/users/anku5h#6472",
    name: "Discord",
    excerpt: `Let's be friends on Discord. `,
  }
];

const input2 = document.getElementById("inputID2");
const box = document.getElementById("box-link");
const line = document.getElementById("border-line");

const arrow = document.getElementById("arrowID");
const nav = document.getElementById("navID");
const myLogo = document.getElementById("my-logo-img-id");
const searchBox = document.getElementById("searchBox");
const searchIcon = document.querySelector(".search-icon");
const voice = document.getElementById("voiceID");
const suggestion =  document.querySelector(".suggestions");
const hrLine = document.querySelector(".hr-line");


input2.addEventListener("keyup" , function(e){
  if(e.keyCode === 13 ){
    input2.classList.remove("links-show")
    input2.classList.add("before-click-input");

    box.classList.add("link-display");

    line.classList.add("display-line");

    span.classList.add("cross-display");

    container.style.display = ""
    suggestion.style.display = ""
    hrLine.style.display = ""
    myLogo.style.display = ""
  
    searchIcon.style.display = "";
    input2.style.border = "";
    box.style.border = "";
    voice.style.display = "";
    arrow.classList.add("arrow-back-display");
  
    // input2.classList.remove("links-show")
    input2.classList.add("before-click-input");
    // box.classList.add("link-display");
    line.classList.add("display-line");
    span.classList.add("cross-display");

    if(screen.width > 620){

    } else{
           searchBox.style.marginTop = '59px';
    }
  }
})

// selection of suggestion links....
const div1 = document.getElementById("div-1");
const div2 = document.getElementById("div-2");
const div3 = document.getElementById("div-3");
const div4 = document.getElementById("div-4");
const div5 = document.getElementById("div-5");
const div6 = document.getElementById("div-6");

//selection of suggestions buttons
const allBtn = document.querySelector(".suggest-btn-all");
const projectBtn = document.getElementById("suggest-btn-project");
const socialBtn = document.getElementById("suggest-btn-social");
const aboutBtn = document.getElementById("suggest-btn-about")

// const cont = document.querySelector(".container
const container = document.querySelector(".container");

//taking user value from previous page and assingning in input2 field
input2.value = localStorage.getItem("UserSearchText");
let input2Lower = input2.value.toLowerCase();
console.log("value is "+ input2.value + " and lower  is " + input2Lower);


//selectiong div that show no. of serch result 
const resultDetail = document.getElementById("result-details");

//random time 
let randomTime = (Math.random() * 1.1);
let shortRandomTime = randomTime.toFixed(2);
console.log(shortRandomTime)

const allIconId = document.getElementById('allIconId');
const aboutIconId = document.getElementById('aboutIconId');
const projectIconId = document.getElementById('projectIconId');
const socialIconId = document.getElementById('socialIconId');

//below navbar buttons 
allBtn.addEventListener("click", function () {
  let allRandomTime = (Math.random()*1.1).toFixed(2);
  input2.value = 'all';
  allBtn.style.color = "blue";
  aboutBtn.style.color = "rgba(77, 77, 77, 0.861)";
  projectBtn.style.color = "rgba(77, 77, 77, 0.861)";
  socialBtn.style.color = "rgba(77, 77, 77, 0.861)";

  allIconId.style.color = "blue";
  projectIconId.style.color = "rgba(77, 77, 77, 0.694)"
  aboutIconId.style.color = "rgba(77, 77, 77, 0.694)"
  socialIconId.style.color = "rgba(77, 77, 77, 0.694)"



  let countAllSuggest = 0;
  let myContent = content.map(function (item) {


    if (item.optional ==  'all') {
      countAllSuggest++;
      return `
            <br>
           <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
           font-size: 14px" id="content-link">${item.link}</p> 
            <h3 id="content-title" class="link-title">${item.name}</h3> </a>
            <p id="content-discription">${item.excerpt}</p>
            <br>`
    }
  })

  resultDetail.innerHTML = "About "+ (countAllSuggest) + " results " + "(" + allRandomTime + " seconds" + ") "
  myContent = myContent.join("");

  container.innerHTML = myContent;

})

projectBtn.addEventListener("click", function () {
  let allRandomTime = (Math.random()*1.1).toFixed(2);
  input2.value = 'work';
  allBtn.style.color = "rgba(77, 77, 77, 0.861)";
  aboutBtn.style.color = "rgba(77, 77, 77, 0.861)";
  projectBtn.style.color = "blue";
  socialBtn.style.color = "rgba(77, 77, 77, 0.861)";

  allIconId.style.color = "rgba(77, 77, 77, 0.694)";
  projectIconId.style.color = "blue"
  aboutIconId.style.color = "rgba(77, 77, 77, 0.694)"
  socialIconId.style.color = "rgba(77, 77, 77, 0.694)"

  let countWorkSuggest = 0;
  let myContent = content.map(function (item) {


    if (input2.value === item.category) {
      countWorkSuggest++;
      return `
      <br>
      <a style="text-decoration: none" href="${item.link}"  > <p style="color:black; 
      font-size: 14px" id="content-link">${item.link}</p> 
       <h3 id="content-title" class="link-title">${item.name}</h3> </a>
       <p id="content-discription">${item.excerpt}</p>
       <br>`

    }
  })

  resultDetail.innerHTML = "About "+ (countWorkSuggest) + " results " + "(" + allRandomTime + " seconds" + ") "
  myContent = myContent.join("");

  container.innerHTML = myContent;

})

aboutBtn.addEventListener("click", function () {
  let allRandomTime = (Math.random()*1.1).toFixed(2);
  input2.value = 'about';
  aboutBtn.style.color = "blue";
  allBtn.style.color = "rgba(77, 77, 77, 0.861)";
  projectBtn.style.color = "rgba(77, 77, 77, 0.861)";
  socialBtn.style.color = "rgba(77, 77, 77, 0.861)";

  allIconId.style.color = "rgba(77, 77, 77, 0.694)";
  projectIconId.style.color = "rgba(77, 77, 77, 0.694)"
  aboutIconId.style.color = "blue"
  socialIconId.style.color = "rgba(77, 77, 77, 0.694)"


  let countAboutSuggest = 0;
  let myContent = content.map(function (item) {


    if (item.category === 'about') {
      countAboutSuggest++;
      return `
            <br>
           <a style="text-decoration: none" href="${item.link}"  > <p style="color:black; 
           font-size: 14px" id="content-link">${item.link}</p> 
            <h3 id="content-title" class="link-title">${item.name}</h3> </a>
            <p id="content-discription">${item.excerpt}</p>
            <br>`
    }
  })

  resultDetail.innerHTML = "About "+ (countAboutSuggest) + " results " + "(" + allRandomTime + " seconds" + ") "
  myContent = myContent.join("");

  container.innerHTML = myContent;

})

socialBtn.addEventListener("click", function () {
  input2.value = 'social';
  allBtn.style.color = "rgba(77, 77, 77, 0.861)";
  aboutBtn.style.color = "rgba(77, 77, 77, 0.861)";
  projectBtn.style.color = "rgba(77, 77, 77, 0.861)";
  socialBtn.style.color = "blue";
  
  allIconId.style.color = "rgba(77, 77, 77, 0.694)";
  projectIconId.style.color = "rgba(77, 77, 77, 0.694)"
  aboutIconId.style.color = "rgba(77, 77, 77, 0.694)"
  socialIconId.style.color = "blue"

  
 
  let countSocialSuggest = 0;
  let myContent = content.map(function (item) {


    if (input2.value === item.category) {
      countSocialSuggest++;
      return `
      <br>
      <a style="text-decoration: none" href="${item.link}"     > <p style="color:black; 
      font-size: 14px" id="content-link">${item.link}</p> 
       <h3 id="content-title" class="link-title">${item.name}</h3> </a>
       <p id="content-discription">${item.excerpt}</p>
       <br>`
    }
  })

  resultDetail.innerHTML = "About "+ (countSocialSuggest) + " results " + "(" + shortRandomTime + " seconds" + ") "
  myContent = myContent.join("");

  container.innerHTML = myContent;

})




div1.addEventListener("click", function () {
  var text = 'all';
  localStorage.setItem("UserSearchText", text);

  window.location.href = '/' + 'search-results' + '.html';
})
div2.addEventListener("click", function () {
  var text = 'work';
  localStorage.setItem("UserSearchText", text);

  window.location.href = '/' + 'search-results' + '.html';
})
div3.addEventListener("click", function () {
  var text = 'skill';
  localStorage.setItem("UserSearchText", text);

  window.location.href = '/' + 'search-results' + '.html';
})
div4.addEventListener("click", function () {
  var text = 'about';
  localStorage.setItem("UserSearchText", text);

  window.location.href = '/' + 'search-results' + '.html';
})
div5.addEventListener("click", function () {
  var text = 'experience';
  localStorage.setItem("UserSearchText", text);

  window.location.href = '/' + 'search-results' + '.html';
})
div6.addEventListener("click", function () {
  var text = 'social';
  localStorage.setItem("UserSearchText", text);

  window.location.href = '/' + 'search-results' + '.html';
})




//redirection of search term
 window.addEventListener("DOMContentLoaded" , function(){
  // console.log(input2.value)
let redirectValue = input2.value.toLowerCase()
input2.addEventListener("keyup", function (e) {
  // e.preventDefault();
  if (e.keyCode === 13) {
    let lowerValueOfInput2 = (input2.value.toLowerCase());

    // getting input value from user and converting to lowercase;

    // console.log(redirectValue);

    switch (true) {
      case (lowerValueOfInput2 === 'all'):
        let countAll = 0;
        var myContent = content.map(function (item) {


          if (item.optional === 'all') {
            countAll++;
            return `
            <br>
            <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
            font-size: 14px" id="content-link">${item.link}</p> 
             <h3 id="content-title" class="link-title">${item.name}</h3> </a>
             <p id="content-discription">${item.excerpt}</p>
             <br>`
          }
        })

        resultDetail.innerHTML = "About "+ (countAll) + " results " + "(" + shortRandomTime + " seconds" + ") "
        myContent = myContent.join("");
        container.innerHTML = myContent;
           
          


        break;
      case (lowerValueOfInput2 === 'work'):
        // redirecting to input value
        // window.location.href = url
        let countWork = 0;
        var myContent = content.map(function (item) {
         
          if (item.category === 'work') {
            countWork++;
            return `
            <br>
            <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
            font-size: 14px" id="content-link">${item.link}</p> 
             <h3 id="content-title" class="link-title">${item.name}</h3> </a>
             <p id="content-discription">${item.excerpt}</p>
             <br>`
          }
             
        })
       
        resultDetail.innerHTML = "About "+ (countWork) + " results " + "(" + shortRandomTime + " seconds" + ") "
        myContent = myContent.join("");

        container.innerHTML = myContent;


        break;
      case (lowerValueOfInput2 === 'about'):
        let countAbout  = 0;
        var myContent = content.map(function (item) {

          if (item.category === 'about') {
            countAbout++;
            return `
            <br>
            <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
            font-size: 14px" id="content-link">${item.link}</p> 
             <h3 id="content-title" class="link-title">${item.name}</h3> </a>
             <p id="content-discription">${item.excerpt}</p>
             <br>`
          }
        })

        resultDetail.innerHTML = "About "+ (countAbout) + " results " + "(" + shortRandomTime + " seconds" + ") "
        myContent = myContent.join("");

        container.innerHTML = myContent;


        break;
      case (lowerValueOfInput2 === 'social'):
        let countSocial = 0;
        var myContent = content.map(function (item) {

          if (item.category === 'social') {
            countSocial++;
            return `
            <br>
            <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
            font-size: 14px" id="content-link">${item.link}</p> 
             <h3 id="content-title" class="link-title">${item.name}</h3> </a>
             <p id="content-discription">${item.excerpt}</p>
             <br>`
          }
        })

        resultDetail.innerHTML = "About "+ (countSocial) + " results " + "(" + shortRandomTime + " seconds" + ") "
        myContent = myContent.join("");

        container.innerHTML = myContent;

        break;
      case (lowerValueOfInput2 === 'experience'):
        let countExperience = 0;
        var myContent = content.map(function (item) {

          if (item.category === 'experience') {
            countExperience++;
            return `
            <br>
            <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
            font-size: 14px" id="content-link">${item.link}</p> 
             <h3 id="content-title" class="link-title">${item.name}</h3> </a>
             <p id="content-discription">${item.excerpt}</p>
             <br>`
          }
        })

        resultDetail.innerHTML = "About "+ (countExperience) + " results " + "(" + shortRandomTime + " seconds" + ") "
        myContent = myContent.join("");

        container.innerHTML = myContent;


        break;
      case (lowerValueOfInput2=== 'skill'):
      let countWriting = 0;
        var myContent = content.map(function (item) {

          if (item.category === 'skill') {
            countWriting++;
            return `
            <br>
            <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
            font-size: 14px" id="content-link">${item.link}</p> 
             <h3 id="content-title" class="link-title">${item.name}</h3> </a>
             <p id="content-discription">${item.excerpt}</p>
             <br>`
          }
        })

        resultDetail.innerHTML = "About "+ (countWriting) + " results " + "(" + shortRandomTime + " seconds" + ") "
        myContent = myContent.join("");

        container.innerHTML = myContent;


        break;

      default: // code of error page . current idea = write html code in javascript
        //  console.log("hii")
      let countError = 0;
      resultDetail.innerHTML = "About "+ (countError) + " results " + "(" + shortRandomTime + " seconds" + ") "
        function error() {
          return `  <div>
          <div style="margin-top: 40px">
              <h3 style="color : red;">Did you mean:</h3>
          </div>
          <div> <br/>
              <ul  class="error-ul" >
                  <li style="list-style-type: none"> <button id="allbtnsuggest"> all</button></li>
                  <li style="list-style-type: none"> <button id="workbtnsuggest"> work</button></li>
                  <li style="list-style-type: none"> <button id="skillbtnsuggest"> skill</button></li>
                  <li style="list-style-type: none"> <button id="Experiencebtnsuggest"> Experience</button></li>
                  <li style="list-style-type: none"> <button id="aboutbtnsuggest"> about</button></li>
                  <li style="list-style-type: none"> <button id="socialbtnsuggest"> social</button></li>
                  
                  
              </ul> <br/>

              <p style="display: inline;"> Your search - <h4 style="display: inline;">${input2.value}</h4> - did not match any documents. </P>
              <p style="margin-top: 20px;
                        margin-bottom: 20px">Suggestions - </p>
              <p><ul style="margin-left: 42px">
                    <li > Try a different keyword from the search dropdown </li>
                    <li> Make sure that all words are spelled correctly. </li>
                    <li> Click one of the links from the suggestions or menu above. </li>
                    <li>  I think, you are just messing around lol.  </li>
          </div>
      </div>  <br/> <br/>  <br/>  <br/>  <br/> 
      `
        }
       
          container.innerHTML = error();

          const allbtnsuggest = document.getElementById("allbtnsuggest");
          const aboutbtnsuggest = document.getElementById("aboutbtnsuggest");
          const workbtnsuggest = document.getElementById("workbtnsuggest");
          const Experiencebtnsuggest = document.getElementById("Experiencebtnsuggest");
          const socialbtnsuggest = document.getElementById("socialbtnsuggest");
          const skillbtnsuggest = document.getElementById("skillbtnsuggest");
          window.onkeyup = function(){
              allbtnsuggest.classList.add("suggestion-style-error");
              aboutbtnsuggest.classList.add("suggestion-style-error")
              workbtnsuggest.classList.add("suggestion-style-error")
              skillbtnsuggest.classList.add("suggestion-style-error")
              Experiencebtnsuggest.classList.add("suggestion-style-error")
              socialbtnsuggest.classList.add("suggestion-style-error")
          }

          
        allbtnsuggest.addEventListener("click" , function(){
          let countAllSuggest2 = 0;
          let myContent = content.map(function (item) {
           


            if (item.optional === 'all') {
              countAllSuggest2++;
              return `
              <br>
              <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
              font-size: 14px" id="content-link">${item.link}</p> 
               <h3 id="content-title" class="link-title">${item.name}</h3> </a>
               <p id="content-discription">${item.excerpt}</p>
               <br>`
            }
          })
        
          resultDetail.innerHTML = "About "+ (countAllSuggest2) + " results " + "(" + shortRandomTime + " seconds" + ") "
          myContent = myContent.join("");
        
          container.innerHTML = myContent;

          input2.value = 'all';

        })


        aboutbtnsuggest.addEventListener("click" , function(){
          input2.value = 'about';
          let countAboutSuggest2 = 0;
          let myContent = content.map(function (item) {
        
        
            if (input2.value === item.category) {
              countAboutSuggest2++;
              return `
              <br>
              <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
              font-size: 14px" id="content-link">${item.link}</p> 
               <h3 id="content-title" class="link-title">${item.name}</h3> </a>
               <p id="content-discription">${item.excerpt}</p>
               <br>`
            }
          })
        
          resultDetail.innerHTML = "About "+ (countAboutSuggest2) + " results " + "(" + shortRandomTime + " seconds" + ") "
          myContent = myContent.join("");
        
          container.innerHTML = myContent;
        
        })

        
        workbtnsuggest.addEventListener("click" , function(){
          input2.value = 'work';
          let countWorkSuggest2 = 0;
          let myContent = content.map(function (item) {
        
        
            if (input2.value === item.category) {
              countWorkSuggest2++;
              return `
              <br>
              <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
              font-size: 14px" id="content-link">${item.link}</p> 
               <h3 id="content-title" class="link-title">${item.name}</h3> </a>
               <p id="content-discription">${item.excerpt}</p>
               <br>`
            }
          })
        
          resultDetail.innerHTML = "About "+ (countWorkSuggest2) + " results " + "(" + shortRandomTime + " seconds" + ") "
          myContent = myContent.join("");
        
          container.innerHTML = myContent;
        
        })

        skillbtnsuggest.addEventListener("click" , function(){
          input2.value = 'skill';
          let countSkillSuggest2 = 0;
          let myContent = content.map(function (item) {
        
        
            if (input2.value === item.category) {
              countSkillSuggest2++;
              return `
              <br>
              <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
              font-size: 14px" id="content-link">${item.link}</p> 
               <h3 id="content-title" class="link-title">${item.name}</h3> </a>
               <p id="content-discription">${item.excerpt}</p>
               <br>`
            }
          })
        
          resultDetail.innerHTML = "About "+ (countSkillSuggest2) + " results " + "(" + shortRandomTime + " seconds" + ") "
          myContent = myContent.join("");
        
          container.innerHTML = myContent;
        
        })

        
        Experiencebtnsuggest.addEventListener("click" , function(){
          input2.value = 'experience';
        let  countThouoghtSuggest2 = 0;
          let myContent = content.map(function (item) {
        
        
            if (input2.value === item.category) {
              countThouoghtSuggest2++;
              return `
              <br>
              <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
              font-size: 14px" id="content-link">${item.link}</p> 
               <h3 id="content-title" class="link-title">${item.name}</h3> </a>
               <p id="content-discription">${item.excerpt}</p>
               <br>`
            }
          })
        
          resultDetail.innerHTML = "About "+ (countThouoghtSuggest2) + " results " + "(" + shortRandomTime + " seconds" + ") "
          myContent = myContent.join("");
        
          container.innerHTML = myContent;
        
        })


        
        socialbtnsuggest.addEventListener("click" , function(){
          input2.value = 'social';
           let countSocialSuggest2 = 0;
          let myContent = content.map(function (item) {
        
        
            if (input2.value === item.category) {
              countSocialSuggest2++;
              return `
              <br>
              <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
              font-size: 14px" id="content-link">${item.link}</p> 
               <h3 id="content-title" class="link-title">${item.name}</h3> </a>
               <p id="content-discription">${item.excerpt}</p>
               <br>`
            }
          })
        
          resultDetail.innerHTML = "About "+ (countSocialSuggest2) + " results " + "(" + shortRandomTime + " seconds" + ") "

          myContent = myContent.join("");
        
          container.innerHTML = myContent;
        
        })
        
        
    }
  }
})


 })


const links = document.getElementById("content-link");
const title = document.getElementById("content-title");
const dis = document.getElementById("content-discription");


window.addEventListener("DOMContentLoaded", function () {
  let countSearchByCLick = 0;
  let myContent = content.map(function (item) {


    if (input2.value.toLowerCase() === item.category) {
    countSearchByCLick++;
      return `
      <br>
      <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
      font-size: 14px" id="content-link">${item.link}</p> 
       <h3 id="content-title" class="link-title">${item.name}</h3> </a>
       <p id="content-discription">${item.excerpt}</p>
       <br>`
    }

   else if (input2.value.toLowerCase() === item.optional) {
    countSearchByCLick++;
      return `
      <br>
      <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
      font-size: 14px" id="content-link">${item.link}</p> 
       <h3 id="content-title" class="link-title">${item.name}</h3> </a>
       <p id="content-discription">${item.excerpt}</p>
       <br>`
    }
  })

  resultDetail.innerHTML = "About "+ countSearchByCLick + " results " + "(" + shortRandomTime + " seconds" + ") "
  myContent = myContent.join("");

  container.innerHTML = myContent;


})


// error page for index js
window.addEventListener("DOMContentLoaded" , function(){

    switch (true){
      case (input2.value === 'all'):

      break;
      case (input2.value === 'work'):

      break;
      case (input2.value === 'about'):

      break;

      case(input2.value === 'experience'):
      break;

      case(input2.value === 'skill'):
      break;

      case(input2.value === 'social'):
      break;

      default: 
      
      function error() {
        return `  <div>
        <div style="margin-top: 40px">
            <h3 style="color : red;">Did you mean:</h3>
        </div>
        <div> <br/>
            <ul class="error-ul" >
                <li style="list-style-type: none"> <button id="allbtnsuggest"> all</button></li>
                
                <li style="list-style-type: none; "> <button id="workbtnsuggest"> work</button></li>
                <li style="list-style-type: none"> <button id="skillbtnsuggest"> skill</button></li>
                <li style="list-style-type: none"> <button id="Experiencebtnsuggest"> Experience</button></li>
                <li style="list-style-type: none"> <button id="aboutbtnsuggest"> about</button></li>
                <li style="list-style-type: none"> <button id="socialbtnsuggest"> social</button></li>
                
                
            </ul> <br/>

            <p style="display: inline;"> Your search - <h4 style="display: inline;">${input2.value}</h4> - did not match any documents. </P>
            <p style="margin-top: 20px;
                      margin-bottom: 20px">Suggestions - </p>
            <p><ul style="margin-left: 42px">
                  <li > Try a different keyword from the search dropdown </li>
                  <li> Make sure that all words are spelled correctly. </li>
                  <li> Click one of the links from the suggestions or menu above. </li>
                  <li>  I think, you are just messing around lol.  </li>
        </div>
    </div> <br/> <br/>  <br/>  <br/>  <br/>
    `
      }   
         
        container.innerHTML = error();
        const allbtnsuggest = document.getElementById("allbtnsuggest");
        const aboutbtnsuggest = document.getElementById("aboutbtnsuggest");
        const skillbtnsuggest = document.getElementById("skillbtnsuggest");
        const workbtnsuggest = document.getElementById("workbtnsuggest");
        const Experiencebtnsuggest = document.getElementById("Experiencebtnsuggest");
        const socialbtnsuggest = document.getElementById("socialbtnsuggest");
        window.onload = function(){
            allbtnsuggest.classList.add("suggestion-style-error");
            aboutbtnsuggest.classList.add("suggestion-style-error")
            skillbtnsuggest.classList.add("suggestion-style-error")
            workbtnsuggest.classList.add("suggestion-style-error")
            Experiencebtnsuggest.classList.add("suggestion-style-error")
            socialbtnsuggest.classList.add("suggestion-style-error")
        }

        allbtnsuggest.addEventListener("click" , function(){
          let countAllSuggest = 0;
          let myContent = content.map(function (item) {


            if (item.optional === 'all') {
              countAllSuggest++;
              return `
              <br>
              <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
              font-size: 14px" id="content-link">${item.link}</p> 
               <h3 id="content-title" class="link-title">${item.name}</h3> </a>
               <p id="content-discription">${item.excerpt}</p>
               <br>`
            }
          })
        
          resultDetail.innerHTML = "About "+ (countAllSuggest) + " results " + "(" + shortRandomTime + " seconds" + ") "
          myContent = myContent.join("");
        
          container.innerHTML = myContent;

          input2.value = 'all';

        })


        aboutbtnsuggest.addEventListener("click" , function(){
          input2.value = 'about';
          let countAboutSuggest =0;
          let myContent = content.map(function (item) {
        
        
            if (input2.value === item.category) {
              countAboutSuggest++;
              return `
              <br>
              <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
              font-size: 14px" id="content-link">${item.link}</p> 
               <h3 id="content-title" class="link-title">${item.name}</h3> </a>
               <p id="content-discription">${item.excerpt}</p>
               <br>`
            }
          })
        
          resultDetail.innerHTML = "About "+ (countAboutSuggest) + " results " + "(" + shortRandomTime + " seconds" + ") "
          myContent = myContent.join("");
        
          container.innerHTML = myContent;
        
        })

        skillbtnsuggest.addEventListener("click" , function(){
          input2.value = 'skill';
          let countskillSuggest =0;
          let myContent = content.map(function (item) {
        
        
            if (input2.value === item.category) {
              countskillSuggest++;
              return `
              <br>
              <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
              font-size: 14px" id="content-link">${item.link}</p> 
               <h3 id="content-title" class="link-title">${item.name}</h3> </a>
               <p id="content-discription">${item.excerpt}</p>
               <br>`
            }
          })
        
          resultDetail.innerHTML = "About "+ (countskillSuggest) + " results " + "(" + shortRandomTime + " seconds" + ") "
          myContent = myContent.join("");
        
          container.innerHTML = myContent;
        
        })

        
        workbtnsuggest.addEventListener("click" , function(){
          input2.value = 'work';
          let countProjectSuggest = 0;

          let myContent = content.map(function (item) {
        
        
            if (input2.value === item.category) {
              countProjectSuggest++;
              return `
              <br>
              <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
              font-size: 14px" id="content-link">${item.link}</p> 
               <h3 id="content-title" class="link-title">${item.name}</h3> </a>
               <p id="content-discription">${item.excerpt}</p>
               <br>`
            }
          })
        
          resultDetail.innerHTML = "About "+ (countProjectSuggest) + " results " + "(" + shortRandomTime + " seconds" + ") "
          myContent = myContent.join("");
        
          container.innerHTML = myContent;
        
        })

        
        Experiencebtnsuggest.addEventListener("click" , function(){
        
          input2.value = 'experience';
         let countExperienceSuggest = 0;
          let myContent = content.map(function (item) {
        
        
            if (input2.value === item.category) {
              countExperienceSuggest++;
              return `
              <br>
              <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
              font-size: 14px" id="content-link">${item.link}</p> 
               <h3 id="content-title" class="link-title">${item.name}</h3> </a>
               <p id="content-discription">${item.excerpt}</p>
               <br>`
            }
          })
        
          resultDetail.innerHTML = "About "+ (countExperienceSuggest) + " results " + "(" + shortRandomTime + " seconds" + ") "
          myContent = myContent.join("");
        
          container.innerHTML = myContent;
        
        })


        
        socialbtnsuggest.addEventListener("click" , function(){
          input2.value = 'social';
          let countSocialsSuggest = 0;
          let myContent = content.map(function (item) {
        
        
            if (input2.value === item.category) {
              countSocialsSuggest++;
              return `
              <br>
              <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
              font-size: 14px" id="content-link">${item.link}</p> 
               <h3 id="content-title" class="link-title">${item.name}</h3> </a>
               <p id="content-discription">${item.excerpt}</p>
               <br>`
            }
          })
        
          resultDetail.innerHTML = "About "+ (countSocialsSuggest) + " results " + "(" + shortRandomTime + " seconds" + ") "
          myContent = myContent.join("");
        
          container.innerHTML = myContent;
        
        })
     
    }
  
  
})


//input style 
input2.addEventListener("click", function () {
  input2.classList.remove("before-click-input");
  input2.classList.add("links-show");

  box.classList.remove("link-display");

  line.classList.remove("display-line");

})




//cross btn display functionality
input2.addEventListener("click", function () {
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
  input2.value = "";
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
if (screen.width > 620) {
  window.addEventListener("mouseup", function (e) {

    if ((e.target != box)
      && (e.target.parentNode.parentNode != box)
      && (e.target.parentNode.parentNode.parentNode != box)
      && (e.target.parentNode.parentNode.parentNode != box)) {
      input2.classList.remove("links-show")
      input2.classList.add("before-click-input");

      box.classList.add("link-display");

      line.classList.add("display-line");

      span.classList.add("cross-display");


    }
  })
}



// search fileter functionality
// function seachefilter() {
//   let inputFilter = document.getElementById("inputID2").value.toUpperCase();
//   let searchText = box.getElementsByTagName('div');

//   for (let i = 0; i < searchText.length; i++) {
//     let text = searchText[i].getElementsByTagName("a")[0];

//     if (text) {
//       let textvalue = text.innerHTML || text.textContent;

//       if (textvalue.toUpperCase().indexOf(inputFilter) > -1) {
//         searchText[i].style.display = "";

//       } else {
//         searchText[i].style.display = "none";

//       }
//     }

//   }
// }


//menu items show and hide functionality
const btnMenuItem = document.getElementById("btn-menu-item");
const menuBox = document.getElementById("menu-item-display");

btnMenuItem.addEventListener("click", function () {

  if (menuBox.classList.contains("menu-item-display-hide")) {

    menuBox.classList.remove("menu-item-display-hide");


  } else {
    menuBox.classList.add("menu-item-display-hide");

  }
})

//closing menu div - if clicked anywhere in document
window.onclick = function (e) {

  if (e.target.id === 'menu-img-id') {
    // menuBox.classList.add("menu-item-display-hide");
  } else {
    menuBox.classList.add("menu-item-display-hide");
  }
}


//functionality to show and hide user profile
const profileBox = document.getElementById("user-profile-id");
const profileBtn = document.getElementById("user-profile-btn");
profileBtn.addEventListener("click", function () {
  if (profileBox.classList.contains("user-profile-display")) {
    profileBox.classList.remove("user-profile-display");
  } else {
    profileBox.classList.add("user-profile-display");
  }
})

//closing menu div - if clicked anywhere in document
document.onclick = function (e) {

  if (e.target.id === 'user-profile-img') {

  } else {

    profileBox.classList.add("user-profile-display")
  }
}


// javascript on mobile version 

input2.addEventListener('click', function () {
  if (screen.width < 621) {
    searchIcon.style.display = "none";
    input2.style.border = "none";
    box.style.border = "none";
    voice.style.display = "none";
    arrow.classList.remove("arrow-back-display");
    myLogo.style.display = "none";
    container.style.display = "none";
    searchBox.style.marginTop = '-52px';
    box.style.top = '44%';
    box.style.left= '5%';
    suggestion.style.display = "none"
    hrLine.style.display = "none"

  } else {
   
  }
})

//display of arrow back
arrow.addEventListener("click", function () {
  searchIcon.style.display = "";
  input2.style.border = "";
  box.style.border = "";
  voice.style.display = "";
  arrow.classList.add("arrow-back-display");

  input2.classList.remove("links-show")
  input2.classList.add("before-click-input");
  box.classList.add("link-display");
  line.classList.add("display-line");
  span.classList.add("cross-display");
  myLogo.style.display = "";
  container.style.display = "";
  searchBox.style.marginTop = '59px';
  suggestion.style.display = ""
  hrLine.style.display = ""
});


//user profile working
//social btn working
const userProfileSocialBtn = document.getElementById("user-profile-social-btn");
userProfileSocialBtn.addEventListener("click" , function(){

  input2.value = 'social';

  allBtn.style.color = "rgba(77, 77, 77, 0.861)";
  aboutBtn.style.color = "rgba(77, 77, 77, 0.861)";
  projectBtn.style.color = "rgba(77, 77, 77, 0.861)";
  socialBtn.style.color = "blue";
  
  allIconId.style.color = "rgba(77, 77, 77, 0.694)";
  projectIconId.style.color = "rgba(77, 77, 77, 0.694)"
  aboutIconId.style.color = "rgba(77, 77, 77, 0.694)"
  socialIconId.style.color = "blue"

  let countSocialUser = 0;
  let myContent = content.map(function (item) {


    if (input2.value === item.category) {
      countSocialUser++;
      return `
      <br>
      <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
      font-size: 14px" id="content-link">${item.link}</p> 
       <h3 id="content-title" class="link-title">${item.name}</h3> </a>
       <p id="content-discription">${item.excerpt}</p>
       <br>`
    }
  })

  resultDetail.innerHTML = "About "+ (countSocialUser) + " results " + "(" + shortRandomTime + " seconds" + ") "
  myContent = myContent.join("");

  container.innerHTML = myContent;
})

//about btn working
const userProfileAboutBtn = document.getElementById("user-profile-my-about-btn");
userProfileAboutBtn.addEventListener("click" , function(){

  input2.value = 'about';

  aboutBtn.style.color = "blue";
  allBtn.style.color = "rgba(77, 77, 77, 0.861)";
  projectBtn.style.color = "rgba(77, 77, 77, 0.861)";
  socialBtn.style.color = "rgba(77, 77, 77, 0.861)";

  allIconId.style.color = "rgba(77, 77, 77, 0.694)";
  projectIconId.style.color = "rgba(77, 77, 77, 0.694)"
  aboutIconId.style.color = "blue"
  socialIconId.style.color = "rgba(77, 77, 77, 0.694)"


  let countAboutUser = 0;
  let myContent = content.map(function (item) {


    if (input2.value === item.category) {
      countAboutUser++;
      return `
      <br>
      <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
      font-size: 14px" id="content-link">${item.link}</p> 
       <h3 id="content-title" class="link-title">${item.name}</h3> </a>
       <p id="content-discription">${item.excerpt}</p>
       <br>`
    }
  })

  resultDetail.innerHTML = "About "+ (countAboutUser)+ " results " + "(" + shortRandomTime + " seconds" + ") "
  myContent = myContent.join("");

  container.innerHTML = myContent;
})



//menu itmes working
// menu item about working
const menuItemAboutBtn = document.getElementById("menu-item-about-btn");
menuItemAboutBtn.addEventListener("click" , function(){

  input2.value = 'about';

  aboutBtn.style.color = "blue";
  allBtn.style.color = "rgba(77, 77, 77, 0.861)";
  projectBtn.style.color = "rgba(77, 77, 77, 0.861)";
  socialBtn.style.color = "rgba(77, 77, 77, 0.861)";

  allIconId.style.color = "rgba(77, 77, 77, 0.694)";
  projectIconId.style.color = "rgba(77, 77, 77, 0.694)"
  aboutIconId.style.color = "blue"
  socialIconId.style.color = "rgba(77, 77, 77, 0.694)"


  let countAboutMenu = 0;
  let myContent = content.map(function (item) {


    if (input2.value === item.category) {
      countAboutMenu++;
      return `
      <br>
      <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
      font-size: 14px" id="content-link">${item.link}</p> 
       <h3 id="content-title" class="link-title">${item.name}</h3> </a>
       <p id="content-discription">${item.excerpt}</p>
       <br>`
    }
  })

  resultDetail.innerHTML = "About "+ (countAboutMenu) + " results " + "(" + shortRandomTime + " seconds" + ") "
  myContent = myContent.join("");

  container.innerHTML = myContent;
})

//menu item social btn working
const menuItemSocialBtn = document.getElementById("menu-item-social-btn");
menuItemSocialBtn.addEventListener("click" , function(){

  input2.value = 'social';

  allBtn.style.color = "rgba(77, 77, 77, 0.861)";
  aboutBtn.style.color = "rgba(77, 77, 77, 0.861)";
  projectBtn.style.color = "rgba(77, 77, 77, 0.861)";
  socialBtn.style.color = "blue";
  
  allIconId.style.color = "rgba(77, 77, 77, 0.694)";
  projectIconId.style.color = "rgba(77, 77, 77, 0.694)"
  aboutIconId.style.color = "rgba(77, 77, 77, 0.694)"
  socialIconId.style.color = "blue"

  let countSocialMenu = 0;
  let myContent = content.map(function (item) {


    if (input2.value === item.category) {
      countSocialMenu++;
      return `
      <br>
      <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
      font-size: 14px" id="content-link">${item.link}</p> 
       <h3 id="content-title" class="link-title">${item.name}</h3> </a>
       <p id="content-discription">${item.excerpt}</p>
       <br>`
    }
  })

  resultDetail.innerHTML = "About "+ (countSocialMenu) + " results " + "(" + shortRandomTime + " seconds" + ") "
  myContent = myContent.join("");

  container.innerHTML = myContent;
})

//menu item work btn working 
const menuItemWorkBtn = document.getElementById("menu-item-work-btn");
menuItemWorkBtn.addEventListener("click" , function(){

  input2.value = 'work';

  allBtn.style.color = "rgba(77, 77, 77, 0.861)";
  aboutBtn.style.color = "rgba(77, 77, 77, 0.861)";
  projectBtn.style.color = "blue";
  socialBtn.style.color = "rgba(77, 77, 77, 0.861)";

  allIconId.style.color = "rgba(77, 77, 77, 0.694)";
  projectIconId.style.color = "blue"
  aboutIconId.style.color = "rgba(77, 77, 77, 0.694)"
  socialIconId.style.color = "rgba(77, 77, 77, 0.694)"

  let countWorkMenu = 0;
  let myContent = content.map(function (item) {


    if (input2.value === item.category) {
      countWorkMenu++;
      return `
      <br>
      <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
      font-size: 14px" id="content-link">${item.link}</p> 
       <h3 id="content-title" class="link-title">${item.name}</h3> </a>
       <p id="content-discription">${item.excerpt}</p>
       <br>`
    }
  })

  resultDetail.innerHTML = "About "+ (countWorkMenu) + " results " + "(" + shortRandomTime + " seconds" + ") "
  myContent = myContent.join("");

  container.innerHTML = myContent;
})



//menu item skill btn working 
const menuItemSkillBtn = document.getElementById("menu-item-skill-btn");
menuItemSkillBtn.addEventListener("click" , function(){

  input2.value = 'skill';

  allBtn.style.color = "rgba(77, 77, 77, 0.861)";
  aboutBtn.style.color = "rgba(77, 77, 77, 0.861)";
  projectBtn.style.color = "rgba(77, 77, 77, 0.861)";
  socialBtn.style.color = "rgba(77, 77, 77, 0.861)";

  allIconId.style.color = "rgba(77, 77, 77, 0.694)";
  projectIconId.style.color = "rgba(77, 77, 77, 0.861)"
  aboutIconId.style.color = "rgba(77, 77, 77, 0.694)"
  socialIconId.style.color = "rgba(77, 77, 77, 0.694)"

  let countskillMenu = 0;
  let myContent = content.map(function (item) {


    if (input2.value === item.category) {
      countskillMenu++;
      return `
      <br>
      <a style="text-decoration: none" href="${item.link}" > <p style="color:black; 
      font-size: 14px" id="content-link">${item.link}</p> 
       <h3 id="content-title" class="link-title">${item.name}</h3> </a>
       <p id="content-discription">${item.excerpt}</p>
       <br>`
    }
  })

  resultDetail.innerHTML = "About "+ (countskillMenu) + " results " + "(" + shortRandomTime + " seconds" + ") "
  myContent = myContent.join("");

  container.innerHTML = myContent;
})
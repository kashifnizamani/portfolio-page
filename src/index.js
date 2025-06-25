import "./style.css";
import { homePage } from "./home";
import { projectsPage } from "./projects";
import { contactPage } from "./contact";


homePage();

const buttons = document.querySelectorAll("button");
const content = document.querySelector("#content");

buttons.forEach(function(button){
  button.addEventListener("click", (e)=>{

   if(e.target.getAttribute("class") === "home"){
    
    content.innerHTML = "";
    homePage();

   }
  else if(e.target.getAttribute("class") === "projects"){
    
    content.innerHTML = "";
    projectsPage();

   }

   else if(e.target.getAttribute("class") === "contact"){
    
    content.innerHTML = "";
    contactPage();

   }



  })
})

import "./style.css";
import { homePage } from "./home";
import { projectsPage } from "./projects";
import { contactPage } from "./contact";

const content = document.querySelector("#content");
const home = document.querySelector(".home");
const project = document.querySelector(".projects");
const contact = document.querySelector(".contact");

homePage();

project.addEventListener("click", (e)=>{

    content.innerHTML = "";
    e.target.style.backgroundColor = "red";
    projectsPage();
    
})

contact.addEventListener("click", (e)=>{
    content.innerHTML = "";
    e.target.style.backgroundColor = "red";
    contactPage();

})

home.addEventListener("click", (e)=>{
    content.innerHTML = "";
    e.target.style.backgroundColor = "red";
    homePage();
})


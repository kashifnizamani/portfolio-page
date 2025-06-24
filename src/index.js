import "./style.css";
import { homePage } from "./home";
import { projectsPage } from "./projects";
import { contactPage } from "./contact";

const content = document.querySelector("#content");
const home = document.querySelector(".home");
const project = document.querySelector(".projects");
const contact = document.querySelector(".contact");

homePage();

project.addEventListener("click", ()=>{

    content.innerHTML = "";
    projectsPage();
    
})

contact.addEventListener("click", ()=>{
    content.innerHTML = "";
    contactPage();
})

home.addEventListener("click", ()=>{
    content.innerHTML = "";
    homePage();
})


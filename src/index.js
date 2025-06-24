import "./style.css";
import { pageLoad } from "./home";
import { projects } from "./projects";

const content = document.querySelector("#content");
const home = document.querySelector(".home");
const project = document.querySelector(".projects");
const contact = document.querySelector(".contact");

pageLoad();

project.addEventListener("click", ()=>{

    content.innerHTML = "";
    projects();
    
})



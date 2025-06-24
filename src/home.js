import sideImage from "../assets/homepage.jpg";

 export const container = document.querySelector("#content");


export const homePage = function(){

    const img = document.createElement("img");
    img.src = sideImage;

    const div = document.createElement("div");
    div.classList.add("info");

    const main_heading = document.createElement("h1");
    main_heading.textContent = "Welcome to My Portfolio";

    const paragraph1 = document.createElement("p");
    paragraph1.classList.add("paragraph");
    paragraph1.textContent = " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos aliquam excepturi saepe porro fuga nobis aperiam quam impedit? Placeat ad enim eos necessitatibus omnis eaque repellendus perferendis, qui laudantium quibusdam!"
    paragraph1.classList.add("paragraph");

    const achievments = document.createElement("h1");
    achievments.textContent = "Achievements";

    const paragraph2 = document.createElement("p");
    paragraph2.textContent = " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos aliquam excepturi saepe porro fuga nobis aperiam quam impedit? Placeat ad enim eos necessitatibus omnis eaque repellendus perferendis, qui laudantium quibusdam!"
    paragraph2.classList.add("paragraph");

    div.appendChild(main_heading);
    div.appendChild(paragraph1);
    div.appendChild(achievments);
    div.appendChild(paragraph2);
    container.appendChild(img);
    container.appendChild(div);

}
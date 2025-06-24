import sideImage from "../assets/projectspage.jpg"

export const projectsPage = function(){
    
      const img = document.createElement("img");
        img.src = sideImage;

    const content = document.querySelector("#content");
    const div = document.createElement("div");
    div.classList.add("info");

    for(let i = 1; i <= 3; i++){
         const card = document.createElement("div");
         card.classList.add("card");

        const h1 = document.createElement("h1");
        h1.textContent = "Project " + i;

        const paragraph = document.createElement("p");
        paragraph.textContent = "       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab necessitatibus quae dolor, dolorem similique sit natus, eius ipsa magni quia impedit eos ex quod adipisci itaque. Corporis necessitatibus sunt voluptates?";

        card.appendChild(h1);
        card.appendChild(paragraph);
        div.appendChild(card);
    }

    content.appendChild(img);
    content.appendChild(div);

}
import sideImage from "../assets/contactpage.jpg";

export const contactPage = function(){

        const img = document.createElement("img");
        img.src = sideImage;

    const container = document.querySelector("#content");
    const div = document.createElement("div");
    div.classList.add("info");

    const heading = document.createElement("h1");
    heading.textContent = "Get in Touch";

    const email = document.createElement("span");
    email.classList.add("contactInfo");


    const emailheading = document.createElement("h2");
    emailheading.textContent = "Email:";

    const emailtext = document.createElement("p");
    emailtext.textContent = "xyz@example.com";

    email.appendChild(emailheading);
    email.appendChild(emailtext);

    const number = document.createElement("div");
    number.classList.add("contactInfo");

    const numberHeading = document.createElement("h2");
    numberHeading.textContent = "Phone Number:";

    const numberText = document.createElement("p");
    numberText.textContent = "+555-9871-231";

    number.appendChild(numberHeading);
    number.appendChild(numberText);

    const github = document.createElement("div");
    github.classList.add("contactInfo");

    const githubHeading = document.createElement("h2");
    githubHeading.textContent = "GitHub:";

    const githubText = document.createElement("p");
    githubText.textContent = "github.com/username";

    github.appendChild(githubHeading);
    github.appendChild(githubText);


    div.appendChild(heading);
    div.appendChild(email);
    div.appendChild(number);
    div.appendChild(github);

    container.appendChild(img);
    container.appendChild(div);

}
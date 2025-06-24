
export const contactPage = function(){

    const container = document.querySelector("#content");
    const div = document.createElement("div");
    div.classList.add("info");

    const heading = document.createElement("h1");
    heading.textContent = "Get in Touch";

    const email = document.createElement("div");
    email.classList.add("email");
    email.textContent = "Email: xyz@example.com";


    div.appendChild(heading);
    div.appendChild(email);

    container.appendChild(div);

}
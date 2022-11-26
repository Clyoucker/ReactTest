"use strict";

window.onload = () => {

    const sectionMovies = document.querySelector(".movies");

    const cards = document.querySelectorAll(".card-movie");

    cards.forEach((card)=>{
        card.addEventListener("mouseover",()=>{
            let content = card.childNodes[1]
            content.classList.remove("hiden")
            content.classList.add("visible")

            let xPosContent = content.getBoundingClientRect();
            let xPosSection = sectionMovies.getBoundingClientRect();

            (xPosContent.right > xPosSection.right) ? content.style.right = (card.clientWidth + 24)+"px" : content.style.left = (card.clientWidth + 24)+"px";
            (xPosContent.bottom > xPosSection.bottom) ? content.style.bottom = "0px" : content.style.top = "0px";

            card.addEventListener("mouseout",()=>{
                content.classList.remove("visible")
                content.classList.add("hiden")
                content.style.right = null;
                content.style.left = null;
                content.style.bottom = null;
                content.style.top = null;
            })
        });
    });
}
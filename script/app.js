let imageElement = document.querySelector(".slide");

setTimeout(() => {
    imageElement.setAttribute("src","images/ochiq-removebg-preview.png");
    setTimeout(() => {
        imageElement.setAttribute("src", "images/yoniq-removebg-preview.png")
    }, 1000);
}, 1000);
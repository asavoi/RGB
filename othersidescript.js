
document.addEventListener("DOMContentLoaded", () => {

    const images = [
        document.querySelector(".top_horiz"), 
        document.querySelector(".bottom_horiz"), 
        document.querySelector(".top_right"), 
        document.querySelector(".bottom_right"), 
        document.querySelector(".top_left"), 
        document.querySelector(".bottom_left")
    ];

    const sections = document.querySelectorAll(".section");
    let current = 0; 

    setTimeout(() => {
        images[0].classList.add("visible"); 
        images[1].classList.add("visible");
    }, 3000);

    setTimeout(() => {
        images[4].classList.add("visible"); // top_left
    }, 7000);

    setTimeout(() => {
        images[5].classList.add("visible"); // bottom_right
    }, 8500);

    setTimeout(() => {
        images[2].classList.add("visible"); // top_right
    }, 10000);

    setTimeout(() => {
        images[3].classList.add("visible"); // bottom_left
    }, 11500);

    setTimeout(() => {
        sections[current].classList.add("visible");
    }, 13000);

    setTimeout(() => {
        images.forEach(img => img.classList.add("faded"));
    }, 20000);
    
    // poem and clicks
    sections.forEach(section => {
        section.addEventListener("click", () => {
            
            if (current >= sections.length - 1) {
                sections[current].classList.remove("visible");
                images.forEach(img => img.classList.remove("visible", "faded"));
                return;
            }
        
            sections[current].classList.remove("visible");
            current++;
            sections[current].classList.add("visible");
        });
    });
});
const slideButtons = document.querySelectorAll("[data-slide-button]")

//after each click this checks which button was pressed
slideButtons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.slide-button === "next" ? 1 : -1
        const slides = button
            .closest("[data-slideshow]")
            .querySelector("[data-slides]")
        const showingSlide = slides.querySelector("[data-active]")
        //sets which slide should be active and loops the slide after last and first
        let newIndex = [...slides.children].indexOf(showingSlide) + offset
        if ( newIndex < 0 ) newIndex = slides.children.length - 1
        if ( newIndex >= slides.children.length ) newIndex = 0
        
        //adds and removes the active data tag
        slides.children[newIndex].dataset.active = true
        delete showingSlide.dataset.active
    })
});
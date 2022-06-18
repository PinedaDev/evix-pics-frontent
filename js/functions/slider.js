let slider_wrap = document.querySelector(".slider-wrapper")
let hero = document.querySelector(".hero")
let slider = document.querySelector(".slider")
let clones_width;
let slider_width;
let clones = []
let scroll_pos;
let items = [...document.querySelectorAll(".slider-item")]
let images = [...document.querySelectorAll(".img-div")]

images.forEach((image, idx) => {
    image.style.backgroundImage = `url(./assets/gallery/categories/${idx + 1}.jpg)`
})

function create_clones() {
    items.forEach(item => {
        let clone = item.cloneNode(true);
        clone.classList.add("clone");
        slider.appendChild(clone);
        clones.push(clone);
    })
}

create_clones()

function get_clones_width() {
    let width = 0;
    clones.forEach(clone => {
        width += clone.offsetWidth;
    })
    return width
}

function get_scroll_pos_phone() {
    return slider_wrap.scrollLeft;
}
function get_scroll_pos_pc() {
    return window.scrollY;
}


function calculate_dimensions() {
    slider_width = slider.getBoundingClientRect().width;
    clones_width = get_clones_width();
}

function scroll_update_phone() {
    scroll_pos = get_scroll_pos_phone();

    if (clones_width + scroll_pos >= slider_width) {
        slider_wrap.scrollLeft = 1
    } else if (scroll_pos <= 0) {
        slider_wrap.scrollLeft = slider_width - clones_width - 1
    }
    requestAnimationFrame(scroll_update_phone)
}

function scroll_update_pc() {
    scroll_pos = get_scroll_pos_pc();

    if (clones_width + scroll_pos >= slider_width) {
        window.scrollTo({ top: 1 })
    } else if (scroll_pos <= 0) {
        window.scrollTo({ top: slider_width - clones_width - 1 })
    }

    slider.style.transform = `translateX(${-window.scrollY}px)`

    requestAnimationFrame(scroll_update_pc)
}

function onLoad() {
    calculate_dimensions()
    // change the scrolling method in function with the device
    if (window.innerWidth <= 768) {
        slider_wrap.scrollLeft = 1
        scroll_update_phone();
    } else {
        create_clones()
        create_clones()
        slider_wrap.style.overflow = "hidden"
        document.body.style.height = `${slider_width}px`
        hero.style.position = "fixed"
        hero.style.width = "100vw"
        window.scrollTo({ top: 1 })
        scroll_update_pc();
    }

}


onLoad()
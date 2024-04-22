const menuIcon = document.querySelector(".menuIcon")
const menulist = document.querySelector(".menulist")

menuIcon.addEventListener("click", function () {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overFlowHidden")
    document.querySelector(".menuIcon").classList.toggle("cross")
})
$('.slider_responsiv').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
$('.team_slider').slick({
    dots: true,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
// ==============active-class-for hero travel box=======
function toggleClass() {
    const btnn = document.getElementById('btnn');
    btnn.classList.toggle("active");
}
$(document).ready(function () {
    $('.Travel_link').on('click', function () {
        $('.Travel_link').removeClass('active');
        $(this).addClass('active');
    })
});

// back-to-top
const topBtn = document.querySelector(".topBtn");
const show = document.querySelector(".show");

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
})
topBtn.addEventListener("click", function () {
    document.documentElement.scrollTop = 0;
});


// ==============chng date and month

const monthNames = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const shownDate = document.querySelector("#data");
const topArrow = document.getElementById("topArrow");
const downArrow = document.getElementById("downArrow");

const currentDate = new Date(2024, 5, 29);
function updateData() {
    const newDate = currentDate.getDate()
    const month = currentDate.getMonth();
    shownDate.innerHTML = `${monthNames[month]} ${newDate}`
}
updateData()

topArrow.addEventListener("click", function () {
    currentDate.setDate(currentDate.getDate() + 1);
    updateData()
})
downArrow.addEventListener("click", function () {
    currentDate.setDate(currentDate.getDate() - 1);
    updateData()
})


const Monthname = ["Jan", "Feb", "Mar", "April", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
const data = document.getElementById("Data");
const Top = document.getElementById("Top");
const Down = document.getElementById("Down");

const date = new Date(2024, 5, 29);
function mydata() {
    const newdate = date.getDate()
    const months = date.getMonth();
    data.innerHTML = `${Monthname[months]} ${newdate}`
}
mydata()

Top.addEventListener("click", function () {
    date.setDate(date.getDate() + 1);
    mydata()
})
Down.addEventListener("click", function () {
    date.setDate(date.getDate() - 1);
    mydata()
})


// preloder
const Preload = document.getElementById("preload")
setTimeout(() => {
    Preload.classList.add("d-none")
}, "2000");
AOS.init({
    duration: 1200,
})




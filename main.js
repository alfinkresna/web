let intro = document.querySelector('.intro','.i');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
            });
            setTimeout(()=>{
                logoSpan.forEach((span, idx)=>{
                    setTimeout(()=>{
                        span.classList.remove('active');
                        span.classList.add('fade');
                    }, (idx + 1) * 50)
                    })
                },2000);

                setTimeout(()=>{
                    intro.style.top = '-100vh';
                }, 2300)
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const revealerNav = window.revealer({
        revealElementSelector: ".nav-js",
        options: {
            anchorSelector: ".nav-btn-js",
        },
    });

    const actionBtn = document.querySelector(".nav-btn-js");
    actionBtn.addEventListener("click", () => {
        if (!revealerNav.isRevealed()) {
            revealerNav.reveal();
            actionBtn.setAttribute("data-open", true);
        } else {
            revealerNav.hide();
            actionBtn.setAttribute("data-open", false);
        }
    });
});

var icon = document.getElementById("icon");
icon.onclick = function() {
document.body.classList.toggle("dark-theme");
if(document.body.classList.contains("dark-theme")){
    icon.src = "img/sun.png";
}else{
    icon.src = "img/moon.png";
}
}
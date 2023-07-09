let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
} 

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
} 


window.addEventListener('load', function() {
    var progress = document.querySelector('.progress');
    var progressValue = 0;
    var interval = setInterval(increaseProgress, 50);

    function increaseProgress() {
        if (progressValue >= 85) {
            clearInterval(interval);
        } else {
            progressValue++;
            progress.style.width = progressValue + '%';
        }
    }
});

window.addEventListener('load', function() {
    var progress2 = document.querySelector('.progress2');
    var progress2Value = 0;
    var interval = setInterval(increaseProgress2, 50);

    function increaseProgress2() {
        if (progress2Value >= 70) {
            clearInterval(interval);
        } else {
            progress2Value++;
            progress2.style.width = progress2Value + '%';
        }
    }
});

window.addEventListener('load', function() {
    var progress3 = document.querySelector('.progress3');
    var progress3Value = 0;
    var interval = setInterval(increaseProgress3, 50);

    function increaseProgress3() {
        if (progress3Value >= 60) {
            clearInterval(interval);
        } else {
            progress3Value++;
            progress3.style.width = progress3Value + '%';
        }
    }
});

window.addEventListener('load', function() {
    var progress4 = document.querySelector('.progress4');
    var progress4Value = 0;
    var interval = setInterval(increaseProgress4, 40);

    function increaseProgress4() {
        if (progress4Value >= 40) {
            clearInterval(interval);
        } else {
            progress4Value++;
            progress4.style.width = progress4Value + '%';
        }
    }
});

window.addEventListener('load', function() {
    var progress5 = document.querySelector('.progress5');
    var progress5Value = 0;
    var interval = setInterval(increaseProgress5, 40);

    function increaseProgress5() {
        if (progress5Value >= 40) {
            clearInterval(interval);
        } else {
            progress5Value++;
            progress5.style.width = progress5Value + '%';
        }
    }
});

function goToNextPage() {
    window.location.href = "solidworks portfolio/solidworks portfolio.html";
  }
const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s'),
    hoursElectronic = document.querySelector('.hours'),
    minutesElectronic = document.querySelector('.minutes');

function clock() {

    let time = new Date(),
        second = time.getSeconds() * 6,
        minutes = time.getMinutes() * 6,
        hours = time.getHours() * 30

    hour.style = `transform: rotate(${hours}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    sec.style = `transform: rotate(${second}deg)`;

    hoursElectronic.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minutesElectronic.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()

    setTimeout(() => clock(), 1000);

}

clock();

const links = document.querySelectorAll('.tabsItem'),
    tab = document.querySelectorAll('.tabsContentItem');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
        e.preventDefault();
        for (let ix = 0; ix < tab.length; ix++) {
            links[ix].classList.remove('active');
            tab[ix].classList.remove('active');
        }
        tabs(links[i], tab[i])
    })
}

function tabs(el, arr) {

    el.classList.add('active');
    arr.classList.add('active');
}

var start = document.querySelector(".stopwatch__btn"),
    SekHour = document.querySelector(".stopwatch__hours"),
    SekMin = document.querySelector(".stopwatch__minutes"),
    SekSekond = document.querySelector(".stopwatch__seconds");
    start.addEventListener('click', function () {
        SekundOmer()
    })
        minuts = SekMin.innerHTML ,
        hours = SekHour.innerHTML ,
        seconds = SekSekond.innerHTML;
    function SekundOmer() {
        // seconds =  SekSekond.innerHTML;

        seconds++;
        if ( seconds == 60) {
            seconds = 0;
            minuts++;
        }
        if (minuts == 60) {
            minuts = 0;
            hours++;
        }
        
        SekSekond.innerHTML = seconds;
        SekMin.innerHTML = minuts;
        SekHour.innerHTML = hours;
        
        console.log(hours);
        console.log(minuts);
        console.log(seconds)
            
        setTimeout(() => SekundOmer(), 1000);  
    }
    // function SekundOmer() {
    //     // seconds =  SekSekond.innerHTML;
    //     let minuts = SekMin.innerHTML ,
    //     hours = SekHour.innerHTML ,
    //     seconds = SekSekond.innerHTML;
    //     seconds++;
    //     if ( seconds == 60) {
    //         seconds = 0;
    //     }
    //     if ( seconds == 60) {
    //         seconds = 0;
    //         minuts++;
    //     }
    //     if (minuts == 60) {
    //         minuts = 0;
    //         hours++;
    //     }
        
    //     console.log(hours);
    //     console.log(minuts);
    //     console.log(seconds)
        
    //     setTimeout(() => SekundOmer(), 1000);  
    // }    

    // start.addEventListener('click', function sekundomer() {
        
    // })

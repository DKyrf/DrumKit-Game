const drums = document.querySelectorAll('.drum');

drums.forEach((el)=>{

    el.addEventListener('click', ()=>{
        var drumInnerHTML = el.innerHTML;
        tapOnDrum(drumInnerHTML);
        animation(drumInnerHTML);


    })
});


const tapOnDrum = (key)=>{
    switch (key) {
        case "w":
            var drum1 = new Audio("sounds/tom-1.mp3");
            drum1.play();
            break;

        case "a":
            var drum2 = new Audio("sounds/tom-2.mp3");
            drum2.play();
            break

        case "s":
            var drum3 = new Audio("sounds/tom-3.mp3");
            drum3.play();
            break

        case "d":
            var drum4 = new Audio("sounds/tom-4.mp3");
            drum4.play();
            break

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break
            
    
        default:
            console.log('Default value of tapOn Drum function')
            break;
    }
}


document.addEventListener('keydown', (e)=>{
    tapOnDrum(e.key);
    animation(e.key)
});

const animation = (select)=>{
    var animatedAction = document.querySelector('.' + select);
    animatedAction.classList.add('pressed');
    setInterval(()=>{
        animatedAction.classList.remove('pressed')
    }, 100)
}



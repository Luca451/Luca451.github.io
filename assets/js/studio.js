/*
3MI 
DAW Interaction
*/


// STEP SEQUENCER

const steps = document.querySelectorAll(".steps span");


steps.forEach(step => {


    step.addEventListener("click", () => {


        step.classList.toggle("active");


    });


});









// PLAY BUTTON


const playButton = document.querySelector(".play");


let playing = false;


playButton.addEventListener("click", () => {


    playing = !playing;


    if(playing){


        playButton.style.background = "#00ff88";

        playButton.innerHTML = "❚❚";


        startAnimation();


    }

    else {


        playButton.style.background = "#ff8a00";

        playButton.innerHTML = "▶";


    }



});









// PLAYHEAD ANIMATION


function startAnimation(){


    if(!playing){

        return;

    }


    const clips = document.querySelectorAll(".clip");


    clips.forEach((clip,index)=>{


        setTimeout(()=>{


            clip.style.filter =
            "brightness(1.8)";


            setTimeout(()=>{


                clip.style.filter =
                "brightness(1)";


            },200);



        },index*300);



    });



    setTimeout(startAnimation,1000);


}









// MIXER ANIMATION


const meters = document.querySelectorAll(".fader");


function moveMeters(){


    meters.forEach(meter=>{


        let height =
        Math.floor(Math.random()*120)+60;


        meter.style.height =
        height+"px";


    });



}


setInterval(moveMeters,500);









// PIANO NOTES CLICK


const notes = document.querySelectorAll(".note");


notes.forEach(note=>{


    note.addEventListener("click",()=>{


        note.style.background =
        "#00ff88";


        setTimeout(()=>{


            note.style.background =
            "#ff8a00";


        },300);



    });



});









// MENU BUTTONS


const buttons =
document.querySelectorAll(".mainButtons button");


buttons.forEach(button=>{


    button.addEventListener("click",()=>{


        alert(
        button.innerText +
        " Menü geöffnet"
        );


    });


});
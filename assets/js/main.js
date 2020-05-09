document.addEventListener("keydown", function (event) {
    if(event.code === "KeyA"){
        let audio = new Audio("assets/audio/A.mp3");
        audio.play();
    } else if (event.code === "KeyS"){
        let audio = new Audio("assets/audio/S.mp3");
        audio.play();
    } else if (event.code === "KeyD"){
        let audio = new Audio("assets/audio/D.mp3");
        audio.play();
    } else if (event.code === "KeyF"){
        let audio = new Audio("assets/audio/F.mp3");
        audio.play();
    } else if (event.code === "KeyG"){
        let audio = new Audio("assets/audio/G.mp3");
        audio.play();
    } else if (event.code === "KeyH"){
        let audio = new Audio("assets/audio/H.mp3");
        audio.play();
    } else if (event.code === "KeyJ"){
        let audio = new Audio("assets/audio/J.mp3");
        audio.play();
    }  else if (event.code === "KeyW"){
        let audio = new Audio("assets/audio/W.mp3");
        audio.play();
    }  else if (event.code === "KeyE"){
        let audio = new Audio("assets/audio/E.mp3");
        audio.play();
    }  else if (event.code === "KeyT"){
        let audio = new Audio("assets/audio/T.mp3");
        audio.play();
    }  else if (event.code === "KeyY"){
        let audio = new Audio("assets/audio/Y.mp3");
        audio.play();
    }  else if (event.code === "KeyU"){
        let audio = new Audio("assets/audio/U.mp3");
        audio.play();
    } else{
        console.log("unbound key was pressed");
    }
})
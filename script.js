// ❤️ Floating Hearts Background

const bg = document.querySelector(".background-hearts");

const emojis = ["❤️","💖","💕","💗","💘","💝"];

function createHeart(){

    const heart = document.createElement("span");

    heart.classList.add("floating-heart");

    heart.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (18 + Math.random()*28) + "px";

    heart.style.animationDuration = (5 + Math.random()*4) + "s";

    bg.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,250);


// ⏳ Countdown Button

const btn = document.getElementById("continueBtn");

let seconds = 5;

btn.disabled = true;

btn.innerHTML = `Please Wait... (${seconds})`;

const timer = setInterval(()=>{

    seconds--;

    if(seconds>0){

        btn.innerHTML = `Please Wait... (${seconds})`;

    }

    else{

        clearInterval(timer);

        btn.disabled = false;

        btn.innerHTML = "Continue 🥺";

    }

},1000);


// ❤️ Button Click

btn.addEventListener("click",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="yes.html";

    },700);

});
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.onclick = () => {

    document.body.innerHTML = `
    
    <div class="success-page">

        <div class="heart">❤️</div>

        <h1>LOVEEE U BKC..MUWAHHHHHHH BHAAHAAAHHAHA Thank You MA LIL BISSSSSSS ❤️</h1>

        <h2>u just made me da happiest person.</h2>

        <p>

        n ik one website kant erase ma mistake...

        But m on ma words I'll never stop loving u,
        choosing u,
        n protecting yo heart.

        Forever Yours ❤️

        </p>

    </div>

    `;

    startHearts();

};

noBtn.addEventListener("mouseover",()=>{

    noBtn.style.position="absolute";

    noBtn.style.left=Math.random()*80+"vw";

    noBtn.style.top=Math.random()*80+"vh";

});

function startHearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-20px";

heart.style.fontSize=(20+Math.random()*30)+"px";

heart.style.transition="5s linear";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.top="110vh";

},50);

setTimeout(()=>{

heart.remove();

},5000);

},250);

}
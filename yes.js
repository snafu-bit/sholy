const envelope = document.getElementById("envelope");
const letterBox = document.getElementById("letterBox");
const typing = document.getElementById("typing");
const nextBtn = document.getElementById("nextBtn");

const letter = `Ma lil bisssssssssss❤️

kal jo hua uska mujhe zainwnly regret h. 

main bina bataye so gaya aur us ek glti ki wjh se u hurt ho kaffi

hate da i made u feel dat way.....wen i fell asleep witout tellin' u, i wasn't thinkin' bout how u might feel. i was bein' selfish n not thinkin' bout u
i was unknowingly makin' da person i lob sit there wit worry in her heart.

da thought dat u were wetting, overthinkin, or feeling alone honestly hurts me😓😓💔💔

i nvr wan u to q yo place in ma lyf cz of ma mistake. if i could go back, i'd tell u before closing ma eyes...jussss so u could sleep peacefully too.

m so much sorrryyyyyy for makin u dat anixety...plzzz don ever think ma silence means i careless.I
ILL DO IT BTTR CZ YO PEACE, HEART, YO LOB FUKIN' EVRTHING MATTERS TO ME.

I WON TO BE DA REASON BEHIND YO TEARS OR YO OVERTHINKING...I WAN TO BE DA REASON YO FEEEL, LOBED, AT HOME'me'


I love you forever bissssssssssssssssss ❤️`;

letterBox.style.display = "none";

envelope.onclick = function () {

    document.querySelector(".envelope-container").style.display = "none";

    letterBox.style.display = "block";

    typing.innerHTML = "";

    let i = 0;

    function type(){

        if(i < letter.length){

            typing.innerHTML += letter.charAt(i);

            i++;

            setTimeout(type,30);

        }

    }

    type();

};

nextBtn.onclick = function () {
    window.location.href = "memories.html";
};
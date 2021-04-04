// Traditions
let btnTraditions = document.querySelector('.btn-show-more-traditions');
let pTraditions = document.querySelector('.traditions-p');



function showMoreInfoT(){
    pTraditions.innerHTML+=`<p>Experienced revelers know to bring a large bag with them so they
    can haul away all the beads and trinkets they will catch from the parades!

    Every year, we get a lot of questions about how it all begin, and how the traditions have
    changed. Click on the buttons below to find out the answers to some of the most frequently
    asked questions.
</p>`;

btnTraditions.replaceWith("");
}
btnTraditions.addEventListener('click',showMoreInfoT);

// indians

let btnIndians = document.querySelector('.btn-show-more-indians');
let pIndians = document.querySelector('.indians-p');



function showMoreInfoI(){
    pIndians.innerHTML+=` <p class="">
    Traditional Mardi Gras organizations form a "krewe." A krewe often names their parade after
    a particular Roman or Greek mythological hero or god. The ranking structure of a Mardi Gras
    Krewe is a parody of royalty: King, Queen, Dukes, Knights and Captains, or some variation of
    that theme. Many of the more established krewes allow membership by invitation only.
</p>`;

btnIndians.replaceWith("");
}
btnIndians.addEventListener('click',showMoreInfoI);

// twelifth

let btnTwelifth = document.querySelector('.btn-show-more-twelifth');
let pTwelifth = document.querySelector('.twelifth-p');



function showMoreInfoTw(){
    pTwelifth.innerHTML+=` <p class="">
    In places where Carnival is not practiced, Twelfth Night is just another winter evening, but
    in New Orleans, the night is alive with subtle native rituals that are still spared the
    gaudiness and encroaching commercialism found as the season reaches its end on Mardi Gras.
    For almost a century and a half, The Twelfth Night Revelers have held their society ball on
    that evening, quietly and privately recognizing the season.
</p>`;

btnTwelifth.replaceWith("");
}
btnTwelifth.addEventListener('click',showMoreInfoTw);

// cake


let btnCake = document.querySelector('.btn-show-more-cakes');
let pCake = document.querySelector('.cakes-p');



function showMoreInfoC(){
    pCake.innerHTML+=` <p class="">
    In places where Carnival is not practiced, Twelfth Night is just another winter evening, but
    in New Orleans, the night is alive with subtle native rituals that are still spared the
    gaudiness and encroaching commercialism found as the season reaches its end on Mardi Gras.
    For almost a century and a half, The Twelfth Night Revelers have held their society ball on
    that evening, quietly and privately recognizing the season.
</p>`;

btnCake.replaceWith("");
}
btnCake.addEventListener('click',showMoreInfoC);

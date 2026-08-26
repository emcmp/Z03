
// Écouteurs d'événements (Rien à ajouter)
function init(){

    document.querySelector(".jouer").addEventListener("click", jouer);

}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 1 : Compléter la fonction capturer()
//
// Cette fonction permettra de changer l'apparence d'un poisson lorsqu'il
// sera capturé. Le paramètre classe contient la classe du poisson cliqué
// précédée d'un point. (Ex : ".fish1" ou ".fish4" ou ".fish17", etc.)
//
// Remplacez la source de l'image de l'élément dont la classe a été reçu en
// paramètre par "images/caught_fish.png". De plus, ajoutez-lui aussi la classe
// "capture".
//
// Pour tester ce TODO, cliquez sur des poissons : ils sont censés perdre de
// l'opacité et être recouverts d'un gros ❌.
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function capturer(classe){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// TODO 2 : Compléter la fonction jeuFini()
//
// Cette fonction doit retourner true si le jeu est terminé (tous les poisons
// ont été cliqués) et retourner false sinon.
//
// Pour vérifier si tous les poissons ont été cliqués, il faudra parcourir
// tous les éléments avec les classes .fish1, .fish2, ..., jusqu'à .fish20.
// S'il y en a AU MOINS UN qui ne POSSÈDE PAS la classe "capture", c'est que
// la partie n'est pas terminée.
//
// Pour tester ce TODO, jouez au jeu et cliquez sur tous les poissons : un 
// message de fin de partie devrait apparaître si vous avez bien codé jeuFini().
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

function jeuFini(){



}

// ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
// ⛔ Ne pas modifier le code à partir d'ici
// ▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

let zLooper = null;
let zFish = [];

function jouer(){

    if(zLooper != null){
        for(let f of zFish) f.speed = f.speed / 2;
        return;
    }

    document.querySelector(".jouer").textContent = "Verser du tranquilisant dans l'eau";

    let i = 1;
    while(i < 21){

        let size = Math.ceil(Math.random() * 180) + 20;
        if(size > 50 && size <= 100) size = Math.random() > 0.5 ? size / 2 : size;
        else if(size > 100) size = Math.random() > 0.1 ? size / 3 : size;
        zFish.push(new Fish(Math.random() * (800 - size), Math.random() * (450 - size), size, 1 + Math.random() * 15, i));
        i += 1;

    }

    zLooper = setInterval(updateGame, 25);

}

function updateGame(){

    if(jeuFini()){
        clearInterval(zLooper);
        zLooper = null;
        for(let f of zFish) f.elem.remove();
        zFish = [];
        document.querySelector(".jouer").textContent = "Jouer";
        alert("Félicitations ! 🎣");
    }

    for(let f of zFish) f.update();

}

class Fish{

    constructor(x, y, size, speed, number){
        this.pos = new Vector2(x,y);
        this.size = size;
        this.speed = speed;
        this.angle = Math.random() * 4;
        this.velocity = reverseDiamondAngleSemiNormalized(this.angle);

        this.elem = document.createElement("img");
        this.elem.src = "images/fish.png";
        this.elem.width = size;
        this.elem.classList.add("fish" + number);
        this.elem.style.left = Math.floor(this.pos.x + "px");
        this.elem.style.top = Math.floor(this.pos.y + "px");
        this.elem.addEventListener("click", function(){ capturer(`.fish${number}`) });
        this.elem.style.zIndex = Math.floor(201 - this.size);
        this.elem.draggable = false;
        document.querySelector("#jeu").appendChild(this.elem);
    }

    update(){

        if(this.elem.classList.contains("capture")) return;

        this.angle += (Math.random() * 0.2) - 0.1;
        if(this.angle < 0) this.angle += 4;
        if(this.angle >= 4) this.angle -= 4;
        this.velocity = reverseDiamondAngleSemiNormalized(this.angle);
        
        let newX = this.pos.x + this.velocity.x * this.speed;
        let newY = this.pos.y + this.velocity.y * this.speed;
        if(newX < 0 || newX + this.size > 800) this.velocity.x = -this.velocity.x;
        if(newY < 0 || newY + this.size > 450) this.velocity.y = -this.velocity.y;

        this.angle = diamondAngle(this.velocity);

        this.pos.x = clamp(this.pos.x + this.velocity.x * this.speed, 0, 800 - this.size);
        this.pos.y = clamp(this.pos.y + this.velocity.y * this.speed, 0, 450 - this.size);
        this.elem.style.left = Math.floor(this.pos.x) + "px";
        this.elem.style.top = Math.floor(this.pos.y) + "px";
    }

}

class Vector2{

    constructor(x, y){
        this.x = x;
        this.y = y;
    }

}

function diamondAngle(v)
{
    if (v.y >= 0) return v.x >= 0 ? v.y / (v.x + v.y) : 1 - v.x / (-v.x + v.y);
    else return v.x < 0 ? 2 - v.y / (-v.x - v.y) : 3 + v.x / (v.x - v.y);
}

function reverseDiamondAngleSemiNormalized(angle)
{
    let v = new Vector2(0,0);
    if (angle < 2){
        v.x = 1 - angle;
        v.y = angle < 1 ? angle : 2 - angle;
    }
    else{
        v.x = angle - 3;
        v.y = angle < 3 ? 2 - angle : angle - 4;
    }

    let multFactor = (0.5 - Math.abs(0.5 - angle % 1));
    v.x *= multFactor + 1;
    v.y *= multFactor + 1;
    
    return v;
}

function clamp(value, min, max){
    return Math.min(Math.max(value, min), max);
}
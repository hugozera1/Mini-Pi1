function tocarSom() {
    var audio = document.getElementById("audio");
    audio.currentTime= 0;
    audio.play();
    var imagem = document.getElementById("imagem");
    imagem.style.transform = "scale(1.2)";
    setTimeout(function() {
        imagem.style.transform = "scale(1)";
      }, 250);
  }
  function trocarImagem() {
    const torch = document.getElementById("redstone");
    if (torch.src.match("redstoneoff")) {
        torch.src = "/assets/redstonetorch.webp";
    } else {
        torch.src = "/assets/redstoneoff.webp";
    }
    var audio = document.getElementById("audio2");
    audio.play();
    audio.currentTime= 0.2;

}
function OnOff(){
    const torch = document.getElementById("redstone");
    const lamp = document.getElementById("lamp");
    if (torch.src.match("redstoneoff")){
        lamp.src = "/assets/lamp.webp";

    } else {
        lamp.src = "/assets/lampon.webp";
    }
    
    
}
function audioporco(){
    var audio = document.getElementById("audiopig");
    audio.play();
}
function audiosheep(){
    const sheep = document.getElementById("shep");
    sheep.src = "/assets/sheep2.webp";

    var audio = document.getElementById("shearsound");
    audio.play();

}
function audiocreeper(){
    var audio = document.getElementById("crepsound");
    audio.play();
}


const craftingTableImg = document.getElementById('crafting-table-img');
const craftMenu = document.getElementById('craft-menu');
craftingTableImg.addEventListener('click', function() {
    if (craftMenu.style.display === 'none') {
        craftMenu.style.display = 'block';
    } else {
        craftMenu.style.display = 'none';
    }
});


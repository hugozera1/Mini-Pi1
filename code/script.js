function tocarSom() {
    var audio = document.getElementById("audio");
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

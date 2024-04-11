function tocarSom() {
    var audio = document.getElementById("audio");
    audio.play();
    var imagem = document.getElementById("imagem");
    imagem.style.transform = "scale(1.2)";
    setTimeout(function() {
        imagem.style.transform = "scale(1)";
      }, 250);
  }
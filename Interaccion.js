let menuVisible = false

function mostrarOcultarMenu(){
  if(menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false
    
  } else {
    document.getElementById("nav").classList ="responsive";
    menuVisible = true;
  }
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades(){
    var skill = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300){
        let habilidades = document.getElementsByClassName ("progreso")
        habilidades[0].classList.add("mano");
        habilidades[1].classList.add("vista");
        habilidades[2].classList.add("concentracion");
        habilidades[3].classList.add("presion");
        habilidades[4].classList.add("detalle");
        habilidades[5].classList.add("equipo");
        habilidades[6].classList.add("dedicacion");
        habilidades[7].classList.add("autosuperacion");
        habilidades[8].classList.add("creaividad");
        habilidades[9].classList.add("comunicacion");
    }
}
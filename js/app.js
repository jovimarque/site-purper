
function DarkMode(){
  //adiciona ou remove a classe .darkmode do elemento body
  document.body.classList.toggle('darkmode');
 
 //verifica se o modo escuro está ativado ou não  
 let h6Element = document.getElementById('h6name');
 let navElement = document.getElementsByClassName('nav-link');
 let darkModeButton = document.getElementById("darkModeButton");
  if(document.body.classList.contains('darkmode')){
      //se o modo escuro estiver ativado, altera o texto  para modo claro
      darkModeButton.textContent = "Modo claro";
      h6Element.style.color = "#000000";
      navElement.style.color ="#ffffff";

  }else{
    //se o modo escuro estiver ativado, altera o texto  para modo escuro 
    darkModeButton.textContent = "Modo escuro";
    h6Element.style.color = "#8a8aee";
  } 

  
}
 

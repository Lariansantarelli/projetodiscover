function toggleMode(){
const html = document.documentElement

/*
if(html.classList.contains('light')){
html.classList.remove('light')
} else{
  html.classList.add('light')
}

Isso é o que teria que fazer, porém já existe uma aplicação a seguir que faz tudo isso sozinho
}*/

html.classList.toggle('light')

//pegar a tag image
const img= document.querySelector('#profile img')
//substituir a imagem
if(html.classList.contains('light')){
// se tiver light mode, selecionar a imagem light
img.setAttribute("src", './assets/avatar-light.png')
} else{
img.setAttribute('src', './assets/avatar.png')

//se tiver sem light mode, manter a imagem normal
}
}
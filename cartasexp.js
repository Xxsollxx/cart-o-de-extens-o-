const paineis = document.querySelectorAll('.segundo')

paineis.forEach(segundo =>{
    segundo.addEventListener('click',() =>{
        removeactiveclasses()
        segundo.classList.add('active')
    })
})
function removeactiveclasses (){
    paineis.forEach(segundo => {
        segundo.classList.remove('active')
    })
}
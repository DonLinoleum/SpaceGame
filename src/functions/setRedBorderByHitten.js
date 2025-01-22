export function setRedBorderByHitten()
{
    let border = document.querySelector('.border_by_hitten')
    border.classList.remove('none-border-by-hitten')
    border.classList.add('red-border-by-hitten')
    
    setTimeout(()=>{
        border.classList.remove('red-border-by-hitten')
        border.classList.add('none-border-by-hitten')
    },400)
}
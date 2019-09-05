document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('select')
    const reset = document.getElementById('reset')
    const list = document.getElementById('list')
    const chosen = document.getElementById('chosen')

    btn.addEventListener('click', () => {
        let rnd = Math.floor(Math.random() * 15)
        list.children[rnd].style.background = 'lightgrey'
        list.children[rnd].style.fontSize = '180%'
        chosen.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;选中的玩家：" + list.children[rnd].innerHTML
    })

    reset.addEventListener('click', () => {
        window.location = window.location
    })
})
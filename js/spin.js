const spin = document.querySelector('#spin')
const modal = document.querySelector('#modal')
const content = document.querySelector('#modal-content')
const close = document.querySelector('#close')
const winnerRes = document.querySelector('#winner')
let turns = 16

const spinRoulete = () => {
    let deg = Number(Math.random().toFixed(2))
    
    const results = textarea.value.split('\n').filter(item => item).reverse()
    let regions = results.map(() => '')
    
    const portion = (100 / regions.length) / 100
    regions = regions.map((item, i) => portion * (i))
    
    // deg = 1
    let winner = 0
    regions.forEach((item, i, arr) => {
        // console.log(deg > item)
        if (deg < arr[i + 1] && deg >= item) {
            winner = i
        } else if (i == arr.length - 1) {
            if (deg >= item) {
                winner = i
            }
        }
    })
    
    console.log(deg, regions, winner, results[winner])

    canvas.style = `transform: rotate(${deg + turns}turn)`

    spin.removeEventListener('click', spinRoulete)
    textarea.setAttribute('disabled', 'true')

    canvas.addEventListener('transitionend', () => {
        setTimeout(() => {
            spin.addEventListener('click', spinRoulete)
            textarea.removeAttribute('disabled')
            modal.classList.replace('hidden', 'flex')
            content.classList.add('animate-show')
            winnerRes.textContent = results[winner]
        }, 300)
    })
    
    // console.log(deg + turns, random)
    turns += 16
}

close.addEventListener('click', () => {
    modal.classList.replace('flex', 'hidden')
})

spin.addEventListener('click', spinRoulete)
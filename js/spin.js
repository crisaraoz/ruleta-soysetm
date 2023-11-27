const spin = document.querySelector('#spin')
let turns = 16

spin.addEventListener('click', () => {
    let deg = Number(Math.random().toFixed(2))
    
    const results = textarea.value.split('\n').filter(item => item).reverse()
    let regions = results.map(() => '')
    
    const portion = (100 / regions.length) / 100
    regions = regions.map((item, i) => portion * (i))
    
    // deg = 16
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
    
    // console.log(deg + turns, random)
    turns += 16
})
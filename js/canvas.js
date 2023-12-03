const canvas = document.getElementById('roulete')
const ctx = canvas.getContext('2d')
const textarea = document.querySelector('#textarea')
const container = document.querySelector('#roulete-c')
const warning = document.querySelector('#warning')

const colors = ['#E11D48', '#0284C7']

function resizeCanvas() {
    const containerWidth = container.clientWidth
    const body = document.querySelector('body')
    // console.log(containerWidth);
    if (body.clientWidth < 749) {
        canvas.width = containerWidth
        canvas.height = canvas.width
    } else {
        canvas.width = 650
        canvas.height = 650
    }

    draw()
    
}

function draw() {
    let start = 0

    const results = textarea.value.split('\n').filter(item => item)
    const len = results.length
    const deg = (Math.PI * 2) * ((100 / len) / 100)

    if (len == 0) {
        warning.classList.remove('hidden')
        warning.classList.add('flex')
    } else {
        warning.classList.add('hidden')
    }

    results.forEach((result, i) => {
        ctx.fillStyle = colors[i % 2]
        ctx.beginPath()
        ctx.moveTo(canvas.width / 2, canvas.height / 2)
        ctx.arc(canvas.width / 2, canvas.height / 2, canvas.height / 2, start, start + deg)
        ctx.closePath()
        ctx.fill()

        ctx.save()
        ctx.translate(canvas.width / 2, canvas.height / 2)
        ctx.rotate(start + deg / 2)
        const text = result
        ctx.fillStyle = 'white'
        ctx.font = '20px Arial'
        ctx.fillText(text, 50, 5)
        ctx.restore()

        start += deg
    })
}

textarea.addEventListener('input', draw)
window.addEventListener('resize', resizeCanvas)
resizeCanvas()
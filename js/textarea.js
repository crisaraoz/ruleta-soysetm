textarea.addEventListener('input', () => {
    textarea.style = `height: 65px`
    const height = textarea.scrollHeight
    textarea.style = `height: ${height}px`
})
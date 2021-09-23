const text = document.querySelector('h1')

text.addEventListener('click', (e) => {
    console.log('things')
    e.target.textContent = 'it works'
})

console.log('hit')
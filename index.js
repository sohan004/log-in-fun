document.getElementById('btn').addEventListener('click', () => {
    const input1 = document.getElementById('input-1').value
    const input2 = document.getElementById('input-2').value
    const p = document.getElementById('p')
    if (input1.length > 0 && input2.length > 0) {
        window.localStorage.setItem(input1, input2)
        p.classList.add('d-none')
        window.location.href = 'ind.html'
    }
    else{
        p.classList.remove('d-none')
    }
})
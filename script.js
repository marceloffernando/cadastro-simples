function login(event){
    event.preventDefault();
    const nome = document.querySelector('#inome').value
    const sobrenome = document.querySelector('#isobre').value
    const res = document.querySelector('#res')
    res.innerHTML = `olá ${nome} ${sobrenome}`
}
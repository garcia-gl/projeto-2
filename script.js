const avanca = document.querySelectorAll('.btm-proximo');

avanca.forEach(buton => {
   Button.addEventLitener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + history.getattribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})
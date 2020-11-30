$(document).on('click','.form__botao_submit',function(){
	var nome = $('.form__input').val()
	if(nome == ""){
		$('.form__input').addClass('erro')
		alert('Digite seu email');
		return
	} else if($('.form__input').hasClass('erro')){
		$('.form__input').removeClass('erro')
	}
});

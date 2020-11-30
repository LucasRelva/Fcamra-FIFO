$(document).on('click','.botao',function(){
	var nome = $('.nome_input').val()
	if(nome == ""){
		$('.nome_input').addClass('erro') 
		return
	} else if($('.nome_input').hasClass('erro')){
		$('.nome_input').removeClass('erro')
	}

});

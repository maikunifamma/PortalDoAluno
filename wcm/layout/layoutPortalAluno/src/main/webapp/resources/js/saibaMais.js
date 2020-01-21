$(".saibaMais").click(function() {
	var mensagem;
	var id = $('a',this).attr('id');
	id = this.id;
	
	if(id = "aDeclaracaoMatricula"){
		mensagem = "<u><b>Dúvidas frequentes:</b></u>" +
					"<br>" +
					"<br>" +
					"1-     Quando eu solicitar, uma taxa é gerada, mas é minha primeira via nesse semestre. Preciso pagar?" +
					"<br>" +
					"<u>Resposta:</u> Quando o sistema verificar que é a sua primeira via do semestre, a taxa não será gerada." +
					"<br>" +
					"<br>" +
					"2-     Preciso de uma informação específica, como proceder?" + 
					"<br>" +
					"<u>Resposta:</u> O campo “Descrição” está liberado para você descrever o que precisa que esteja na declaração." +
					"<br>" +
					"<br>" +
					"3-     Como pego minha declaração?" +
					"<br>" +
					"<u>Resposta:</u> O arquivo ficará disponível em via digital. Clique em \"Acompanhar Solicitações\", selecione o requerimento \"Declaração de Matrícula\" e clique em \"Buscar\". Após encontrar a sua solicitação, clique no botão \"Abrir Declaração de Matrícula\".";
	}
	
	FLUIGC.message.alert({
	    message: mensagem,
	    title: '',
	    size: 'large',
	    label: 'Fechar'
	});
});
$("#btnDeclaracaoMatricula").click(function(){
	if(chave != ""){
		location.href = parent.WCMAPI.getServerURL()+'/DeclaracaoMatricula?key='+chave;
	}
});

$("#btnAtividadesComplementares").click(function(){
	if(chave != ""){
		location.href = parent.WCMAPI.getServerURL()+'/AtividadesComplementares?key='+chave;
	}
});

$("#btnRevisaoFaltas").click(function(){
	if(chave != ""){
		location.href = parent.WCMAPI.getServerURL()+'/RevisaoFaltas?key='+chave;
	}
});

$("#aNavLogo").click(function(){
	location.href = 'http://fluig.famma.br/PortalAluno?key='+chave;
})

$("#btnRefreshSolics").click(function(){
	buscarSolicitacoes()
});

$("#aNavAcompanharSolic").click(()=>{
	abrirPaginaSolicitacoes();
});

$("#aFooterAcompanharSolic").click(()=>{
	abrirPaginaSolicitacoes();
});

$("#aNavHome").click(()=>{
	$("#sectionHome").show();
	$("#sectionAcompanharSolics").hide();
});

$("#aFooterHome").click(()=>{
	$("#sectionHome").show();
	$("#sectionAcompanharSolics").hide();
});

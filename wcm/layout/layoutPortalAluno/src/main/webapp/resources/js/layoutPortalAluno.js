let chave;
let Aluno;
$(()=>{
	if(location.href.toString().indexOf('AcompanharSolics') != -1){
		abrirPaginaSolicitacoes();
	}
	if(location.href.toString().indexOf('?key=') != -1){
		chave = String.raw`` + location.href.toString().split('?key=')[1];
		$.ajax({
			type: 'GET',
			url: 'http://portal.unifamma.edu.br:8080/rm/api/TOTVSEducacional/GetSession?key='+chave
		}).done(function(data){
			Aluno = data.data[0];
		});
	}else{
		$('body').hide();
		setTimeout(function(){ 
			alert("É necessario acessar a página pelo portal acadêmico");
			location.href = 'http://portal.unifamma.edu.br';
		}, 500);
		
	}
});

function verificaAnoRa(ra){
	if(parseInt(ra.substr(0,1)) <= 1){
		return '2019';
	}else if(parseInt(ra.substr(0,1)) > 1){
		return '2020';
	}
}

function carregaTabelaModalidades(ra){
	let table;
	if(verificaAnoRa(ra) === '2019'){
		table =  
			'<table class="table">' +
				'<thead>' +
					'<tr>' +
						'<th scope="col">#</th>' +
						'<th scope="col">Descrição das Atividades</th>' +
						'<th scope="col">Carga Horaria Máxima Total</th>' +
						'<th scope="col">Limite de Aproveitamento</th>' +
						'<th scope="col">Requisitos</th>' +
					'</tr>' +
				'</thead>' +
				'<tbody>' +
					'<tr>' +
						'<th scope="row">01</th>' +
						'<td>Evento científico (congresso, simpósio, ciclo de estudos) local/regional/nacional/internacional na área específica)</td>' +
						'<td>Livre</td>' +
						'<td>100%</td>' +
						'<td>Certificado de presença</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">02</th>' +
						'<td>Evento científico (congresso, simpósio, ciclo de estudos) local/regional/nacional/internacional na área correlata)</td>' +
						'<td>Livre</td>' +
						'<td>50%</td>' +
						'<td>Certificado de presença</td>' +
		      		'</tr>' +
		      		'<tr>' +
						'<th scope="row">03</th>' +
						'<td>Curso de extensão / atualização/ aperfeiçoamento na  área específica</td>' +
						'<td>Livre</td>' +
						'<td>100%</td>' +
						'<td>Certificado com aproveitamento na área </td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">04</th>' +
						'<td>Curso de extensão / atualização / aperfeiçoamento em  área correlata</td>' +
						'<td>20h</td>' +
						'<td>100%</td>' +
						'<td>Certificado com aproveitamento na área correlata</td>' +
		      		'</tr>' +
		      		'<tr>' +
						'<th scope="row">05</th>' +
						'<td>Ouvinte em defesa de dissertações, teses, monografias na área do curso (1h por audição)</td>' +
						'<td>5h</td>' +
						'<td>100%</td>' +
						'<td>Atestado de presença</td>' +
		      		'</tr>' +
		      		'<tr>' +
						'<th scope="row">06</th>' +
						'<td>Palestras em áreas específicas e correlatas (participante)</td>' +
						'<td>50h</td>' +
						'<td>100%</td>' +
						'<td>Certificado de presença</td>' +
		      		'</tr>' +
		      		'<tr>' +
						'<th scope="row">07</th>' +
						'<td>Monitoria em disciplina de graduação</td>' +
						'<td>160h</td>' +
						'<td>100%</td>' +
						'<td>Declaração do professor orientador</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">08</th>' +
						'<td>Atividades desenvolvidas nas Empresas Juniores</td>' +
						'<td>30h</td>' +
						'<td>100%</td>' +
						'<td>Certificado de participação</td>' +
		      		'</tr>' +
		      		'<tr>' +
						'<th scope="row">09</th>' +
						'<td>Projetos de iniciação científica, orientados por docentes da IES</td>' +
						'<td>300h</td>' +
						'<td>100%</td>' +
						'<td>Certificado</td>' +
		      		'</tr>' +
		      		'<tr>' +
						'<th scope="row">10</th>' +
						'<td>Projetos de extensão, orientados por docentes da IES</td>' +
						'<td>80h</td>' +
						'<td>100%</td>' +
						'<td>Certificado</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">11</th>' +
						'<td>Projetos de ensino, orientados por docentes da IES</td>' +
						'<td>Livre</td>' +
						'<td>100%</td>' +
						'<td>Certificado</td>' +
		      		'</tr>' +
		      		'<tr>' +
						'<th scope="row">12</th>' +
						'<td>Participação em comissão organizadora de evento científico das IES</td>' +
						'<td></td>' +
						'<td>100%</td>' +
						'<td>Declaração</td>' +
		      		'</tr>' +
		      		'<tr>' +
						'<th scope="row">13</th>' +
						'<td>Visitas Técnicas Pedagógicas</td>' +
						'<td>30h</td>' +
						'<td>100%</td>' +
						'<td>Certificado</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">14</th>' +
						'<td>Publicação de artigos em periódico indexado (20h por publicação)</td>' +
						'<td>Livre</td>' +
						'<td>100%</td>' +
						'<td>Declaração ou certificado</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">15</th>' +
						'<td>Comunicações banner em eventos científicos (4h por comunicação)</td>' +
						'<td>Livre</td>' +
						'<td>100%</td>' +
						'<td>Declaração ou certificado</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">16</th>' +
						'<td>Estágios em empresas, escritórios, clínicas e escolas conveniados</td>' +
						'<td>50h</td>' +
						'<td>100%</td>' +
						'<td>Declaração ou Certificado</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">17</th>' +
						'<td>Participação no Grupo de Estudos de Pesquisa e Extensão (1h por reunião)</td>' +
						'<td>20h</td>' +
						'<td>100%</td>' +
						'<td>Lista de frequência</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">18</th>' +
						'<td>Componentes curriculares cursados em outros cursos de graduação ou pós-graduação de IES credenciadas com frequência mínima de 75%</td>' +
						'<td>120h</td>' +
						'<td>100%</td>' +
						'<td>Frequência</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">19</th>' +
						'<td>Disciplinas optativas cursadas no próprio curso com frequência mínima de 75%</td>' +
						'<td>Livre</td>' +
						'<td>100%</td>' +
						'<td>Frequência</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">20</th>' +
						'<td>Outras atividades de acordo com análise do coordenador</td>' +
						'<td>50h</td>' +
						'<td>100%</td>' +
						'<td>A critério do coordenador de curso</td>' +
					'</tr>' +
				'</tbody>' +
			'</table>';
	}else{
		table =  
			'<table class="table">' +
				'<thead>' +
					'<tr>' +
						'<th scope="col">#</th>' +
						'<th scope="col">Descrição das Atividades</th>' +
						'<th scope="col">C.H. Máxima Total</th>' +
						'<th scope="col">LIMITE DE APROVEITAMENTO – AAC PROMOVIDAS PELA UNIFAMMA</th>' +
						'<th scope="col">LIMITE DE APROVEITAMENTO – AAC PROMOVIDAS POR OUTRAS INSTITUIÇÕES</th>' +
						'<th scope="col">Requisitos</th>' +
					'</tr>' +
				'</thead>' +
				'<tbody>' +
					'<tr>' +
						'<th scope="row">01</th>' +
						'<td>Evento científico (congresso, simpósio, ciclo de estudos) local/regional/nacional/internacional na área específica)</td>' +
						'<td>Livre</td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>Certificado de presença</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">02</th>' +
						'<td>Evento científico (congresso, simpósio, ciclo de estudos) local/regional/nacional/internacional na área correlata)</td>' +
						'<td>Livre</td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>Certificado de presença</td>' +
		      		'</tr>' +
		      		'<tr>' +
						'<th scope="row">03</th>' +
						'<td>Curso de extensão / atualização/ aperfeiçoamento na  área específica</td>' +
						'<td>Livre</td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>Certificado com aproveitamento na área </td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">04</th>' +
						'<td>Curso de extensão / atualização / aperfeiçoamento em  área correlata</td>' +
						'<td>20h</td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>Certificado com aproveitamento na área correlata</td>' +
		      		'</tr>' +
		      		'<tr>' +
						'<th scope="row">05</th>' +
						'<td>Ouvinte em defesa de dissertações, teses, monografias na área do curso (1h por audição)</td>' +
						'<td>5h</td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>Atestado de presença</td>' +
		      		'</tr>' +
		      		'<tr>' +
						'<th scope="row">06</th>' +
						'<td>Palestras em áreas específicas e correlatas (participante)</td>' +
						'<td>50h</td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>Certificado de presença</td>' +
		      		'</tr>' +
		      		'<tr>' +
						'<th scope="row">07</th>' +
						'<td>Monitoria em disciplina de graduação</td>' +
						'<td>160h</td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>Declaração do professor orientador</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">08</th>' +
						'<td>Atividades desenvolvidas nas Empresas Juniores</td>' +
						'<td>30h</td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>Certificado de participação</td>' +
		      		'</tr>' +
		      		'<tr>' +
						'<th scope="row">09</th>' +
						'<td>Projetos de iniciação científica, orientados por docentes da IES</td>' +
						'<td>300h</td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>Certificado</td>' +
		      		'</tr>' +
		      		'<tr>' +
						'<th scope="row">10</th>' +
						'<td>Projetos de extensão, orientados por docentes da IES</td>' +
						'<td>80h</td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>Certificado</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">11</th>' +
						'<td>Projetos de ensino, orientados por docentes da IES</td>' +
						'<td>Livre</td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>Certificado</td>' +
		      		'</tr>' +
		      		'<tr>' +
						'<th scope="row">12</th>' +
						'<td>Participação em comissão organizadora de evento científico das IES</td>' +
						'<td></td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>Declaração</td>' +
		      		'</tr>' +
		      		'<tr>' +
						'<th scope="row">13</th>' +
						'<td>Visitas Técnicas Pedagógicas</td>' +
						'<td>30h</td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>Certificado</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">14</th>' +
						'<td>Publicação de artigos em periódico indexado (20h por publicação)</td>' +
						'<td>Livre</td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>Declaração ou certificado</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">15</th>' +
						'<td>Comunicações banner em eventos científicos (4h por comunicação)</td>' +
						'<td>Livre</td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>Declaração ou certificado</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">16</th>' +
						'<td>Estágios em empresas, escritórios, clínicas e escolas conveniados</td>' +
						'<td>50h</td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>Declaração ou Certificado</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">17</th>' +
						'<td>Participação no Grupo de Estudos de Pesquisa e Extensão (1h por reunião)</td>' +
						'<td>20h</td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>Lista de frequência</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">18</th>' +
						'<td>Componentes curriculares cursados em outros cursos de graduação ou pós-graduação de IES credenciadas com frequência mínima de 75%</td>' +
						'<td>120h</td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>Frequência</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">19</th>' +
						'<td>Disciplinas optativas cursadas no próprio curso com frequência mínima de 75%</td>' +
						'<td>Livre</td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>Frequência</td>' +
					'</tr>' +
					'<tr>' +
						'<th scope="row">20</th>' +
						'<td>Outras atividades de acordo com análise do coordenador</td>' +
						'<td>50h</td>' +
						'<td>100%</td>' +
						'<td>50%</td>' +
						'<td>A critério do coordenador de curso</td>' +
					'</tr>' +
				'</tbody>' +
			'</table>';
	}
	return table;
}

function abrirPaginaSolicitacoes(){
	$("#sectionHome").hide();
	$("#sectionAcompanharSolics").show();
}

function buscarSolicitacoes(){
	if($("#selectSolicitacoes option:selected").val() != ""){
		$("#selectSolicitacoes").css('border-color', '#CED4DA');
		appendaSolicitacoes(Aluno.RA, $("#selectSolicitacoes option:selected").val());
	}else{
		$("#selectSolicitacoes").css('border-color', '#F74949');
	}
}

function appendaSolicitacoes(ra, nomeProcesso){
	var myLoading = FLUIGC.loading(window , {
	    textMessage:  'Buscando solicitações',
	});
	myLoading.show();
	
	let oauth = OAuth({
	    consumer: {
	        key: 'e3fe3d72-bfcc-4552-8c9b-93c66531dab9',
	        secret: '6bd0591b-73d8-4a9e-a161-d54dd92d3172-5a21991e-453f-4ea1-b80c-f42d4c57759d'
	    },
	    signature_method: 'HMAC-SHA1',
	    hash_function: function(base_string, key) {
	        return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
	    },
	    nonce_length: 6
	});
	
	let request_data = {
		url: parent.WCMAPI.getServerURL()+'/api/public/ecm/dataset/search?datasetId=dsSolicitacoesPortalAluno&filterFields=RA,'+ra+',NOMEPROCESSO,'+nomeProcesso,//&filterValues='+ra+','+nomeProcesso,
		method: 'GET',
	};
	
	let token = {
			key: '16d054b7-bb05-4de1-82b3-af0ac353cf47',
    		secret: '391c916f-4e02-406b-b7fd-096d8b2acb836390cd36-996d-4463-8702-b6af8cd8a968'
	};
	
	$.ajax({
		url: request_data.url,
		crossDomain: true,
		async: true,
		type: request_data.method,    	
		headers: oauth.toHeader(oauth.authorize(request_data, token)),
		success : function(data) {
			let ds = data.content;
			
			ds.reverse();
			console.log(ds);
			console.log(ra,nomeProcesso);
			$("#solics").empty();
			for(i in ds){
				let numSolic = ds[i].NUMSOLIC;
				let nomeProcesso = ds[i].NOMEPROCESSO;
				let prioridade = ds[i].PRIORIDADE;
				let status = ds[i].STATUS;
				let responsavel = ds[i].RESPONSAVEL;
				let consideracoes = ds[i].CONSIDERACOES;
				let tipoDeclaracao = ds[i].TIPODECLARACAO;
				
				if(consideracoes == null){
					consideracoes = "";
				}
				
				consideracoes = consideracoes == "" ? "Sem considerações." : consideracoes.replace(/\n/g, '<br>')
						
				if(nomeProcesso == "Declarações"){
					if(ds[i].STATUS == "Em andamento"){
						$("#solics").append(
								'<div class="panel-group collapse-yellow col-12" id="accordion-variant-colors'+i+'">' +
									'<div class="panel panel-default">' +
							        '<div class="panel-heading">' +
							            '<h4 class="panel-title">' +
							                '<a class="collapse-icon" style="color: #FAA61D; text-decoration: none;" data-toggle="collapse" data-parent="#accordion-variant-colors'+i+'" href="#collapse___'+i+'">' +
							                	'#' + numSolic + '<strong> - ' + nomeProcesso + '</strong>' +
							                '</a>' +
							            '</h4>' +
							        '</div>' +
							        '<div id="collapse___'+i+'" class="panel-collapse collapse out">' +
							            '<div class="panel-body">' +
								            '<div class="row">' +
									            '<div class="col-12">' +
									            	'<p class="m-0"><strong>Tipo da Solicitação: </strong>'+nomeProcesso+'</p>' +
									            	'<p class="m-0"><strong>Tipo da Declaração: </strong>'+tipoDeclaracao+'</p>' +
									            	'<p class="m-0"><strong>Prioridade: </strong>'+prioridade+'</p>' +
									                '<p class="m-0"><strong>Status: </strong>'+status+'</p>' +
									                '<span><strong>Responsável: </strong><i id="iRobo'+i+'" class="fas fa-robot fa-lg"></i></span><p class="m-0 d-inline-block"> '+responsavel+' (Secretaria)</p>' +
									                '<p class="m-0"><strong>Considerações: </strong>'+consideracoes.replace(/\n/g, '<br>')+'</p>' +
								            	'</div>' +
								            '</div>' +
							            '</div>' +
							        '</div>' +
							    '</div>' +
							'</div>');
					}else{
						$("#solics").append(
								'<div class="panel-group collapse-green col-12" id="accordion-variant-colors'+i+'">' +
									'<div class="panel panel-default">' +
							        '<div class="panel-heading">' +
							            '<h4 class="panel-title">' +
							                '<a class="collapse-icon" style="color: #A7CF38; text-decoration: none;" data-toggle="collapse" data-parent="#accordion-variant-colors'+i+'" href="#collapse'+i+'">' +
							                	'#' + numSolic + '<strong> - ' + nomeProcesso + '</strong>' +
							                '</a>' +
							            '</h4>' +
							        '</div>' +
							        '<div id="collapse'+i+'" class="panel-collapse collapse out">' +
							            '<div class="panel-body">' +
								            '<div class="row">' +
									            '<div class="col-12 col-md-9">' +
									            	'<p class="m-0"><strong>Tipo da Solicitação: </strong>'+nomeProcesso+'</p>' +
									            	'<p class="m-0"><strong>Tipo da Declaração: </strong>'+tipoDeclaracao+'</p>' +
									            	'<p class="m-0"><strong>Prioridade: </strong>'+prioridade+'</p>' +
									                '<p class="m-0"><strong>Status: </strong>'+status+'</p>' +
									                '<span><strong>Responsável: </strong><i id="iRobo'+i+'" class="fas fa-robot fa-lg"></i></span><p class="m-0 d-inline-block"> Secretaria</p>' +//'+responsavel+'
									                '<p class="m-0"><strong>Considerações: </strong>'+consideracoes.replace(/\n/g, '<br>')+'</p>' +
								            	'</div>' +
								                '<div class="col-12 col-md-3">' +
								                	'<button class="btn w-100 btn-success" onclick="buscaAnexo('+numSolic+')" style="white-space: normal;"> Abrir '+ nomeProcesso +'</button>' +
								                '</div>' +
								            '</div>' +
							            '</div>' +
							        '</div>' +
							    '</div>' +
							'</div>');
					}
					if(responsavel.indexOf("Atividade Automática") != -1){
						$("#iRobo"+i).show();
					}else{
						$("#iRobo"+i).hide();
					}
				}else if(nomeProcesso == "Atividades Complementares"){
					if(ds[i].STATUS == "Em andamento"){
						$("#solics").append(
								'<div class="panel-group collapse-yellow col-12" id="accordion-variant-colors'+i+'">' +
									'<div class="panel panel-default">' +
							        '<div class="panel-heading">' +
							            '<h4 class="panel-title">' +
							                '<a class="collapse-icon" style="color: #FAA61D; text-decoration: none;" data-toggle="collapse" data-parent="#accordion-variant-colors'+i+'" href="#collapse___'+i+'">' +
							                	'#' + numSolic + '<strong> - ' + nomeProcesso + '</strong>' +
							                '</a>' +
							            '</h4>' +
							        '</div>' +
							        '<div id="collapse___'+i+'" class="panel-collapse collapse out">' +
							            '<div class="panel-body">' +
								            '<div class="row">' +
									            '<div class="col-12">' +
									            	'<p class="m-0"><strong>Tipo da Solicitação: </strong>'+nomeProcesso+'</p>' +
									                '<p class="m-0"><strong>Status: </strong>'+status+'</p>' +
									                '<span><strong>Responsável: </strong><i id="iRobo'+i+'" class="fas fa-robot fa-lg"></i></span><p class="m-0 d-inline-block"> '+responsavel+'</p>' +//
									                '<p class="m-0"><strong>Considerações: </strong>'+consideracoes.replace(/\n/g, '<br>')+'</p>' +
								            	'</div>' +
								            '</div>' +
							            '</div>' +
							        '</div>' +
							    '</div>' +
							'</div>');
					}else{
						$("#solics").append(
								'<div class="panel-group collapse-green col-12" id="accordion-variant-colors'+i+'">' +
									'<div class="panel panel-default">' +
							        '<div class="panel-heading">' +
							            '<h4 class="panel-title">' +
							                '<a class="collapse-icon" style="color: #A7CF38; text-decoration: none;" data-toggle="collapse" data-parent="#accordion-variant-colors'+i+'" href="#collapse'+i+'">' +
							                	'#' + numSolic + '<strong> - ' + nomeProcesso + '</strong>' +
							                '</a>' +
							            '</h4>' +
							        '</div>' +
							        '<div id="collapse'+i+'" class="panel-collapse collapse out">' +
							            '<div class="panel-body">' +
								            '<div class="row">' +
									            '<div class="col-12 col-md-9">' +
									            	'<p class="m-0"><strong>Tipo da Solicitação: </strong>'+nomeProcesso+'</p>' +
									                '<p class="m-0"><strong>Status: </strong>'+status+'</p>' +
									                '<span><strong>Responsável: </strong><i id="iRobo'+i+'" class="fas fa-robot fa-lg"></i></span><p class="m-0 d-inline-block"> '+responsavel+'</p>' +
									                '<p class="m-0"><strong>Considerações: </strong>'+consideracoes.replace(/\n/g, '<br>')+'</p>' +
								            	'</div>' +
								            	'<div class="col-12 col-md-3">' +
								                	'<button class="btn w-100 btn-success " style="white-space: normal;" onclick="abrirModalidades()"> Ver Tabela de Modalidades</button>' +
								                '</div>' +
								            '</div>' +
							            '</div>' +
							        '</div>' +
							    '</div>' +
							'</div>');
					}
					if(responsavel.indexOf("Atividade Automática") != -1){
						$("#iRobo"+i).show();
					}else{
						$("#iRobo"+i).hide();
					}
				} else if(nomeProcesso == "Revisão de Faltas"){
					if(ds[i].STATUS == "Em andamento"){
						$("#solics").append(
								'<div class="panel-group collapse-yellow col-12" id="accordion-variant-colors'+i+'">' +
									'<div class="panel panel-default">' +
							        '<div class="panel-heading">' +
							            '<h4 class="panel-title">' +
							                '<a class="collapse-icon" style="color: #FAA61D; text-decoration: none;" data-toggle="collapse" data-parent="#accordion-variant-colors'+i+'" href="#collapse___'+i+'">' +
							                	'#' + numSolic + '<strong> - ' + nomeProcesso + '</strong>' +
							                '</a>' +
							            '</h4>' +
							        '</div>' +
							        '<div id="collapse___'+i+'" class="panel-collapse collapse out">' +
							            '<div class="panel-body">' +
								            '<div class="row">' +
									            '<div class="col-12">' +
									            	'<p class="m-0"><strong>Tipo da Solicitação: </strong>'+nomeProcesso+'</p>' +
									                '<p class="m-0"><strong>Status: </strong>'+status+'</p>' +
									                '<span><strong>Responsável: </strong><i id="iRobo'+i+'" class="fas fa-robot fa-lg"></i></span><p class="m-0 d-inline-block"> '+responsavel+'</p>' +//
									                '<p class="m-0"><strong>Considerações: </strong>'+consideracoes.replace(/\n/g, '<br>')+'</p>' +
								            	'</div>' +
								            '</div>' +
							            '</div>' +
							        '</div>' +
							    '</div>' +
							'</div>');
					}else{
						$("#solics").append(
								'<div class="panel-group collapse-green col-12" id="accordion-variant-colors'+i+'">' +
									'<div class="panel panel-default">' +
							        '<div class="panel-heading">' +
							            '<h4 class="panel-title">' +
							                '<a class="collapse-icon" style="color: #A7CF38; text-decoration: none;" data-toggle="collapse" data-parent="#accordion-variant-colors'+i+'" href="#collapse'+i+'">' +
							                	'#' + numSolic + '<strong> - ' + nomeProcesso + '</strong>' +
							                '</a>' +
							            '</h4>' +
							        '</div>' +
							        '<div id="collapse'+i+'" class="panel-collapse collapse out">' +
							            '<div class="panel-body">' +
								            '<div class="row">' +
									            '<div class="col-12 col-md-9">' +
									            	'<p class="m-0"><strong>Tipo da Solicitação: </strong>'+nomeProcesso+'</p>' +
									                '<p class="m-0"><strong>Status: </strong>'+status+'</p>' +
									                '<span><strong>Responsável: </strong><i id="iRobo'+i+'" class="fas fa-robot fa-lg"></i></span><p class="m-0 d-inline-block"> '+responsavel+'</p>' +
									                '<p class="m-0"><strong>Considerações: </strong>'+consideracoes.replace(/\n/g, '<br>')+'</p>' +
								            	'</div>' +
//								            	'<div class="col-12 col-md-3">' +
//								                	'<button class="btn w-100 btn-success " style="white-space: normal;" onclick="abrirModalidades()"> Ver Tabela de Modalidades</button>' +
//								                '</div>' +
								            '</div>' +
							            '</div>' +
							        '</div>' +
							    '</div>' +
							'</div>');
					}
					if(responsavel.indexOf("Atividade Automática") != -1){
						$("#iRobo"+i).show();
					}else{
						$("#iRobo"+i).hide();
					}
				} else if(nomeProcesso == "Atestado Médico"){
					console.log('Entrei')
					if(ds[i].STATUS == "Em andamento"){
						$("#solics").append(
								'<div class="panel-group collapse-yellow col-12" id="accordion-variant-colors'+i+'">' +
									'<div class="panel panel-default">' +
							        '<div class="panel-heading">' +
							            '<h4 class="panel-title">' +
							                '<a class="collapse-icon" style="color: #FAA61D; text-decoration: none;" data-toggle="collapse" data-parent="#accordion-variant-colors'+i+'" href="#collapse___'+i+'">' +
							                	'#' + numSolic + '<strong> - ' + nomeProcesso + '</strong>' +
							                '</a>' +
							            '</h4>' +
							        '</div>' +
							        '<div id="collapse___'+i+'" class="panel-collapse collapse out">' +
							            '<div class="panel-body">' +
								            '<div class="row">' +
									            '<div class="col-12">' +
									            	'<p class="m-0"><strong>Tipo da Solicitação: </strong>'+nomeProcesso+'</p>' +
									                '<p class="m-0"><strong>Status: </strong>'+status+'</p>' +
									                '<span><strong>Responsável: </strong><i id="iRobo'+i+'" class="fas fa-robot fa-lg"></i></span><p class="m-0 d-inline-block"> '+responsavel+'</p>' +
									                '<p class="m-0"><strong>Considerações: </strong>'+consideracoes.replace(/\n/g, '<br>')+'</p>' +
								            	'</div>' +
								            '</div>' +
							            '</div>' +
							        '</div>' +
							    '</div>' +
							'</div>');
					}else{
						$("#solics").append(
								'<div class="panel-group collapse-green col-12" id="accordion-variant-colors'+i+'">' +
									'<div class="panel panel-default">' +
							        '<div class="panel-heading">' +
							            '<h4 class="panel-title">' +
							                '<a class="collapse-icon" style="color: #A7CF38; text-decoration: none;" data-toggle="collapse" data-parent="#accordion-variant-colors'+i+'" href="#collapse'+i+'">' +
							                	'#' + numSolic + '<strong> - ' + nomeProcesso + '</strong>' +
							                '</a>' +
							            '</h4>' +
							        '</div>' +
							        '<div id="collapse'+i+'" class="panel-collapse collapse out">' +
							            '<div class="panel-body">' +
								            '<div class="row">' +
									            '<div class="col-12 col-md-9">' +
									            	'<p class="m-0"><strong>Tipo da Solicitação: </strong>'+nomeProcesso+'</p>' +
									                '<p class="m-0"><strong>Status: </strong>'+status+'</p>' +
									                '<span><strong>Responsável: </strong><i id="iRobo'+i+'" class="fas fa-robot fa-lg"></i></span><p class="m-0 d-inline-block"> '+responsavel+'</p>' +
									                '<p class="m-0"><strong>Considerações: </strong>'+consideracoes.replace(/\n/g, '<br>')+'</p>' +
								            	'</div>' +
//								                '<div class="col-12 col-md-3">' +
//								                	'<button class="btn w-100 btn-success" onclick="buscaAnexo('+numSolic+')" style="white-space: normal;"> Abrir '+ nomeProcesso +'</button>' +
//								                '</div>' +
								            '</div>' +
							            '</div>' +
							        '</div>' +
							    '</div>' +
							'</div>');
					}
					if(responsavel.indexOf("Atividade Automática") != -1){
						$("#iRobo"+i).show();
					}else{
						$("#iRobo"+i).hide();
					}
				}
			}
			myLoading.hide();
		},error: function(e){
			myLoading.hide();
			throw e;
		}
	});
}

function abrirModalidades(){
	var myModal = FLUIGC.modal({
	    title: 'Tabela de Modalidades',
	    content: '' + carregaTabelaModalidades(Aluno.RA),
	    id: 'fluig-modal',
	    size: 'full',
	    actions: [
	    	{
		        'label': 'Fechar',
		        'autoClose': true
    		}
	    ]
	});
	$("button.close").hide();
}

function buscaAnexo(numSolic){
	var myLoading = FLUIGC.loading(window , {
	    textMessage:  'Carregando solicitação',
	});
	myLoading.show();
	
	let oauth = OAuth({
	    consumer: {
	        key: 'e3fe3d72-bfcc-4552-8c9b-93c66531dab9',
	        secret: '6bd0591b-73d8-4a9e-a161-d54dd92d3172-5a21991e-453f-4ea1-b80c-f42d4c57759d'
	    },
	    signature_method: 'HMAC-SHA1',
	    hash_function: function(base_string, key) {
	        return CryptoJS.HmacSHA1(base_string, key).toString(CryptoJS.enc.Base64);
	    },
	    nonce_length: 6
	});
	
	let request_data = {
		url: parent.WCMAPI.getServerURL()+'/api/public/ecm/dataset/search?datasetId=workflowProcess&searchField=workflowProcessPK.processInstanceId&searchValue='+numSolic,
		method: 'GET',
	};
	
	let token = {
			key: '16d054b7-bb05-4de1-82b3-af0ac353cf47',
    		secret: '391c916f-4e02-406b-b7fd-096d8b2acb836390cd36-996d-4463-8702-b6af8cd8a968'
	};
	let documentId;
	
	setTimeout(function(){ 
		$.ajax({
			url: request_data.url,
			crossDomain: true,
			async: false,
			type: request_data.method,    	
			headers: oauth.toHeader(oauth.authorize(request_data, token)),
			success : function(data) {
				let result = data.content;
				documentId = result[0].cardDocumentId;
			}, error: function(e){
				myLoading.hide();
				throw e;
			}
		});
		
		let request_data2 = {
			url: parent.WCMAPI.getServerURL()+'/api/public/ecm/dataset/search?datasetId=processAttachment&searchField=processAttachmentPK.processInstanceId&searchValue='+numSolic,
			method: 'GET',
		};
		
		$.ajax({
			url: request_data2.url,
			crossDomain: true,
			async: false,
			type: request_data2.method,    	
			headers: oauth.toHeader(oauth.authorize(request_data2, token)),
			success : function(data) {
				let result = data.content;
				for(let i in result){
					if(result[i].documentId != documentId ){
						documentId = result[i].documentId;
					}
				}
			}, error: function(e){
				myLoading.hide();
				throw e;
			}
		});
		
		let request_data3 = {
			url: parent.WCMAPI.getServerURL()+'/api/public/2.0/documents/getDownloadURL/'+documentId,
			method: 'GET',
		};
		
		$.ajax({
			url: request_data3.url,
			crossDomain: true,
			async: false,
			type: request_data3.method,    	
			headers: oauth.toHeader(oauth.authorize(request_data3, token)),
			success : function(data) {
				myLoading.hide();
				window.open(data.content, "_blank");
			}, error: function(e){
				myLoading.hide();
				throw e;
			}
		});
	}, 500);
	
}

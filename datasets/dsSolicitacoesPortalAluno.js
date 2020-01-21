function createDataset(fields, constraints, sortFields){    
	var dataset = DatasetBuilder.newDataset();  

	dataset.addColumn("NUMSOLIC");
	dataset.addColumn("NOMEPROCESSO");
	dataset.addColumn("TIPODECLARACAO");
	dataset.addColumn("PRIORIDADE");
	dataset.addColumn("STATUS");
	dataset.addColumn("RESPONSAVEL");
	dataset.addColumn("CONSIDERACOES");
	
	
	var ra;
	var nomeProcesso;
	for (i = 0; i < constraints.length ; i++) { 
       if (constraints[i].fieldName == 'RA') { 
          ra = constraints[i].initialValue; 
       }
       
       if (constraints[i].fieldName == 'NOMEPROCESSO') { 
    	   nomeProcesso = constraints[i].initialValue; 
        }
    }
	log.info("Fhaide: " + ra);
	log.info("Fhaide: " + nomeProcesso);
	
	if(nomeProcesso == "Todos"){
		var dsDeclaracaoMatricula = consultaDeclaracaoMatricula(ra);
		var dsAtividadesComplementares = consultaAtividadesComplementares(ra);
		var dsRevisaoFaltas = consultaRevisaoFaltas(ra);
		//var dsAtestadoMedico = consultaAtestadoMedico(ra);
		var resultado = dsDeclaracaoMatricula.concat(dsAtividadesComplementares, dsRevisaoFaltas);

		for (row in resultado) {
			dataset.addRow(
				new Array(
						resultado[row].numSolic,  
						resultado[row].nomeProcesso,  
						resultado[row].tipoDeclaracao,
						resultado[row].prioridade,
						resultado[row].status,
						resultado[row].responsavel,
						resultado[row].considAluno
				)
			);
		} 
	}else if(nomeProcesso == "Declarações"){
		var resultado = consultaDeclaracaoMatricula(ra);

		for (row in resultado) {
			dataset.addRow(
				new Array(
						resultado[row].numSolic,  
						resultado[row].nomeProcesso,
						resultado[row].tipoDeclaracao,
						resultado[row].prioridade,
						resultado[row].status,
						resultado[row].responsavel,
						resultado[row].considAluno
				)
			);
		}
	}else if(nomeProcesso == "Atividades Complementares"){
		var resultado = consultaAtividadesComplementares(ra);

		for (row in resultado) {
			dataset.addRow(
				new Array(
						resultado[row].numSolic,  
						resultado[row].nomeProcesso, 
						"",
						resultado[row].prioridade,
						resultado[row].status,
						resultado[row].responsavel,
						resultado[row].considAluno
				)
			);
		}
	} else if(nomeProcesso == "Revisão de Faltas"){
		var resultado = consultaRevisaoFaltas(ra);

		for (row in resultado) {
			dataset.addRow(
				new Array(
						resultado[row].numSolic,  
						resultado[row].nomeProcesso,
						"",
						"",
						resultado[row].status,
						resultado[row].responsavel,
						resultado[row].considAluno
				)
			);
		}
	} 
	else if(nomeProcesso == "Atestado Médico"){
		var resultado = consultaAtestadoMedico(ra);

		for (row in resultado) {
			dataset.addRow(
				new Array(
						resultado[row].numSolic,  
						resultado[row].nomeProcesso,
						"",
						"",
						resultado[row].status,
						resultado[row].responsavel,
						resultado[row].considAluno
				)
			);
		}
	}
	return dataset;  
}

function consultaAtividadesComplementares(ra){
	var c1 = DatasetFactory.createConstraint("raAluno", ra, ra, ConstraintType.MUST);
	var ds = DatasetFactory.getDataset("dsFormAtividadesComplementares", new Array('documentid', 'consid2', 'consid4', 'certificadoValido'), new Array(c1), null);
	var solics = [];
	log.info("Fhaide: " + ds.rowsCount)
	for(i=0;i<ds.rowsCount;i++){
		
		var numSolic = verificaNumSolic(ds.getValue(i, 'documentid'));
		var status = verificaStatus(numSolic);
		var responsavel = verificaResponsavel(numSolic, "Atividades Complementares");
		var solic = new Object();
		
		solic.numSolic = numSolic;
		solic.nomeProcesso = "Atividades Complementares";
		solic.prioridade = null;
		solic.status = status;
		solic.responsavel = responsavel;
		if(ds.getValue(i, 'certificadoValido') == "Não"){
			solic.considAluno = ds.getValue(i, 'consid2');
		}else if(ds.getValue(i, 'certificadoValido') != "Não" && ds.getValue(i, 'certificadoValido') != ""){
			solic.considAluno = ds.getValue(i, 'consid4');
		}else{
			solic.considAluno = "";
		}
		solics.push(solic);
	}
	return solics;
}

function consultaDeclaracaoMatricula(ra){
	var c1 = DatasetFactory.createConstraint("raAluno", ra, ra, ConstraintType.MUST);
	var ds = DatasetFactory.getDataset("dsFormDeclaracaoMatricula", new Array('documentid', 'prioridade', 'considAluno'), new Array(c1), null);
	var solics = [];
	for(i=0;i<ds.rowsCount;i++){
		
		var numSolic = verificaNumSolic(ds.getValue(i, 'documentid'));
		var status = verificaStatus(numSolic);
		var responsavel = verificaResponsavel(numSolic, "Declarações");
		var solic = new Object();
		
		solic.numSolic = numSolic;
		solic.nomeProcesso = "Declarações";
		solic.tipoDeclaracao = ds.getValue(i, 'tipoDeclaracao') == null ? "Declaração" : ds.getValue(i, 'tipoDeclaracao');
		solic.prioridade = ds.getValue(i, 'prioridade');
		solic.status = status;
		solic.responsavel = responsavel;
		solic.considAluno = ds.getValue(i, 'considAluno');
		
		solics.push(solic);
	}
	return solics;
}

function consultaRevisaoFaltas(ra){
	var c1 = DatasetFactory.createConstraint("raAluno", ra, ra, ConstraintType.MUST);
	var ds = DatasetFactory.getDataset("dsFormRevisaoDeFaltas", new Array('documentid', 'considAluno', 'considAluno1'), new Array(c1), null);
	var solics = [];
	for(i=0;i<ds.rowsCount;i++){
		
		var numSolic = verificaNumSolic(ds.getValue(i, 'documentid'));
		var status = verificaStatus(numSolic);
		var responsavel = verificaResponsavel(numSolic, "Revisão de Faltas");
		var solic = new Object();
		
		solic.numSolic = numSolic;
		solic.nomeProcesso = "Revisão de Faltas";
		solic.status = status;
		solic.responsavel = responsavel;
		if(ds.getValue(i, 'considAluno1') != "") {
			solic.considAluno = ds.getValue(i, 'considAluno1');
		} else {
			solic.considAluno = ds.getValue(i, 'considAluno');
		}
		
		solics.push(solic);
	}
	return solics;
}

function consultaAtestadoMedico(ra){
	var c1 = DatasetFactory.createConstraint('raAluno', ra, ra, ConstraintType.MUST);
	var ds = DatasetFactory.getDataset('dsFormAtestadoMedico', new Array('documentid', 'consid1', 'consid2'), new Array(c1), null);

	var solics = [];
	for(i=0;i<ds.rowsCount;i++){
		
		var numSolic = verificaNumSolic(ds.getValue(i, 'documentid'));
		var status = verificaStatus(numSolic);
		var responsavel = verificaResponsavel(numSolic, "Atestado Médico");
		var solic = new Object();
		
		solic.numSolic = numSolic;
		solic.nomeProcesso = "Atestado Médico";
		solic.status = status;
		solic.responsavel = responsavel;
		if(ds.getValue(i, 'consid2') != "") {
			solic.considAluno = ds.getValue(i, 'consid2');
		} else {
			solic.considAluno = ds.getValue(i, 'consid1');
		}
		log.info("NUMSOLIC"+numSolic)
		solics.push(solic);
	}
	return solics;
}

function verificaNumSolic(documentid){
	var constraintWorkflowProcess1 = DatasetFactory.createConstraint('cardDocumentId', documentid, documentid, ConstraintType.MUST);
	var colunasWorkflowProcess = new Array('workflowProcessPK.processInstanceId');
	var datasetWorkflowProcess = DatasetFactory.getDataset('workflowProcess', colunasWorkflowProcess, new Array(constraintWorkflowProcess1), null);
	return datasetWorkflowProcess.getValue(0, 'workflowProcessPK.processInstanceId');
}

function verificaStatus(numSolic){
	var constraintWorkflowProcess1 = DatasetFactory.createConstraint('workflowProcessPK.processInstanceId', numSolic, numSolic, ConstraintType.MUST);
	var colunasWorkflowProcess = new Array('active');
	var datasetWorkflowProcess = DatasetFactory.getDataset('workflowProcess', colunasWorkflowProcess, new Array(constraintWorkflowProcess1), null);
	var active = datasetWorkflowProcess.getValue(0, 'active');
	
	if(active == true){
		return "Em andamento";
	}else{
		var constraintProcessTask1 = DatasetFactory.createConstraint('processTaskPK.processInstanceId', numSolic, numSolic, ConstraintType.MUST);
		var datasetProcessTask = DatasetFactory.getDataset('processTask', null, new Array(constraintProcessTask1), null);
		var status = 2;
		for(var i=0; i<datasetProcessTask.rowsCount; i++){
			if(datasetProcessTask.getValue(i, 'status') == 4){
				status = datasetProcessTask.getValue(i, 'status');
			}
		}
		if(status == 2){
			return "Finalizada";
		}else if(status == 4){
			return "Cancelada";
		}
	}
}

function verificaResponsavel(numSolic, nomeProcesso){
	var constraintProcessTask1 = DatasetFactory.createConstraint('sqlLimit', '100', '100', ConstraintType.MUST);
	var constraintProcessTask2 = DatasetFactory.createConstraint('processTaskPK.processInstanceId', numSolic, numSolic, ConstraintType.MUST);
	var datasetProcessTask = DatasetFactory.getDataset('processTask', null, new Array(constraintProcessTask1, constraintProcessTask2), null);
	
	var resp = datasetProcessTask.getValue(datasetProcessTask.rowsCount - 1, 'choosedColleagueId');
	log.info("Fhaide rowsCount: " + datasetProcessTask.rowsCount)
	log.info("Fhaide verificaResponsavel: " + resp)
	if((resp == "" || resp == undefined || resp == null) || resp == "System:Auto"){
		log.info("Fhaide if 1: ")
		var constraintProcessHistory1 = DatasetFactory.createConstraint('sqlLimit', '100', '100', ConstraintType.MUST);
		var constraintProcessHistory2 = DatasetFactory.createConstraint('processHistoryPK.processInstanceId', numSolic, numSolic, ConstraintType.MUST);
		var constraintProcessHistory3 = DatasetFactory.createConstraint('processHistoryPK.movementSequence', datasetProcessTask.getValue(datasetProcessTask.rowsCount - 1, 'processTaskPK.movementSequence'), datasetProcessTask.getValue(datasetProcessTask.rowsCount - 1, 'processTaskPK.movementSequence'), ConstraintType.MUST);
		var datasetProcessHistory = DatasetFactory.getDataset('processHistory', null, new Array(constraintProcessHistory1, constraintProcessHistory2, constraintProcessHistory3), null);
	
		var state = datasetProcessHistory.getValue(0, 'stateSequence');
		if(nomeProcesso == "Declarações"){
			if(state == '10'){
				return "Atividade Automática do Sistema - Verificar Necessidade de Pagamento";
			}else if(state == '26'){
				return "Atividade Automática do Sistema - Gerar Taxa";
			}else if(state == '49'){
				return "Atividade Automática do Sistema - Aguardando o Pagamento";
			}else if(state == '34'){
				return "Secretaria";
			}else if(state == '37'){
				return "Solicitação Finalizada";
			}
		}else if(nomeProcesso == "Atividades Complementares"){
			log.info("Fhaide if 2: ")
			log.info("Fhaide state: " + state)
			if(state == '9'){
				return "Atividade Automática do Sistema - Lançar Horas Complementares";
			}else if(state == '5'){
				return "Coordenação de Curso";
			}else if(state == '14' || state == '21'){
				return "Solicitação Finalizada";
			}else if(state == '10'){
				return "Solicitação Finalizada";
			}
		} else if(nomeProcesso == "Revisão de Faltas"){
			log.info("Fhaide if 2: ")
			log.info("Fhaide state: " + state)
			log.info("Fhaide state: " + numSolic)
			if(state == '0' || state == '4'){
				return "Solicitação iniciada";
			}else if(state == '5'){
				return "Coordenador do Curso";
			}else if(state == '9'){
				return "Secretaria";
			}else if(state == '18'){
				return "NSI";
			}else if(state == '11' || state == '13' || state == '16' || state == '7'){
				return "Solicitação Finalizada";
			}
		} 
		else if(nomeProcesso == "Atestado Médico"){
			log.info("Fhaide if 2: ")
			log.info("Fhaide state: " + state)
			log.info("Fhaide state: " + numSolic)
			if(state == '0' || state == '4'){
				return "Solicitação iniciada";
			}else if(state == '58'){
				return "Aguardando Pagamento de Atividade Domiciliar";
			}
		}
		
	}else if(resp.indexOf("Pool:Group:") != -1){
		return res.split("Pool:Group:")[1];
	}else{
		log.info("Fhaide if 3: ")
		return resp;
	}
	
}
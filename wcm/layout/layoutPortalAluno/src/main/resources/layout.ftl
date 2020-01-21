<!-- <#import "/wcm.ftl" as wcm/> -->
<!-- <@wcm.header authenticated="true"/> -->
<html class="m-0 h-100">
<!-- <div id="wcm_header" class="wcm-header-background wcm-header">
	<div class="header-grouper-left">
		<a href="http://fluig.famma.br/portal/p/1/home" class="wcm_logo" title="Fluig">
			<img src="http://fluig.famma.br/portal/api/servlet/image/1/custom/logo_image.png">
		</a>
	</div>
	<div class="header-grouper-right">
		<div id="SlotInstantSearch" slot="true" class="slotint slot-header-actions search-auto-hide">
			<div id="_instance_4562_" appcode="suggestsearch">
				<div id="wcm_widget_4562" class="wcm_widget">
					<div class="wcm_corpo_widget_single">
						<div id="suggestSearchEdit_4562"
							class="fluig-style-guide suggest-search wcm-widget-class clearfix super-widget"
							data-params="SearchSuggestEdit.instance({})">
							<div class="form-group">
								<label class="radio-inline">
									<input type="checkbox" data-change-search-new-tab="" name="searchNewTabBox" value="searchNewTab">
										<span id="suggestSearchEditLabel_4562">Abrir resultados de busca em uma nova janela?</span>
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="SlotMessagingNotify" slot="true" class="slotint slot-header-actions">
			<div id="_instance_4563_" appcode="socialmessagingnotify">
				<div id="wcm_widget_4563" class="wcm_widget">
					<div class="wcm_corpo_widget_single">
						<div class="wcm-widget-class super-widget fluig-style-guide social-messaging-notify" data-params="MessagingNotify.instance()" id="messagingNotify_4563">
							<a id="container-messaging-4563" data-messaging-page="" class="btn btn-primary btn-block" role="button" href="#">
								<span class="sr-only">Messaging</span>
								<span class="fluigicon fluigicon-comment-on"></span>&nbsp;
								<span id="unread-messaging-counter-4563">0</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="SlotGlobalAlert" slot="true" class="slotint slot-header-actions">
			<div id="_instance_4566_" appcode="alertpopover">
				<div id="wcm_widget_4566" class="wcm_widget">
					<div class="wcm_corpo_widget_single">
						<div id="alert_popover_4566" class="fluig-style-guide wcm-widget-class super-widget global-alert-popover" data-params="AlertPopover.instance({})">
							<a id="global-alert-popover" data-global-alert-popover="" class="btn btn-primary btn-block" role="button" href="#">
								<span class="fluigicon fluigicon-warning-sign"></span>&nbsp;
								<span id="unread-alert-counter">0</span>
							</a>
							<script type="text/template" class="tpl_notification_list">
								{{^hasNotifications}}
								<li class="list-group-item">
									<div class="alert alert-info fs-no-margin-bottom" role="alert">Sem notificações.</div>
								</li>
								{{/hasNotifications}}

								{{#notifications}}
								<li class="list-group-item {{^read}}notification-unread{{/read}} clearfix" data-alert-id="{{id}}" data-is-note-visible={{isNoteVisible}}>

									{{^read}}
									<a href="#" class="fl-mark-read fs-no-text-underline" data-mark-read title="Marcar notificação como lida">
										<i class="flaticon flaticon-view icon-sm"></i>
									</a>
									{{/read}}

									<div class="media clearfix  fs-no-margin-top fl-media-alert-container">
										{{#hasSenders}}
										<a class="pull-left" href="#">
											<img class="fluig-style-guide thumb-profile thumb-profile-xs media-object img-rounded" src="/social/api/rest/social/image/profile/{{getLastSenderLogin}}/X_SMALL_PICTURE">
										</a>
										{{/hasSenders}}
										{{^hasSenders}}
										{{#hasEventIcon}}
										<span class="pull-left">
											<img class="fluig-style-guide thumb-profile thumb-profile-xs media-object img-rounded" src="{{getEventIcon}}" />
										</span>
										{{/hasEventIcon}}
										{{^hasEventIcon}}
										<span class="pull-left">
											<img class="fluig-style-guide thumb-profile thumb-profile-xs media-object img-rounded" src="{{getComunityIcon}}">
										</span>
										{{/hasEventIcon}}
										{{/hasSenders}}
										<div class="media-body">
											<small>
												{{#getSenders}}
												<a href="{{getSenderLink}}">{{user.fullName}}</a>
												{{/getSenders}}
												{{#hasMorePeople}}
												e mais
												<a href="#" data-object-id="{{object.objectId}}" data-timeline-link-supported data-alert-id="{{id}}" data-dialog-title="Lista de usuários" data-users="{{#getAdditionalPeople}}{{user.login}},{{/getAdditionalPeople}}">{{getNumAdditionalPeople}}
													pessoas
												</a>&nbsp;
												{{/hasMorePeople}}

												<span>
													{{getEvent}}
													{{#object}}
													{{typeDescription}}
													{{#descriptionNotEmpty}}
													{{#hasLink}}
													{{#isForm}}
													<a href="{{defaultURL}}{{link}}" data-open-answer-form={{formId}}>"{{description}}"{{^place}}.{{/place}}
													</a>
													{{/isForm}}
													{{^isForm}}
													<a href="{{defaultURL}}{{link}}">"{{description}}"{{^place}}.{{/place}}</a>
													{{/isForm}}
													{{/hasLink}}
													{{^hasLink}}
													{{#description}}
													"{{description}}"{{^place}}.{{/place}}
													{{/description}}
													{{/hasLink}}
													{{/descriptionNotEmpty}}
													{{objectDetail}}
													{{/object}}
													{{#isEventKeyWatch}}, que você está acompanhando{{/isEventKeyWatch}}
												</span>
												{{#place}}
												em
												{{#descriptionNotEmpty}}
												{{#hasLink}}
												{{#hasExternalLink}}
												<a href="{{link}}">{{description}}.</a>
												{{/hasExternalLink}}
												{{^hasExternalLink}}
												<a href="{{defaultURL}}{{link}}">{{description}}.</a>
												{{/hasExternalLink}}
												{{/hasLink}}
												{{^hasLink}}
												{{description}}.
												{{/hasLink}}
												{{/descriptionNotEmpty}}
												{{objectDetail}}
												{{/place}}
												{{#hasNote}}
												<a href="#" class="fluigicon fluigicon-notes fs-no-text-underline" title=ver nota data-note="{{object.note}}" data-show-note data-note-html></a>
												{{/hasNote}}

												<p class="text-muted">
													<small data-creation-date="{{creationDate}}"></small>
												</p>
											</small>
										</div>
									</div>
									{{#hasActionsNotification}}
									{{#hasNotificationsSingleActions}}
									<p class="pull-right">
										{{#getActionsNotification}}
										<button type="button" class="btn {{getClassButtonType}} btn-sm" data-actions-notification="{{id}}" data-notification-action-type="{{type}}" data-notification-action-url="{{url}}">{{description}}</button>
										{{/getActionsNotification}}
									</p>
									{{/hasNotificationsSingleActions}}
									{{#hasNotificationsGroupActions}}
									<div class="btn-group pull-right">
										<button type="button" class="btn {{getClassButtonType}} btn-sm dropdown-toggle" data-toggle="dropdown">
											Ações
											<span class="caret"></span>
										</button>
										<ul class="dropdown-menu" role="menu">
											{{#getActionsNotification}}
											<li>
												<a href="#" data-actions-notification="{{id}}" data-notification-action-type="{{type}}" data-notification-action-url="{{url}}">{{description}}</a>
											</li>
											{{/getActionsNotification}}
										</ul>
									</div>
									{{/hasNotificationsGroupActions}}
									{{#getExecutedActionsNotification}}
									<p class="text-info pull-right">
										<small>{{descriptionAfterExec}}</small>
									</p>
									{{/getExecutedActionsNotification}}
									{{/hasActionsNotification}}
									{{{noteValue}}}
								</li>
								{{/notifications}}
							</script>
							<script type="text/template" class="social-timeline-mention-template">
								<a href="{{{tenantURI}}}/social/{{alias}}">{{name}}</a>
							</script>
							<script type="text/template" class="social-timeline-tag-template">
								<a href="#" data-search-action>$1</a>
							</script>
							<script type="text/template"
								class="social-timeline-link-template">
								<a href="$1" target="_blank">$1</a>
							</script>
							<script type="text/template"
								class="social-timeline-line-break-template">
							</script>
							<script type="text/template"
								class="social-alertpopover-seemore">
								<a role="button" href="/portal/p/1/globalalertview">ver mais</a>
							</script>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div id="SlotLogin" slot="true"
			class="slotint slot-header-actions">
			<div id="_instance_4564_" appcode="sociallogin">
				<div id="wcm_widget_4564" class="wcm_widget">
					<div class="wcm_corpo_widget_single">
						<div id="sociallogin_4564" class="fluig-style-guide wcm-widget-class wcm_login wcm-widget-login super-widget" data-params="SocialLogin.instance()">
							<div class="btn-group" role="group">
								<div class="img-thumbnail pull-left fs-no-padding fs-overflow-hidden fs-no-top-right-radius fs-no-bottom-right-radius fs-no-border-right fs-border-light-gray">
									<img data-update-image-profile="maik.ribeiro" style="width: 32px; height: 32px;" data-image-size="X_SMALL_PICTURE" src="/social/api/rest/social/image/profile/maik.ribeiro/X_SMALL_PICTURE" class="fluig-style-guide thumb-profile thumb-profile-xs">
								</div>
								<div class="btn-group" role="group">
									<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										<span id="logged-user-name">Maik Ribeiro</span>
										<span class="fluigicon fluigicon-cog"></span>
										<span class="sr-only">Toggle Dropdown</span>
									</button>
									<ul class="dropdown-menu dropdown-menu-right">
										<li id="identity-context" style="display:none" data-choose-context="">
											<a href="#">
												<strong>Trocar contexto</strong>
											</a>
											<a id="identityUserContext" href="#"></a>
										</li>
										<li id="identity-app-company" style="display:none" data-choose-company="">
											<a href="#">
												<strong>Trocar empresa</strong>
											</a>
											<a id="identityAppCompany" href="#"></a>
										</li>
										<li id="identity-clear" style="display:none" class="divider"></li>
										<li id="linkPageEditProfile" data-login-config-list-itens="" data-page-alias="wcmuserpreferences">
											<a href="#">Editar perfil</a>
										</li>
										<li data-login-config-list-itens="" data-page-alias="wcm-publish-page" data-href="/portal/p/1/PortalAluno?edit=true">
											<a href="#">Publicar página</a>
										</li>
										<li data-login-config-list-itens="" data-page-alias="wcm-view-history" data-href="/portal/p/1/PortalAluno?edit=true">
											<a href="#">Visualizar histórico</a>
										</li>
										<li data-login-config-list-itens="" data-page-alias="wcm-change-layout" data-href="/portal/p/1/PortalAluno?edit=true">
											<a href="#">Trocar layout</a>
										</li>
										<li data-login-config-list-itens="" data-page-alias="wcm-change-friendlyURL" data-href="/portal/p/1/PortalAluno?edit=true">
											<a href="#">URL personalizada para acesso</a>
										</li>
										<li class="divider"></li>
										<li data-login-config-list-itens="" data-page-alias="language">
											<a href="#">Idioma</a>
										</li>
										<li class="divider"></li>
										<li data-login-config-list-itens="" data-page-alias="logoff">
											<a href="#">Sair</a>
										</li>
									</ul>
								</div>
							</div>
							<script type="text/template" class="tpl_select_identity_context">
								<div id="identityCompany_{{instanceId}}" class="wcm-widget-class widget-select-identity widget-select-identity-{{type}} super-widget">
									<div class="fluig-style-guide">
										<ul>
											{{#list}}
											<li
												class="dialog-select-identity {{#selected}}bg-info{{/selected}} "
												data-id="{{id}}" data-select- { type }>{{displayName}}</li>
											{{/list}}
										</ul>
									</div>
								</div>
							</script>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div> -->
	<head>
		<title>Portal do Aluno</title>
	</head>
	<body class="d-flex h-100 m-0 flex-column">
		<header>
			<nav class="navbar navbar-expand-md navbar-light bg-light">
				<div class="container-fluid">
					<a id="aNavLogo" class="navbar-brand logo">
						<img src="/layoutPortalAluno/resources/images/logo.png" width="142">
					</a>
					<button class="navbar-toggler" data-toggle="collapse" data-target="#nav-target">
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="nav-target">
						<ul class="navbar-nav ml-auto">
							<li class="nav-item">
								<a id="aNavHome" class="btn btn-outline-secondary green" >Home</a>
							</li>
							<li class="nav-item">
								<a id="aNavAcompanharSolic" class="btn btn-outline-secondary red" >Acompanhar Solicitações</a>
							</li>
							<li class="nav-item">
								<a class="btn btn-outline-secondary blue" href="http://portal.unifamma.edu.br">Voltar para o Portal</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</header>
		<section id="sectionHome">
			<div class="container-fluid">
        		<div class="col-12">
        			<div class="table-responsive mt-2">
					  	<table class="table">
					    	<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">Nome do Atendimento</th>
									<th scope="col">Descrição</th>
									<th scope="col">Ação</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Declaração</td>
									<td>Esta solicitação refere-se ao documento que comprova o vínculo escolar com a Instituição, onde será informado: nome do aluno, RG, curso, turno e semestre. <strong><a id="aDeclaracaoMatricula" class="text-info saibaMais">Saiba mais</a></strong></td>
									<td>
										<button type="button" id="btnDeclaracaoMatricula" class="btn btn-outline-success btn-sm">Solicitar</button>
									</td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Atividades Complementares</td>
									<td>Esta solicitação refere-se as atividades curriculares complementares necessárias para sua formação. Nessa solicitação você encaminha o anexo do comprovante para análise e verificação das horas.</td>
									<td>
										<button type="button" id="btnAtividadesComplementares" class="btn btn-outline-success btn-sm">Solicitar</button>
									</td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>Revisão de Faltas</td>
									<td>Solicitar revisão de faltas, caso tenha se ausentado por motivo de saúde ou qualquer natureza que possibilite a entrega do atestado médico.</td>
									<td>
										<button type="button" id="btnRevisaoFaltas" class="btn btn-outline-success btn-sm">Solicitar</button>
									</td>
								</tr>
							</tbody>
				  		</table>
					</div>
        		</div>
       		</div>
		</section>
		<section id="sectionAcompanharSolics" style="display: none;">
			<div class="container-fluid">
				<div class="col-12 my-4">
					<div class="d-block d-sm-inline-flex col-12 col-md-5 py-2 py-md-0">
						<h2 class="text-muted d-inline-block text-center text-md-left w-100"> CENTRAL DE SOLICITAÇÕES </h2>
					</div>
					<div class="d-block d-sm-inline-flex col-12 col-md-4 py-2 py-md-0">
						<select class="form-control ml-auto" id="selectSolicitacoes">
							<option value="">Selecione o Requerimento</option>
							<option value="Todos">Todos</option>
							<option value="Declarações">Declarações</option>
							<option value="Atividades Complementares">Atividades Complementares</option>
							<option value="Revisão de Faltas">Revisão de Faltas</option>
							<!-- <option value="Atestado Médico">Atestado Médico</option> -->
						</select>
					</div>
					<div class="d-block d-sm-inline-flex col-12 col-md-3 px-3 px-md-0 py-2 py-md-0">
						<button class="btn btn-light btn-outline-success w-100" name="btnRefreshSolics" id="btnRefreshSolics"><i class="fas fa-search fa-flip-horizontal"></i> Buscar</button>
					</div>
				</div>	
				<div id="solics" class="fluig-style-guide col-12">
					
				</div>
				
			</div>
		</section>
		<footer class="mt-auto">
			<nav class="navbar navbar-expand bg-light">
				<div class="container-fluid">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item">
							<a class="nav-link text-dark" id="aFooterHome">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-dark" id="aFooterAcompanharSolic">Acompanhar Solicitações</a>
						</li>
					</ul>
				</div>
			</nav>
		</footer>
	</body>
	<script type="text/javascript" src="/layoutPortalAluno/resources/js/saibaMais.js"></script>
	<script type="text/javascript" src="/layoutPortalAluno/resources/js/funcoesClick.js"></script>
</html>
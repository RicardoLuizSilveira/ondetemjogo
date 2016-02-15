angular.module("ondetemjogo", ["ngRoute"]);

angular.module("ondetemjogo").controller("loginController", function ($scope) {
	$scope.efetuarLogin = function (login) {
		console.log($scope.login);
	}

});

angular.module("ondetemjogo").controller("signupController", function ($scope) {
	$scope.signup = {};

	$scope.formValidation = function(signup){
		var _regExpEmail = /\w.*@\w*\.\w{3}/;
		var _emailValidation = _regExpEmail.test(signup.email);
		var _passwordCompare = signup.password == signup.passwordConfirmation;
		var _passwordLength = signup.password || '';
		var _passwordValidation = _passwordLength && _passwordCompare;
		return !_emailValidation || !_passwordValidation;
	}

	$scope.efetuarCadastro = function(signup){
		var userData = {
				email: signup.email,
				password: signup.password
		};
		console.log(userData);
		$scope.signup = {};
	}

});

angular.module("ondetemjogo").controller("dashboardController", function ($scope) {

});

angular.module("ondetemjogo").controller("welcomeController", function ($scope) {
	$(function() {
		mudaBarraTopo();
		$('a.scroll').bind('click', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href').replace("#/index","")).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});
	window.onscroll=function(){
		mudaBarraTopo();
	};
	function mudaBarraTopo(){
		var sTop = (this.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
		if(sTop>450){
			$(".navbar-inverse").removeClass("inversorCorTop");
		}else{
			$(".navbar-inverse").addClass("inversorCorTop");
		}
	}
});

/** Auto complete Times **/
function DefaultTimes($scope) {
	$scope.names = [ "ABC" , "ASA" , "Aimoré" , "Ajax" , "Alecrim" , "Alemanha" , "Alto Acre" , "Altos" , "Amadense" , "Amax" , "America-RJ" , "Americano-MA" , "Americano-RJ" , "América TO" , "América de Três Rios" , "América-MG" , "América-PE" , "América-RN" , "América-SE" , "América-SP" , "Anapolina" , "Andirá" , "Angra dos Reis" , "Anápolis" , "Aparecidense" , "Aquidauanense" , "Aracruz" , "Araguaia" , "Araguaína" , "Araioses" , "Arapongas" , "Araripina" , "Araxá" , "Argentina" , "Argélia" , "Ariquemes" , "Arraial do Cabo" , "Arsenal" , "Assisense" , "Assu" , "Aston Villa" , "Atalanta" , "Athletic Bilbao" , "Atibaia" , "Atlético Ibirama" , "Atlético Mogi" , "Atlético Roraima" , "Atlético Sorocaba" , "Atlético Taguatinga" , "Atlético de Madrid" , "Atlético-AC" , "Atlético-BA" , "Atlético-ES" , "Atlético-GO" , "Atlético-MG" , "Atlético-PB" , "Atlético-PE" , "Atlético-PR" , "Audax-RJ" , "Audax-SP" , "Austrália" , "Auto Esporte-PB" , "Avaí" , "Avenida" , "Água Santa" , "Águia Negra" , "Águia de Marabá" , "Bacabal" , "Bahia" , "Bahia de Feira" , "Balsas" , "Bandeirante-SP" , "Bangu" , "Baraúnas" , "Barcelona" , "Barra Mansa" , "Barras" , "Barueri" , "Baré" , "Bayern de Munique" , "Belo Jardim" , "Benfica" , "Betis" , "Boa Esporte" , "Boavista" , "Boca Júnior" , "Bologna" , "Bolívia" , "Bonsucesso" , "Boquinhense" , "Borussia Dortmund" , "Botafogo" , "Botafogo-BA" , "Botafogo-DF" , "Botafogo-PB" , "Botafogo-SP" , "Bragantino" , "Brasil" , "Brasil de Pelotas" , "Brasiliense" , "Brasília" , "Brazlândia" , "Brusque" , "Bélgica" , "Bósnia-Herzegovina" , "CEO" , "CRB" , "CSA" , "CSE" , "CSP" , "Cabofriense" , "Cacerense" , "Cachoeiro" , "Cagliari" , "Caiçara" , "Caldas Novas" , "Caldense" , "Camarões" , "Camaçari" , "Camboriú" , "Cametá" , "Campinense" , "Canindé" , "Canoas" , "Capital" , "Capivariano" , "Capixaba" , "Carapebus" , "Castanhal" , "Castelo" , "Catanduvense" , "Catania" , "Catuense" , "Caxias" , "Ceará" , "Ceilandense" , "Ceilândia" , "Celta de Vigo" , "Cene" , "Central" , "Cerâmica" , "Chapecoense" , "Chelsea" , "Chievo" , "Chile" , "Chã Grande" , "Cianorte" , "Colatina" , "Colinas" , "Colo Colo-BA" , "Colômbia" , "Comercial-AL" , "Comercial-MS" , "Comercial-SP" , "Confiança" , "Conilon" , "Cordino" , "Coreia do Sul" , "Cori-Sabbá" , "Corinthians" , "Corintians-RN" , "Coritiba" , "Coritiba-SE" , "Corumbaense" , "Coruripe" , "Costa Rica" , "Costa Rica-MS" , "Costa do Marfim" , "Crac" , "Crateús" , "Crato" , "Criciúma" , "Croácia" , "Cruzeiro" , "Cruzeiro-DF" , "Cruzeiro-PB" , "Cruzeiro-RS" , "Cuiabá" , "Democrata GV" , "Deportivo La Coruña" , "Desportiva Ferroviária" , "Desportivo Brasil" , "Dom Bosco" , "Dorense" , "Doze" , "Duque de Caxias" , "ECUS" , "Elosport" , "Equador" , "Espanha" , "Espanyol" , "Espigão" , "Esporte de Patos" , "Esportivo" , "Espírito Santo" , "Esse" , "Estados Unidos" , "Estanciano" , "Estrela do Norte" , "Everton" , "Expressinho" , "FC Cascavel" , "Fast" , "Feirense" , "Fernandópolis" , "Fernandópolis" , "Ferroviária" , "Ferroviário" , "Figueirense" , "Fiorentina" , "Flamengo" , "Flamengo de Guanambi" , "Flamengo-PB" , "Flamengo-PI" , "Flu de Feira" , "Fluminense" , "Formosa" , "Fortaleza" , "Força e Luz" , "Foz do Iguaçu" , "Francana" , "França" , "Friburguense" , "Fulham" , "Funorte" , "GAS" , "GEL" , "Galvez" , "Galícia" , "Gama" , "Gana" , "Gavião" , "Genoa" , "Genus" , "Getafe" , "Globo FC" , "Glória" , "Goianésia" , "Goiás" , "Goytacaz" , "Granada" , "Grécia" , "Grêmio" , "Grêmio Anápolis" , "Grêmio Prudente" , "Guajará" , "Guarani" , "Guarani de Juazeiro" , "Guarani de Palhoça" , "Guarani-MG" , "Guarany de Sobral" , "Guarany-SE" , "Guaratinguetá" , "Guaraí" , "Guarujá" , "Gurupi" , "Holanda" , "Holanda-AM" , "Honduras" , "Horizonte" , "Icasa" , "Imperatriz" , "Independente-AP" , "Independente-PA" , "Independente-SP" , "Inglaterra" , "Inter de Lages" , "Inter de Limeira" , "Internacional" , "Internazionale" , "Interporto" , "Ipanema" , "Ipatinga" , "Iranduba" , "Iraty" , "Irã" , "Itabaiana" , "Itabuna" , "Itapajé" , "Itapipoca" , "Itapirense" , "Itaporã" , "Ituano" , "Itumbiara" , "Itália" , "Ivinhema" , "JMalucelli" , "Jabaquara" , "Jacobina" , "Jacuipense" , "Jamaica" , "Japão" , "Ji-Paraná" , "Joinville" , "José Bonifácio" , "Juazeirense" , "Juazeiro" , "Juventude" , "Juventus" , "Juventus-AC" , "Juventus-SC" , "Juventus-SP" , "Lagarto" , "Lajeadense" , "Lazio" , "Legião" , "Levante" , "Linense" , "Linhares" , "Liverpool" , "Londrina" , "Lucena" , "Luverdense" , "Luziânia" , "Macapá" , "Macaé" , "Madureira" , "Mallorca" , "Mamoré" , "Manaus" , "Manchester City" , "Manchester United" , "Manthiqueira" , "Maracaju" , "Maracanã" , "Maranguape" , "Maranhão" , "Marcílio Dias" , "Maringá" , "Marília" , "Mato Grosso" , "Mazagão" , "Metropolitano" , "Milan" , "Minas Boca" , "Miramar" , "Mirassol" , "Misto" , "Mixto" , "Mogi Mirim" , "Monte Azul" , "Montes Claros" , "Morrinhos" , "Morumbi" , "Moto Club" , "Moto Clube-RO" , "Murici" , "Málaga" , "México" , "Nacional Borbense" , "Nacional de Muriaé" , "Nacional de Patos" , "Nacional-AM" , "Nacional-MG" , "Nacional-PR" , "Napoli" , "Naviraiense" , "Newcastle" , "Nigéria" , "Noroeste" , "Norwich City" , "Nova Iguaçu" , "Novo Hamburgo" , "Novoperário" , "Novorizontino" , "Náuas" , "Náutico" , "Náutico-RR" , "Oeste" , "Olaria" , "Olímpia-SP" , "Olímpico" , "Operário FC" , "Operário VG" , "Operário-AM" , "Operário-MS" , "Operário-PR" , "Oratório" , "Osasuna" , "Osvaldo Cruz" , "PSTC" , "PSV Eindhoven" , "Paduano" , "Palermo" , "Palmas" , "Palmeira-RN" , "Palmeiras" , "Paracatu" , "Paragominas" , "Paraguai" , "Paranavaí" , "Paraná" , "Parauapebas" , "Paraíba" , "Paraíso" , "Paris Saint-Germain" , "Parma" , "Parnahyba" , "Passo Fundo" , "Paulista" , "Paysandu" , "Pelotas" , "Penapolense" , "Penarol-AM" , "Penedense" , "Peru" , "Pescara" , "Pesqueira" , "Petrolina" , "Piauí" , "Picos" , "Pimentense" , "Planaltina" , "Plácido de Castro" , "Poconé" , "Ponte Preta" , "Porto" , "Porto-PE" , "Portugal" , "Portuguesa" , "Portuguesa Santista" , "Portuguesa-RJ" , "Potiguar de Mossoró" , "Potyguar CN" , "Presidente Prudente" , "Princesa do Solimões" , "Prudentópolis" , "Queens Park Rangers" , "Queimadense" , "Quissamã" , "Quixadá" , "RB Brasil" , "Rayo Vallecano" , "Reading" , "Real Desportivo" , "Real Madrid" , "Real Noroeste" , "Real Sociedad" , "Remo" , "Resende" , "Ricanato" , "Rio Branco de Venda Nova" , "Rio Branco-AC" , "Rio Branco-ES" , "Rio Branco-PR" , "Rio Branco-RJ" , "Rio Branco-SP" , "Rio Claro" , "Rio Negro-AM" , "Rio Negro-RR" , "Rio Preto" , "Rio Verde-GO" , "Riostrense" , "River Plate-SE" , "River-PI" , "Rolim de Moura" , "Roma" , "Roma-PR" , "Rondoniense" , "Rondonópolis" , "Rubro" , "Rússia" , "Sabiá" , "Salgueiro" , "Samambaia" , "Sampaio Corrêa" , "Sampaio Corrêa-RJ" , "Sampdoria" , "Santa Cruz" , "Santa Cruz-PA" , "Santa Cruz-PB" , "Santa Cruz-RN" , "Santa Cruz-RS" , "Santa Maria" , "Santa Quitéria" , "Santa Rita" , "Santacruzense" , "Santana" , "Santo André" , "Santos" , "Santos-AP" , "Serc" , "Sergipe" , "Serra" , "Serra Macaense" , "Serra Talhada" , "Serrano-BA" , "Serrano-RJ" , "Sete de Dourados" , "Sete de Junho" , "Sete de Setembro" , "Sete de Setembro-AL" , "Sevilla" , "Shakhtar Donetsk" , "Siena" , "Sinop" , "Sobradinho" , "Social" , "Socorrense" , "Sorriso" , "Sousa" , "Southampton" , "Sport" , "Sport Atalaia" , "Sport Campina" , "Sport-ES" , "Stoke City" , "Sul América" , "Sunderland" , "Suíça" , "Swansea City" , "São Benedito" , "São Bento" , "São Bernardo" , "São Caetano" , "São Carlos" , "São Domingos" , "São Francisco-PA" , "São José dos Campos" , "São José-AP" , "São José-MA" , "São José-RS" , "São José-SP" , "São João da Barra" , "São Luiz" , "São Mateus" , "São Paulo" , "São Paulo-AP" , "São Paulo-RS" , "São Pedro" , "São Raimundo-AM" , "São Raimundo-PA" , "São Raimundo-RR" , "São Vicente" , "Tanabi" , "Tapajós" , "Tarumã" , "Taubaté" , "Teresópolis" , "Tigres-RJ" , "Time Negra" , "Tiradentes-CE" , "Tocantins" , "Tocantins de Palmas" , "Tocantinópolis" , "Toledo" , "Tombense" , "Torino" , "Tottenham" , "Trairiense" , "Trem" , "Treze" , "Tricordiano" , "Trindade" , "Tuna Luso" , "Tupi-MG" , "Tupy-ES" , "Tupã" , "URT" , "Uberaba" , "Uberlândia" , "Ubiratan" , "Udinese" , "Uniclinic" , "União Barbarense" , "União Cacoalense" , "União Frederiquense" , "União Mogi" , "União Rondonópolis" , "União Suzano" , "União-AL" , "Urso" , "Uruguai" , "Valencia" , "Valladolid" , "Vasco" , "Vasco-AC" , "Velo Clube" , "Venezuela" , "Vera Cruz" , "Veranópolis" , "Viana" , "Vila Aurora" , "Vila Nova" , "Vilavelhense" , "Vilhena" , "Villa Nova-MG" , "Vitória" , "Vitória da Conquista" , "Vitória-ES" , "Vitória-PE" , "Vocem" , "Volta Redonda" , "Votuporanguense" , "Werder Bremen" , "West Bromwich" , "West Ham" , "Wigan" , "XV de Jaú" , "XV de Piracicaba" , "Ypiranga-AP" , "Ypiranga-PE" , "Ypiranga-RS" , "Zaragoza" , "Zenit" ];
}

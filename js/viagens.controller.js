angular.module("Viagem").controller("ViagensController",

	function ($scope, $filter) {

	$scope.titulo = "Cadastro de Viagens";
	$scope.descricao = "Aqui você pode detalhar melhor sua viagem, para que possamos efetuar seu cadastro.";

	//Viagens criadas para ter como exemplo
	$scope.viagens = [
		{
			id: "1",
			origem: "Jacareí",
			destino: "Caçapava",
			data: "10/03/2018",
			hora: "12:25",
			tipo: "Carro",
			nomepiloto: "Rafael",
			emailpiloto: "rafael@rafaelcasali.com",
			nomepassageiro1: "Pedro",
			emailpassageiro1: "pedroivo@gmail.com",
			nomepassageiro2: "Roberto",
			emailpassageiro2: "rob1985@gmail.com",					
		},
		{
			id: "2",
			origem: "São Paulo",
			destino: "Rio de Janeiro",
			data: "15/06/2018",
			hora: "08:25",
			tipo: "Moto",
			nomepiloto: "Joaquim",
			emailpiloto: "joaquimnovaes@gmail.com",	
			nomepassageiro1: "Debora",
			emailpassageiro1: "dehby92@bol.com.br",			
		},
		{
			id: "3",
			origem: "Temembé",
			destino: "Taubaté",
			data: "11/12/2018",
			hora: "18:36",
			tipo: "Carro",
			nomepiloto: "Rogerio",
			emailpiloto: "roger56@bol.com.br",
			nomepassageiro1: "Erica",
			emailpassageiro1: "edias88@gmail.com",
			nomepassageiro2: "Gabriele",
			emailpassageiro2: "gab_12@hotmail.com",			
			nomepassageiro3: "Josue",
			emailpassageiro3: "jo_su87@gmail.com",			
		},
	];

	$scope.novaViagem = {};

	$scope.removerViagem = function(id) {
		angular.forEach($scope.viagens, function(viagens, i) {
			if(viagens.id == id) {
				$scope.viagens.splice(i, 1);
			}
		});
	}

	$scope.criarViagem = function() {
		var viagens = angular.copy ($scope.novaViagem);
		viagens.id = Date.now();
		//formatação dos inputs data e hora
		viagens.data = $filter('date')($scope.novaViagem.data, 'dd/MM/yyyy ');
		viagens.hora = $filter('date')($scope.novaViagem.hora, 'H:m ');

		$scope.viagens.push(viagens);

		$scope.novaViagem = {};		
	}
});
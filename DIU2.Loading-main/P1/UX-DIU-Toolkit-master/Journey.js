/*******************************************/
/*             JOURNEY.JS                  */
/*     Datos para USER JOURNEY MAP         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.1 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Modifica los datos para los Journey Map (uno para cada Persona)  */
/****  Usa los 6 pasos y sigue las instrucciones */   
/****  Las imagenes para  'Photo', 'feelX', 'imaX' están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/




angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
		$scope.Grupo_ID ="DIU2.Loading";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.JourneyIndex = 0;
        
        $scope.Journeys = [
			{		
                
                /*************************************/
                /**** PRIMER USER JOURNEY MAP  *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
				Id: 0,
				Name: "Abraham Santos",
                Photo: "AbrahamSantos.jpg",
    
                /*** PASO #1: INSPIRACION ***/ 
                goal1: "Vió un post de Cruz Cafuné sobre un gira por España y Granada es una de sus paradas más próximas. Además piensa que es una buena oportunidad para añadir la experioencia en su vlog",
                touch1: "Móvil",
                feel1: "5",
                con1: "Entusiasmado en organizar su viaje y su vlog para mostrar el lugar.",
                ima1: "01encuentrapost.png",
				
                /*** PASO #2: DECICION ***/ 
                goal2: "Propone a sus amigos ir juntos. Busca en internet alojamientos para todos y lugares de ocio e interés en Granada",
                touch2: "Móvil",
                feel2: "3",
                con2: "Al ser un grupo grande encuentra dificultad a la hora de encontrar alojamiento",
                ima2: "02busca.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "Encuentra algunos hostels que ofrecen habitaciones para grupos y se percata que muchos ofrecen además café, bar, espectáculo...",
                touch3: "Móvil",
                feel3: "2",
                con3: "Se preocupa de no sólo buscar alojamiento sino también tener en cuenta los otros servicios que puedan ofrecer y su ubicación.",
                ima3: "03agobio.png",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "Queda con sus amigos para discutir y compartir las páginas varias opciones que han encontrado a la mayoría les han llamado la atención algnos hosteles que tengan bar",
                touch4: "ordenador",
                feel4: "3",
                con4: "Con sus amigos se siente menos agobiado a la hora de encontrar el lugar perfecto para ellos",
                ima4: "04discutir.png",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "De todos ellos se decantan por uno llamado Carlota Braun por su cercanía al centro y la variedad de eventos que organizan y se muestran en sus redes sociales.",
                touch5: "ordenador portatil y móvil",
                feel5: "4",
                con5: "Todos mas o menos están de acuerdo con la propuesta",
                ima5: "05amigosbuscan.png",
                
                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Consiguen reservar y se ponen otras actividades que les gustarían hacer en su viaje",
                touch6: "ordenador",
                feel6: "5",
                con6: "Teniendo ya alojamiento asegurado y más relajado comentan más actividades que hacer los demás días",
                ima6: "06decision.png",
                
			},
			{	
                /*************************************/
                /**** SEGUNDO USER JOURNEY MAP *******/
                /***      Cambiar datos        *******/
                /*************************************/
                
				Id: 1,
				Name: "Charlotte Moreau",
                Photo: "CharlotteMoreau.jpg",
                
				 /*** PASO #1: INSPIRACION ***/ 
                goal1: "Hablando con su prima María sobre lo que quieren hacer en vacaciones se dan cuenta de que coinciden sus días libres y deciden quedar juntas",
                touch1: "Ordenador",
                feel1: "4",
                con1: "Tiene una charla tranquila hablando sobre sus cosas y se emociona ya que hace tiempo que no se ven en persona",
                ima1: "01charla.png",
                
                /*** PASO #2: DECICION ***/ 
                goal2: "Deciden quedar en la ciudad de María pues Charlotte quiere tener un cambio de aires y de paso visitarla",
                touch2: "Ordenador",
                feel2: "4",
                con2: "Charlotte piensa que cambiar de ambiente es bueno aunque le preocupa encontrar alojamiento ya que es un poco precipitado a lo que ella suele acostumbrar",
                ima2: "02decision.png",
                
                /*** PASO #3: ACTUA ***/ 
                
                goal3: "María ofrece alojamiento en su casa a su prima. Charlotte quiere ir a algún sitio con buen ambiente para relajarse. Como a ambas le gustan el jazz decide buscar algún sitio relacionado",
                touch3: "Móvil",
                feel3: "3",
                con3: "Charlotte busca sittios de jazz para ir con su prima.",
                ima3: "03busca.jpg",
                
                /*** PASO #4: OBSERVA ***/ 
                
                goal4: "A Charlotte le llaman la atención algunos bares y pubs que reproducen jazz en directo",
                touch4: "Móvil",
                feel4: "4",
                con4: "Le pide opinión de los bares que ha encontrado a su prima para decidir a cuáles irían",
                ima4: "04mirabar.jpg",
                
                 /*** PASO #5: ANALIZA ***/ 
                
                goal5: "María dice que de los que Charlotte le ha enseñado, unos amigos suyos le han recomendado Carlota Braun, donde ofrecen jazz una vez a la semana",
                touch5: "Móvil",
                feel5: "4",
                con5: "Charlotte le echa un vistazo a la página web y le agrada.",
                ima5: "05show.jpg",

                
                /*** PASO #6: CONCLUSION ***/ 
                
                goal6: "Se deciden por ir juntas a dicho bar el día en el que hay jazz",
                touch6: "",
                feel6: "5",
                con6: "Pasan un buen rato",
                ima6: "06salida.jpg",
                
                
                
			}
		];
        
		$scope.model = $scope.Journeys[0];

	}])




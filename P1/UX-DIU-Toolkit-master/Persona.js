/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019     */                        
/*          ver 1.2 26/Feb/2022            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU2.Loading";
        $scope.Curso ="2021/22";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Abraham Santos",
				Photo: "AbrahamSantos.jpg",
				Quote: "Deja que tu sonrisa cambie el mundo, no dejes que el mundo cambie tu sonrisa",
				Age: 23,
				Occupation: "Influencer",
				Family: "Soltero",
				Location: "Alicante",
				Character: "Le gusta vivir experiencias y compartirlas",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 5 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 3 }
				], 
				Goals: ["Mostrar sus habilidades de edición", "Conocer mundo", "Crear recuerdos con sus amigos"],
				Frustrations: ["Le preocupa que al encontrar un trabajo estable no pueda dedicarle tanto tiempo a ser influencer", "Encontrar a su media naranja"],
				Bio: "Es de Alicante y vino a Granada con sus amigos para ir a concierto de Cruz Cafuné y de paso hacer un vlog sobre el concierto, la ciudad y su ambiente. Estudió comunicación audivisual en Elche, y decidió que estaría bien poner en práctica lo aprendido abriéndose un canal de YouTube.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 3 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 4 }
					
				], 
                Contextos: "Está emocionado porque es su primer vlog lejos de casa y cree que es una buena oportunidad para consolidar su canal y a su vez pasar un buen rato con sus amigos en el concierto de uno de sus artistas favoritos.",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4}
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "Charlotte Moreau",
				Photo: "CharlotteMoreau.jpg",
				Quote: "La amistad duplica las alegrías y divide las angustias por la mitad",
				Age: 29,
				Occupation: "Barista",
				Family: "Vive con su tía y su gato Tituné",
				Location: "Lyon, Francia",
				Character: "Trabajadora, centrada y amigable",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 3 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 4 }
				], 
				Goals: ["Montar su propia cafetería.", "Mudarse a París.", "Hacer un curso de repostería.", "Mejorar su español."],
				Frustrations: ["No tener tiempo para su vida personal", "No tener éxito en la apertura de su negocio.", "No poder independizarse."],
				Bio: "Creció en Lattes, pero al ser muy pueblo muy pequeño decidió irse a estudiar a Lyon, donde vive su tía. Cuando terminó sus estudios hizo un curso de barista y encontró trabajo en una pequeña cafetería de ciudad. Su prima, que vive en España le ha ofrecido venir a pasar sus vacaciones a Granada para alejarse un poco de su rutina.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Mobile", Value: 3 },
					{ Name: "RRSS", Value: 3 },
					{ Name: "Software", Value: 1 }
					
				], 
                Contextos:	"Hace mucho que no ve a su prima, y quiere aprovechar esta oportunidad para ponerse al día con ella y además practicar su español. Es su primera vez en Granada y le hace mucha ilusión conocer la ciudad." ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 3 },
					{ Name: "Online & Social Media", Value: 3 },
					{ Name: "Recomendaciones & sugerencias", Value: 4 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 4 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])
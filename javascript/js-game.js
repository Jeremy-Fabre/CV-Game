'use strict';


window.addEventListener("load", function(){

	$('#container-game').css('visibility', 'visible');
		
	// CONTENEUR DU PERSONNAGE
	
	var conteneurPerso = window.document.getElementById('container-perso');
		conteneurPerso.style.display = 'none';
		
		
	// FONCTION DE DÉBUT DU JEU AU CLICK SUR LE BOUTON

    $('#button-play').click(function(){
		
		// DISPARITION DU BOUTON, DES INSTRUCTIONS ET RÉINITIALISATION DE LA BARRE D'OBJECTIFS
		
		$('#button-play').css('display', 'none');
		$('#instructions').css('display', 'none');
		$('#rejouer').css('display', 'none');
		$('#sprite-barre-objectifs').css('margin-top', '0');
		
		
		
		// VARIABLE DE COLLISION AVEC LES OBJETS ENNEMIS ET DE WIN CONDITION
		
		var collisionEnnemi = false;
		var win = false;
		
    	// COORDONNÉES DE BASE DU PERSONNAGE

		conteneurPerso.style.position = 'absolute';
		conteneurPerso.style.overflow = 'hidden';
		conteneurPerso.style.width = '38px';
		conteneurPerso.style.height = '84px';
        conteneurPerso.style.top = '482px';
        conteneurPerso.style.left = '463px';
		conteneurPerso.style.display = 'block';


    	// SPRITE PERSONNAGE

    	var spritePerso = window.document.getElementById('sprite-perso');
		
		
    	// TABLEAU DES FRAMES

    	var mesFrames = {
        	droite: [{
         	   marginLeft : '-38px'
         	},{
         	   marginLeft : '-76px'
        	},{
        	    marginLeft : '-114px'
        	},{
        	    marginLeft : '-152px'
        	},{
         	   marginLeft : '-190px'
         	},{
         	   marginLeft : '-228px'
         	},{
         	   marginLeft : '-266px'
         	}],
        	containerPeinture: [{
				top : '0px'
			},{
				top : '112px'
			},{
				top : '181px'
			},{
				top : '250px'
			},{
				top : '319px'
			},{
				top : '388px'
			},{
				top : '457px'
			},{
				top : '526px'
			}],
			spritePeinture: [{
				marginTop : '69px'
			},{
				marginTop : '0px'
			},{
				marginTop : '-69px'
			},{
				marginTop : '-138px'
			},{
				marginTop : '-207px'
			},{
				marginTop : '-276px'
			},{
				marginTop : '-345px'
			},{
				marginTop : '-414px'
			}],
			spriteTirHtml: [{
				marginTop : '47px'
			},{
				marginTop : '0px'
			},{
				marginTop : '-47px'
			},{
				marginTop : '-94px'
			},{
				marginTop : '-141px'
			}],
			spriteTirJs: [{
				marginTop : '70px'
			},{
				marginTop : '0px'
			},{
				marginTop : '-70px'
			},{
				marginTop : '-70px'
			},{
				marginTop : '-140px'
			},{
				marginTop : '-210px'
			}]
   		 }
	
      	// MOUVEMENT (variables et éléments ennemis)
		
		
		if (!collisionEnnemi) {
			animPotPhotoshop();
		}

		// VARIABLE D'OPACITÉ

		var o = 0;

		// FONCTION D'APPARITION DU PREMIER BACKGROUND

		var apparitionBgPs = setInterval(function () {
			if (o <= 1 && !collisionEnnemi) {
				$('#backgrounds').css('opacity', o = o + 0.1);
			}
			if (o >= 1) {
				clearInterval(apparitionBgPs);
			}
		}, 60);
		
		// FONCTION D'APPARITION DES ICONES DE COMPETENCES
		
		var timeOutIconePs = setTimeout(function () {
			if(!collisionEnnemi){
				var positionIconePsX = Math.random() * (827 - 34) + 34;
				$('#icone-photoshop').css('display', 'block');
				$('#icone-photoshop').css('left', positionIconePsX);
			}
		}, 4000);
		
		var timeOutIconeHtml = setTimeout(function () {
			if(!collisionEnnemi){
				var positionIconeHtmlX = Math.random() * (827 - 34) + 34;
				$('#icone-html-css').css('display', 'block');
				$('#icone-html-css').css('left', positionIconeHtmlX);
			}
		}, 7500);
		
		var timeOutIconeJs = setTimeout(function () {
			if(!collisionEnnemi){
				var positionIconeJsX = Math.random() * (827 - 34) + 34;
				$('#icone-js').css('display', 'block');
				$('#icone-js').css('left', positionIconeJsX);
			}
		}, 14000);
		
		var timeOutIconeJQuery = setTimeout(function () {
			if(!collisionEnnemi){
				var positionIconeJQueryX = Math.random() * (827 - 34) + 34;
				$('#icone-jquery').css('display', 'block');
				$('#icone-jquery').css('left', positionIconeJQueryX);
			}
		}, 20000);
		
		var timeOutIconeAngular = setTimeout(function () {
			if(!collisionEnnemi){
				var positionIconeAngularX = Math.random() * (827 - 34) + 34;
				$('#icone-angular').css('display', 'block');
				$('#icone-angular').css('left', positionIconeAngularX);
			}
		}, 23000);
		
		var timeOutIconeMongo = setTimeout(function () {
			if(!collisionEnnemi){
				var positionIconeMongoX = Math.random() * (827 - 34) + 34;
				$('#icone-mongo').css('display', 'block');
				$('#icone-mongo').css('left', positionIconeMongoX);
			}
		}, 26000);
		
		var timeOutIconeNode = setTimeout(function () {
			if(!collisionEnnemi){
				var positionIconeNodeX = Math.random() * (827 - 34) + 34;
				$('#icone-node').css('display', 'block');
				$('#icone-node').css('left', positionIconeNodeX);
			}
		}, 29000);
		
		var timeOutIconeAjax = setTimeout(function () {
			if(!collisionEnnemi){
				var positionIconeAjaxX = Math.random() * (827 - 34) + 34;
				$('#icone-ajax').css('display', 'block');
				$('#icone-ajax').css('left', positionIconeAjaxX);
			}
		}, 32000);
		

		// POT DE PEINTURE PHOTOSHOP

		$('#container-pot-ps').css('display', 'block');

		function animPotPhotoshop() {
			var timeOutPS = setTimeout(function () {
				var framePot = 0;
				var framePeinture = 0;

				if (!collisionEnnemi) {
					$('#container-peinture-ps').css('display', 'block');
					var intervalPot = setInterval(function () {
						if (framePot <= -120) {
							framePot = 0;
							clearInterval(intervalPot);
						}
						$('#sprite-pot-ps').css('margin-left', framePot);
						framePot = framePot - 24;
					}, 100);
				} else {
					clearInterval(intervalPot);
					clearTimeout(timeOutPS);
				}

				if (!collisionEnnemi) {
					var intervalPeinture = setInterval(function () {
						if (framePeinture >= mesFrames.containerPeinture.length && framePeinture >= mesFrames.spritePeinture.length) {
							framePeinture = 0;
							clearInterval(intervalPeinture);
							animPotPhotoshop();
						}
						$('#container-peinture-ps').css('top', mesFrames.containerPeinture[framePeinture].top);
						$('#sprite-peinture-ps').css('margin-top', mesFrames.spritePeinture[framePeinture].marginTop);
						framePeinture++;
					}, 100);
				} else {
					clearInterval(intervalPeinture);
					clearTimeout(timeOutPS);
				}

			}, 3000);
		};


		// CANON A BALISE HTML / CSS 

		if (!collisionEnnemi) {
			var timeOutApparitionHtml = setTimeout( function(){
				var bgPs = true;
				var disparitionBgPs = setInterval(function () {
					if (o >= 0) {
						$('#backgrounds').css('opacity', o = o - 0.1);
					}
					if(o <= 0){
						clearInterval(disparitionBgPs);
						bgPs = false;
					}
					if(collisionEnnemi){
						clearInterval(disparitionBgPs);
					}
				}, 60);

				

				var apparitionBgHtml = setInterval(function () {
					if (o <= 1 && !bgPs) {
						$('#backgrounds').css('background-image', 'url(./images/background-htmlcss.png)');
						$('#backgrounds').css('opacity', o = o + 0.1);
					}
					if (o >= 1) {
						clearInterval(apparitionBgHtml);
					}
					if(collisionEnnemi){
						clearInterval(disparitionBgHtml);
					}
				}, 60);

				$('#container-canon-htmlcss').css('display', 'block');
				$('#container-canon2-htmlcss').css('display', 'block');
				animCanonHtmlCss();
			}, 6000)
			
		};

			// MOUVEMENTS DES CANONS A BALISE HTML / CSS
		
		var canonHtmlPositionX = true;
		var canonHtml2PositionX = false;

		if (!collisionEnnemi) {
			var intervalMouvementCanonHtml = setInterval(function () {
				var canonHtmlX = parseFloat($('#container-canon-htmlcss').css('left'));
				var canonHtml2X = parseFloat($('#container-canon2-htmlcss').css('left'));

				// PREMIER CANON HTML / CSS

				if (canonHtmlX <= 912 && canonHtmlPositionX && !collisionEnnemi) {
					canonHtmlX = canonHtmlX + 5;
					$('#container-canon-htmlcss').css('left', canonHtmlX);
					$('#container-tir-htmlcss').css('left', canonHtmlX + 12);
				}
				if (canonHtmlX >= 910 && canonHtmlPositionX) {
					canonHtmlPositionX = false;
				}
				if (canonHtmlX >= 34 && !canonHtmlPositionX && !collisionEnnemi) {
					canonHtmlX = canonHtmlX - 5;
					$('#container-canon-htmlcss').css('left', canonHtmlX);
					$('#container-tir-htmlcss').css('left', canonHtmlX + 12);
				}
				if (canonHtmlX <= 36 && !canonHtmlPositionX) {
					canonHtmlPositionX = true;
				}

				// SECOND CANON HTML / CSS

			
				if (canonHtml2X <= 912 && canonHtml2PositionX && !collisionEnnemi) {
					canonHtml2X = canonHtml2X + 5;
					$('#container-canon2-htmlcss').css('left', canonHtml2X);
					$('#container-tir2-htmlcss').css('left', canonHtml2X + 12);
				}
				if (canonHtml2X >= 910 && canonHtml2PositionX) {
					canonHtml2PositionX = false;
				}
				if (canonHtml2X >= 34 && !canonHtml2PositionX && !collisionEnnemi) {
					canonHtml2X = canonHtml2X - 5;
					$('#container-canon2-htmlcss').css('left', canonHtml2X);
					$('#container-tir2-htmlcss').css('left', canonHtml2X + 12);
				}
				if (canonHtml2X <= 36 && !canonHtml2PositionX) {
					canonHtml2PositionX = true;
				}
				
			}, 100);
			
		};

			// FONCTION DES CANONS A BALISE HTML / CSS

		function animCanonHtmlCss() {
			setTimeout(function () {
				
				var frameCanonHtml = 0;
				var frameTirHtml = 0;
				var tirHtmlY = 70;
				
				if (!collisionEnnemi) {
					$('#container-tir-htmlcss').css('display', 'block');
					$('#container-tir2-htmlcss').css('display', 'block');
					var intervalCanonHtml = setInterval(function () {
						if (frameCanonHtml <= -264) {
							frameCanonHtml = 0;
							clearInterval(intervalCanonHtml);
						}
						$('#sprite-canon-htmlcss').css('margin-top', frameCanonHtml);
						$('#sprite-canon2-htmlcss').css('margin-top', frameCanonHtml);
						frameCanonHtml = frameCanonHtml - 88;
					}, 100);
				} 
				
				if (!collisionEnnemi) {
					var intervalTirHtml = setInterval(function () {
						if (frameTirHtml >= mesFrames.spriteTirHtml.length) {
							frameTirHtml = 4;
						}
						if (tirHtmlY >= 519){
							tirHtmlY = 70;
							frameTirHtml = 0;
							clearInterval(intervalTirHtml);
							animCanonHtmlCss();
						}
						
						$('#sprite-tir-htmlcss').css('margin-top', mesFrames.spriteTirHtml[frameTirHtml].marginTop);
						$('#sprite-tir2-htmlcss').css('margin-top', mesFrames.spriteTirHtml[frameTirHtml].marginTop);
						$('#container-tir-htmlcss').css('top', tirHtmlY);
						$('#container-tir2-htmlcss').css('top', tirHtmlY);
						tirHtmlY = tirHtmlY + 40;
						frameTirHtml++;
					}, 100);
				}
				
			}, 2000);
		};


		// CANON A VARIABLES EXPLOSIVES JS 

		if (!collisionEnnemi) {
			var timeOutApparitionJs = setTimeout( function(){
				var bgHtmlCss = true;
				var disparitionBgHtmlCss = setInterval(function () {
					if (o >= 0) {
						$('#backgrounds').css('opacity', o = o - 0.1);
					}
					if(o <= 0){
						clearInterval(disparitionBgHtmlCss);
						bgHtmlCss = false;
					}
					if(collisionEnnemi){
						clearInterval(disparitionBgHtmlCss);
					}
				}, 60);

				

				var apparitionBgJs = setInterval(function () {
					if (o <= 1 && !bgHtmlCss) {
						$('#backgrounds').css('background-image', 'url(./images/background-js.png)');
						$('#backgrounds').css('opacity', o = o + 0.1);
					}
					if (o >= 1) {
						clearInterval(apparitionBgJs);
					}
					if(collisionEnnemi){
						clearInterval(apparitionBgJs);
					}
				}, 60);

				$('#container-canon-js').css('display', 'block');
				animCanonJs();

			}, 12000);
		};

			// MOUVEMENTS DU CANON A VARIABLE JS
		
		var canonJsPositionX = true;

		if (!collisionEnnemi) {
			var intervalMouvementCanonJs = setInterval(function () {
				var canonJsX = parseFloat($('#container-canon-js').css('left'));

				if (canonJsX <= 800 && canonJsPositionX && !collisionEnnemi) {
					canonJsX = canonJsX + 2;
					$('#container-canon-js').css('left', canonJsX);
					$('#container-tir-js').css('left', canonJsX - 26);
				}
				if (canonJsX >= 800 && canonJsPositionX) {
					canonJsPositionX = false;
				}
				if (canonJsX >= 100 && !canonJsPositionX && !collisionEnnemi) {
					canonJsX = canonJsX - 2;
					$('#container-canon-js').css('left', canonJsX);
					$('#container-tir-js').css('left', canonJsX - 26);
				}
				if (canonJsX <= 100 && !canonJsPositionX) {
					canonJsPositionX = true;
				}
			}, 100);
			
		};

			// FONCTION DU CANON A VARIABLE JS

		function animCanonJs() {
			setTimeout(function () {
				var frameCanonJs = 0;
				var frameTirJs = 0;
				var tirJsY = 70;

				if (!collisionEnnemi) {
					$('#container-tir-js').css('display', 'block');
					var intervalCanonJs = setInterval(function () {
						if (frameCanonJs <= -300) {
							frameCanonJs = 0;
							clearInterval(intervalCanonJs);
						}
						$('#sprite-canon-js').css('margin-top', frameCanonJs);
						$('#sprite-canon2-js').css('margin-top', frameCanonJs);
						frameCanonJs = frameCanonJs - 100;
					}, 100);
				}
				
				if (!collisionEnnemi) {
					var intervalTirJs = setInterval(function () {
						if (frameTirJs >= mesFrames.spriteTirJs.length) {
							frameTirJs = 0;
							tirJsY = 70;
							clearInterval(intervalTirJs);
							animCanonJs();
						}
						$('#sprite-tir-js').css('margin-top', mesFrames.spriteTirJs[frameTirJs].marginTop);
						$('#container-tir-js').css('top', tirJsY);
						tirJsY = tirJsY + 90;
						frameTirJs++;
					}, 100);
				}

			}, 3000);
		};


		// CANON A $ JQUERY 

		if (!collisionEnnemi) {
			var timeOutApparitionJQuery = setTimeout( function(){
				var bgJs = true;
				var disparitionBgJs = setInterval(function () {
					if (o >= 0) {
						$('#backgrounds').css('opacity', o = o - 0.1);
					}
					if(o <= 0){
						clearInterval(disparitionBgJs);
						bgJs = false;
					}
					if(collisionEnnemi){
						clearInterval(disparitionBgJs);
					}
				}, 60);

				

				var apparitionBgJQuery = setInterval(function () {
					if (o <= 1 && !bgJs) {
						$('#backgrounds').css('background-image', 'url(./images/background-jquery.png)');
						$('#backgrounds').css('opacity', o = o + 0.1);
					}
					if (o >= 1) {
						clearInterval(apparitionBgJQuery);
					}
					if(collisionEnnemi){
						clearInterval(apparitionBgJQuery);
					}
				}, 60);

				$('#container-canon-jQuery').css('display', 'block');
				animCanonJQuery();

			}, 18000);
		};
		
			// MOUVEMENTS DU CANON A $ JQUERY
		
		var canonJQueryPositionX = true;

		if (!collisionEnnemi) {
			var intervalMouvementCanonJQuery = setInterval(function () {
				var canonJQueryX = parseFloat($('#container-canon-jQuery').css('left'));

				if (canonJQueryX <= 912 && canonJQueryPositionX && !collisionEnnemi) {
					canonJQueryX = canonJQueryX + 4;
					$('#container-canon-jQuery').css('left', canonJQueryX);
					$('#container-tir-jQuery').css('left', canonJQueryX + 17);
				}
				if (canonJQueryX >= 912 && canonJQueryPositionX) {
					canonJQueryPositionX = false;
				}
				if (canonJQueryX >= 34 && !canonJQueryPositionX && !collisionEnnemi) {
					canonJQueryX = canonJQueryX - 4;
					$('#container-canon-jQuery').css('left', canonJQueryX);
					$('#container-tir-jQuery').css('left', canonJQueryX + 17);
				}
				if (canonJQueryX <= 34 && !canonJQueryPositionX) {
					canonJQueryPositionX = true;
				}
			}, 100);
			
		};

			// FONCTION DU CANON A $ JQUERY

		function animCanonJQuery() {
			setTimeout(function () {
				var tirJQueryY = 60;
				
				if (!collisionEnnemi) {
				 $('#container-tir-jQuery').css('display', 'block');
				}

				if (!collisionEnnemi) {
					var intervalTirJQuery = setInterval(function () {
						if (tirJQueryY >= 444) {
							$('#container-tir-jQuery').css('display', 'none');
							tirJQueryY = 70;
							clearInterval(intervalTirJQuery);
							animCanonJQuery();
						}
						$('#container-tir-jQuery').css('top', tirJQueryY);
						tirJQueryY = tirJQueryY + 20;
					}, 100);
				}

			}, 2000);
		};
		
		
		// BALISES EXPLOSIVES ANGULAR 

		if (!collisionEnnemi) {
			var timeOutApparitionAngular = setTimeout( function(){
				var bgJQuery = true;
				var disparitionBgJQuery = setInterval(function () {
					if (o >= 0) {
						$('#backgrounds').css('opacity', o = o - 0.1);
					}
					if(o <= 0){
						clearInterval(disparitionBgJQuery);
						bgJQuery = false;
					}
					if(collisionEnnemi){
						clearInterval(disparitionBgJQuery);
					}
				}, 60);

				

				var apparitionBgAngular = setInterval(function () {
					if (o <= 1 && !bgJQuery) {
						$('#backgrounds').css('background-image', 'url(./images/background-angular.png)');
						$('#backgrounds').css('opacity', o = o + 0.1);
					}
					if (o >= 1) {
						clearInterval(apparitionBgAngular);
					}
					if(collisionEnnemi){
						clearInterval(apparitionBgAngular);
					}
				}, 60);

				animBalisesAngular();

			}, 24000);
		};
		
			// FONCTION DES BALISES EXPLOSIVES ANGULAR

		function animBalisesAngular() {
			setTimeout(function () {
				var positionBalisesX = Math.random() * (827 - 34) + 34;
				var frameBalisesAngular = 139;
				var frameExplosionAngular = 139;
				
				if (!collisionEnnemi) {
					$('#container-balises-angular').css('left', positionBalisesX);
					var intervalBalisesAngular = setInterval(function () {
						if (frameBalisesAngular <= -417) {
							frameBalisesAngular = 139;
							clearInterval(intervalBalisesAngular);
						}
						$('#sprite-balises-angular').css('margin-left', frameBalisesAngular);
						$('#container-balises-angular').css('display', 'block');
						frameBalisesAngular = frameBalisesAngular - 139;
					}, 500);
				}
				
				if (!collisionEnnemi) {
					var timeOutExplosionAngular = setTimeout(function () {
						$('#container-explosion-angular').css('left', positionBalisesX);
						var intervalExplosionAngular = setInterval(function () {
							$('#container-explosion-angular').css('display', 'block');
							if (frameExplosionAngular <= -278) {
								frameExplosionAngular = 139;
								clearInterval(intervalExplosionAngular);
								clearTimeout(timeOutExplosionAngular);
								$('#container-explosion-angular').css('display', 'none');
								animBalisesAngular();
								
							}
							$('#sprite-explosion-angular').css('margin-left', frameExplosionAngular);
							frameExplosionAngular = frameExplosionAngular - 139;
						}, 150);
					}, 2000);
				}

			}, 3000);
		};
		
    
    	// MOUVEMENT (Key DOWN)

    	var x=481;
    	var animDroiteGauche = false;
    	var checkCollisionGauche = false;
		var checkCollisionDroite = false;
		var mouvementGauche;
		var mouvementDroite;
	

    	window.onkeydown = function(event){

      		var code = event.keyCode;
      		switch(code){
        		case 37:
          		//*GAUCHE*
                  
            	var maFrame = 0;

            	if(!animDroiteGauche){
              

              		mouvementGauche = setInterval(function(){
                
					if (!checkCollisionGauche){
                		x = x - 15;
                		conteneurPerso.style.left = x + 'px';
                		conteneurPerso.style.transform = 'scaleX(-1)';
					}
                	if (maFrame >= mesFrames.droite.length){
                  		maFrame = 0;
                	}
                	spritePerso.style.marginLeft = mesFrames.droite[maFrame].marginLeft;
                	maFrame++;
              		}, 50);
            	}
            
            	animDroiteGauche = true;
				checkCollisionGauche = false;
        		break;
        
        		case 39:
          		//*DROITE*
            	var maFrame = 0;

            	if(!animDroiteGauche){
              
              		mouvementDroite = setInterval(function(){
				
						if (!checkCollisionDroite){
                			x = x + 15;
                			conteneurPerso.style.left = x + 'px';
                			conteneurPerso.style.transform = 'scaleX(1)';
						}
				
                		if (maFrame >= mesFrames.droite.length){
                  			maFrame = 0;
                		}
                  		spritePerso.style.marginLeft = mesFrames.droite[maFrame].marginLeft;
                  		maFrame++;
                
              		}, 50);
            	}
            
            	animDroiteGauche = true;
            	checkCollisionDroite = false;
        		break;
      		};
			
		   };


      	// MOUVEMENT (Key UP)

    	window.onkeyup = function (event) {
      		var code = event.keyCode;
      		switch (code) {
        		case 37:
          		//*GAUCHE
          		window.clearInterval(mouvementGauche);
          		animDroiteGauche = false;
          		spritePerso.style.marginLeft = 0 + 'px';
		  
        		case 39:
          		//*DROITE
          		window.clearInterval(mouvementDroite);
          		animDroiteGauche = false;
          		spritePerso.style.marginLeft = 0 + 'px';
          		break;
      		}
    	}
	
    	// COLLISIONS

    	setInterval(function(){
			
			// COLLISION AVEC LES MURS GAUCHE ET DROITE
			
        	if((parseFloat(conteneurPerso.style.left)) <= 34 ){
            	checkCollisionGauche = true;
        	}
			if(((parseFloat(conteneurPerso.style.left)) + (parseFloat(conteneurPerso.style.width))) >= 966){
				checkCollisionDroite = true;
			}
			
			// COLLISION AVEC LES ICONES DE COMPETENCES
			
				// ICONE PHOTOSHOP
			
			if ((parseFloat(conteneurPerso.style.left) <= (parseFloat($('#icone-photoshop').css('left')) + parseFloat($('#icone-photoshop').css('width'))) && (parseFloat(conteneurPerso.style.left) + parseFloat(conteneurPerso.style.width)) >= parseFloat($('#icone-photoshop').css('left')) && $('#icone-photoshop').css('display') === 'block')) {
				
				// DISPARITION ICONE ET CLEARTIMEOUT

				$('#icone-photoshop').css('display', 'none');
				window.clearTimeout(timeOutIconePs);
				
				// CHANGEMENT DE LA BARRE DES OBJECTIFS
				
				$('#sprite-barre-objectifs').css('margin-top', -100);
				
			}
			
				// ICONE HTML / CSS
			
			if ((parseFloat(conteneurPerso.style.left) <= (parseFloat($('#icone-html-css').css('left')) + parseFloat($('#icone-html-css').css('width'))) && (parseFloat(conteneurPerso.style.left) + parseFloat(conteneurPerso.style.width)) >= parseFloat($('#icone-html-css').css('left')) && $('#icone-html-css').css('display') === 'block') && parseFloat($('#sprite-barre-objectifs').css('margin-top')) === -100) {
				
				// DISPARITION ICONE ET CLEARTIMEOUT

				$('#icone-html-css').css('display', 'none');
				window.clearTimeout(timeOutIconeHtml);
				
				// CHANGEMENT DE LA BARRE DES OBJECTIFS
				
				$('#sprite-barre-objectifs').css('margin-top', -200);
				
			}
			
				// ICONE JS
			
			if ((parseFloat(conteneurPerso.style.left) <= (parseFloat($('#icone-js').css('left')) + parseFloat($('#icone-js').css('width'))) && (parseFloat(conteneurPerso.style.left) + parseFloat(conteneurPerso.style.width)) >= parseFloat($('#icone-js').css('left')) && $('#icone-js').css('display') === 'block') && parseFloat($('#sprite-barre-objectifs').css('margin-top')) === -200) {
				
				// DISPARITION ICONE ET CLEARTIMEOUT

				$('#icone-js').css('display', 'none');
				window.clearTimeout(timeOutIconeJs);
				
				// CHANGEMENT DE LA BARRE DES OBJECTIFS
				
				$('#sprite-barre-objectifs').css('margin-top', -300);
				
			}
			
				// ICONE JQUERY
			
			if ((parseFloat(conteneurPerso.style.left) <= (parseFloat($('#icone-jquery').css('left')) + parseFloat($('#icone-jquery').css('width'))) && (parseFloat(conteneurPerso.style.left) + parseFloat(conteneurPerso.style.width)) >= parseFloat($('#icone-jquery').css('left')) && $('#icone-jquery').css('display') === 'block') && parseFloat($('#sprite-barre-objectifs').css('margin-top')) === -300) {
				
				// DISPARITION ICONE ET CLEARTIMEOUT

				$('#icone-jquery').css('display', 'none');
				window.clearTimeout(timeOutIconeJQuery);
				
				// CHANGEMENT DE LA BARRE DES OBJECTIFS
				
				$('#sprite-barre-objectifs').css('margin-top', -400);
				
			}
			
				// ICONE ANGULAR
			
			if ((parseFloat(conteneurPerso.style.left) <= (parseFloat($('#icone-angular').css('left')) + parseFloat($('#icone-angular').css('width'))) && (parseFloat(conteneurPerso.style.left) + parseFloat(conteneurPerso.style.width)) >= parseFloat($('#icone-angular').css('left')) && $('#icone-angular').css('display') === 'block') && parseFloat($('#sprite-barre-objectifs').css('margin-top')) === -400) {
				
				// DISPARITION ICONE ET CLEARTIMEOUT

				$('#icone-angular').css('display', 'none');
				window.clearTimeout(timeOutIconeAngular);
				
				// CHANGEMENT DE LA BARRE DES OBJECTIFS
				
				$('#sprite-barre-objectifs').css('margin-top', -500);
				
			}
			
				// ICONE MONGO
			
			if ((parseFloat(conteneurPerso.style.left) <= (parseFloat($('#icone-mongo').css('left')) + parseFloat($('#icone-mongo').css('width'))) && (parseFloat(conteneurPerso.style.left) + parseFloat(conteneurPerso.style.width)) >= parseFloat($('#icone-mongo').css('left')) && $('#icone-mongo').css('display') === 'block') && parseFloat($('#sprite-barre-objectifs').css('margin-top')) === -500) {
				
				// DISPARITION ICONE ET CLEARTIMEOUT

				$('#icone-mongo').css('display', 'none');
				window.clearTimeout(timeOutIconeMongo);
				
				// CHANGEMENT DE LA BARRE DES OBJECTIFS
				
				$('#sprite-barre-objectifs').css('margin-top', -600);
				
			}
			
				// ICONE NODE
			
			if ((parseFloat(conteneurPerso.style.left) <= (parseFloat($('#icone-node').css('left')) + parseFloat($('#icone-node').css('width'))) && (parseFloat(conteneurPerso.style.left) + parseFloat(conteneurPerso.style.width)) >= parseFloat($('#icone-node').css('left')) && $('#icone-node').css('display') === 'block') && parseFloat($('#sprite-barre-objectifs').css('margin-top')) === -600) {
				
				// DISPARITION ICONE ET CLEARTIMEOUT

				$('#icone-node').css('display', 'none');
				window.clearTimeout(timeOutIconeNode);
				
				// CHANGEMENT DE LA BARRE DES OBJECTIFS
				
				$('#sprite-barre-objectifs').css('margin-top', -700);
				
			}
			
				// ICONE AJAX
			
			if ((parseFloat(conteneurPerso.style.left) <= (parseFloat($('#icone-ajax').css('left')) + parseFloat($('#icone-ajax').css('width'))) && (parseFloat(conteneurPerso.style.left) + parseFloat(conteneurPerso.style.width)) >= parseFloat($('#icone-ajax').css('left')) && $('#icone-ajax').css('display') === 'block') && parseFloat($('#sprite-barre-objectifs').css('margin-top')) === -700) {
				
				collisionEnnemi = true;
				win = true;
				
				// DISPARITION ICONE ET CLEARTIMEOUT

				$('#icone-ajax').css('display', 'none');
				window.clearTimeout(timeOutIconeAjax);
				
				// CHANGEMENT DE LA BARRE DES OBJECTIFS
				
				$('#sprite-barre-objectifs').css('margin-top', -800);
				
				// CHANGEMENT DU BACKGROUND
			
				$('body').css('background-image', 'url(./images/background-win.jpg)');
				
				
				// DISPARITION DU PERSONNAGE ET APPARITION DE LA WIN

					conteneurPerso.style.display = 'none';
					$('#cv').css('display', 'block');
					$('#win').css('display', 'block');

					// DISPARITION DU BACKGROUND

					var disparitionBackground = setInterval(function () {
						if (o >= 0) {
							$('#backgrounds').css('opacity', o = o - 0.1);
						}
						if (o <= 0) {
							$('#backgrounds').css('background-image', 'url(./images/background-photoshop.png)');
							clearInterval(disparitionBackground);
						}
					}, 60);
					
					// DISPARITION DES ICONES DE COMPETENCES
						
					$('#icone-photoshop').css('display', 'none');
					$('#icone-html-css').css('display', 'none');
					$('#icone-js').css('display', 'none');
					$('#icone-jquery').css('display', 'none');
					$('#icone-angular').css('display', 'none');
					$('#icone-mongo').css('display', 'none');
					$('#icone-node').css('display', 'none');
					$('#icone-ajax').css('display', 'none');

					// DISPARITION DES ELEMENTS ENNEMIS

						// DISPARITION POT DE PEINTURE PHOTOSHOP

					$('#container-pot-ps').css('display', 'none');
					$('#container-peinture-ps').css('display', 'none');

						// DISPARITION CANONS A BALISE HTML / CSS

					$('#container-canon-htmlcss').css('display', 'none');
					$('#container-tir-htmlcss').css('display', 'none');
					$('#container-canon2-htmlcss').css('display', 'none');
					$('#container-tir2-htmlcss').css('display', 'none');

						// DISPARITION CANON A VARIABLES JS

					$('#container-canon-js').css('display', 'none');
					$('#container-tir-js').css('display', 'none');
					
						// DISPARITION CANON A $ JQUERY

					$('#container-canon-jQuery').css('display', 'none');
					$('#container-tir-jQuery').css('display', 'none');
					
						// DISPARITION BALISES EXPLOSIVES ANGULAR

					$('#container-balises-angular').css('display', 'none');
					$('#container-explosion-angular').css('display', 'none');

					
					// ANNULATION DE L'APPARITION ET DES MOUVEMENTS DES ELEMENTS
					
					window.clearTimeout(timeOutIconePs);
					window.clearTimeout(timeOutIconeHtml);
					window.clearTimeout(timeOutIconeJs);
					window.clearTimeout(timeOutIconeJQuery);
					window.clearTimeout(timeOutIconeAngular);
					window.clearTimeout(timeOutIconeMongo);
					window.clearTimeout(timeOutIconeNode);
					window.clearTimeout(timeOutIconeAjax);
					
					window.clearTimeout(timeOutApparitionHtml);
					window.clearInterval(intervalMouvementCanonHtml);
					window.clearTimeout(timeOutApparitionJs);
					window.clearInterval(intervalMouvementCanonJs);
					window.clearTimeout(timeOutApparitionJQuery);
					window.clearInterval(intervalMouvementCanonJQuery);
					window.clearTimeout(timeOutApparitionAngular);
					
				
			}
			
			// COLLISION AVEC LES ELEMENTS ENNEMIS

			if(!collisionEnnemi && !win){

				if (/* COLLISION AVEC LA PEINTURE */(parseFloat(conteneurPerso.style.left) <= (parseFloat($('#container-peinture-ps').css('left')) + parseFloat($('#container-peinture-ps').css('width'))) && (parseFloat(conteneurPerso.style.left) + parseFloat(conteneurPerso.style.width)) >= parseFloat($('#container-peinture-ps').css('left')) && parseFloat(conteneurPerso.style.top) <= (parseFloat($('#container-peinture-ps').css('top')) + parseFloat($('#container-peinture-ps').css('height'))) && (parseFloat(conteneurPerso.style.top) + parseFloat(conteneurPerso.style.height)) >= parseFloat($('#container-peinture-ps').css('top'))) || /* COLLISION AVEC LE TIR DU PREMIER CANON A BALISES HTML / CSS */(parseFloat(conteneurPerso.style.left) <= (parseFloat($('#container-tir-htmlcss').css('left')) + parseFloat($('#container-tir-htmlcss').css('width'))) && (parseFloat(conteneurPerso.style.left) + parseFloat(conteneurPerso.style.width)) >= parseFloat($('#container-tir-htmlcss').css('left')) && parseFloat(conteneurPerso.style.top) <= (parseFloat($('#container-tir-htmlcss').css('top')) + parseFloat($('#container-tir-htmlcss').css('height'))) && (parseFloat(conteneurPerso.style.top) + parseFloat(conteneurPerso.style.height)) >= parseFloat($('#container-tir-htmlcss').css('top'))) || /* COLLISION AVEC LE TIR DU SECOND CANON A BALISES HTML / CSS */ (parseFloat(conteneurPerso.style.left) <= (parseFloat($('#container-tir2-htmlcss').css('left')) + parseFloat($('#container-tir2-htmlcss').css('width'))) && (parseFloat(conteneurPerso.style.left) + parseFloat(conteneurPerso.style.width)) >= parseFloat($('#container-tir2-htmlcss').css('left')) && parseFloat(conteneurPerso.style.top) <= (parseFloat($('#container-tir2-htmlcss').css('top')) + parseFloat($('#container-tir2-htmlcss').css('height'))) && (parseFloat(conteneurPerso.style.top) + parseFloat(conteneurPerso.style.height)) >= parseFloat($('#container-tir2-htmlcss').css('top'))) || /* COLLISION AVEC LE TIR DU CANON A VARIABLE JS */ (parseFloat(conteneurPerso.style.left) <= (parseFloat($('#container-tir-js').css('left')) + parseFloat($('#container-tir-js').css('width'))) && (parseFloat(conteneurPerso.style.left) + parseFloat(conteneurPerso.style.width)) >= parseFloat($('#container-tir-js').css('left')) && parseFloat(conteneurPerso.style.top) <= (parseFloat($('#container-tir-js').css('top')) + parseFloat($('#container-tir-js').css('height'))) && (parseFloat(conteneurPerso.style.top) + parseFloat(conteneurPerso.style.height)) >= parseFloat($('#container-tir-js').css('top'))) || /* COLLISION AVEC LE TIR DU CANON A $ JQUERY */ (parseFloat(conteneurPerso.style.left) <= (parseFloat($('#container-tir-jQuery').css('left')) + parseFloat($('#container-tir-jQuery').css('width'))) && (parseFloat(conteneurPerso.style.left) + parseFloat(conteneurPerso.style.width)) >= parseFloat($('#container-tir-jQuery').css('left')) && parseFloat(conteneurPerso.style.top) <= (parseFloat($('#container-tir-jQuery').css('top')) + parseFloat($('#container-tir-jQuery').css('height'))) && (parseFloat(conteneurPerso.style.top) + parseFloat(conteneurPerso.style.height)) >= parseFloat($('#container-tir-jQuery').css('top'))) || /* COLLISION AVEC LES EXPLOSIONS ANGULAR */ (parseFloat(conteneurPerso.style.left) <= (parseFloat($('#container-explosion-angular').css('left')) + parseFloat($('#container-explosion-angular').css('width'))) && (parseFloat(conteneurPerso.style.left) + parseFloat(conteneurPerso.style.width)) >= parseFloat($('#container-explosion-angular').css('left')) && parseFloat(conteneurPerso.style.top) <= (parseFloat($('#container-explosion-angular').css('top')) + parseFloat($('#container-explosion-angular').css('height'))) && (parseFloat(conteneurPerso.style.top) + parseFloat(conteneurPerso.style.height)) >= parseFloat($('#container-explosion-angular').css('top')) && $('#container-explosion-angular').css('display') === 'block')) {


					collisionEnnemi = true;

					// DISPARITION DU PERSONNAGE ET REAPPARITION DU BOUTON

					conteneurPerso.style.display = 'none';
					$('#button-play').css('display', 'block');
					$('#rejouer').css('display', 'block');

					// DISPARITION DU BACKGROUND

					var disparitionBackground = setInterval(function () {
						if (o >= 0) {
							$('#backgrounds').css('opacity', o = o - 0.1);
						}
						if (o <= 0) {
							$('#backgrounds').css('background-image', 'url(./images/background-photoshop.png)');
							clearInterval(disparitionBackground);
						}
					}, 60);
					
					// DISPARITION DES ICONES DE COMPETENCES
						
					$('#icone-photoshop').css('display', 'none');
					$('#icone-html-css').css('display', 'none');
					$('#icone-js').css('display', 'none');
					$('#icone-jquery').css('display', 'none');
					$('#icone-angular').css('display', 'none');
					$('#icone-mongo').css('display', 'none');
					$('#icone-node').css('display', 'none');
					$('#icone-ajax').css('display', 'none');

					// DISPARITION DES ELEMENTS ENNEMIS

						// DISPARITION POT DE PEINTURE PHOTOSHOP

					$('#container-pot-ps').css('display', 'none');
					$('#container-peinture-ps').css('display', 'none');

						// DISPARITION CANONS A BALISE HTML / CSS

					$('#container-canon-htmlcss').css('display', 'none');
					$('#container-tir-htmlcss').css('display', 'none');
					$('#container-canon2-htmlcss').css('display', 'none');
					$('#container-tir2-htmlcss').css('display', 'none');

						// DISPARITION CANON A VARIABLES JS

					$('#container-canon-js').css('display', 'none');
					$('#container-tir-js').css('display', 'none');
					
						// DISPARITION CANON A $ JQUERY

					$('#container-canon-jQuery').css('display', 'none');
					$('#container-tir-jQuery').css('display', 'none');
					
						// DISPARITION BALISES EXPLOSIVES ANGULAR

					$('#container-balises-angular').css('display', 'none');
					$('#container-explosion-angular').css('display', 'none');

					
					// ANNULATION DE L'APPARITION ET DES MOUVEMENTS DES ELEMENTS
					
					window.clearTimeout(timeOutIconePs);
					window.clearTimeout(timeOutIconeHtml);
					window.clearTimeout(timeOutIconeJs);
					window.clearTimeout(timeOutIconeJQuery);
					window.clearTimeout(timeOutIconeAngular);
					window.clearTimeout(timeOutIconeMongo);
					window.clearTimeout(timeOutIconeNode);
					window.clearTimeout(timeOutIconeAjax);
					
					window.clearTimeout(timeOutApparitionHtml);
					window.clearInterval(intervalMouvementCanonHtml);
					window.clearTimeout(timeOutApparitionJs);
					window.clearInterval(intervalMouvementCanonJs);
					window.clearTimeout(timeOutApparitionJQuery);
					window.clearInterval(intervalMouvementCanonJQuery);
					window.clearTimeout(timeOutApparitionAngular);
					
				}

				
			}
			
    	}, 1);

    
	})
})


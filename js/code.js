//https://www.youtube.com/watch?v=HLl9WD9WQ7I  link du tuto
//http://www.owlcarousel.owlgraphic.com/docs/started-welcome.html
//https://www.youtube.com/watch?v=ATYvN1dGp1g
//http://www.owlcarousel.owlgraphic.com/docs/api-options.html
(function($){
//on commence par selectionner notre dic ie carousel
     $('.carousel').owlCarousel({  //appel de owlcarousel

        //on a la possibilité de rajouter des options voir la documentation
        items : 1, //nombre de slide à aficher par page
		autoplay : true,
		loop : true,
		autoplayTimeout : 100,
		
		responsive:{   // c'est une classe ki pe prendre plusieurs options
		    
			0:{
			    items : 1
			},
			768:{
			    margin : 10,
			    items : 1
			},
			992:{
			    margin : 10,
			    items : 1
			}
		
		}
    });


})(jQuery);
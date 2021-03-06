$(document).ready(function() {
	$('.block__title').click(function(event) {
		if($('.block').hasClass('one')){
		   $('.block__title').not($(this)).removeClass('active');
		   $('.block__text').not($(this).next()).slideUp(300);	
		}
		$(this).toggleClass('active').next().slideToggle(300);
	});
})

$(function(){
            $('.single-item').slick({
                vertical: true,
                verticalSwiping: true,
				slidesToShow: 2,
				
				responsive: [
					{
					  breakpoint: 900,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						
						
					  }
					}
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
				  ]
			});
			
		});
		
$(document).ready(function(){


	$('body').on('click', '.team-accordion img', function(){	
		
		
		$('.team-accordion img').removeClass('in');
		$(this).addClass('in');
		
		var href = $(this).attr('href');
		
		$('.team-text').removeClass('show');
		$(href).addClass('show');
	});


});

const images = document.querySelectorAll('img');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}

function handleImg(myImg, observer) {
    myImg.forEach(myImgSingle => {
        if (myImgSingle.intersectionRatio > 0) {
            loadImage(myImgSingle.target);
        }
    })
}

function loadImage(image) {
    image.src = image.getAttribute('data');
}

const observer = new IntersectionObserver(handleImg, options);

images.forEach(img => {
    observer.observe(img);
})

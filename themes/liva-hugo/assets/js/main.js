(function($) {
	'use strict';

	/*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	function navbarFixed() {
		if ($('.header_area').length) {
			$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				if (scroll) {
					$('.header_area').addClass('navbar_fixed');
				} else {
					$('.header_area').removeClass('navbar_fixed');
				}
			});
		}
	}
	navbarFixed();

	/*-------------------------------------------------------------------------------
	  WOW js
	-------------------------------------------------------------------------------*/
	function wowAnimation() {
		new WOW({
			offset: 100,
			mobile: true
		}).init();
	}
	wowAnimation();

	/*-------------------------------------------------------------------------------
	  service_carousel js
	-------------------------------------------------------------------------------*/
	function serviceSlider() {
		var service_slider = $('.service_carousel');
		if (service_slider.length) {
			service_slider.owlCarousel({
				loop: true,
				margin: 120,
				items: 1,
				autoplay: true,
				autoplayTimeout: 8000,
				autoplaySpeed: 4000,
				responsiveClass: true,
				nav: true,
				dots: false,
				stagePadding: 100,
				navText: [
					'<i class="ti-arrow-right"></i>',
					'<i class="ti-arrow-left"></i>'
				],
				responsive: {
					0: {
						items: 1,
						stagePadding: 0
					},
					578: {
						items: 1,
						stagePadding: 0
					},
					992: {
						items: 1,
						stagePadding: 0
					},
					1200: {
						items: 1
					}
				}
			});
		}
	}
	serviceSlider();

	/*-------------------------------------------------------------------------------
	  about_img_slider js
	-------------------------------------------------------------------------------*/

	function tab_hover() {
		var tab2 = $('.pricing_model_tab');

		if ($(tab2).length > 0) {
			tab2.append('<li class="hover_bg"></li>');
			if ($('.pricing_model_tab li a').hasClass('active_hover')) {
				var pLeft = $('.pricing_model_tab li a.active_hover').position()
						.left,
					pWidth = $('.pricing_model_tab li a.active_hover').css(
						'width'
					);
				$('.pricing_model_tab .hover_bg').css({
					left: pLeft,
					width: pWidth
				});
			}
			$('.pricing_model_tab li a').on('click', function() {
				$('.pricing_model_tab li a').removeClass('active_hover');
				$(this).addClass('active_hover');
				var pLeft = $('.pricing_model_tab li a.active_hover').position()
						.left,
					pWidth = $('.pricing_model_tab li a.active_hover').css(
						'width'
					);
				$('.pricing_model_tab .hover_bg').css({
					left: pLeft,
					width: pWidth
				});
			});
		}

		var tab3 = $('.contract_duration_tab');

		if ($(tab3).length > 0) {
			tab3.append('<li class="hover_bg"></li>');
			if ($('.contract_duration_tab li a').hasClass('active_hover')) {
				var pLeft = $(
						'.contract_duration_tab li a.active_hover'
					).position().left,
					pWidth = $('.contract_duration_tab li a.active_hover').css(
						'width'
					);
				$('.contract_duration_tab .hover_bg').css({
					left: pLeft,
					width: pWidth
				});
			}
			$('.contract_duration_tab li a').on('click', function() {
				$('.contract_duration_tab li a').removeClass('active_hover');
				$(this).addClass('active_hover');
				var pLeft = $(
						'.contract_duration_tab li a.active_hover'
					).position().left,
					pWidth = $('.contract_duration_tab li a.active_hover').css(
						'width'
					);
				$('.contract_duration_tab .hover_bg').css({
					left: pLeft,
					width: pWidth
				});
			});
		}

		var selected_table = '#second';

		$('#annually-tab').on('click', function() {
			setTimeout(function() {
				$('#' + selected_table + '-a-tab').click();
			}, 500);
		});

		$('#monthly-tab').on('click', function() {
			setTimeout(function() {
				$('#' + selected_table + '-m-tab').click();
			}, 500);
		});

		$('.contract_duration_tab .nav-link').on('click', function() {
			selected_table = $(this)
				.attr('id')
				.split('-')[0];
		});
	}

	tab_hover();

	// $('#show_features_table_btn').on('click', function() {
	// 	$('.feature_table_section').slideToggle(1500);
	// 	return false;
	// });

	if ($('#planInput').length) {
		const urlParams = new URLSearchParams(window.location.search);
		const plan = urlParams.get('plan');
		$('#planInput').val(plan);
	}
})(jQuery);

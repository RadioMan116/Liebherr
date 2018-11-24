//Доступный hamburger https://foxland.fi/simple-accessible-svg-menu-hamburger-animation

$(document).ready(function () {
	function hamburger(element, menu) {
		var button = document.getElementById(element),
			menu = document.getElementById(menu);
		button.onclick = function () {
			// Toggle class "opened". Set also aria-expanded to true or false.
			if (-1 !== button.className.indexOf("opened")) {
				button.className = button.className.replace(" opened", "");
				button.setAttribute("aria-expanded", "false");
				menu.className = menu.className.replace(" active", "");
				menu.setAttribute("aria-expanded", "false");
				$("html").removeClass("fixed");
				$(".header__dropdown-menu ").hide();
				$(".header__overlay").hide();
			} else {
				button.className += " opened";
				button.setAttribute("aria-expanded", "true");
				menu.className += " active";
				menu.setAttribute("aria-expanded", "true");
				$("html").addClass("fixed");
			}
		};
	}

	var windowWidth2 = $(window).width();
	var mySwiper = new Swiper(".swiper-container-main", {
		// Optional parameters
		direction: "horizontal",
		loop: true,

		// If we need pagination
		pagination: {
			el: ".swiper-pagination",
			clickable: true
		},

		// Navigation arrows
		navigation: {
			nextEl: ".main_next",
			prevEl: ".main_prev"
		},

		// And if we need scrollbar
		scrollbar: {
			el: ".swiper-scrollbar",
			draggable: true
		}
	});
	var mySwiper2 = new Swiper(".swiper-container-two", {
		slidesPerView: 4,
		spaceBetween: 27,
		slidesPerGroup: 4,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: ".swiper-pagination_2",
			clickable: true
		},
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
			draggable: true
		},
		navigation: {
			nextEl: ".special-offers_next",
			prevEl: ".special-offers_prev"
		},
		breakpoints: {
			// when window width is <= 320px
			420: {
				slidesPerGroup: 1,
				slidesPerView: 1,
				spaceBetween: 0
			},
			// // when window width is <= 480px
			// 480: {
			700: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 20
			},
			768: {
				slidesPerGroup: 3,
				spaceBetween: 20,
				slidesPerView: 3
			}
		}
	});
	var mySwiper5 = new Swiper(".swiper-container-comparison", {
		slidesPerView: 4,
		slidesPerGroup: 4,
		// loop: true,
		// loopFillGroupWithBlank: true,
		navigation: {
			nextEl: ".special-offers_next",
			prevEl: ".special-offers_prev"
		},
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
			draggable: true
		},
		pagination: {
			el: ".swiper-pagination",
			type: "fraction"
		},
		breakpoints: {
			480: {
				slidesPerGroup: 2,
				slidesPerView: 2,
				spaceBetween: 0
			},
			600: {
				slidesPerGroup: 2,
				slidesPerView: 2
			},
			768: {
				slidesPerGroup: 3,
				slidesPerView: 3
			}
		}
	});
	$(window).resize(function () {
		var windowWidth = $(window).width();
		if (windowWidth > 480)
			$(".products-line td")
			.first()
			.addClass("swiper-slide swiper-slide-active");
		else
			$(".products-line td")
			.first()
			.removeClass("swiper-slide swiper-slide-active");
	});
	var mySwiper3 = new Swiper(".swiper-container-three", {
		slidesPerView: 4,
		spaceBetween: 27,
		slidesPerGroup: 4,
		loop: true,
		loopFillGroupWithBlank: true,
		pagination: {
			el: ".swiper-pagination_3",
			clickable: true
		},
		navigation: {
			nextEl: ".new-items_next",
			prevEl: ".new-items_prev"
		},
		breakpoints: {
			// when window width is <= 320px
			420: {
				slidesPerGroup: 1,
				slidesPerView: 1,
				spaceBetween: 0
			},
			// // when window width is <= 480px
			// 480: {
			700: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 20
			},
			768: {
				slidesPerGroup: 3,
				slidesPerView: 3
			}
		}
	});
	var mySwiper4 = new Swiper(".swiper-container-upsale", {
		breakpoints: {
			// when window width is <= 320px
			480: {
				// Optional parameters
				direction: "horizontal",
				loop: true,
				// If we need pagination
				pagination: {
					el: ".swiper-pagination",
					clickable: true
				},
				// Navigation arrows
				navigation: {
					nextEl: ".main_next",
					prevEl: ".main_prev"
				},

				// And if we need scrollbar
				scrollbar: {
					el: ".swiper-scrollbar"
				},
				slidesPerGroup: 1,
				slidesPerView: 1,
				spaceBetween: 10
			}
		}
	});
	$(".js-header__search").click(function () {
		if ($(".search__popup").hasClass("search__popup-open") == false) {
			$(".header .search__popup").addClass("search__popup-open");
			$(".header__search").addClass("header__search-open");
			$(".header__overlay").addClass("header__overlay-open");
		} else {
			$(".header .search__popup").removeClass("search__popup-open");
			$(".header__search").removeClass("header__search-open");
			$(".header__overlay").removeClass("header__overlay-open");
		}
	});
	$(".js-search-header__input").on("input", function () {
		if ($(this).val()) {
			$(".js-header__button,.js-header__submit").show();
		} else {
			$(".js-header__button,.js-header__submit").hide();
		}
	});
	$(".js-header__button").click(function () {
		$(".header__input").val("");
		$(this).hide();
		$(".js-header__submit").hide();

	});

	$(document).on('click', '[data-ajax]', function (e) {
		e.stopPropagation();
		e.preventDefault();
		$.get(this.getAttribute('data-url'), function (response) {
			globalPopup.append(response).show();
		});
		// $("html").addClass("fixed");
	});
	$(".dropdown-menu__back").click(function (event) {
		$(".header__dropdown-menu ").hide();
		return false;
	});

	$(".header__block_bottom .menu__item").first().click(function (event) {
		if ($(".header__dropdown-menu").css("display") == "none") {
			$(".header__dropdown-menu").show();
			$(".header__overlay").show();
		} else {
			$(".header__dropdown-menu").hide();
			$(".header__overlay").hide();
		}
	});

	$(".header__block_top .menu__item")
		.first()
		.click(function (event) {
			if ($(".header__dropdown-menu").css("display") == "none") {
				$(".header__dropdown-menu").show();
				// $(".header__overlay").show();
			} else {
				$(".header__dropdown-menu").hide();
				// $(".header__overlay").hide();
				$("html").removeClass("fixed");
			}
		});


	$(".js-dropdown-menu__title").click(function (event) {
		if (
			$(this)
			.parent()
			.parent()
			.hasClass("active") == false
		) {
			$(".dropdown-menu").removeClass("active");
			$(this)
				.parent()
				.parent()
				.addClass("active");
		} else {
			$(this)
				.parent()
				.parent()
				.removeClass("active");
		}
	});
	$(".js-menu-footer__title").click(function (event) {
		if (
			$(this)
			.parent()
			.parent()
			.hasClass("active") == false
		) {
			$(".menu-footer").removeClass("active");
			$(this)
				.parent()
				.parent()
				.addClass("active");
		} else {
			$(this)
				.parent()
				.parent()
				.removeClass("active");
		}
	});
	$(".js-tabs__li").click(function (event) {
		event.preventDefault();
		if ($(this).hasClass("active") == false) {
			$(".tabs__li").removeClass("active");
			$(this).addClass("active");
		} else {
			$(".tabs__li").removeClass("active");
			$(this).addClass("active");
		}
	});
	$(".filter__title").click(function (e) {
		if ($(this).parent().hasClass("filter__close") == false) {
			$(this).parent().addClass("filter__close");
		} else {
			$(this).parent().removeClass("filter__close");
		}
	});
	$(".js-characteristic").click(function (event) {
		$(".hide-tabs__characteristic").show();
		$(".hide-tabs__delivery").hide();
	});
	$(".js-delivery").click(function (event) {
		$(".hide-tabs__characteristic").hide();
		$(".hide-tabs__delivery").show();
	});
	$(".item__close").click(function () {
		if ($(".filter__form").hasClass("closed") == false) {
			$(".filter__form").addClass("closed");
		} else {
			$(".filter__form").removeClass("closed");
		}
	});

	if (windowWidth2 <= 480) {
		console.log('1')
		$('.header__dropdown-menu').appendTo('.menu__list')
	}

	$(".js-comparison__select").click(function () {
		if ($(this).hasClass("active") == true) {
			$(".comparison__select ").removeClass("active");
			$(this).addClass("active");
		} else {
			$(".comparison__select ").removeClass("active");
			$(this).addClass("active");
		}
	});
	$(".help__row").click(function () {
		if ($(this).hasClass("help__row-open") == false) {
			$(".help__row")
				.children(".help__info")
				.hide();
			$(".help__row").removeClass("help__row-open");
			$(this).addClass("help__row-open");
			$(this)
				.children(".help__info")
				.show();
		} else {
			$(this).removeClass("help__row-open");
			$(this)
				.children(".help__info")
				.hide();
		}
	});

	function selectbox() {
		var s = $(".selectbox select");
		s.each(function () {
			var span = document.createElement("span");
			this.parentNode.appendChild(span);
			span.innerHTML = this.options[this.selectedIndex].innerHTML + "<i></i>";
			$(this).change(function () {
				span.innerHTML = this.options[this.selectedIndex].innerHTML + "<i></i>";
			});
		});
	}
	selectbox();
	// слайдеры для фильтра
	function SetSliders() {
		$("#products-filter div.slider_filter_range").each(function () {
			var handle = $(this);
			var container = handle.parents(".filter-slider-container");
			var inputMin = container.find("input.input_min");
			var inputMax = container.find("input.input_max");

			var min = parseInt(handle.attr("min"));
			var max = parseInt(handle.attr("max"));
			var minVal = parseInt(handle.attr("minval"));
			var maxVal = parseInt(handle.attr("maxval"));

			handle.slider({
				range: true,
				min: min,
				max: max,
				values: [minVal, maxVal],
				slide: function (event, ui) {
					inputMin.val(ui.values[0]);
					inputMax.val(ui.values[1]);
				},
				stop: function () {
					// $('#products-filter').submit();
				}
			});
			inputMin.blur(function () {
				var sliderValues = handle.slider("option", "values");
				// if ($(this).val() != sliderValues[0])
				// $('#products-filter').submit();
			});
			inputMax.blur(function () {
				var sliderValues = handle.slider("option", "values");
				// if ($(this).val() != sliderValues[1])
				// $('#products-filter').submit();
			});
		});
	}
	SetSliders();
	$(".js-filter_reset").click(function () {
		document.location.href = "";
		return false;
	});
	window.globalPopup = new Popup();

	// $(".js-combox").combox({
	// 	startFn: function(li, index, combox) {

	// 		this.input = combox.getElementsByTagName("input")[0];

	// 		this.input.value = li.getAttribute("value");

	// 	},
	// 	changeFn: function(li, index, combox) {

	// 		var _this = this;

	// 		this.input.value = li.getAttribute("value");

	// 	}
	// });



	$("[type=tel]").inputmask("+7 (999) 999-99-99");

	// Прибивка адаптивного футера к низу
	(function (footerSelector, wrapperSelector) {
		var footer = document.querySelector(footerSelector);
		var wrapper = document.querySelector(wrapperSelector);
		var height;
		var setSize;

		if (!wrapper || !footer) {
			return false;
		}

		setSize = function () {
			height = footer.offsetHeight;

			wrapper.style.paddingBottom = height + "px";
			footer.style.marginTop = height * -1 + "px";
		};

		setSize();

		window.addEventListener("resize", setSize, false);
	})("#js-footer", "#js-wrapper");

	var galleryTop = [];
	var galleryThumbs = [];

	$(".gallery-top").each(function (index, element) {
		var $this = $(this);
		galleryTop.push(
			new Swiper(this, {
				loop: true,
				loopedSlides: 5,
				pagination: {
					el: ".swiper-pagination",
					clickable: true
				},
				navigation: {
					nextEl: this.querySelector(".swiper-button-next"),
					prevEl: this.querySelector(".swiper-button-prev")
				}
			})
		);
	});

	$(".gallery-thumbs").each(function (index, element) {
		var $this = $(this);
		galleryThumbs.push(
			new Swiper(this, {
				slidesPerView: 4,
				loop: true,
				freeMode: true,
				loopedSlides: 5, //looped slides should be the same
				// watchSlidesVisibility: true,
				// watchSlidesProgress: true,
				spaceBetween: 32,
				slidesPerView: 4,
				touchRatio: 0.2,
				slideToClickedSlide: true,

				breakpoints: {
					// when window width is <= 320px
					// 420: {
					//   slidesPerGroup: 1,
					//   slidesPerView: 1,
					//   spaceBetween: 0
					// },
					// // // when window width is <= 480px
					// // 480: {
					// 700: {
					//   slidesPerView: 2,
					//   slidesPerGroup: 2,
					//   spaceBetween: 20
					// },
					768: {
						direction: "vertical",
						spaceBetween: 10
					}
				}
			})
		);
	});

	for (var i = 0; i < galleryTop.length; i++) {
		galleryTop[i].controller.control = galleryThumbs[i];
		galleryThumbs[i].controller.control = galleryTop[i];
	}

	$(".js-product-card__description").click(function () {
		if ($(this).hasClass("closed") == false) {
			$(this).addClass("closed");
		} else {
			$(this).removeClass("closed");
		}
	});
	$(".js-characteristic").click(function () {
		if ($(this).hasClass("closed") == false) {
			$(this).addClass("closed");
			$(".hide-tabs__characteristic").addClass("closed");
		} else {
			$(this).removeClass("closed");
			$(".hide-tabs__characteristic").removeClass("closed");
		}
	});
	$(".js-delivery").click(function () {
		if ($(this).hasClass("closed") == false) {
			$(this).addClass("closed");
			$(".hide-tabs__delivery").addClass("closed");
		} else {
			$(this).removeClass("closed");
			$(".hide-tabs__delivery").removeClass("closed");
		}
	});


	$('.filter__slider').draggable();
	hamburger("js-hamburger", "js-menu");
});
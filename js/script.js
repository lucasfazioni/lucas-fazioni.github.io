"use strict";
(function () {
	// Global variables
	var userAgent = navigator.userAgent.toLowerCase(),
		initialDate = new Date(),

		$document = $(document),
		$window = $(window),
		$html = $("html"),
		$body = $("body"),

		isDesktop = $html.hasClass("desktop"),
		isIE = userAgent.indexOf("msie") !== -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") !== -1 ? 11 : userAgent.indexOf("edge") !== -1 ? 12 : false,
		isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
		windowReady = false,
		isNoviBuilder = false,
		pageTransitionAnimationDuration = 500,
		loaderTimeoutId,

		plugins = {
			bootstrapTooltip: $("[data-toggle='tooltip']"),
			rdNavbar: $(".rd-navbar"),
			maps: $(".google-map-container"),
			rdMailForm: $(".rd-mailform"),
			rdInputLabel: $(".form-label"),
			regula: $("[data-constraints]"),
			wow: $(".wow"),
			owl: $(".owl-carousel"),
			isotope: $(".isotope"),
			counter: $(".counter"),
			progressLinear: $(".progress-linear"),
			preloader: $(".preloader"),
			captcha: $('.recaptcha'),
			copyrightYear: $(".copyright-year"),
			buttonWinona: $('.button-winona'),
			videoOverlay: $('.video-overlay')
		};

	/**
	 * @desc Check the element was been scrolled into the view
	 * @param {object} elem - jQuery object
	 * @return {boolean}
	 */
	function isScrolledIntoView(elem) {
		if (isNoviBuilder) return true;
		return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height();
	}

	/**
	 * @desc Calls a function when element has been scrolled into the view
	 * @param {object} element - jQuery object
	 * @param {function} func - init function
	 */
	function lazyInit(element, func) {
		var scrollHandler = function () {
			if ((!element.hasClass('lazy-loaded') && (isScrolledIntoView(element)))) {
				func.call();
				element.addClass('lazy-loaded');
			}
		};

		scrollHandler();
		$window.on('scroll', scrollHandler);
	}

	// Initialize scripts that require a loaded page
	$window.on('load', function () {
		// Page loader & Page transition
		if (plugins.preloader.length && !isNoviBuilder) {
			pageTransition({
				target: document.querySelector('.page'),
				delay: 0,
				duration: pageTransitionAnimationDuration,
				classActive: 'animated',
				conditions: function (event, link) {
					return
					!/(\#|callto:|tel:|mailto:|:\/\/)/.test(link)
						&& !event.currentTarget.hasAttribute('data-lightgallery')
						&& event.currentTarget.getAttribute('href') !== 'javascript:void(0);';
				},
				onTransitionStart: function (options) {
					setTimeout(function () {
						plugins.preloader.removeClass('loaded');
					}, options.duration * .75);
				},
				onReady: function () {
					plugins.preloader.addClass('loaded');
					windowReady = true;
				}
			});
		}
	});

	// Initialize scripts that require a finished document
	$(function () {
		isNoviBuilder = window.xMode;


		/**
		 * @desc Initialize Bootstrap tooltip with required placement
		 * @param {string} tooltipPlacement
		 */
		function initBootstrapTooltip(tooltipPlacement) {
			plugins.bootstrapTooltip.tooltip('dispose');

			if (window.innerWidth < 576) {
				plugins.bootstrapTooltip.tooltip({ placement: 'bottom' });
			} else {
				plugins.bootstrapTooltip.tooltip({ placement: tooltipPlacement });
			}
		}

		/**
		 * @desc Initialize owl carousel plugin
		 * @param {object} c - carousel jQuery object
		 */
		function initOwlCarousel(c) {
			var aliaces = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"],
				values = [0, 576, 768, 992, 1200, 1600],
				responsive = {};

			for (var j = 0; j < values.length; j++) {
				responsive[values[j]] = {};
				for (var k = j; k >= -1; k--) {
					if (!responsive[values[j]]["items"] && c.attr("data" + aliaces[k] + "items")) {
						responsive[values[j]]["items"] = k < 0 ? 1 : parseInt(c.attr("data" + aliaces[k] + "items"), 10);
					}
					if (!responsive[values[j]]["slideBy"] && c.attr("data" + aliaces[k] + "slideBy")) {
						responsive[values[j]]["slideBy"] = k < 0 ? 1 : parseInt(c.attr("data" + aliaces[k] + "slide-by"), 10);
					}
					if (!responsive[values[j]]["stagePadding"] && responsive[values[j]]["stagePadding"] !== 0 && c.attr("data" + aliaces[k] + "stage-padding")) {
						responsive[values[j]]["stagePadding"] = k < 0 ? 0 : parseInt(c.attr("data" + aliaces[k] + "stage-padding"), 10);
					}
					if (!responsive[values[j]]["margin"] && responsive[values[j]]["margin"] !== 0 && c.attr("data" + aliaces[k] + "margin")) {
						responsive[values[j]]["margin"] = k < 0 ? 30 : parseInt(c.attr("data" + aliaces[k] + "margin"), 10);
					}
				}
			}

			// Enable custom pagination
			if (c.attr('data-dots-custom')) {
				c.on("initialized.owl.carousel", function (event) {
					var carousel = $(event.currentTarget),
						customPag = $(carousel.attr("data-dots-custom")),
						active = 0;

					if (carousel.attr('data-active')) {
						active = parseInt(carousel.attr('data-active'), 10);
					}

					carousel.trigger('to.owl.carousel', [active, 300, true]);
					customPag.find("[data-owl-item='" + active + "']").addClass("active");

					customPag.find("[data-owl-item]").on('click', function (e) {
						e.preventDefault();
						carousel.trigger('to.owl.carousel', [parseInt(this.getAttribute("data-owl-item"), 10), 300, true]);
					});

					carousel.on("translate.owl.carousel", function (event) {
						customPag.find(".active").removeClass("active");
						customPag.find("[data-owl-item='" + event.item.index + "']").addClass("active")
					});
				});
			}

			c.owlCarousel({
				autoplay: isNoviBuilder ? false : c.attr("data-autoplay") === "true",
				autoplayTimeout: c.attr("data-autoplay-timeout") ? parseInt(c.attr("data-autoplay-timeout"), 10) : 100,
				autoplaySpeed: c.attr("data-autoplay-speed") ? parseInt(c.attr("data-autoplay-speed"), 10) : 2800,
				autoplayHoverPause: true,
				loop: isNoviBuilder ? false : c.attr("data-loop") !== "false",
				items: 1,
				lazyLoad: true,
				center: c.attr("data-center") === "true",
				navContainer: c.attr("data-navigation-class") || false,
				mouseDrag: isNoviBuilder ? false : c.attr("data-mouse-drag") !== "false",
				nav: c.attr("data-nav") === "true",
				dots: c.attr("data-dots") === "true",
				dotsContainer: c.attr("data-pagination-class") || false,
				dotsEach: c.attr("data-dots-each") ? parseInt(c.attr("data-dots-each"), 10) : false,
				dotsSpeed: c.attr("data-dots-speed") ? parseInt(c.attr("data-dots-speed"), 10) : false,
				animateIn: c.attr('data-animation-in') ? c.attr('data-animation-in') : false,
				animateOut: c.attr('data-animation-out') ? c.attr('data-animation-out') : false,
				responsive: responsive,
				navText: function () {
					try {
						return JSON.parse(c.attr("data-nav-text"));
					} catch (e) {
						return [];
					}
				}(),
				navClass: function () {
					try {
						return JSON.parse(c.attr("data-nav-class"));
					} catch (e) {
						return ['owl-prev', 'owl-next'];
					}
				}()
			});
		}

		/**
		 * @desc Attach form validation to elements
		 * @param {object} elements - jQuery object
		 */
		function attachFormValidator(elements) {
			// Custom validator - phone number
			regula.custom({
				name: 'PhoneNumber',
				defaultMessage: 'Invalid phone number format',
				validator: function () {
					if (this.value === '') return true;
					else return /^(\+\d)?[0-9\-\(\) ]{5,}$/i.test(this.value);
				}
			});

			for (var i = 0; i < elements.length; i++) {
				var o = $(elements[i]), v;
				o.addClass("form-control-has-validation").after("<span class='form-validation'></span>");
				v = o.parent().find(".form-validation");
				if (v.is(":last-child")) o.addClass("form-control-last-child");
			}

			elements.on('input change propertychange blur', function (e) {
				var $this = $(this), results;

				if (e.type !== "blur") if (!$this.parent().hasClass("has-error")) return;
				if ($this.parents('.rd-mailform').hasClass('success')) return;

				if ((results = $this.regula('validate')).length) {
					for (i = 0; i < results.length; i++) {
						$this.siblings(".form-validation").text(results[i].message).parent().addClass("has-error");
					}
				} else {
					$this.siblings(".form-validation").text("").parent().removeClass("has-error")
				}
			}).regula('bind');

			var regularConstraintsMessages = [
				{
					type: regula.Constraint.Required,
					newMessage: "The text field is required."
				},
				{
					type: regula.Constraint.Email,
					newMessage: "The email is not a valid email."
				},
				{
					type: regula.Constraint.Numeric,
					newMessage: "Only numbers are required"
				},
				{
					type: regula.Constraint.Selected,
					newMessage: "Please choose an option."
				}
			];


			for (var i = 0; i < regularConstraintsMessages.length; i++) {
				var regularConstraint = regularConstraintsMessages[i];

				regula.override({
					constraintType: regularConstraint.type,
					defaultMessage: regularConstraint.newMessage
				});
			}
		}

		/**
		 * @desc Check if all elements pass validation
		 * @param {object} elements - object of items for validation
		 * @param {object} captcha - captcha object for validation
		 * @return {boolean}
		 */
		function isValidated(elements, captcha) {
			var results, errors = 0;

			if (elements.length) {
				for (var j = 0; j < elements.length; j++) {

					var $input = $(elements[j]);
					if ((results = $input.regula('validate')).length) {
						for (k = 0; k < results.length; k++) {
							errors++;
							$input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error");
						}
					} else {
						$input.siblings(".form-validation").text("").parent().removeClass("has-error")
					}
				}

				if (captcha) {
					if (captcha.length) {
						return validateReCaptcha(captcha) && errors === 0
					}
				}

				return errors === 0;
			}
			return true;
		}

		/**
		 * @desc Validate google reCaptcha
		 * @param {object} captcha - captcha object for validation
		 * @return {boolean}
		 */
		function validateReCaptcha(captcha) {
			var captchaToken = captcha.find('.g-recaptcha-response').val();

			if (captchaToken.length === 0) {
				captcha
					.siblings('.form-validation')
					.html('Please, prove that you are not robot.')
					.addClass('active');
				captcha
					.closest('.form-wrap')
					.addClass('has-error');

				captcha.on('propertychange', function () {
					var $this = $(this),
						captchaToken = $this.find('.g-recaptcha-response').val();

					if (captchaToken.length > 0) {
						$this
							.closest('.form-wrap')
							.removeClass('has-error');
						$this
							.siblings('.form-validation')
							.removeClass('active')
							.html('');
						$this.off('propertychange');
					}
				});

				return false;
			}

			return true;
		}

		/**
		 * @desc Initialize Google reCaptcha
		 */
		window.onloadCaptchaCallback = function () {
			for (var i = 0; i < plugins.captcha.length; i++) {
				var $capthcaItem = $(plugins.captcha[i]);

				grecaptcha.render(
					$capthcaItem.attr('id'),
					{
						sitekey: $capthcaItem.attr('data-sitekey'),
						size: $capthcaItem.attr('data-size') ? $capthcaItem.attr('data-size') : 'normal',
						theme: $capthcaItem.attr('data-theme') ? $capthcaItem.attr('data-theme') : 'light',
						callback: function (e) {
							$('.recaptcha').trigger('propertychange');
						}
					}
				);
				$capthcaItem.after("<span class='form-validation'></span>");
			}
		};

		/**
		 * @desc Initialize the direction-aware hover
		 * @param {object} elements - jQuery object
		 */
		function initHoverDir(elements) {
			if (!isNoviBuilder && isDesktop) {
				for (var z = 0; z < elements.length; z++) {
					var $element = $(elements[z]);

					$element.hoverdir({
						hoverElem: $element.attr('data-hoverdir-target') ? $element.attr('data-hoverdir-target') : 'div'
					}
					);
				}
			}
		}

		/**
		 * @desc Google map function for getting latitude and longitude
		 */
		function getLatLngObject(str, marker, map, callback) {
			var coordinates = {};
			try {
				coordinates = JSON.parse(str);
				callback(new google.maps.LatLng(
					coordinates.lat,
					coordinates.lng
				), marker, map)
			} catch (e) {
				map.geocoder.geocode({ 'address': str }, function (results, status) {
					if (status === google.maps.GeocoderStatus.OK) {
						var latitude = results[0].geometry.location.lat();
						var longitude = results[0].geometry.location.lng();

						callback(new google.maps.LatLng(
							parseFloat(latitude),
							parseFloat(longitude)
						), marker, map)
					}
				})
			}
		}

		/**
		 * @desc Initialize Google maps
		 */
		function initMaps() {
			var key;

			for (var i = 0; i < plugins.maps.length; i++) {
				if (plugins.maps[i].hasAttribute("data-key")) {
					key = plugins.maps[i].getAttribute("data-key");
					break;
				}
			}

			$.getScript('//maps.google.com/maps/api/js?' + (key ? 'key=' + key + '&' : '') + 'sensor=false&libraries=geometry,places&v=quarterly', function () {
				var head = document.getElementsByTagName('head')[0],
					insertBefore = head.insertBefore;

				head.insertBefore = function (newElement, referenceElement) {
					if (newElement.href && newElement.href.indexOf('//fonts.googleapis.com/css?family=Roboto') !== -1 || newElement.innerHTML.indexOf('gm-style') !== -1) {
						return;
					}
					insertBefore.call(head, newElement, referenceElement);
				};
				var geocoder = new google.maps.Geocoder;
				for (var i = 0; i < plugins.maps.length; i++) {
					var zoom = parseInt(plugins.maps[i].getAttribute("data-zoom"), 10) || 11;
					var styles = plugins.maps[i].hasAttribute('data-styles') ? JSON.parse(plugins.maps[i].getAttribute("data-styles")) : [];
					var center = plugins.maps[i].getAttribute("data-center") || "New York";

					// Initialize map
					var map = new google.maps.Map(plugins.maps[i].querySelectorAll(".google-map")[0], {
						zoom: zoom,
						styles: styles,
						scrollwheel: false,
						center: { lat: 0, lng: 0 }
					});

					// Add map object to map node
					plugins.maps[i].map = map;
					plugins.maps[i].geocoder = geocoder;
					plugins.maps[i].google = google;

					// Get Center coordinates from attribute
					getLatLngObject(center, null, plugins.maps[i], function (location, markerElement, mapElement) {
						mapElement.map.setCenter(location);
					});

					// Add markers from google-map-markers array
					var markerItems = plugins.maps[i].querySelectorAll(".google-map-markers li");

					if (markerItems.length) {
						var markers = [];
						for (var j = 0; j < markerItems.length; j++) {
							var markerElement = markerItems[j];
							getLatLngObject(markerElement.getAttribute("data-location"), markerElement, plugins.maps[i], function (location, markerElement, mapElement) {
								var icon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon");
								var activeIcon = markerElement.getAttribute("data-icon-active") || mapElement.getAttribute("data-icon-active");
								var info = markerElement.getAttribute("data-description") || "";
								var infoWindow = new google.maps.InfoWindow({
									content: info
								});
								markerElement.infoWindow = infoWindow;
								var markerData = {
									position: location,
									map: mapElement.map
								}
								if (icon) {
									markerData.icon = icon;
								}
								var marker = new google.maps.Marker(markerData);
								markerElement.gmarker = marker;
								markers.push({ markerElement: markerElement, infoWindow: infoWindow });
								marker.isActive = false;
								// Handle infoWindow close click
								google.maps.event.addListener(infoWindow, 'closeclick', (function (markerElement, mapElement) {
									var markerIcon = null;
									markerElement.gmarker.isActive = false;
									markerIcon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon");
									markerElement.gmarker.setIcon(markerIcon);
								}).bind(this, markerElement, mapElement));


								// Set marker active on Click and open infoWindow
								google.maps.event.addListener(marker, 'click', (function (markerElement, mapElement) {
									if (markerElement.infoWindow.getContent().length === 0) return;
									var gMarker, currentMarker = markerElement.gmarker, currentInfoWindow;
									for (var k = 0; k < markers.length; k++) {
										var markerIcon;
										if (markers[k].markerElement === markerElement) {
											currentInfoWindow = markers[k].infoWindow;
										}
										gMarker = markers[k].markerElement.gmarker;
										if (gMarker.isActive && markers[k].markerElement !== markerElement) {
											gMarker.isActive = false;
											markerIcon = markers[k].markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon")
											gMarker.setIcon(markerIcon);
											markers[k].infoWindow.close();
										}
									}

									currentMarker.isActive = !currentMarker.isActive;
									if (currentMarker.isActive) {
										if (markerIcon = markerElement.getAttribute("data-icon-active") || mapElement.getAttribute("data-icon-active")) {
											currentMarker.setIcon(markerIcon);
										}

										currentInfoWindow.open(map, marker);
									} else {
										if (markerIcon = markerElement.getAttribute("data-icon") || mapElement.getAttribute("data-icon")) {
											currentMarker.setIcon(markerIcon);
										}
										currentInfoWindow.close();
									}
								}).bind(this, markerElement, mapElement))
							})
						}
					}
				}
			});
		}

		// Google ReCaptcha
		if (plugins.captcha.length) {
			$.getScript("//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en");
		}

		// Additional class on html if mac os.
		if (navigator.platform.match(/(Mac)/i)) {
			$html.addClass("mac-os");
		}

		// Adds some loosing functionality to IE browsers (IE Polyfills)
		if (isIE) {
			if (isIE < 10) {
				$html.addClass("lt-ie-10");
			}

			if (isIE < 11) {
				$.getScript('js/pointer-events.min.js')
					.done(function () {
						$html.addClass("ie-10");
						PointerEventsPolyfill.initialize({});
					});
			}

			if (isIE === 11) {
				$html.addClass("ie-11");
			}

			if (isIE === 12) {
				$html.addClass("ie-edge");
			}
		}

		// Copyright Year (Evaluates correct copyright year)
		if (plugins.copyrightYear.length) {
			plugins.copyrightYear.text(initialDate.getFullYear());
		}

		// UI To Top
		if (isDesktop && !isNoviBuilder) {
			$().UItoTop({
				easingType: 'easeOutQuad',
				containerClass: 'ui-to-top'
			});
		}

		// RD Navbar
		if (plugins.rdNavbar.length) {
			var aliaces, i, j, len, value, values, responsiveNavbar;

			aliaces = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"];
			values = [0, 576, 768, 992, 1200, 1600];
			responsiveNavbar = {};

			for (var z = 0; z < plugins.rdNavbar.length; z++) {
				var $rdNavbar = $(plugins.rdNavbar[z]);

				for (i = j = 0, len = values.length; j < len; i = ++j) {
					value = values[i];
					if (!responsiveNavbar[values[i]]) {
						responsiveNavbar[values[i]] = {};
					}
					if ($rdNavbar.attr('data' + aliaces[i] + 'layout')) {
						responsiveNavbar[values[i]].layout = $rdNavbar.attr('data' + aliaces[i] + 'layout');
					}
					if ($rdNavbar.attr('data' + aliaces[i] + 'device-layout')) {
						responsiveNavbar[values[i]]['deviceLayout'] = $rdNavbar.attr('data' + aliaces[i] + 'device-layout');
					}
					if ($rdNavbar.attr('data' + aliaces[i] + 'hover-on')) {
						responsiveNavbar[values[i]]['focusOnHover'] = $rdNavbar.attr('data' + aliaces[i] + 'hover-on') === 'true';
					}
					if ($rdNavbar.attr('data' + aliaces[i] + 'auto-height')) {
						responsiveNavbar[values[i]]['autoHeight'] = $rdNavbar.attr('data' + aliaces[i] + 'auto-height') === 'true';
					}

					if (isNoviBuilder) {
						responsiveNavbar[values[i]]['stickUp'] = false;
					} else if ($rdNavbar.attr('data' + aliaces[i] + 'stick-up')) {
						var isDemoNavbar = $rdNavbar.parents('.layout-navbar-demo').length;
						responsiveNavbar[values[i]]['stickUp'] = $rdNavbar.attr('data' + aliaces[i] + 'stick-up') === 'true' && !isDemoNavbar;
					}

					if ($rdNavbar.attr('data' + aliaces[i] + 'stick-up-offset')) {
						responsiveNavbar[values[i]]['stickUpOffset'] = $rdNavbar.attr('data' + aliaces[i] + 'stick-up-offset');
					}
				}

				$rdNavbar.RDNavbar({
					anchorNav: !isNoviBuilder,
					stickUpClone: ($rdNavbar.attr("data-stick-up-clone") && !isNoviBuilder) ? $rdNavbar.attr("data-stick-up-clone") === 'true' : false,
					responsive: responsiveNavbar
				});


				if ($rdNavbar.attr("data-body-class")) {
					document.body.className += ' ' + $rdNavbar.attr("data-body-class");
				}

			}
		}

		// Google maps
		if (plugins.maps.length) {
			lazyInit(plugins.maps, initMaps);
		}

		// RD Input Label
		if (plugins.rdInputLabel.length) {
			plugins.rdInputLabel.RDInputLabel();
		}

		// Owl carousel
		if (plugins.owl.length) {
			for (var i = 0; i < plugins.owl.length; i++) {
				var c = $(plugins.owl[i]);
				plugins.owl[i].owl = c;

				initOwlCarousel(c);
			}
		}

		// Isotope
		if (plugins.isotope.length) {
			var isogroup = [];
			for (var i = 0; i < plugins.isotope.length; i++) {
				var isotopeItem = plugins.isotope[i],
					isotopeInitAttrs = {
						itemSelector: '.isotope-item',
						layoutMode: isotopeItem.getAttribute('data-isotope-layout') ? isotopeItem.getAttribute('data-isotope-layout') : 'masonry',
						filter: '*'
					};

				if (isotopeItem.getAttribute('data-column-width')) {
					isotopeInitAttrs.masonry = {
						columnWidth: parseFloat(isotopeItem.getAttribute('data-column-width'))
					};
				} else if (isotopeItem.getAttribute('data-column-class')) {
					isotopeInitAttrs.masonry = {
						columnWidth: isotopeItem.getAttribute('data-column-class')
					};
				}

				var iso = new Isotope(isotopeItem, isotopeInitAttrs);
				isogroup.push(iso);
			}


			setTimeout(function () {
				for (var i = 0; i < isogroup.length; i++) {
					isogroup[i].element.className += " isotope--loaded";
					isogroup[i].layout();
				}
			}, 200);

			var resizeTimout;

			$("[data-isotope-filter]").on("click", function (e) {
				e.preventDefault();
				var filter = $(this);
				clearTimeout(resizeTimout);
				filter.parents(".isotope-filters").find('.active').removeClass("active");
				filter.addClass("active");
				var iso = $('.isotope[data-isotope-group="' + this.getAttribute("data-isotope-group") + '"]'),
					isotopeAttrs = {
						itemSelector: '.isotope-item',
						layoutMode: iso.attr('data-isotope-layout') ? iso.attr('data-isotope-layout') : 'masonry',
						filter: this.getAttribute("data-isotope-filter") === '*' ? '*' : '[data-filter*="' + this.getAttribute("data-isotope-filter") + '"]'
					};
				if (iso.attr('data-column-width')) {
					isotopeAttrs.masonry = {
						columnWidth: parseFloat(iso.attr('data-column-width'))
					};
				} else if (iso.attr('data-column-class')) {
					isotopeAttrs.masonry = {
						columnWidth: iso.attr('data-column-class')
					};
				}
				iso.isotope(isotopeAttrs);

				var $iso = $(iso);
				if ($iso.hasClass('hoverdir')) {
					initHoverDir($iso.find('.hoverdir-item'));
				}

			}).eq(0).trigger("click")
		}

		// WOW
		if ($html.hasClass("wow-animation") && plugins.wow.length && !isNoviBuilder && isDesktop) {
			setTimeout(function () {
				new WOW({
					mobile: false,
					live: false
				}).init();
			}, pageTransitionAnimationDuration);
		}

		// Regula
		if (plugins.regula.length) {
			attachFormValidator(plugins.regula);
		}

		// RD Mailform
		if (plugins.rdMailForm.length) {
			var i, j, k,
				msg = {
					'MF000': 'Successfully sent!',
					'MF001': 'Recipients are not set!',
					'MF002': 'Form will not work locally!',
					'MF003': 'Please, define email field in your form!',
					'MF004': 'Please, define type of your form!',
					'MF254': 'Something went wrong with PHPMailer!',
					'MF255': 'Aw, snap! Something went wrong.'
				};

			for (i = 0; i < plugins.rdMailForm.length; i++) {
				var $form = $(plugins.rdMailForm[i]),
					formHasCaptcha = false;

				$form.attr('novalidate', 'novalidate').ajaxForm({
					data: {
						"form-type": $form.attr("data-form-type") || "contact",
						"counter": i
					},
					beforeSubmit: function (arr, $form, options) {
						if (isNoviBuilder)
							return;

						var form = $(plugins.rdMailForm[this.extraData.counter]),
							inputs = form.find("[data-constraints]"),
							output = $("#" + form.attr("data-form-output")),
							captcha = form.find('.recaptcha'),
							captchaFlag = true;

						output.removeClass("active error success");

						if (isValidated(inputs, captcha)) {

							// veify reCaptcha
							if (captcha.length) {
								var captchaToken = captcha.find('.g-recaptcha-response').val(),
									captchaMsg = {
										'CPT001': 'Please, setup you "site key" and "secret key" of reCaptcha',
										'CPT002': 'Something wrong with google reCaptcha'
									};

								formHasCaptcha = true;

								$.ajax({
									method: "POST",
									url: "bat/reCaptcha.php",
									data: { 'g-recaptcha-response': captchaToken },
									async: false
								})
									.done(function (responceCode) {
										if (responceCode !== 'CPT000') {
											if (output.hasClass("snackbars")) {
												output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + captchaMsg[responceCode] + '</span></p>')

												setTimeout(function () {
													output.removeClass("active");
												}, 3500);

												captchaFlag = false;
											} else {
												output.html(captchaMsg[responceCode]);
											}

											output.addClass("active");
										}
									});
							}

							if (!captchaFlag) {
								return false;
							}

							form.addClass('form-in-process');

							if (output.hasClass("snackbars")) {
								output.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>');
								output.addClass("active");
							}
						} else {
							return false;
						}
					},
					error: function (result) {
						if (isNoviBuilder)
							return;

						var output = $("#" + $(plugins.rdMailForm[this.extraData.counter]).attr("data-form-output")),
							form = $(plugins.rdMailForm[this.extraData.counter]);

						output.text(msg[result]);
						form.removeClass('form-in-process');

						if (formHasCaptcha) {
							grecaptcha.reset();
						}
					},
					success: function (result) {
						if (isNoviBuilder)
							return;

						var form = $(plugins.rdMailForm[this.extraData.counter]),
							output = $("#" + form.attr("data-form-output")),
							select = form.find('select');

						form
							.addClass('success')
							.removeClass('form-in-process');

						if (formHasCaptcha) {
							grecaptcha.reset();
						}

						result = result.length === 5 ? result : 'MF255';
						output.text(msg[result]);

						if (result === "MF000") {
							if (output.hasClass("snackbars")) {
								output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + msg[result] + '</span></p>');
							} else {
								output.addClass("active success");
							}
						} else {
							if (output.hasClass("snackbars")) {
								output.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' + msg[result] + '</span></p>');
							} else {
								output.addClass("active error");
							}
						}

						form.clearForm();

						if (select.length) {
							select.select2("val", "");
						}

						form.find('input, textarea').trigger('blur');

						setTimeout(function () {
							output.removeClass("active error success");
							form.removeClass('success');
						}, 3500);
					}
				});
			}
		}

		// jQuery Count To
		if (plugins.counter.length) {
			for (var i = 0; i < plugins.counter.length; i++) {
				var $counterNotAnimated = $(plugins.counter[i]).not('.animated');
				$document.on("scroll", $.proxy(function () {
					var $this = this;

					if ((!$this.hasClass("animated")) && (isScrolledIntoView($this))) {
						$this.countTo({
							refreshInterval: 40,
							from: 0,
							to: parseInt($this.text(), 10),
							speed: $this.attr("data-speed") || 1000,
							formatter: function (value, options) {
								value = value.toFixed(options.decimals);
								if (value > 10000) {
									var newValue = "",
										stringValue = value.toString();

									for (var k = stringValue.length; k >= 0; k -= 3) {
										if (k <= 3) {
											newValue = ' ' + stringValue.slice(0, k) + newValue;
										} else {
											newValue = ' ' + stringValue.slice(k - 3, k) + newValue;
										}
									}

									return newValue;
								} else {

									return value;
								}
							}
						});
						$this.addClass('animated');
					}
				}, $counterNotAnimated))
					.trigger("scroll");
			}
		}

		// Linear Progress bar
		if (plugins.progressLinear.length) {
			for (i = 0; i < plugins.progressLinear.length; i++) {
				var progressBar = $(plugins.progressLinear[i]);
				$window.on("scroll load", $.proxy(function () {
					var bar = $(this);
					if (!bar.hasClass('animated-first') && isScrolledIntoView(bar)) {
						var end = parseInt($(this).find('.progress-value').text(), 10);
						bar.find('.progress-bar-linear').css({ width: end + '%' });
						bar.find('.progress-value').countTo({
							refreshInterval: 40,
							from: 0,
							to: end,
							speed: 500
						});
						bar.addClass('animated-first');
					}
				}, progressBar));
			}
		}

		// Winona buttons
		if (plugins.buttonWinona.length && !isNoviBuilder) {
			initWinonaButtons(plugins.buttonWinona);
		}

		function initWinonaButtons(buttons) {
			for (var i = 0; i < buttons.length; i++) {
				var $button = $(buttons[i]),
					innerContent = $button.html();

				$button.html('');
				$button.append('<div class="content-original">' + innerContent + '</div>');
				$button.append('<div class="content-dubbed">' + innerContent + '</div>');
			}
		}

		// Custom Video Overlay
		if (plugins.videoOverlay.length) {
			for (var i = 0; i < plugins.videoOverlay.length; i++) {
				var overlay = $(plugins.videoOverlay[i]);

				if (overlay) {
					overlay.css({ 'opacity': '1' });
					overlay.on('click', function () {
						$(this).animate({
							opacity: 0
						},
							function () {
								this.style.display = 'none';
							}
						);
					});
				}
			}
		}

		// Bootstrap Tooltips
		if (plugins.bootstrapTooltip.length) {
			var tooltipPlacement = plugins.bootstrapTooltip.attr('data-placement');
			initBootstrapTooltip(tooltipPlacement);

			$window.on('resize orientationchange', function () {
				initBootstrapTooltip(tooltipPlacement);
			})
		}

	});
}());

// dropdown education

function toggleDropdown() {
	var dropdown = document.getElementById("dropdown");
	if (dropdown.style.display === "block") {
		dropdown.style.display = "none";
	} else {
		dropdown.style.display = "block";
	}

	var maximum_education = document.getElementById("maximum_education");
	if (maximum_education.style.display === "none") {
		maximum_education.style.display = "block";
	} else {
		maximum_education.style.display = "none";
	}

	var minimum_education = document.getElementById("minimum_education");
	if (minimum_education.style.display === "block") {
		minimum_education.style.display = "none";
	} else {
		minimum_education.style.display = "block";
	}
};


// Selection card project or research + Button Show more

document.addEventListener('DOMContentLoaded', function () {
	const filters = document.querySelectorAll('.switch_proj label');
	let visibleCards = 8;
	const cards = document.querySelectorAll('.cards_filter');
	const showMoreBtn = document.getElementById('show_more_btn');
	let currentFilter = 'all';

	function filterCards(filterValue) {
		let visibleCount = 0;
		cards.forEach(card => {
			if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
				if (visibleCount < visibleCards) {
					card.style.display = 'block';
					visibleCount++;
				} else {
					card.style.display = 'none';
				}
			} else {
				card.style.display = 'none';
			}
		});

		if (visibleCount < visibleCards) {
			showMoreBtn.style.display = 'none';
		} else {
			showMoreBtn.style.display = 'block';
		}
	}

	filters.forEach(filter => {
		filter.addEventListener('click', function () {
			const filterValue = this.getAttribute('data-filter');
			currentFilter = filterValue;
			visibleCards = 8; // Reset visible cards count when changing filter
			filterCards(filterValue);
		});
	});

	showMoreBtn.addEventListener('click', function () {
		visibleCards += 8; // Load 8 more cards
		filterCards(currentFilter);
	});

	// Inicializa a exibição dos cards para mostrar todos
	filterCards('all');
});

// function langage - JS 

const translations = {
	pt: {
		// setion 1: menu
		trad_menu1: "Home",
		trad_menu2: "About",
		trad_menu3: "Projects and Research",
		trad_menu4: "Contact",

		// setion 2: banner
		trad_banner1: "I am Lucas",
		trad_banner2: "Data Scientist",
		trad_banner3: "&",
		trad_banner4: "Feature Engineer",
		trad_banner5: "I solve complex problems that connect user experience with business security and risk, with solutions focused on Machine Learning and Artificial Intelligence.",

		// setion 3: button download
		btn_download: "Download CV",

		// setion 4: Features
		trad_features1: "Science & Analytics",
		trad_features2: "With advanced features, I help companies define the best direction, using analytics and data science to create a successful business.",

		trad_features3: "Management",
		trad_features4: "With strong strategic skills, I work in project management and governance throughout the analytics steps. I have excellent communication skills and articulate technical concepts with clarity and objectivity.",

		trad_features5: "Bank",
		trad_features6: "With experience in banking and acquiring, I provide specialized solutions that can ensure higher profits for the business with the application of advanced ML and AI techniques.",

		// setion 5: About Me
		trad_about: "About Me",
		trad_about2: "I currently work as a Data Scientist at Banco Sicredi, a Brazilian financial institution with 8+ million customers. Previously, I was in positions of Data Analyst and Risk Modeling Analyst at Getnet Brasil S.A, working with a focus on strategic planning in the CRM and Fraud Prevention areas. In the academic environment, I am studying the Master's program in Computer Science, working in the research line of Algorithms and Optimization, but I also have a postgraduate degree in Data Science and a bachelor's degree in Accounting Sciences.",

		// setion 6: About Me - Icons
		trad_about_icon1: "Years of Experience",
		trad_about_icon2: "Programming Languages",
		trad_about_icon3: "Project Completed",

		// setion 7: Banner - Apresentation
		trad_banner_apr: "I connect data to advanced solutions that drive value",

		// setion 8: My skills
		trad_skills: "My Skills",
		trad_skills2: "Since the beginning of my journey with big data, I have acquired some skills. Below are some statistics that represent the level of understanding and utilization of the tools as a percentage.",

		// setion 9: Projects and Research - Title
		trad_project_research: 'Projects and Research',

		// setion 10: Projects and Research - menu selection
		trad_proj_res_menu: 'All',
		trad_proj_res_menu1: 'Projects',
		trad_proj_res_menu2: 'Research',


		// ---------------------------------- //
		// ---------------------------------- //

		// setion *: Projects and Research - Projects Description

		// <!-- Post 1-->
		trad_proj_description_p1: "Note: ",
		trad_proj_description_details_p1: "Model that predicts results based on independent variables, finding linear relationships in data.",
		trad_proj_title_details_p1: "Linear regression model for the financial health of the business",
		trad_proj_date_details_p1: "jun 24",
		trad_tag_proj_p1: 'Projects',


		// <!-- Post 3-->
		trad_proj_description_p3: "Note: ",
		trad_proj_description_details_p3: "The study compares the performance between two models: the Support Vector Classifier (SVC), traditionally used in supervised problems, and the Quantum Support Vector Classifier (QSVC) with quantum circuit.",
		trad_proj_title_details_p3: "Classification with Quantum Learning",
		trad_proj_date_details_p3: "jul 24",
		trad_tag_proj_p3: 'Projects',

		// ---------------------------------- //


		// setion *: Projects and Research - Research Description

		// <!-- Post 2-->
		trad_res_description_p2: "Note: ",
		trad_res_description_details_p2: "This study presents a comparative analysis of LIME, Grad-CAM, and SHAP methods for explaining predictions in image classification models.",
		trad_res_title_details_p2: "Explicablility in IA: LIME, SHAP and Grad-CAM",
		trad_res_date_details_p2: "jun 25",
		trad_tag_res_p2: 'Research',


		// <!-- Post 4-->
		trad_res_description_p4: "Note: ",
		trad_res_description_details_p4: "This work presents a Machine Learning-based approach using a Classical-Quantum hybrid architecture for the breast cancer classification task.",
		trad_res_title_details_p4: "Classical-Quantum hybrid architecture for cancer prediction",
		trad_res_date_details_p4: "jul 25",
		trad_tag_res_p4: 'Research',

		// ---------------------------------- //
		// ---------------------------------- //


		// setion 11: Button - Show more
		show_more_btn: 'Show more',

		// setion 12: My experience
		trad_my_experience: 'Experience',
		trad_my_experience_1: 'Data Scientist Mid - Risk & Fraud',
		trad_time_exp_1: 'Apr 2024 - Present',

		trad_my_experience_2: 'Fraud Prevention Modeling',
		trad_time_exp_2: 'Sep 2022 - Mar 2024',

		trad_my_experience_3: 'Data Analytics Mid',
		trad_time_exp_3: 'Jan 2020 - Dec 2020',

		trad_my_experience_4: 'Fraud Prevention Modeling',
		trad_time_exp_4: 'Jan 2019 - Dec 2019',


		// setion 12: My Education
		trad_education: 'Education',

		trad_education_1: 'Federal University of Rio Grande do Sul',
		trad_type_edu_1: "Master's degree (M.Sc.), Computer Science",

		trad_education_2: 'UniRitter University Center Ritter dos Reis',
		trad_type_edu_2: 'Post-graduation, Data Science',

		trad_education_3: 'UnInter International University Center',
		trad_type_edu_3: 'Bachelor of Science (B.Sc.), Accounting Sciences',

		trad_education_4: 'Alura',
		trad_type_edu_4: 'Specialization Courses',

		Course_1: 'Degree Deep Learning',
		Course_2: 'Degree Machine Learning Advanced',
		Course_3: 'Degree Natural language processing techniques',
		Course_4: 'Degree Apache Spark',
		Course_5: 'Degree Data Engineering with Databricks',
		Course_6: 'Degree Statistics with Python',
		Course_7: 'Degree Data Science',

		// setion 13: Contact Me
		trad_contact: 'Contact Me',
		trad_contact_1: 'I develop solutions from simple to advanced and I love what I do. Contact Me!',
		trad_contact_2: 'Name',
		trad_contact_3: 'E-mail',
		trad_contact_4: 'Phone',
		trad_contact_5: 'Your Message',

		// setion 13: Contact Me - Button - Send
		show_more_btn2: 'Send Message'
	},

	// --------------------------------------------------------------------
	// ** TRADUÇÃO **

	en: {
		// setion 1: menu
		trad_menu1: "Início",
		trad_menu2: "Sobre mim",
		trad_menu3: "Projetos e Pesquisas",
		trad_menu4: "Contato",

		// setion 2: banner
		trad_banner1: "Olá, sou Lucas",
		trad_banner2: "Cientista de Dados",
		trad_banner3: "&",
		trad_banner4: "Engenheiro de ML",
		trad_banner5: "Eu resolvo problemas complexos que conectam a experiência do usuário junto a segurança e risco do negócio, com soluções focadas Machine Learning e Inteligência Artificial.",

		// setion 3: button download
		btn_download: "Baixe CV",

		// setion 4: Features
		trad_features1: "Ciência & Análise",
		trad_features2: "Com caracteristicas avançadas, ajudo empresas a definir a melhor direção, com o uso da análise e ciência de dados para criar um negócios bem sucedidos.",

		trad_features3: "Gestão",
		trad_features4: "Com fortes habilidades estratégicas, atuo em gestão de projetos e governança em toda as steps de analytics. Possuo excelentes habilidades de comunicação e articulo conceitos técnicos com clareza e objetividade.",

		trad_features5: "Bancária",
		trad_features6: "Com experiência bancária e adquirência, forneço soluções especializadas que podem garantir maiores lucros para o negócio com a aplicação de técnicas avançadas de ML e IA.",

		// setion 5: About Me
		trad_about: "Sobre Mim",
		trad_about2: "Atualmente trabalho como Ciêntista de Dados no Banco Sicredi, instituição financeira brasileira com 8+ milhões de clientes. Anteriormente,  estive em posições de Analista de Dados e Analista de modelagem de Risco na Getnet Brasil S.A, atuando com foco no planejamento estratégico das áreas de CRM e Prevenção a Fraudes. No meio acadêmico, estou cursando o programa de Mestrado em Ciência da Computação, atuando na linha de pesquisa de Algoritmos e Otimização, mas também possuo pós-graduação em Data Science e bacharelado em Ciências Contábeis.",

		// setion 6: About Me - Icons
		trad_about_icon1: "Anos de Experiência",
		trad_about_icon2: "Linguagens de Programação",
		trad_about_icon3: "Projetos Entregues",

		// setion 7: Banner - Apresentation
		trad_banner_apr: "Conecto dados a soluções avançadas que geram valor",

		// setion 8: My skills
		trad_skills: "Minhas Habilidades",
		trad_skills2: "Desde o início da minha jornada com big data, adqueri algumas habilidades. Abaixo estão algumas estatísticas que representam o nível de entendimento e utilização das ferramentas percentualmente.",

		// setion 9: Projects and Research - Title
		trad_project_research: 'Projetos e Pesquisas',

		// setion 10: Projects and Research - menu selection
		trad_proj_res_menu: 'Ambos',
		trad_proj_res_menu1: 'Projetos',
		trad_proj_res_menu2: 'Pesquisas',


		// ---------------------------------- //
		// ---------------------------------- //

		// setion *: Projects and Research - Projects Description

		// <!-- Post 1-->
		trad_proj_description_p1: "Nota: ",
		trad_proj_description_details_p1: "Modelo que prevê resultados com base em variáveis independentes, encontrando relações lineares entre os dados.",
		trad_proj_title_details_p1: "Modelo de regressão linear, para saúde financeira do negócio",
		trad_proj_date_details_p1: "jun 24",
		trad_tag_proj_p1: 'Projetos',


		// <!-- Post 3-->
		trad_proj_description_p3: "Nota: ",
		trad_proj_description_details_p3: " O estudo compara o desempenho entre dois modelos: o Support Vector Classifier (SVC), tradicionalmente utilizado em problemas supervisionados, e o Quantum Support Vector Classifier (QSVC) com circuito quântico.",
		trad_proj_title_details_p3: "Classificação com Aprendizado Quântico",
		trad_proj_date_details_p3: "jul 24",
		trad_tag_proj_p3: 'Projetos',

		// ---------------------------------- //


		// setion *: Projects and Research - Research Description

		// <!-- Post 2-->
		trad_res_description_p2: "Nota: ",
		trad_res_description_details_p2: "Este estudo apresenta uma análise comparativa dos métodos LIME, Grad-CAM e SHAP para explicar predições em modelosdeclassificação de imagens.",
		trad_res_title_details_p2: "Explicabilidade em IA: LIME, SHAP e Grad-CAM",
		trad_res_date_details_p2: "jun 25",
		trad_tag_res_p2: 'Pesquisas',

		// <!-- Post 4-->
		trad_res_description_p4: "Nota: ",
		trad_res_description_details_p4: "Este trabalho apresenta uma abordagem baseada em aprendizado de máquina usando uma arquitetura híbrida clássica-quântica para a tarefa de classificação do câncer de mama.",
		trad_res_title_details_p4: "Arquitetura híbrida Classica-Quântica, para predição de cancer",
		trad_res_date_details_p4: "jul 25",
		trad_tag_res_p4: 'Pesquisas',

		// ---------------------------------- //
		// ---------------------------------- //

		// setion 11: Button - Show more
		show_more_btn: 'Exibir mais',

		// setion 12: My experience
		trad_my_experience: 'Experiências',

		trad_my_experience_1: 'Cientista de dados Pleno - Risk & Fraud',
		trad_time_exp_1: 'Abr 2024 - Atual',

		trad_my_experience_2: 'Analista de modelagem - Risk & Fraud',
		trad_time_exp_2: 'Set 2022 - Mar 2024',

		trad_my_experience_3: 'Analista de dados Pleno',
		trad_time_exp_3: 'Jan 2020 - Dez 2020',

		trad_my_experience_4: 'Analista de modelagem - Risk & Fraud',
		trad_time_exp_4: 'Jan 2019 - Dez 2019',

		// setion 12: My Education
		trad_education: 'Educação',
		trad_education_1: 'Universidade Federal do Rio Grande do Sul',
		trad_type_edu_1: "Mestrado (M.Sc.), Ciência da Computação",

		trad_education_2: 'Centro Universitário Ritter dos Reis',
		trad_type_edu_2: 'Pós-graduação, Ciência de Dados',

		trad_education_3: 'Uninter Centro Universitário Internacional',
		trad_type_edu_3: 'Bacharelado (B.Sc.), Ciências Contábeis',

		trad_education_4: 'Alura',
		trad_type_edu_4: 'Cursos de Especialização',

		Course_1: 'Formação Deep Learning',
		Course_2: 'Formação Machine Learning Avançado',
		Course_3: 'Formação Técnicas de processamento de linguagem natural',
		Course_4: 'Formação Apache Spark',
		Course_5: 'Formação Engenharia de dados com Databricks',
		Course_6: 'Formação Estátisca com Python',
		Course_7: 'Formação Ciência de Dados',


		// setion 13: Contact Me
		trad_contact: 'Entre em Contato',
		trad_contact_1: 'Eu desenvolvo soluções do simples ao avançado e amo o que faço. Entre em contato comigo!',
		trad_contact_2: 'Nome',
		trad_contact_3: 'E-mail',
		trad_contact_4: 'Telefone',
		trad_contact_5: 'Sua Mensagem',

		// setion 13: Contact Me - Button - Send
		show_more_btn2: 'Enviar Mensagem'
	}
};

function changeLanguage(lang) {
	// Ajuste dos elementos mais elementos aqui

	// setion 1: menu
	document.getElementById('trad_menu1').textContent = translations[lang].trad_menu1;
	document.getElementById('trad_menu2').textContent = translations[lang].trad_menu2;
	document.getElementById('trad_menu3').textContent = translations[lang].trad_menu3;
	document.getElementById('trad_menu4').textContent = translations[lang].trad_menu4;

	// setion 2: banner
	document.getElementById('trad_banner1').textContent = translations[lang].trad_banner1;
	document.getElementById('trad_banner2').textContent = translations[lang].trad_banner2;
	document.getElementById('trad_banner3').textContent = translations[lang].trad_banner3;
	document.getElementById('trad_banner4').textContent = translations[lang].trad_banner4;
	document.getElementById('trad_banner5').textContent = translations[lang].trad_banner5;

	// setion 3: button download
	document.getElementById('btn_download').textContent = translations[lang].btn_download;

	// setion 4: Features
	document.getElementById('trad_features1').textContent = translations[lang].trad_features1;
	document.getElementById('trad_features2').textContent = translations[lang].trad_features2;

	document.getElementById('trad_features3').textContent = translations[lang].trad_features3;
	document.getElementById('trad_features4').textContent = translations[lang].trad_features4;

	document.getElementById('trad_features5').textContent = translations[lang].trad_features5;
	document.getElementById('trad_features6').textContent = translations[lang].trad_features6;


	// setion 5: About Me
	document.getElementById('trad_about').textContent = translations[lang].trad_about;
	document.getElementById('trad_about2').textContent = translations[lang].trad_about2;

	// setion 6: About Me - Icons
	document.getElementById('trad_about_icon1').textContent = translations[lang].trad_about_icon1;
	document.getElementById('trad_about_icon2').textContent = translations[lang].trad_about_icon2;
	document.getElementById('trad_about_icon3').textContent = translations[lang].trad_about_icon3;

	// setion 7: Banner - Apresentation
	document.getElementById('trad_banner_apr').textContent = translations[lang].trad_banner_apr;

	// setion 8: My skills
	document.getElementById('trad_skills').textContent = translations[lang].trad_skills;
	document.getElementById('trad_skills2').textContent = translations[lang].trad_skills2;

	// setion 9: Projects and Research - Title
	document.getElementById('trad_project_research').textContent = translations[lang].trad_project_research;

	// setion 10: Projects and Research - menu selection
	document.getElementById('trad_proj_res_menu').textContent = translations[lang].trad_proj_res_menu;
	document.getElementById('trad_proj_res_menu1').textContent = translations[lang].trad_proj_res_menu1;
	document.getElementById('trad_proj_res_menu2').textContent = translations[lang].trad_proj_res_menu2;


	// ---------------------------------- //
	// ---------------------------------- //


	// setion *: Projects and Research - Projects Description

	// <!-- Post 1-->
	document.getElementById('trad_proj_description_details_p1').textContent = translations[lang].trad_proj_description_details_p1;
	document.getElementById('trad_proj_title_details_p1').textContent = translations[lang].trad_proj_title_details_p1;
	document.getElementById('trad_proj_date_details_p1').textContent = translations[lang].trad_proj_date_details_p1;
	document.getElementById('trad_proj_description_p1').textContent = translations[lang].trad_proj_description_p1;
	document.getElementById('trad_tag_proj_p1').textContent = translations[lang].trad_tag_proj_p1;

	// <!-- Post 3-->
	document.getElementById('trad_proj_description_details_p3').textContent = translations[lang].trad_proj_description_details_p3;
	document.getElementById('trad_proj_title_details_p3').textContent = translations[lang].trad_proj_title_details_p3;
	document.getElementById('trad_proj_date_details_p3').textContent = translations[lang].trad_proj_date_details_p3;
	document.getElementById('trad_proj_description_p3').textContent = translations[lang].trad_proj_description_p3;
	document.getElementById('trad_tag_proj_p3').textContent = translations[lang].trad_tag_proj_p3;

	// ---------------------------------- //

	// setion *: Projects and Research - Research Description

	// <!-- Post 2-->
	document.getElementById('trad_res_description_details_p2').textContent = translations[lang].trad_res_description_details_p2;
	document.getElementById('trad_res_title_details_p2').textContent = translations[lang].trad_res_title_details_p2;
	document.getElementById('trad_res_date_details_p2').textContent = translations[lang].trad_res_date_details_p2;
	document.getElementById('trad_res_description_p2').textContent = translations[lang].trad_res_description_p2;
	document.getElementById('trad_tag_res_p2').textContent = translations[lang].trad_tag_res_p2;

	// <!-- Post 4-->
	document.getElementById('trad_res_description_details_p4').textContent = translations[lang].trad_res_description_details_p4;
	document.getElementById('trad_res_title_details_p4').textContent = translations[lang].trad_res_title_details_p4;
	document.getElementById('trad_res_date_details_p4').textContent = translations[lang].trad_res_date_details_p4;
	document.getElementById('trad_res_description_p4').textContent = translations[lang].trad_res_description_p4;
	document.getElementById('trad_tag_res_p4').textContent = translations[lang].trad_tag_res_p4;

	// ---------------------------------- //
	// ---------------------------------- //

	// setion 11: Button - Show more
	document.getElementById('show_more_btn').textContent = translations[lang].show_more_btn;

	// setion 12: My experience
	document.getElementById('trad_my_experience').textContent = translations[lang].trad_my_experience;

	document.getElementById('trad_my_experience_1').textContent = translations[lang].trad_my_experience_1;
	document.getElementById('trad_time_exp_1').textContent = translations[lang].trad_time_exp_1;

	document.getElementById('trad_my_experience_2').textContent = translations[lang].trad_my_experience_2;
	document.getElementById('trad_time_exp_2').textContent = translations[lang].trad_time_exp_2;

	document.getElementById('trad_my_experience_3').textContent = translations[lang].trad_my_experience_3;
	document.getElementById('trad_time_exp_3').textContent = translations[lang].trad_time_exp_3;

	document.getElementById('trad_my_experience_4').textContent = translations[lang].trad_my_experience_4;
	document.getElementById('trad_time_exp_4').textContent = translations[lang].trad_time_exp_4;


	//setion 13: My Education
	document.getElementById('trad_education').textContent = translations[lang].trad_education;

	document.getElementById('trad_education_1').textContent = translations[lang].trad_education_1;
	document.getElementById('trad_type_edu_1').textContent = translations[lang].trad_type_edu_1;

	document.getElementById('trad_education_2').textContent = translations[lang].trad_education_2;
	document.getElementById('trad_type_edu_2').textContent = translations[lang].trad_type_edu_2;

	document.getElementById('trad_education_3').textContent = translations[lang].trad_education_3;
	document.getElementById('trad_type_edu_3').textContent = translations[lang].trad_type_edu_3;

	document.getElementById('trad_education_4').textContent = translations[lang].trad_education_4;
	document.getElementById('trad_type_edu_4').textContent = translations[lang].trad_type_edu_4;

	document.getElementById('Course_1').textContent = translations[lang].Course_1;
	document.getElementById('Course_2').textContent = translations[lang].Course_2;
	document.getElementById('Course_3').textContent = translations[lang].Course_3;
	document.getElementById('Course_4').textContent = translations[lang].Course_4;
	document.getElementById('Course_5').textContent = translations[lang].Course_5;
	document.getElementById('Course_6').textContent = translations[lang].Course_6;
	document.getElementById('Course_7').textContent = translations[lang].Course_7;

	// setion 13: Contact Me
	document.getElementById('trad_contact').textContent = translations[lang].trad_contact;
	document.getElementById('trad_contact_1').textContent = translations[lang].trad_contact_1;
	document.getElementById('trad_contact_2').textContent = translations[lang].trad_contact_2;
	document.getElementById('trad_contact_3').textContent = translations[lang].trad_contact_3;
	document.getElementById('trad_contact_4').textContent = translations[lang].trad_contact_4;
	document.getElementById('trad_contact_5').textContent = translations[lang].trad_contact_5;

	// setion 13: Contact Me - Button - Send
	document.getElementById('show_more_btn2').textContent = translations[lang].show_more_btn2;

	// Função para alterar o idioma e atualizar o link de download

	const downloadLink = document.getElementById('download_style');
	// Só atualiza se encontrar o elemento com o ID exato
	if (downloadLink && downloadLink.tagName === 'A') {
		const newHref = `./doc/${lang}/Lucas Fazioni - CV.pdf`;
		downloadLink.setAttribute('href', newHref);
	}

	const downloadLink_1 = document.getElementById('download_style_1');
	if (downloadLink_1 && downloadLink_1.tagName === 'A') {
		const newHref = `./doc/${lang}/Lucas Fazioni - CV.pdf`;
		downloadLink_1.setAttribute('href', newHref);
	}

}

document.getElementById('language-toggle').addEventListener('change', function () {
	if (this.checked) {
		changeLanguage('en');
	} else {
		changeLanguage('pt');
	}
});

// tradução skill view add

const translations_skill = {
	pt: {
		skillsInfo: {
			"Python": ["Data manipulation", "Automation", "Machine Learning"],
			"Spark": ["Distributed processing", "Parallel jobs", "DataFrames"],
			"R Studio": ["Statistical modeling", "ggplot2 visualization", "Exploratory analysis"],
			"Databricks": ["Integrated notebooks", "Data pipeline", "Spark integration"],
			"Cloud AWS": ["S3, EC2, Lambda", "Cloud infrastructure", "AI integration"],
			"Tableau": ["Interactive visualizations", "Enterprise dashboards", "Connection to varied sources"],
			"Power BI": ["Dynamic charts", "DAX measures", "Optimized reports"]
		}
	},

	en: {
		skillsInfo: {
			"Python": ["Manipulação de dados", "Automação", "Machine Learning"],
			"Spark": ["Processamento distribuído", "Trabalhos paralelos", "DataFrames"],
			"R Studio": ["Modelagem estatística", "Visualizações com ggplot2", "Análise exploratória"],
			"Databricks": ["Notebooks integrados", "Pipeline de dados", "Integração com Spark"],
			"Cloud AWS": ["S3, EC2, Lambda", "Infraestrutura em nuvem", "Integração com AI"],
			"Tableau": ["Visualizações interativas", "Dashboard empresarial", "Conexão com fontes variadas"],
			"Power BI": ["Gráficos dinâmicos", "Medidas DAX", "Relatórios otimizados"]
		}
	}
};

// function view caracteristics skills

function openOverlay(skillName) {
	const currentLang = document.getElementById('language-toggle').checked ? 'en' : 'pt';
	const details = translations_skill[currentLang].skillsInfo[skillName];

	document.getElementById('overlay-title').textContent = skillName;
	const list = document.getElementById('overlay-list');
	list.innerHTML = '';

	details.forEach(item => {
		const li = document.createElement('li');
		li.textContent = item;
		list.appendChild(li);
	});

	document.getElementById('overlay').classList.add('active');
}

function closeOverlay() {
	document.getElementById('overlay').classList.remove('active');
}


// Define idioma padrão ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
	// Aplica o idioma 'en' logo no início
	changeLanguage('pt'); //invertido
});


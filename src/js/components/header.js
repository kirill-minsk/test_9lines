import helpers from '../helpers';

function openMenu() {
	return new Promise((resolve) => {
		$('.js-burger').addClass('is-disabled').attr('disabled', true);

		helpers.lockScroll(true, helpers.$header.find('.header__menu'), 'header');

		helpers.$header.addClass('is-menu-opened');
		$('.header__menu').removeClass('is-hidden');

		setImmediate(() => {
			helpers.$body.css('padding-right', `${helpers.getScrollbarWidth()}px`);
			helpers.$header.css('right', `${helpers.getScrollbarWidth()}px`);
		});

		setTimeout(() => {
			$('.header__menu').addClass('is-active');
			$('.js-burger').removeClass('is-disabled').attr('disabled', false);

			resolve();
		}, 100);
	});
}

function closeMenu() {
	return new Promise((resolve) => {
		$('.js-burger').addClass('is-disabled').attr('disabled', true);

		helpers.lockScroll(false, helpers.$header.find('.header__menu'), 'header');
		helpers.$body.css('padding-right', '');
		helpers.$header.css('right', '');

		helpers.$header.removeClass('is-menu-opened');

		$('.header__menu').removeClass('is-active');

		setTimeout(() => {
			$('.header__menu').addClass('is-hidden');
			$('.js-burger').removeClass('is-disabled').attr('disabled', false);

			resolve();
		}, 500);
	});
}


function toggleMenu(event) {
	event.preventDefault();
	event.stopPropagation();

	if ($(event.currentTarget).hasClass('is-active')) {
		$(event.currentTarget).removeClass('is-active');
		closeMenu();
	} else {
		$(event.currentTarget).addClass('is-active');
		openMenu();
	}
}
function init() {
	helpers.$header = $('.header');

	$('.js-burger').on('click.header', toggleMenu);
	$('.js-burger-close').on('click.header', toggleMenu);

	helpers.$document
		.on('click.header', (e) => {
			let $container = $('.header__menu');

			if ($container.is(e.target) && $container.has(e.target).length === 0 && $container.hasClass('is-active')) {
				closeMenu();
				$('.js-burger').removeClass('is-active');
			}
		})
		.on('click..header__menu.is-active a', (e) => {
			let $container = $('.header__menu');
			if ($container.hasClass('is-active')) {
				setTimeout(() => {
					closeMenu();
					$('.js-burger').removeClass('is-active');
				}, 500);
			}
		})
		.on('keyup.header', (e) => {
			if ((e.key === 'Escape' || e.key === 'Esc') && $('.header__menu').hasClass('is-active')) {
				closeMenu();
				$('.js-burger').removeClass('is-active');
			}
		});
}

function destroy() {
	$('.js-burger').off('.header');
	helpers.$document.off('.header');
}

var list_a = $('.header__list a');
for (var i = 0; i < list_a.length; i++) {
  list_a[i].addEventListener("click", function() {
    var current = $('.header__list a.active');
    current.removeClass('active');
    this.className += " active";
  });
}

export default {
	init,
	destroy,
	openMenu,
	closeMenu,
};

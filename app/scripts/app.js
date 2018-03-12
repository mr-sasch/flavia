import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});

/* Параллакс */
window.addEventListener('scroll', function () {
	let depth;
	let i;
	let translate3d;
	let movement;
	const topDistance = this.pageYOffset;
	const balls = document.querySelectorAll('[data-type="parallax"]');
	for (i = 0; i < balls.length; i++) {
		const ball = balls[i];
		depth = ball.getAttribute('data-depth');
		movement = -(topDistance * depth);
		translate3d = 'translate3d(0, ' + movement + 'px, 0)';
		ball.style['-webkit-transform'] = translate3d;
		ball.style['-moz-transform'] = translate3d;
		ball.style['-ms-transform'] = translate3d;
		ball.style['-o-transform'] = translate3d;
		ball.style.transform = translate3d;
	}
});
/* /Параллакс */

/* Плавное появление блоков */

/* /Плавное появление блоков */

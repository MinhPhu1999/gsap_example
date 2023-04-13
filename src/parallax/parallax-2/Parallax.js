// import html from './html.png';
// import css from './css.png';
// import es6 from './es6.png';
// import react from './react.png';
// import logo from './logo.svg';

import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all';
import { useEffect, useRef, useState } from 'react';

import './styles.css';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export const Parallax = () => {
	const containerRef = useRef();
	const [tween, setTween] = useState();

	const onClick = e => {
		const panels = gsap.utils.toArray('#panels-container .panel');
		// let panelsContainer = document.querySelector('#panels-container');
		console.log('panels', panels);

		e.preventDefault();

		let targetElem = document.querySelector(e.target.getAttribute('href'));
		let y = targetElem;
		console.log('targetElem', targetElem);

		if (
			targetElem &&
			containerRef.current.isSameNode(targetElem.parentElement)
		) {
			let totalScroll =
					tween.scrollTrigger.end - tween.scrollTrigger.start,
				totalMovement = (panels.length - 1) * targetElem.offsetWidth;

			y = Math.round(
				tween.scrollTrigger.start +
					(targetElem.offsetLeft / totalMovement) * totalScroll,
			);
		}

		gsap.to(window, {
			scrollTo: {
				y: y,
				autoKill: false,
			},
			duration: 1,
		});
		// document.querySelectorAll('.anchor').forEach(anchor => {
		// 	anchor.addEventListener('click', function (e) {

		// 	});
		// });
	};

	useEffect(() => {
		const panels = gsap.utils.toArray('#panels-container .panel');
		const tweenA = gsap.to(panels, {
			xPercent: -100 * (panels.length - 1),
			ease: 'none',
			scrollTrigger: {
				trigger: '#panels-container',
				pin: true,
				start: 'top top',
				scrub: 1,
				snap: {
					snapTo: 1 / (panels.length - 1),
					inertia: false,
					duration: { min: 0.1, max: 0.1 },
				},
				end: () => '+=' + containerRef.current.offsetWidth,
			},
		});
		setTween(tweenA);
	}, []);

	return (
		<div id="page" className="site">
			<div id="feather" className="feather"></div>

			<header id="masthead" className="site-header" role="banner">
				<nav className="anchor-nav" role="navigation">
					<a href="#intro" className="anchor" onClick={onClick}>
						Home
					</a>
					<a href="#panel-1" className="anchor" onClick={onClick}>
						Panel 1
					</a>
					<a href="#panel-3" className="anchor" onClick={onClick}>
						Panel 3
					</a>
					<a href="#panel-5" className="anchor" onClick={onClick}>
						Panel 5
					</a>
					<a href="#map" className="anchor" onClick={onClick}>
						Map
					</a>
				</nav>
			</header>

			<main id="content" className="site-content" role="main">
				<section id="intro" className="full-screen pt-5 blue">
					<h1>A cool title</h1>

					{/* <div id="clouds-layer-1" className="clouds"></div>
					<div id="clouds-layer-2" className="clouds"></div> */}
				</section>

				<section id="panels">
					<div
						id="panels-container"
						style={{ width: '500%' }}
						ref={containerRef}
					>
						<article id="panel-1" className="panel full-screen red">
							<div className="container">
								<div className="row">
									<div className="col-6">
										<img src="" alt="" />
									</div>
									<div className="col-6 d-flex flex-column">
										<h2>Panel 1</h2>

										<p className="step-description">
											Lorem Ipsum is simply dummy text of
											the printing and typesetting
											industry. Including versions of
											Lorem Ipsum.
										</p>

										<div className="panels-navigation text-right">
											<div
												className="nav-panel"
												data-sign="plus"
											>
												<a
													href="#panel-2"
													className="anchor"
													onClick={onClick}
												>
													Next
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</article>
						<article
							id="panel-2"
							className="panel full-screen orange"
						>
							<div className="container">
								<div className="row">
									<div className="col-6">
										<img src="" alt="" />
									</div>
									<div className="col-6 d-flex flex-column">
										<h2>Panel 2</h2>

										<p className="step-description">
											Lorem Ipsum is simply dummy text of
											the printing and typesetting
											industry. Including versions of
											Lorem Ipsum.
										</p>

										<div className="panels-navigation">
											<div
												className="nav-panel"
												data-sign="minus"
											>
												<a
													href="#panel-1"
													className="anchor"
													onClick={onClick}
												>
													Prev
												</a>
											</div>
											<div
												className="nav-panel"
												data-sign="plus"
											>
												<a
													href="#panel-3"
													className="anchor"
													onClick={onClick}
												>
													Next
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</article>
						<article
							id="panel-3"
							className="panel full-screen purple"
						>
							<div className="container">
								<div className="row">
									<div className="col-6">
										<img src="" alt="" />
									</div>
									<div className="col-6 d-flex flex-column">
										<h2>Panel 3</h2>

										<p className="step-description">
											Lorem Ipsum is simply dummy text of
											the printing and typesetting
											industry. Including versions of
											Lorem Ipsum.
										</p>

										<div className="panels-navigation">
											<div
												className="nav-panel"
												data-sign="minus"
											>
												<a
													href="#panel-2"
													className="anchor"
													onClick={onClick}
												>
													Prev
												</a>
											</div>
											<div
												className="nav-panel"
												data-sign="plus"
											>
												<a
													href="#panel-4"
													className="anchor"
													onClick={onClick}
												>
													Next
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</article>
						<article
							id="panel-4"
							className="panel full-screen green"
						>
							<div className="container">
								<div className="row">
									<div className="col-6">
										<img src="" alt="" />
									</div>
									<div className="col-6 d-flex flex-column">
										<h2>Panel 4</h2>

										<p className="step-description">
											Lorem Ipsum is simply dummy text of
											the printing and typesetting
											industry. Including versions of
											Lorem Ipsum.
										</p>

										<div className="panels-navigation">
											<div
												className="nav-panel"
												data-sign="minus"
											>
												<a
													href="#panel-3"
													className="anchor"
													onClick={onClick}
												>
													Prev
												</a>
											</div>
											<div
												className="nav-panel"
												data-sign="plus"
											>
												<a
													href="#panel-5"
													className="anchor"
													onClick={onClick}
												>
													Next
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</article>
						<article
							id="panel-5"
							className="panel full-screen gray"
						>
							<div className="container">
								<div className="row">
									<div className="col-6">
										<img src="" alt="" />
									</div>
									<div className="col-6 d-flex flex-column">
										<h2>Panel 5</h2>

										<p className="step-description">
											Lorem Ipsum is simply dummy text of
											the printing and typesetting
											industry. Including versions of
											Lorem Ipsum.
										</p>

										<div className="panels-navigation text-right">
											<div
												className="nav-panel"
												data-sign="minus"
											>
												<a
													href="#panel-4"
													className="anchor"
													onClick={onClick}
												>
													Prev
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</article>
					</div>
				</section>

				<section id="map" className="full-screen pt-5 blue">
					<h1>Map Section</h1>
				</section>
			</main>
		</div>
	);
};

import React from 'react';

function About() {
	return (
		<section>
			<div className="center" id="about">
				<h1 className="page-header">About Me</h1>
			</div>
			<div className="center">
				<img
					src={require('../../assets/images/family.jpeg')}
					alt="about-me"
					className="photo"
				/>
			</div>
			<div>
				<p>
					I am a full stack web developer looking to build a more
					intuitive user experience on the web. I recently earned
					a certificate in full stack development from the
					Columbia University bootcamp, with newly developed
					skills in JavaScript, CSS, React.js, and responsive web
					design. I am known as an innovative problem solver
					passionate about developing apps, with a focus on
					mobile-first design and development. With each project,
					my aim is to best engage my audience for an impactful
					user experience.
				</p>
				<p>
					I applied aspects of UX and agile development in a
					recent project. I worked on a team of five to develop 
					a single-page MERN app that allows users to post blogs and to track other posts from other users.
          I am excited to leverage my skills as part
					of a fast-paced, quality-driven team to build better
					experiences on the web.
				</p>
			</div>
		</section>
	);
}

export default About;

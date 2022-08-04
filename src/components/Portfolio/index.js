import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Fit and Track',
			description: 'A MERN application that allows a user to track everything from workout plans to meal plans. The user can track food and water intake, as well as what workouts were completed and on what dates.',
			image: "fit_track.png",
			technologies: ['React', 'GraphQL', 'Mongoose', 'Express', 'Stripe',
		],
			github: "https://github.com/Anisha-C/Fit-and-Track",
			deployed: ""
		},
		{
			name: 'Run Buddy',
			description:
				'This project was the first of many that was an introduction to the front-end technologies of HTML and CSS. A website that offers fitness training services.',
			image: 'run-buddy.jpg',
			technologies: [
				'HTML/CSS'
			],
			github: 'https://github.com/brettshackett/run-buddy',
			deployed: 'https://brettshackett.github.io/run-buddy/',
		},
		{
			name: 'Pay Up',
			description:
				'Pay Up allows a user to enter a bill amount that needs to be split amongst a group of individuals and it will return the amount evenly split between a user entered amount of individuals.',
			image: 'payup.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
				'Express & Sequelize',
				'Heroku & AWS S3',
			],
			github: 'https://github.com/OwaisIslam/auto-tracker',
			deployed: 'https://team-3-auto-tracker.herokuapp.com/',
		},
		{
			name: 'Photo Port',
			description:
				'My first attempt using React to create a website that displays pictures for a photgrapher. This was apart of the bootcamp curriculum but was great practice for React.',
			image: 'photo-port.jpg',
			technologies: ['HTML/CSS', 'JavaScript', 'React.js'],
			github: 'https://github.com/brettshackett/Photo-Port',
		},
		{
			name: 'Budget Tracker',
			description:
				'Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.',
			image: 'budget-tracker-image.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: 'https://github.com/brettshackett/budget-tracker',
			deployed: 'https://cu-budget-tracker.herokuapp.com/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'weather-dashboard-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/OwaisIslam/weather-dashboard',
			deployed: 'https://owaisislam.github.io/weather-dashboard/',
		},
		{
			name: 'Password Generator',
			description:
				'This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.',
			image: 'password-generator-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/brettshackett/Random-Password-Generator',
			deployed: 'https://brettshackett.github.io/Random-Password-Generator/',
		},
		{
			name: 'Note Taker',
			description:
				'This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.',
			image: 'note-taker-image.png',
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/OwaisIslam/note-taker',
			deployed: 'https://note-taker-owais.herokuapp.com/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;

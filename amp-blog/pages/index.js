import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import withData from './../graphql/config';
import './../scss/app.scss';
import Postcard from '../components/PostCard';

const Home = () => {
	return (
		<div>
			<Head>
				<title>Home</title>
				<link rel='icon' href='/favicon.ico' />
				<link href='https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css' rel='stylesheet' />
			</Head>
			<Nav />
			<main className='main flex flex-wrap mb-4 text-center my-8 mx-0'>
				<Postcard />
				<Postcard />
			</main>
		</div>
	);
};

export default withData(Home);

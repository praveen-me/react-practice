import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import withData from './../graphql/config';
import './../scss/app.scss';
import Postcard from '../components/PostCard';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const query = gql`
	query {
		posts {
			nodes {
				id
				title
				excerpt
				featuredImage {
					sourceUrl
				}
				tags {
					nodes {
						name
					}
				}
			}
		}
	}
`;

const Home = () => {
	const { error, loading, data } = useQuery(query);

	const posts = data?.posts?.nodes;

	return (
		<div>
			<Head>
				<title>Home</title>
				<link rel='icon' href='/favicon.ico' />
				<link href='https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css' rel='stylesheet' />
			</Head>
			<Nav />
			<main className='main flex flex-wrap text-center my-8 mx-0'>
				{posts && posts.map((post) => <Postcard {...post} key={post.id} />)}
			</main>
		</div>
	);
};

export default withData(Home);

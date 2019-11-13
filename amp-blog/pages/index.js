import React from 'react';
import { useAmp } from 'next/amp';
import Head from 'next/head';
import Nav from '../components/nav';
import withData from './../graphql/config';
import './../scss/app.scss';
import Postcard from '../components/PostCard';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

export const config = { amp: true };

import { styleStr } from './../style';

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
	const isAmp = useAmp();

	const posts = data?.posts?.nodes;

	return (
		<div>
			<Head>
				<title>Home</title>
				<link rel='icon' href='/favicon.ico' />
				<meta charSet='utf-8' />
				{/* <amp stle */}
				{isAmp && <style amp-custom={true}>{styleStr}</style>}
			</Head>
			<Nav />
			<main className='main flex flex-wrap text-center my-8 mx-0'>
				{posts && posts.map((post) => <Postcard {...post} key={post.id} isAmp={isAmp} />)}
			</main>
		</div>
	);
};

export default withData(Home);

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

				<script async custom-element='amp-video' src='https://cdn.ampproject.org/v0/amp-video-0.1.js'></script>

				<script
					async
					custom-element='amp-script'
					src='https://cdn.ampproject.org/v0/amp-script-0.1.js'></script>

				{isAmp && <style amp-custom>{styleStr}</style>}
			</Head>
			<Nav />

			{isAmp && (
				<amp-video
					controls='true'
					width='640'
					height='360'
					layout='responsive'
					poster='https://amp.dev/static/inline-examples/images/kitten-playing.png'>
					<source src='https://amp.dev/static/inline-examples/videos/kitten-playing.webm' type='video/webm' />
					<source src='https://amp.dev/static/inline-examples/videos/kitten-playing.mp4' type='video/mp4' />
					<div fallback>
						<p>This browser does not support the video element.</p>
					</div>
				</amp-video>
			)}

			{isAmp && (
				<amp-script layout='container' src='https://example.com/hello-world.js'>
					<button onClick={() => console.log('hello world')}>Hello amp-script!</button>
				</amp-script>
			)}
			<main className='main flex flex-wrap text-center my-8 mx-0'>
				{posts && posts.map((post) => <Postcard {...post} key={post.id} isAmp={isAmp} />)}
			</main>
		</div>
	);
};

export default withData(Home);

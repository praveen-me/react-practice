import React from 'react';

const Postcard = ({ title, excerpt, featuredImage, tags, isAmp }) => {
	return (
		<div className='post-card max-w-sm rounded overflow-hidden shadow-lg my-4 mx-4'>
			{isAmp ? (
				<amp-img src={featuredImage.sourceUrl} layout='responsive' height='200' width='380' />
			) : (
				<img className='w-full' src={featuredImage.sourceUrl} alt='Sunset in the mountains' />
			)}

			<div className='px-6 py-4'>
				<div className='font-bold text-xl mb-2' dangerouslySetInnerHTML={{ __html: title }} />
				<p className='text-gray-700 text-base' dangerouslySetInnerHTML={{ __html: excerpt }} />
			</div>
			<div className='px-6 py-4'>
				{tags.nodes.map((node) => (
					<span
						key={node}
						className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 m-3'>
						#{node.name.toLowerCase()}
					</span>
				))}
			</div>
		</div>
	);
};

export default Postcard;

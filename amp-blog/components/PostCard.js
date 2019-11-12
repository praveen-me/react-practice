import React from 'react';

const Postcard = () => {
	return (
		<div className='post-card max-w-sm rounded overflow-hidden shadow-lg my-4 mx-0'>
			<img
				className='w-full'
				src='https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
				alt='Sunset in the mountains'
			/>
			<div className='px-6 py-4'>
				<div className='font-bold text-xl mb-2'>The Coldest Sunset</div>
				<p className='text-gray-700 text-base'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
					perferendis eaque, exercitationem praesentium nihil.
				</p>
			</div>
			<div className='px-6 py-4'>
				<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
					#photography
				</span>
				<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
					#travel
				</span>
				<span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700'>
					#winter
				</span>
			</div>
		</div>
	);
};

export default Postcard;

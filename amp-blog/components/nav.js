import React from 'react';
import Link from 'next/link';

const links = [
	{ href: 'https://zeit.co/now', label: 'ZEIT' },
	{ href: 'https://github.com/zeit/next.js', label: 'GitHub' }
].map((link) => {
	link.key = `nav-link-${link.href}-${link.label}`;
	return link;
});

const Nav = () => (
	<header className='header'>
		<h1 className='header__title text-center'>Blogs</h1>
	</header>
);

export default Nav;

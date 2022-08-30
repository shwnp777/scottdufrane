import React from 'react';
import { Link } from 'react-scroll';
import { ArrowUpOutlined } from '@ant-design/icons';

const BacktoTop = () => {
	return (
		<Link
			to='landNav'
			className='toTop'
			spy={true}
			smooth={true}
			duration={500}
		>
			<ArrowUpOutlined />
		</Link>
	);
};

export default BacktoTop;

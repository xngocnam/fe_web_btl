import { AreaChartOutlined } from '@ant-design/icons';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { Graduate, List, Worker } from '../../assests/icons';
import NewsContainer from '../introNews/NewsContainer';

type Props = {};

const PaginationUtility: FC<Props> = () => {
	const dataUtiliity = [
		{
			path: '/',
			Icon: <AreaChartOutlined className='color-main ' />,
			text: 'Review khu vực',
		},
		{
			path: '/',
			Icon: <Graduate />,
			text: 'Phòng trọ gần trường',
		},
		{
			path: '/',
			Icon: <Worker />,
			text: 'Phòng trọ công nhân',
		},
		{
			path: '/',
			Icon: <List color='#7e00c2' />,
			text: 'Các bước thuê trọ',
		},
		{
			path: '/',
			Icon: <List color='#00abc2' />,
			text: 'Hướng dẫn đăng ký tài khoản',
		},
	];
	return (
		<NewsContainer title='Tiện tích từ chúng tôi'>
			<div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3'>
				{dataUtiliity &&
					!!dataUtiliity.length &&
					dataUtiliity.map(({ path, Icon, text }, index) => (
						<Link
							key={index}
							to={path}
							className='shadow-006 rounded-lg h-[6rem] p-3 flex flex-col justify-between items-baseline'
						>
							{Icon} <p className='font-semibold'>{text}</p>
						</Link>
					))}
			</div>
		</NewsContainer>
	);
};

export default PaginationUtility;

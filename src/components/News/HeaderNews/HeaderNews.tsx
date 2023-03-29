import { CaretDownOutlined, MenuOutlined, RightOutlined, SearchOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './header-news.module.scss';

import { ITopicNewsData } from '@/types/components/News/types';
import { getImage } from '@/utils/CustomImagePath';
const cx = classNames.bind(styles);

type Props = {};
const topicNewsData: ITopicNewsData[] = [
	{
		to: '/news',
		topic: 'Tin tức bds',
		child: [
			{ to: '/news', title: 'Thị trường nhà đất' },
			{ to: '/news', title: 'Tài chính BĐS' },
			{ to: '/news', title: 'Phân tích - nhận định' },
		],
	},
	{
		to: '/news',
		topic: 'Kiến thức bds',
		child: [
			{ to: '/news', title: 'Xây dựng' },
			{ to: '/news', title: 'Kiến trúc' },
			{ to: '/news', title: 'Nhà của sao' },
		],
	},
	{ to: '/news', topic: 'Phong thuỷ', child: [] },
	{
		to: '/news',
		topic: 'Lời khuyên',
		child: [
			{ to: '/news', title: 'Góc đầu tư' },
			{ to: '/news', title: 'Cho người thuê' },
		],
	},
	{
		to: '/news',
		topic: 'luật nhà đất',
		child: [
			{ to: '/news', title: 'Quyền sở hữu' },
			{ to: '/news', title: 'Tranh chấp' },
			{ to: '/news', title: 'Nghĩa vụ tài chính' },
		],
	},
];

const HeaderNews: FC<Props> = () => {
	const [selectTopic, setSelectTopic] = useState('');
	const [showSearch, setShowSearch] = useState(false);
	const isLg = window.innerWidth >= 1024;

	const handleSearchNews = () => {
		setShowSearch(!showSearch);
	};

	useEffect(() => {
		if (!showSearch) {
			return;
		}
		function handleScroll() {
			if (window.scrollY > 200) {
				setShowSearch(false);
			}
		}
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [showSearch]);

	return (
		<div className='px-8 pt-2 flex flex-col relative'>
			<div className='mb-4 lg:w-fit flex items-center justify-between w-full'>
				<div className='text-[2rem] color-main cursor-pointer lg:hidden inline-block'>
					<MenuOutlined />
				</div>
				<a href='/'>
					<img
						src={getImage('branch.png')}
						alt='branch'
						className='h-32 w-48 object-fill object-center'
					/>
				</a>
				<div className='text-[2rem] color-main cursor-pointer lg:hidden inline-block'>
					<SearchOutlined />
				</div>
			</div>

			{isLg && (
				<div className='relative w-fit lg:block hidden'>
					<ul className='flex items-center'>
						{topicNewsData.map((t) => (
							<li
								className={`${cx('topic')} w-fit h-12 px-4 relative`}
								key={t.topic}
							>
								<Link
									to={t.to}
									className={`${cx('head-topic', {
										active: selectTopic === t.topic,
									})} flex items-center h-full leading-[48px] align-middle relative`}
									onClick={() => setSelectTopic(t.topic)}
								>
									<span className='mr-2 font-bold text-base uppercase font-[system-ui]'>
										{t.topic}
									</span>{' '}
									{!!t.child.length && <CaretDownOutlined />}
								</Link>
								<ul className='absolute top-12 bg-white w-fit shadow-cs-sm-0 text-sm'>
									{!!t.child.length &&
										t.child.map((tc, index) => (
											<li
												key={index}
												className='hover:color-main cursor-pointer py-2 px-6'
											>
												<Link
													to='/'
													className='whitespace-nowrap'
												>
													{tc.title}
												</Link>
											</li>
										))}
								</ul>
							</li>
						))}
						<li
							className='text-[22px] cursor-pointer px-4'
							onClick={handleSearchNews}
						>
							<SearchOutlined />
						</li>
					</ul>
					<div
						className={`lg:block hidden absolute bg-white px-6 py-4 w-[600px] ${
							showSearch ? 'top-[48px] opacity-100' : 'top-[70px] opacity-0'
						} -right-[14px]  shadow-sm-cs-0360`}
					>
						<form
							action=''
							className='border-b border-solid border-0'
						>
							<div className='flex items-center'>
								<input
									type='text'
									className='flex-1 input-none'
								/>
								<button className='flex items-center text-xs'>
									<span className='uppercase mr-2 hover:color-main'>tìm kiếm</span>
									<RightOutlined />
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default HeaderNews;
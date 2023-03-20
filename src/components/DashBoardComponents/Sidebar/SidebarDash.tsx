import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import styles from './sidebar-dash.module.scss';

import Bar from '@/components/helpers/Bar';
import { IBar } from '@/types/pages/IDashBoard';
import { getImage } from '@/utils/CustomImagePath';

const cx = classNames.bind(styles);

const SidebarDash: FC<IBar> = ({ showSidebar, handleToggleShowSidebar }) => {
	return (
		<nav
			className={`${cx('sidebar_dash', {
				expanded: showSidebar,
			})} pt-8 px-4 fixed select-none flex flex-col bottom-0 left-0 top-0 z-[100000] bg-white`}
		>
			<div>
				<div className='flex items-center lg:justify-between justify-center mb-6'>
					<Link to='/'>
						<img
							src={getImage('branch.jpg')}
							alt='branch'
							className='object-contain object-center w-28 h-16'
						/>
					</Link>
					<Bar
						classSvg={showSidebar ? cx('run') : ''}
						handleToggleShowSidebar={handleToggleShowSidebar}
						className={`${cx(
							'header_bar',
						)} flex-col items-center cursor-pointer p-3 lg:flex hidden`}
					/>
				</div>
				<ul>
					<li>
						<NavLink
							to='/dash-board/'
							className={({ isActive }) => (isActive ? cx('active') : '')}
						>
							<HomeOutlined
								title='Bảng điều khiển'
								style={{ color: '#c310c3' }}
							/>{' '}
							<p
								className={`${cx('text', {
									unshow: showSidebar,
								})} whitespace-nowrap overflow-hidden`}
							>
								Bảng điều khiển
							</p>
						</NavLink>
					</li>
					<li>
						<NavLink
							to='/dash-board/profile'
							className={({ isActive }) => (isActive ? cx('active') : '')}
						>
							<UserOutlined
								title='Thông tin tài khoản'
								style={{ color: '#c3ab00' }}
							/>{' '}
							<p
								className={`${cx('text', {
									unshow: showSidebar,
								})} whitespace-nowrap overflow-hidden`}
							>
								Thông tin tài khoản
							</p>
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default SidebarDash;
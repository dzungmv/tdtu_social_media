import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHome,
	faPaperPlane,
	faSearch,
	faBell,
	faKey,
	faCircleQuestion,
	faArrowRightFromBracket,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import Tippy from '@tippyjs/react';
import TippyHeadless from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { useEffect, useState } from 'react';

import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import logo from '~/assets/icons/logo.png';
import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
	{
		icon: <FontAwesomeIcon icon={faUser} />,
		title: 'View profile',
	},
	{
		icon: <FontAwesomeIcon icon={faKey} />,
		title: 'Change password',
	},
	{
		icon: <FontAwesomeIcon icon={faCircleQuestion} />,
		title: 'Feedback and help',
	},
	{
		icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
		title: 'Log out',
		to: '/login',
		separate: true,
	},
];

function Header({ active }) {
	const [searchResult, setsearchResult] = useState([]);

	useEffect(() => {
		setTimeout(() => {
			setsearchResult([]);
		}, 0);
	}, []);

	return (
		<header className={cx('wrapper')}>
			<div className={cx('logo')}>
				<a href='/'>
					<img className={cx('logo__img')} src={logo} alt='TDT' />
				</a>
				<TippyHeadless
					interactive
					visible={searchResult.length > 0}
					render={(attrs) => (
						<PopperWrapper>
							<div className={cx('search__result')} tabIndex='-1' {...attrs}>
								<h4 className={cx('search__result-title')}>Account</h4>
								<AccountItem />
								<AccountItem />
								<AccountItem />
								<AccountItem />
							</div>
						</PopperWrapper>
					)}
				>
					<div className={cx('search')}>
						<FontAwesomeIcon className={cx('search__logo')} icon={faSearch} />
						<input
							className={cx('search__input')}
							placeholder='Search something...'
						/>
					</div>
				</TippyHeadless>
			</div>

			<ul className={cx('control')}>
				<a href='/'>
					<li className={cx('control__item', { active })}>
						<FontAwesomeIcon icon={faHome} />
					</li>
				</a>
				<li className={cx('control__item')}>
					<FontAwesomeIcon icon={faAccusoft} />
				</li>
			</ul>

			<div className={cx('action')}>
				<button className={cx('action__btn', 'control__noti')}>
					<FontAwesomeIcon icon={faBell} />
					<span className={cx('control__count')}>69</span>
				</button>

				<Tippy content='Messenger' placement='bottom' delay={[0, 200]}>
					<button className={cx('action__btn', 'control__messenger')}>
						<FontAwesomeIcon icon={faPaperPlane} />
						<span className={cx('control__count')}>12</span>
					</button>
				</Tippy>
				<Menu items={MENU_ITEMS}>
					<Image
						className={cx('action__personal-avatar')}
						src={''}
						alt='avatar'
					/>
				</Menu>
			</div>
		</header>
	);
}

export default Header;

import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import {
	faHome,
	faPaperPlane,
	faBell,
	faKey,
	faCircleQuestion,
	faArrowRightFromBracket,
	faUser,
} from '@fortawesome/free-solid-svg-icons';

import routesConfig from '~/config/routes';
import styles from './Header.module.scss';
import logo from '~/assets/icons/logo.png';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';

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
		to: routesConfig.login,
		separate: true,
	},
];

function Header({ active }) {
	return (
		<header className={cx('wrapper')}>
			<div className={cx('logo')}>
				<Link to={routesConfig.home}>
					<img className={cx('logo__img')} src={logo} alt='TDT' />
				</Link>

				<Search />
			</div>

			<ul className={cx('control')}>
				<Link to={routesConfig.home}>
					<li className={cx('control__item', { active })}>
						<FontAwesomeIcon icon={faHome} />
					</li>
				</Link>
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

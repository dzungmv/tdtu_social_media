import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/perspective.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	faPaperPlane,
	faBell,
	faKey,
	faCircleQuestion,
	faArrowRightFromBracket,
	faUser,
} from '@fortawesome/free-solid-svg-icons';

import config from '~/config';
import styles from './Header.module.scss';
import logo from '~/assets/icons/logo.png';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import Search from '../Search';
import Control from '../Control';

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
		to: config.routes.login,
		separate: true,
	},
];

function Header() {
	return (
		<header className={cx('wrapper')}>
			<div className={cx('logo')}>
				<Link to={config.routes.home}>
					<img className={cx('logo__img')} src={logo} alt='TDT' />
				</Link>

				<Search />
			</div>

			<Control active />

			<div className={cx('action')}>
				<button className={cx('action__btn', 'action__noti')}>
					<FontAwesomeIcon icon={faBell} />
					<span className={cx('action__count')}>69</span>
				</button>

				<Tippy
					content='Messenger'
					placement='bottom'
					delay={[0, 150]}
					animation='perspective'
				>
					<button className={cx('action__btn', 'action__messenger')}>
						<FontAwesomeIcon icon={faPaperPlane} />
						<span className={cx('action__count')}>12</span>
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

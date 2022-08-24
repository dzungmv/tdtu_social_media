import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { useEffect, useState } from 'react';

import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import logo from '~/assets/icons/logo.png';
import avatar from '~/assets/images/avatar.jpg';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

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
				<Tippy
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
				</Tippy>
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

			<div className={cx('actions')}>
				<Tippy
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
					<div className={cx('actions__personal')}>
						<img
							className={cx('actions__personal-avatar')}
							src={avatar}
							alt='avatar'
						/>
					</div>
				</Tippy>
			</div>
		</header>
	);
}

export default Header;

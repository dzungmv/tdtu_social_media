import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import config from '~/config';
import styles from './Control.module.scss';

const cx = classNames.bind(styles);

function Control({ active }) {
	return (
		<ul className={cx('control')}>
			<Link to={config.routes.home}>
				<Tippy
					content='Home'
					delay={[0, 150]}
					placement='bottom'
					animation='perspective'
				>
					<li className={cx('control__item', { active })}>
						<FontAwesomeIcon icon={faHome} />
					</li>
				</Tippy>
			</Link>
			<li className={cx('control__item')}>
				<FontAwesomeIcon icon={faAccusoft} />
			</li>
		</ul>
	);
}

export default Control;

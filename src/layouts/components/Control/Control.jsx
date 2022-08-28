import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import config from '~/config';
import styles from './Control.module.scss';
import Menu, { MenuItem } from '../Menu';

const cx = classNames.bind(styles);

function Control({ active }) {
	return (
		<div className={cx('wrapper')}>
			<Menu>
				<MenuItem
					to={config.routes.home}
					icon={<FontAwesomeIcon icon={faHome} />}
				/>

				<MenuItem
					to={config.routes.study}
					icon={<FontAwesomeIcon icon={faAccusoft} />}
				/>
			</Menu>
		</div>
	);
}

export default Control;

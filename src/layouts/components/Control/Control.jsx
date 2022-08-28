import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAccusoft } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

import config from '~/config';
import styles from './Control.module.scss';
import Menu, { MenuItem } from '../Menu';

const cx = classNames.bind(styles);

function Control() {
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

				<MenuItem
					to={config.routes.group}
					icon={<FontAwesomeIcon icon={faHome} />}
				/>
			</Menu>
		</div>
	);
}

export default Control;

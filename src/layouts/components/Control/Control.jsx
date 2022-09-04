import classNames from 'classnames/bind';

import config from '~/config';
import styles from './Control.module.scss';
import Menu, { MenuItem } from '../Menu';

const cx = classNames.bind(styles);

function Control() {
	return (
		<div className={cx('wrapper')}>
			<Menu>
				<MenuItem to={config.routes.home} icon={cx('fas', 'fa-home-alt')} />
				<MenuItem
					to={config.routes.study}
					icon={cx('fa-duotone', 'fa-graduation-cap')}
				/>

				<MenuItem to={config.routes.group} icon={cx('fas', 'fa-users')} />
			</Menu>
		</div>
	);
}

export default Control;

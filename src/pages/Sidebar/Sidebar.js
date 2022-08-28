import Menu, { MenuItem } from './Menu';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import config from '~/config';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const customImg = {
	width: 35,
	height: 35,
	borderRadius: 50,
	objectFit: 'contain',
};

function Sidebar() {
	return (
		<aside className={cx('wrapper')}>
			<Menu>
				<MenuItem
					title='Ton Duc Thang'
					to={config.routes.profile}
					icon={<Image src='' style={customImg} alt='avatar' />}
				/>
			</Menu>

			<Menu>
				<MenuItem
					title='Ton Duc Thang'
					to={config.routes.profile}
					icon={<Image src='' style={customImg} alt='avatar' />}
				/>
			</Menu>

			<Menu>
				<MenuItem
					title='Ton Duc Thang'
					to={config.routes.profile}
					icon={<Image src='' style={customImg} alt='avatar' />}
				/>
			</Menu>
		</aside>
	);
}

export default Sidebar;

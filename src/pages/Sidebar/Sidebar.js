import Menu, { MenuItem } from './Menu';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Image from '~/components/Image';

import chatbot from '~/assets/icons/chatbot.png';
import friends from '~/assets/icons/friends.png';

const cx = classNames.bind(styles);

const customImg = {
	width: '100%',
	height: '100%',
	borderRadius: '50%',
	objectFit: 'contain',
};

const customIcon = {
	width: '100%',
	height: '100%',
	objectFit: 'cover',
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
					title='Friends'
					to={config.routes.friends}
					icon={<img src={friends} style={customIcon} alt='friends' />}
				/>
			</Menu>

			<Menu>
				<MenuItem
					title='Smart assistant'
					to={config.routes.chatbot}
					icon={<img src={chatbot} style={customIcon} alt='chatbot' />}
				/>
			</Menu>
			{/* <FontAwesomeIcon icon={faMailchimp} /> */}
		</aside>
	);
}

export default Sidebar;

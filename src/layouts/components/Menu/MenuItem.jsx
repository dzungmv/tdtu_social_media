import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ to, icon }) {
	return (
		<NavLink
			className={(nav) => cx('menu-item', { active: nav.isActive })}
			to={to}
		>
			{icon}
		</NavLink>
	);
}

MenuItem.propTypes = {
	to: PropTypes.string.isRequired,
	icon: PropTypes.node.isRequired,
};

export default MenuItem;

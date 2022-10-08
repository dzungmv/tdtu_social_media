import classNames from 'classnames/bind';

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
                    icon={cx('fal', 'fa-home-alt')}
                />
                <MenuItem
                    to={config.routes.study}
                    icon={cx('fa-light', 'fa-graduation-cap')}
                />

                <MenuItem
                    to={config.routes.group}
                    icon={cx('fal', 'fa-users')}
                />
            </Menu>
        </div>
    );
}

export default Control;

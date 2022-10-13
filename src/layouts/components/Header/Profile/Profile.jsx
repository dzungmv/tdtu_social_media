import { useRef } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/themes/light.css';

import Image from '~/components/Image';
import styles from './Profile.module.scss';
import Tooltipes from './Tooltipes';

const cx = classNames.bind(styles);

function Profile() {
    const nodeRef = useRef(null);
    return (
        <div className={cx('wrapper')}>
            <Tippy
                ref={nodeRef}
                content={<Tooltipes nodeRef={nodeRef} />}
                trigger='click'
                placement='bottom-start'
                interactive
                arrow
                animation='scale'
                theme='light'
            >
                <div className={cx('avatar__wrapper')}>
                    <Image className={cx('avatar')} src='' />
                </div>
            </Tippy>
        </div>
    );
}

export default Profile;

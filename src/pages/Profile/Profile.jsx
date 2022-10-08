import { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './Profile.module.scss';
import Header from './Header';
import BodyContent from './Body';

const cx = classNames.bind(styles);

// const useMouseEffect = (state) => useEffect(state, [state]);

function Profile() {
    //* Scroll to Rating
    // const ratingRef = useRef(null);
    // const exeScrollRating = () => ratingRef.current.scrollIntoView();
    // useMouseEffect(exeScrollRating);

    useEffect(() => {
        document.title = `Ton Duc Thang`;
    });
    return (
        <div className={cx('wrapper')}>
            <Header />
            <BodyContent />
        </div>
    );
}

export default Profile;

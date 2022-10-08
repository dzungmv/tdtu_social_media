import classNames from 'classnames/bind';

import styles from './Newfeed.module.scss';
import CreatePost from './CreatePost';
import Post from '~/components/Post';
import catlofi from '~/assets/images/post-image.webp';

const cx = classNames.bind(styles);

const fakeData = [
    {
        id: 1,
        avatar: '',
        name: 'Ton Duc Thang',
        faculty: 'Information Technology',
        caption:
            'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content',
        photo: null,
        likeCount: 12,
        commentCount: 0,
        commentContent:
            'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
    },
    {
        id: 2,
        avatar: '',
        name: 'Alexander Viktor',
        faculty: 'Information Technology',
        caption: null,
        photo: [catlofi],
        likeCount: 1,
        commentCount: 2,
        commentContent:
            'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
    },
    {
        id: 3,
        avatar: '',
        name: 'Mokota',
        faculty: 'Information Technology',
        caption: 'In publishing and graphic design',
        photo: [catlofi, catlofi],
        likeCount: 19,
        commentCount: 15,
        commentContent:
            'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
    },
    {
        id: 4,
        avatar: '',
        name: 'Ton Duc Thang',
        faculty: 'Information Technology',
        caption: 'In publishing and s design',
        photo: [catlofi, catlofi, catlofi],
        likeCount: 12,
        commentCount: 12,
        commentContent:
            'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
    },
    {
        id: 5,
        avatar: '',
        name: 'Lee Chong Wei',
        faculty: 'Information Technology',
        caption: 'In publishing and graphic design',
        photo: [catlofi, catlofi, catlofi, catlofi],
        likeCount: 12,
        commentCount: 12,
        commentContent: null,
    },
    {
        id: 6,
        avatar: '',
        name: 'Lee Shine',
        faculty: 'Information Technology',
        caption: 'In publishing and graphic design',
        photo: [catlofi, catlofi, catlofi, catlofi, catlofi, catlofi],
        likeCount: 12,
        commentCount: 12,
        commentContent: null,
    },
];

function Newfeed() {
    return (
        <div className={cx('wrapper')}>
            <CreatePost />

            <div>
                {fakeData.map((data, index) => {
                    return (
                        <div key={index} className={cx('post__container')}>
                            <Post
                                key={data.id}
                                avatar={data.avatar}
                                name={data.name}
                                faculty={data.faculty}
                                caption={data.caption}
                                photo={data.photo}
                                likeCount={data.likeCount}
                                commentCount={data.commentCount}
                                commentContent={data.commentContent}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Newfeed;

import classNames from 'classnames/bind';

import Notifications from './Notifications';
import styles from './SchoolNotification.module.scss';

const cx = classNames.bind(styles);

const fakeData = [
	{
		id: 1,
		title: 'Khai giảng các khóa ngắn hạn',
		time: '01/09/2022',
	},
	{
		id: 2,
		title: 'Thông báo chiêu sinh khóa "Chuyên viên nhân sự " tháng 09/2022',
		time: '31/08/2022',
	},
	{
		id: 3,
		title: 'Nội dung sinh hoạt chủ nhiệm tháng 9/2022',
		time: '30/08/2022',
	},
	{
		id: 4,
		title:
			'KẾT QUẢ XÉT HỌC VỤ CÔNG NHẬN SINH VIÊN TỐT NGHIỆP THÁNG 09/2022 - ĐỢT 1',
		time: '29/08/2022',
	},
	{
		id: 5,
		title: 'Đăng ký tham gia tập đồng diễn ngày hội truyền thống sinh viên',
		time: '28/08/2022',
	},
	{
		id: 6,
		title: 'Đăng ký tham gia tập đồng diễn ngày hội truyền thống sinh viên',
		time: '28/08/2022',
	},
];

function SchoolNotification() {
	return (
		<div className={cx('wrapper')}>
			<div className={cx('heading')}>
				<span className={cx('title')}>School notifications</span>
				<span className={cx('see-all')}>See all</span>
			</div>

			{fakeData.map((data, index) => {
				return index < 5 ? (
					<Notifications key={data.id} title={data.title} time={data.time} />
				) : null;
			})}
		</div>
	);
}

export default SchoolNotification;

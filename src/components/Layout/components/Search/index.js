import { useEffect, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setsearchResult] = useState([]);
	const [showResult, setShowResult] = useState(true);

	useEffect(() => {
		if (!searchValue.trim()) {
			return;
		}
		fetch(
			`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
				searchValue
			)}&type=less`
		)
			.then((res) => res.json())
			.then((res) => setsearchResult(res.data));
	}, [searchValue]);

	const handleHideResult = () => {
		setShowResult(false);
	};

	return (
		<TippyHeadless
			interactive
			visible={showResult && searchResult.length > 0}
			onClickOutside={handleHideResult}
			render={(attrs) => (
				<PopperWrapper>
					<div className={cx('search__result')} tabIndex='-1' {...attrs}>
						<h4 className={cx('search__result-title')}>Account</h4>
						{searchResult.map((result) => {
							return <AccountItem key={result.id} data={result} />;
						})}
					</div>
				</PopperWrapper>
			)}
		>
			<div className={cx('search')}>
				{!!searchValue || (
					<FontAwesomeIcon className={cx('search__logo')} icon={faSearch} />
				)}

				<input
					value={searchValue}
					className={cx('search__input')}
					placeholder='Search something...'
					onChange={(e) => setSearchValue(e.target.value)}
					onFocus={() => setShowResult(true)}
				/>
			</div>
		</TippyHeadless>
	);
}

export default Search;

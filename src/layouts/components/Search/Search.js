import { useEffect, useState } from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDebounce } from '~/hooks';
import classNames from 'classnames/bind';

import { search } from '~/services/searchService';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setsearchResult] = useState([]);
	const [showResult, setShowResult] = useState(true);

	const debounce = useDebounce(searchValue, 500);

	useEffect(() => {
		if (!debounce.trim()) {
			return;
		}

		const fetchApi = async () => {
			const result = await search(debounce);
			setsearchResult(result);
		};

		fetchApi();
	}, [debounce]);

	const handleHideResult = () => {
		setShowResult(false);
	};

	const handleChange = (e) => {
		const searchValueTo = e.target.value;
		if (!searchValueTo.startsWith(' ')) {
			setSearchValue(searchValueTo);
		}
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
					onChange={handleChange}
					onFocus={() => setShowResult(true)}
				/>
			</div>
		</TippyHeadless>
	);
}

export default Search;

import styles from "./searchInput.module.scss";
import type { SearchInputProps } from "./searchInput.type";

function SearchInput(props: SearchInputProps) {
	const { data, style, isDisabled, onClick, isActive } = props;
	const inputClickHandle = (e: React.FormEvent<HTMLInputElement>) => {
		(e.target as HTMLInputElement).select();
	};
	const inputChangeHandle = (e: React.FormEvent<HTMLInputElement>) => {
		data.setValue((e.target as HTMLInputElement).value);
	};
	return (
		<form className={styles.searchInput}>
			<section className={styles.section}>
				<input onClick={inputClickHandle} onChange={inputChangeHandle} className={styles.input} type="search" placeholder="Enter Pokemon" aria-label="Pokemon" />
				<button className={styles.button} type="button">
					Search
				</button>
			</section>
		</form>
	);
}

export default SearchInput;

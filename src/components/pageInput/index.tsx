import { Dispatch, SetStateAction } from "react";
import styles from "./pageInput.module.scss";
import font from "src/utils/theme/font.module.scss";

interface PageInputProps {
	setPage: (page: number) => void;
	currentPage: number;
	maxNumber: number;
	inputPage: number;
	setInputPage: Dispatch<SetStateAction<number>>;
	isLoading: boolean;
}

function PageInput(props: PageInputProps) {
	const { setPage, currentPage, maxNumber, inputPage, setInputPage, isLoading } = props;
	const limitValue = (page: number, maxNumber: number) => {
		if (page < 1) {
			setInputPage(1);
		} else if (page > maxNumber) {
			setInputPage(maxNumber);
		} else {
			setInputPage(page);
		}
	};
	const onChangeHandle = (e: any) => {
		const page = Number((e.target as HTMLInputElement).value);
		limitValue(page, maxNumber);
	};
	return (
		<div className={styles.pageInputSection}>
			<div className={font.h5}>Jump To:</div>
			<div className={styles.pageInput}>
				<section className={styles.section}>
					<input onSubmit={() => null} onChange={onChangeHandle} className={styles.input} type="number" min={1} max={maxNumber} value={inputPage.toString()} aria-label="Pokemon" />
				</section>
			</div>
			<button className="bg-orange-400 disabled:bg-orange-100 hover:bg-orange-500 active:bg-orange-200 focus:outline-none focus:ring focus:ring-orange-700 px-[12px] py-[4px] text-white font-semibold rounded-xl" onClick={() => setPage(inputPage)} disabled={isLoading}>
				GO
			</button>
		</div>
	);
}

export default PageInput;

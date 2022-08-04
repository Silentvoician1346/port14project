import styles from "./loading.module.scss";

function LoadingScreen() {
	return (
		<div className={styles.disabledMain}>
			<div className={styles.section}>
				<div className={styles.disabledFont}>Loading...</div>
			</div>
		</div>
	);
}

export default LoadingScreen;

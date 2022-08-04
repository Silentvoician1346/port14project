import styles from "./pokemonCardDetail.module.scss";
import font from "src/utils/theme/font.module.scss";
import ElementBlock from "src/components/elementBlock";
import type { PokemonCardProps } from "src/components/pokemonCard/pokemonCard.type";

function PokemonCardDetail(props: PokemonCardProps) {
	const { data, close } = props;

	return (
		<section className={styles.pokemonCardDetailSection}>
			<div onClick={() => close(false)} className={styles.background} />
			<div className={styles.pokemonCardDetail}>
				<div className={styles.firstBlock}>
					<img className={styles.image} src={data.image} alt={data.name} width={400} height={400} />
				</div>
				<div className={styles.secondBlock}>
					<div className={styles.leftBlock}>
						<div className={font.h2b}>No. {data.id}</div>
						<div className={font.h2}>{data.name}</div>
						<div className={styles.elementRow}>
							{data.elements.map((el) => (
								<ElementBlock value={el.type.name} key={el.slot} />
							))}
						</div>
					</div>
					<div className={styles.rightBlock}>
						{data.status.map((stat) => (
							<div className={styles.statusRow}>
								<div className={font.h4}>{stat.name}</div>
								<div className={font.h4}>{stat.value}</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default PokemonCardDetail;

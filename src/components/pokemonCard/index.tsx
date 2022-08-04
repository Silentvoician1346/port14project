import styles from "./pokemonCard.module.scss";
import font from "src/utils/theme/font.module.scss";
import ElementBlock from "src/components/elementBlock";
import type { PokemonCardProps } from "./pokemonCard.type";

function PokemonCard(props: PokemonCardProps) {
	const { data } = props;

	return (
		<section>
			<div className={styles.pokemonCard}>
				<div className={styles.firstBlock}>
					<img className={styles.image} src={data.image} alt={data.name} />
				</div>
				<div className={styles.secondBlock}>
					<div className={font.h4b}>{data.id}</div>
					<div className={font.h5}>{data.name}</div>
					<div className={styles.elementRow}>
						{data.elements.map((el) => (
							<ElementBlock value={el.type.name} key={el.slot} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default PokemonCard;

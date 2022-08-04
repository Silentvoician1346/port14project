import font from "src/utils/theme/font.module.scss";
import styles from "src/components/pokemonCard/pokemonCard.module.scss";

interface ElementBlockProps {
	value: string;
}

const elements = (element: string) => {
	switch (element) {
		case "normal":
			return <div className="bg-[#A8A878] border-t-[#D8D8D0] border-b-[#705848] text-white px-2 rounded-md">{element}</div>;
		case "fire":
			return <div className="bg-[#F08030] border-t-[#F8D030] border-b-[#C03028] text-white px-2 rounded-md">{element}</div>;
		case "water":
			return <div className="bg-[#6890F0] border-t-[#98D8D8] border-b-[#807870] text-white px-2 rounded-md">{element}</div>;
		case "grass":
			return <div className="bg-[#78C850] border-t-[#C0F860] border-b-[#588040] text-white px-2 rounded-md">{element}</div>;
		case "electric":
			return <div className="bg-[#F8D030] border-t-[#F8F878] border-b-[#B8A038] text-white px-2 rounded-md">{element}</div>;
		case "ice":
			return <div className="bg-[#98D8D8] border-t-[#D0F8E8] border-b-[#9090A0] text-white px-2 rounded-md">{element}</div>;
		case "fighting":
			return <div className="bg-[#C03028] border-t-[#F08030] border-b-[#484038] text-white px-2 rounded-md">{element}</div>;
		case "poison":
			return <div className="bg-[#A040A0] border-t-[#D880B8] border-b-[#483850] text-white px-2 rounded-md">{element}</div>;
		case "ground":
			return <div className="bg-[#E0C068] border-t-[#F8F878] border-b-[#886830] text-white px-2 rounded-md">{element}</div>;
		case "flying":
			return <div className="bg-[#A890F0] border-t-[#C8C0F8] border-b-[#705898] text-white px-2 rounded-md">{element}</div>;
		case "psychic":
			return <div className="bg-[#F85888] border-t-[#F8C0B0] border-b-[#789010] text-white px-2 rounded-md">{element}</div>;
		case "bug":
			return <div className="bg-[#A8B820] border-t-[#D8E030] border-b-[#A8B820] text-white px-2 rounded-md">{element}</div>;
		case "rock":
			return <div className="bg-[#B8A038] border-t-[#E0C068] border-b-[#886830] text-white px-2 rounded-md">{element}</div>;
		case "ghost":
			return <div className="bg-[#705898] border-t-[#A890F0] border-b-[#483850] text-white px-2 rounded-md">{element}</div>;
		case "dark":
			return <div className="bg-[#705848] border-t-[#A8A878] border-b-[#484038] text-white px-2 rounded-md">{element}</div>;
		case "dragon":
			return <div className="bg-[#7038F8] border-t-[#B8A0F8] border-b-[#483890] text-white px-2 rounded-md">{element}</div>;
		case "steel":
			return <div className="bg-[#B8B8D0] border-t-[#D8D8C0] border-b-[#807870] text-white px-2 rounded-md">{element}</div>;
		case "fairy":
			return <div className="bg-[#F0B6BC] border-t-[#F5CAD1] border-b-[#905F63] text-white px-2 rounded-md">{element}</div>;
	}
};

function ElementBlock(props: ElementBlockProps) {
	const { value } = props;
	return <div className={styles.element}>{elements(value)}</div>;
}

export default ElementBlock;

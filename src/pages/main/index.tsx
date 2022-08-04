import { useState, useEffect } from "react";
import SearchInput from "src/components/searchInput";
import LoadingScreen from "src/handlers/loading";
import PokemonCard from "src/components/pokemonCard";
import PageInput from "src/components/pageInput";
import { defaultPokemonDetail } from "./main.constant";
import PokemonCardDetail from "src/components/pokemonCardDetail";
import font from "src/utils/theme/font.module.scss";
import styles from "./main.module.scss";
import { searchHandle, checkPage } from "./main.logic";
import type { PokemonDetailsProps } from "src/services/pokemon.type";

function Main() {
	const [searchResult, setSearchResult] = useState<PokemonDetailsProps[]>([]);
	const [searchValue, setSearchValue] = useState<string>("");
	const [maxPage, setMaxPage] = useState<number>(1);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [inputPage, setInputPage] = useState<number>(1);
	const [isFirstPage, setIsFirstPage] = useState<boolean>(true);
	const [isLastPage, setIsLastPage] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [isCardDetail, setIsCardDetail] = useState<boolean>(false);
	const [cardContent, setCardContent] = useState<PokemonDetailsProps>(defaultPokemonDetail);

	const changePageHandle = (page: number) => {
		setCurrentPage(page);
		setInputPage(page);
	};
	const prevHandle = () => {
		setCurrentPage((currentPage) => currentPage - 1);
	};
	const nextHandle = () => {
		setCurrentPage((currentPage) => currentPage + 1);
	};

	const clickCardHandle = (data: PokemonDetailsProps) => {
		setCardContent(data);
		setIsCardDetail(true);
	};

	useEffect(() => {
		searchHandle(setIsFirstPage, setIsLastPage, setIsLoading, currentPage, setMaxPage, setSearchResult, checkPage);
	}, [currentPage]);

	return (
		<div className={styles.container}>
			{isLoading ? <LoadingScreen /> : null}
			{isCardDetail ? <PokemonCardDetail data={cardContent} close={setIsCardDetail} /> : null}
			<main className={styles.main}>
				<header className={styles.header}>
					<div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-700 text-[60px] font-bold italic">Ndrian PokeDex</div>
				</header>
				<div className={styles.content}>
					<section className={styles.searchSection}>
						{/* <div>
							<SearchInput data={{ value: searchValue, setValue: setSearchValue }} />
						</div> */}
						<button className="bg-blue-400 disabled:bg-blue-100 hover:bg-blue-500 active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-700 px-[36px] my-[12px] text-white font-semibold rounded-xl" onClick={nextHandle} disabled={isLastPage || isLoading}>
							next
						</button>
						<div className="flex my-auto ">
							<div className={font.h5}>{currentPage}</div>
							<div className={font.h5}>/</div>
							<div className={font.h5}>{maxPage}</div>
						</div>
						<button className="bg-blue-400 disabled:bg-blue-100 hover:bg-blue-500 active:bg-blue-200 focus:outline-none focus:ring focus:ring-blue-700 px-[36px] my-[12px] text-white font-semibold rounded-xl" onClick={prevHandle} disabled={isFirstPage || isLoading}>
							prev
						</button>
						<PageInput setPage={changePageHandle} currentPage={currentPage} maxNumber={maxPage} setInputPage={setInputPage} inputPage={inputPage} isLoading={isLoading} />
					</section>
					<div className="grid grid-cols-8  m-4">
						{searchResult.map((data: PokemonDetailsProps) => (
							<div onClick={() => clickCardHandle(data)}>
								<PokemonCard data={data} key={data.id} close={() => null} />
							</div>
						))}
					</div>
				</div>
				<div>{currentPage}</div>
			</main>
		</div>
	);
}

export default Main;

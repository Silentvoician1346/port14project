import { useState, useEffect } from "react";
import SearchInput from "src/components/searchInput";
import PokemonCard from "src/components/pokemonCard";
import styles from "./main.module.scss";
import { getPokemonList, getPokemoDetails } from "src/services/pokemon";
import type { PokemonDetailsProps } from "src/services/pokemon.type";

function Main() {
	const [searchResult, setSearchResult] = useState<PokemonDetailsProps[]>([]);
	const [searchValue, setSearchValue] = useState<string>("");
	const [currentPage, setCurrentPage] = useState<number>(0);
	const [isFirstPage, setIsFirstPage] = useState<boolean>(true);
	const [isLastPage, setIsLastPage] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const searchHandle = async () => {
		setIsLoading(true);
		const { results, count, next, previous } = await getPokemonList(currentPage);
		const searchResult = await getPokemoDetails(results);
		setSearchResult(searchResult);
		checkPage(next, previous);
		setIsLoading(false);
	};
	const prevHandle = async () => {
		setCurrentPage((currentPage) => currentPage - 1);
	};
	const nextHandle = async () => {
		setCurrentPage((currentPage) => currentPage + 1);
	};
	const checkPage = (next: string | null, previous: string | null) => {
		if (previous === null) {
			setIsFirstPage(true);
			console.log("FIRST");
		} else if (next === null) {
			setIsLastPage(true);
			console.log("LAST");
		} else {
			setIsFirstPage(false);
			setIsLastPage(false);
			console.log("MID");
		}
	};
	useEffect(() => {
		searchHandle();
	}, [currentPage]);

	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<header className={styles.header}>PokeDex</header>
				<div className={styles.content}>
					<section className={styles.searchSection}>
						<div>
							<SearchInput data={{ value: searchValue, setValue: setSearchValue }} />
						</div>
						<div>{searchValue}</div>
					</section>
					<div className="grid grid-cols-8  m-4">
						{searchResult.map((data: PokemonDetailsProps) => (
							<PokemonCard data={data} key={data.id} />
						))}
					</div>
				</div>
				<div>{currentPage}</div>
				<div>{isLoading ? " LOADING" : "NOT"}</div>
				<button onClick={prevHandle} disabled={isFirstPage || isLoading}>
					prev
				</button>
				<button onClick={nextHandle} disabled={isLastPage || isLoading}>
					next
				</button>
			</main>
		</div>
	);
}

export default Main;

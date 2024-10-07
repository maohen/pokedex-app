import { ContainerCards, HeaderMain, Spinner } from "../../shared/components/";
import HomeLayout from "../../shared/components/layouts/home/HomeLayout";
import { useHome } from "./useHome";

export const Home = () => {
  

  const { pokemons, isLoading, handleScroll, handleSearch } = useHome();
  console.log(pokemons)
  return (
    <>
      <HomeLayout>
        <HeaderMain handleSearch={handleSearch} filters={true}/>
        <ContainerCards pokemons={pokemons} handleScroll={handleScroll} />
      </HomeLayout>
      {isLoading && <Spinner />}
    </>
  );
};

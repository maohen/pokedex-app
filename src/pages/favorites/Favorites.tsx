import HomeLayout from '../../shared/components/layouts/home/HomeLayout'
import { ContainerCards, HeaderMain } from '../../shared/components'
import { useSelector } from 'react-redux';
import { RootState } from '../../shared/store/store';

export const Favorites = () => {

  const { favorites } = useSelector((state: RootState) => state.pokemons);

  return (
    <>
      <HomeLayout>
        <HeaderMain/>
        <ContainerCards pokemons={favorites} />
      </HomeLayout>
    </>
  )
}

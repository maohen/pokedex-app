import { useEffect, useState } from 'react'
import HomeLayout from './shared/components/layouts/home/HomeLayout'
import HeaderMain from './shared/components/templates/header/main/HeaderMain'
import { ContainerCards } from './shared/components/templates'
import { Dispatch, RootState } from './shared/store/store'
import { useDispatch, useSelector } from 'react-redux'
import { useLazyQuery } from '@apollo/client'
import { GET_DATA } from './shared/api/getPokemons'
import { Spinner } from './shared/components/ui/spinner/Spinner'
import { debounceFunction } from './shared/helpers/debounceFunction'

function App() {
  const dispatch = useDispatch<Dispatch>();
  const { pokemons, limit } = useSelector((state: RootState) => state.pokemons);
  const [isLoading, setIsLoading] = useState(false);
  const valueLimit = 100;

  const [getPokemons, { loading, error, data }] = useLazyQuery(GET_DATA);

  const handleScroll = (e: any) => {
    const { scrollTop, clientHeight, scrollHeight } = e.target;

    debounceFunction(() => {
        if (scrollHeight - Math.round(scrollTop) === clientHeight){
          const value = limit + 100;
          getPokemons({ variables: { limit: value } });
        }
    });
  };

  useEffect(() => {
    setIsLoading(loading);
    data && dispatch.pokemons.addPokemons(data);
  }, [data, loading])

  useEffect(() => {
    getPokemons({ variables: { limit: valueLimit } });
  }, [])

  console.log("first")
  error && console.log("error");

  return (
    <>
      <HomeLayout >
        <HeaderMain/>
        <ContainerCards pokemons={pokemons} handleScroll={handleScroll}/>
      </HomeLayout>
      {
        isLoading && <Spinner/>
      }
    </>
  )
}

export default App

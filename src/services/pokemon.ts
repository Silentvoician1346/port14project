import axios, { AxiosResponse } from 'axios'
import type { resultProps, PokemonListProps, PokemonDetailsProps} from './pokemon.type'

async function getPokemonList(page: number): Promise<PokemonListProps> {
  const skip :number = 24 * page
  const response: AxiosResponse<any> = await axios({
    method: 'GET',
    url: `${process.env.REACT_APP_BASE_URL}/pokemon?limit=24&offset=${skip}`
  })
  console.log(response.data)
  const result: PokemonListProps = {
    results: response.data.results,
    count: response.data.count,
    next: response.data.next,
    previous: response.data.previous
  }
  return result
}

async function getPokemoDetails(datas: resultProps[]): Promise<PokemonDetailsProps[]>  {
  const responses = await Promise.all( datas.map(async (data:resultProps)=>{
    const response: AxiosResponse<any> = await axios({
      method: 'GET',
      url: data.url
    })
    const result: PokemonDetailsProps ={
      id: response.data.id,
      name:response.data.name[0].toUpperCase() + response.data.name.slice(1),
      image: response.data.sprites.front_default,
      status: [
        {
          value: response.data.stats[0].base_stat,
          name: response.data.stats[0].stat.name
        },
        {
          value: response.data.stats[1].base_stat,
          name: response.data.stats[1].stat.name
        },
        {
          value: response.data.stats[2].base_stat,
          name: response.data.stats[2].stat.name
        },
        {
          value: response.data.stats[3].base_stat,
          name: response.data.stats[3].stat.name
        },
        {
          value: response.data.stats[4].base_stat,
          name: response.data.stats[4].stat.name
        },
        {
          value: response.data.stats[5].base_stat,
          name: response.data.stats[5].stat.name
        }
      ],  
      elements: response.data.types
    }
    return result
  }))
  console.log(responses)
  return responses
}


export {getPokemonList, getPokemoDetails}
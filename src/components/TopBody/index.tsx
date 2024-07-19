/* eslint-disable @typescript-eslint/no-explicit-any */
import { reqPokemonList } from "../../api";
import style from "./index.module.scss";
import clsx from "clsx";
import { useRequest } from "ahooks";
import { Swiper } from "antd-mobile";

const fetchMultiplePokemon = async (ids: number[]) => {
  const promises = ids.map((id) => reqPokemonList(id));
  return Promise.all(promises);
};

const TopBody: React.FC = () => {
  const pokemonIds = [1, 2, 3, 4, 5];

  const { data: pokemonData, loading } = useRequest(() =>
    fetchMultiplePokemon(pokemonIds)
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  console.log(pokemonData?.map((pokemon) => (pokemon as any)?.name));
  return (
    <div className={clsx(style.container)}>
      <span>Top Body Here</span>
      <Swiper indicator={false} className={clsx(style.swiperFeature)}>
        {loading ? (
          <div>Loading...</div>
        ) : (
          pokemonData?.map((pokemon, index) => (
     
            <Swiper.Item key={index}>
           
              <div className={clsx(style.featureCard)}>{(pokemon as any).name}</div>
            </Swiper.Item>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default TopBody;

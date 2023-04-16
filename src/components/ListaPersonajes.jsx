import { useEffect, useState } from 'react';
import Personaje from './Personaje';

export default function ListaPersonajes() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const respuesta = await fetch(
        'https://rickandmortyapi.com/api/character'
      );
      const data = await respuesta.json();
      setPersonajes(data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap">
      {personajes.map((personaje) => {
        return (
          <div className="w-1/2">
            <Personaje key={personaje.id} personaje={personaje} />
          </div>
        );
      })}
    </div>
  );
}

import ListaPersonajes from './components/ListaPersonajes';
import Personaje from './components/Personaje';

export default function App() {
  return (
    <div className="bg-gray-900 w-full p-20 ">
      <h1 className="text-8xl font-extrabold text-center font-rubik text-white pb-16">
        Rick and Morty
      </h1>
      <ListaPersonajes />
    </div>
  );
}

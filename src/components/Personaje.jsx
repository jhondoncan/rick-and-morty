export default function Personaje({ personaje }) {
  const estado =
    personaje.status === 'Alive'
      ? 'inline-block bg-green-600 text-white text-xs px-1 rounded-xl font-semibold tracking-wide'
      : personaje.status === 'Dead'
      ? 'inline-block bg-red-600 text-white text-xs px-1 rounded-xl font-semibold tracking-wide'
      : 'inline-block bg-yellow-500 text-white text-xs px-1 rounded-xl font-semibold tracking-wide';
  const estadoTexto =
    personaje.status === 'Alive'
      ? 'Vivo'
      : personaje.status === 'Dead'
      ? 'Muerto'
      : 'Desconocido';

  const tipo = personaje.type === '' ? 'Sin información' : personaje.type;

  // Si el nombre del personaje es mayor a 20 caracteres solo se mostraran los primeros 20 caracteres y se agregara un "..." al final

  if (personaje.name.length > 25) {
    personaje.name = personaje.name.substring(0, 25) + '...';
  }

  const genero = personaje.gender === 'Male' ? 'Masculino' : 'Femenino';

  const nombreClase =
    personaje.name.length > 15
      ? 'text-2xl font-bold text-white'
      : 'text-3xl font-bold text-white';

  return (
    <div className="m-5 bg-gray-800 rounded-xl shadow-lg flex font-rubik ">
      <div className="w-1/3 pr-4">
        <div className="group overflow-hidden transition rounded-xl">
          <img
            className="w-full transition group-hover:scale-105 rounded-xl"
            src={personaje.image}
            alt={personaje.name}
          />
        </div>
      </div>

      <div className="w-1/2  mt-2">
        <h2 className={nombreClase}>{personaje.name}</h2>
        <h3 className="text-gray-400 text-sm">
          Especie:
          <span className="text-white font-medium mx-1">
            {personaje.species}
          </span>
        </h3>
        <h3 className="text-gray-400 text-sm">
          Genero:
          <span className="text-white font-medium mx-1">{genero}</span>
        </h3>
        <h3 className="text-gray-400 text-sm">
          Origen:
          <span className="text-white font-medium mx-1">
            {personaje.origin.name}
          </span>
        </h3>
        <h3 className="text-gray-400 text-sm">
          Ubicación:
          <span className="text-white font-medium mx-1">
            {personaje.location.name}
          </span>
        </h3>
        <h3 className="text-gray-400 text-sm">
          Tipo:<span className="text-white font-medium mx-1">{tipo}</span>
        </h3>
        <h3 className="text-gray-400 text-sm">
          Estado: <span className={estado}> {estadoTexto}</span>
        </h3>
      </div>
    </div>
  );
}

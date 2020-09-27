import React, {useState} from 'react';
import Header from './components/Header.js'
import Formulario from './components/Formulario.js'
import Resumen from './components/Resumen.js'
import Resultado from './components/Resultado.js'
import Spinner from './components/Spinner.js'
import styled from '@emotion/styled';

const Contenedor = styled.div`
    max-width: 600px;
    margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  //Creamos los states
  const [ resumen, guardarResumen ] = useState({
    cotizacion: 0,
    datos:{
      marca:'',
      year:'',
      plan:'',
    }
  });

  const [ cargando, guardarCargando ] = useState(false);

  //Extraer datos
  const { datos, cotizacion } = resumen;
  return (
    <Contenedor>
      <Header
        titulo="Cotizador de Seguros"
      />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCargando = {guardarCargando}
         />
         { cargando ? <Spinner /> :null}

         <Resumen
          datos={datos}
         />
         {!cargando
           ? <Resultado
               cotizacion={cotizacion}
             />
           : null}

      </ContenedorFormulario>


    </Contenedor>
  );
}

export default App;

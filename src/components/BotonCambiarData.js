import React, {useContext} from 'react';
import { DataContex } from '../contex/DataContex';

const data = {
    nombre: 'Adonys',
    edad: 30 
  }





export const BotonCambiarData = () => {

    const { setData } = useContext(DataContex);
        return (
            <div>
                <button 
                    className= "btn btn-primary"
                    onClick={ () => setData( data )}
                >
                Cambiar Data
                </button>
            </div>
        )
   
}



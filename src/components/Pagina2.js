import React, {useContext} from 'react';
import { DataContex } from '../contex/DataContex';

export const Pagina2 = () => {
   const { data } = useContext( DataContex );
    return (
            <div>
                <h1> Pagina 2 </h1>
                <hr />
                <pre>
                    { JSON.stringify( data, null, 2 )}
                </pre>
            </div>
        )
  
}

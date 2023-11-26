import React, { useState, useEffect } from 'react';
import CustomSelect from './CustomSelect';

function selectsAnidados() {
    const [estado, setEstado] = useState("")
    const [municipio, setMunicipio] = useState("")
    const [colonia, setColonia] = useState("")

    //119bbcc5-7f2b-40d0-91de-67c1466447b2
    const TOKEN = "pruebas"
    return (

        <div>

            <h3>
                Mexico
            </h3>

                {<CustomSelect name={"estado"} change={(e) => setEstado(e.target.value)} url={`https://api.copomex.com/query/get_estados?token=${TOKEN}`}/>}
                {estado && <CustomSelect name={"municipios"} change={(e) => setMunicipio(e.target.value)} url={`https://api.copomex.com/query/get_municipio_por_estado/${estado}?token=${TOKEN}`}/>}
                {municipio &&<CustomSelect name={"colonia"} change={(e) => setColonia(e.target.value)} url={`https://api.copomex.com/query/get_colonia_por_municipio/${municipio}?token=${TOKEN}`}/>}
        </div>




    );
}

export default selectsAnidados;

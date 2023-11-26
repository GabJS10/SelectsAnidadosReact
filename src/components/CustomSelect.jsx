import React, { useState, useEffect } from 'react';

function CustomSelect({ name, change, url }) {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        const peticion = async () => {
            try {
                const response = await fetch(url),
                    json = await response.json()

                if (json.error) {
                    setError(json)
                    throw json
                }

                if (!response.ok) {
                    setError(response)
                    throw response
                }

                setData(json.response[name])
            } catch (er) {
                console.log(error);
            }
        }

        peticion()
    }, [url])

    return (<>

        <select name={name} id={name} onChange={change}>
            <option value="---">{name}</option>
            {data && data.map((el, index) => <option key={index} value={el}>{el}</option>)}
        </select>


    </>);
}

export default CustomSelect;
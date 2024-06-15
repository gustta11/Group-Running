import './AcessoriaConsulta.css'
import { useState, useEffect } from "react"


const AcessoriaConsulta = () => {

    const [valores, setValores] = useState([]);
  

    const fetchData = async (url, setState) => {
        try {
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const json = await response.json();
          setState(json);
        } catch (err) {
          console.error("Erro ao enviar", err);
        }
      };

      useEffect(() => {
        fetchData('http://localhost:3000/acessoria', setValores);
      }, []);

    return(

        <div className="layout-geral-consulta">
             
           <ul>
                {valores.map((valor, index) => (
                    <li key={index}>
                        {Object.entries(valor).map(([key, val]) => (
                            <div key={key}>
                                <strong>{key}:</strong> {val}
                            </div>
                        ))}
                    </li>
                ))}
            </ul>
        </div>
    )



}

export default AcessoriaConsulta;
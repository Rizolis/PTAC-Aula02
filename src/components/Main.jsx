import { useState } from "react";

export default function Main(){

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [listaContatos,setContatos] = useState([]);

    
    const registrar = (event) => {
        event.preventDefault();
        alert("faz direito burro");
        setContatos([...listaContatos, 
        {
            nomeSalvo: nome,
            telefoneSalvo: telefone
        }
        ]);
       
        
    }
    console.table(listaContatos);

    return(
        <main>
            <form onSubmit={registrar}>
                <label htmlFor="nome">Nome:</label>
           <input
           type="text"
           name=""
           id=""
           onChange={(event)=> setNome(event.target.value)}
           />
           {nome}
<br>
</br>
<br>
</br>
           <label htmlFor="telefone">Telefone:</label>
           <input
           type=""
           name=""
           id=""
            onChange={(event) => setTelefone(event.target.value)}
            />
            {telefone}
<br>
</br>
<br>
</br>
        <button type="submit">Salvar</button> 
        </form>
        </main>
    );

}
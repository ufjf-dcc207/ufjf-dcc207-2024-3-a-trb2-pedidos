import { useState } from "react";

type Pedido ={
    id: number;
    nome: string;
    atendido: boolean;
};

export default function Pedido(){
    const [pedidos,setPedidos] = useState<Pedido[]>([]);
    const [nome,setNome] = useState("");
    const [contador, setContador] = useState(1);

    const adicionarPedido = ()=>{
        const novoPedido: Pedido = {
            id: contador,
            nome:nome,
            atendido: false
        };
        setPedidos([...pedidos,novoPedido]);
        setNome("");
        setContador(contador+1);
    };

    const atenderPedido = ()=>{
        if(pedidos.length>0){
            const [pedidoAtendido, ...pedidosFila] = pedidos;
            pedidoAtendido.atendido = true;
            setPedidos(pedidosFila);
        }
    };

    return(
        <>
        <div className="pedidos">
            <h1>Fila</h1>
            <input type="text"
            placeholder="Informe o Nome"
            value={nome}
            onChange={(e)=>setNome(e.target.value)} />

            <button onClick={adicionarPedido}>Adicionar pedido</button>
            <button onClick={atenderPedido}>Atender pedido</button>
        </div>
            {pedidos.map((pedido)=> (
                <div key={pedido.id} className="pedido-item">
                    <h2>Pedido {pedido.id}</h2>
                    <p>Nome: {pedido.nome}</p>
                    <p>Status: {pedido.atendido ? "Atendido" : "Não Atendido"}</p>
                </div>
            ))}
        </>
    );
}
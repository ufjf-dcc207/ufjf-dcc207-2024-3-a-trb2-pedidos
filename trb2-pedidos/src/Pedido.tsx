import { useState } from "react";

type Pedido ={
    id: number;
    nome: string;
    atendido: boolean;
};

export default function Pedido(){
    const [pedido,setPedido] = useState<Pedido>({
        id:1,
        nome: "Agnes",
        atendido: false
    });

    return(
        <>
            <div className="pedido">
                <h1>Pedido {pedido.id}</h1>
                <p>Nome: {pedido.nome}</p>
                <p>Status: {pedido.atendido ? "Atendido" : "Não Atendido"}</p>
            </div>
        </>
    );
}
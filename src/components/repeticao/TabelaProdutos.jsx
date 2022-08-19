import React from "react";
import produtos from "../../data/produtos";

export default props => {


    const litab = produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.preco}</td>
            </tr>
        )
    })

    return (
        <table border='2'>
            {litab}
        </table>
    )
}
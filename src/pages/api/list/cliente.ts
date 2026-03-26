import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'pages', 'api', 'bd.json');

export default function handler (req,res){
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(jsonData)

    //verificar se existem clientes
    //se existir retorna os clientes dentro do objeto {message: "ação realizada com sucesso.", data -> receber clientes (Somente)}
    //se não existir clientes retorna status(204) apenas sem json

    let clientesCadastrados = parsed.clientes

    if(clientesCadastrados.lenght === 0){
        return res.status(200).json({message: 'Ação realizada com sucesso', data: clientes})    
    }
    console.log('Erro 204')
    return res.status(204)
}
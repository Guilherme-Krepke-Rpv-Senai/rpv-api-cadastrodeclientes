import { formataEndereco } from "@/utils"
import { GetServerSideProps, InferGetServerSidePropsType } from "next"

interface IDadosClientes {
    nome: string,
    email: string,
    cpfcnpj: string,
    sexo: string,
    cep: string,
    rua: string,
    bairro: string,
    cidade: string,
    estado: string,
    numero: string,
    complemento: string,
}

interface IClientes {
    id: number,
    dados: IDadosClientes
}
export const getServerSideProps = (async () => {
    const response = await fetch('http://localhost:3000/api/list/cliente')
    const data: IClientes = await response.json()
    return { props: { data } }
}) satisfies GetServerSideProps<{ data: IClientes }>
export default function ListarClientes({
    data
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log('Usuario recuperado no SSR ', data)
    return (
        <>
            <h1 className="text-4xl text-center">Nossos Clientes!</h1>

            <div className="mx-auto max-w-4xl border border-zinc-300 rounded-xl p-4 mt-8">
                <table className="table-auto gap-8">
                    <thead>
                        <tr className="border border-zinc-400 grid grid-cols-12">
                            <th className="cols-span-2 text-start text-sm ">Nome</th>
                            <th className="cols-span-4 text-start text-sm ">Email</th>
                            <th className="cols-span-1 text-center text-sm pr-4 ">Sexo</th>
                            <th className="cols-span-5 text-start text-sm ">Endereço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.data?.length > 0 ? (
                            <>
                                {data.data.map((cliente) => (
                                    <tr className="grid grid-cols-12">
                                        <td className="cols-span-2 text-start text-sm ">{cliente.cpfcnpj}</td>
                                        <td className="cols-span-4 text-start text-sm ">{cliente.email}</td>
                                        <td className="cols-span-1 text-center text-sm pr-4">{cliente.sexo}</td>
                                        <td className="cols-span-5 text-start text-sm ">{formataEndereco({
                                            bairro: cliente.bairro,
                                            cidade: cliente.cidade,
                                            complemento: cliente.complemento,
                                            estado: cliente.estado,
                                            numero: cliente.numero,
                                            rua: cliente.rua
                                        })}</td>
                                    </tr>
                                ))}
                            </>
                        ):(
                            <></>
                        )}

                    </tbody>
                </table>
            </div>

        </>
    )
}
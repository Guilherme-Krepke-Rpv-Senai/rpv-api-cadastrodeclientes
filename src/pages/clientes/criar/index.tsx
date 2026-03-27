import { Input } from '@/components/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const DEFAULT_MESSAGE_RULE = "Campo Obrigatório."

export default function CriarCliente() {
    const regras = z.object({
        nome: z.string().min(1, DEFAULT_MESSAGE_RULE),
        // email: z.email(DEFAULT_MESSAGE_RULE),
        // cep: z.string().min(1, DEFAULT_MESSAGE_RULE).max(9, "cep inválido."),
        // cpfcnpj: z.string().min(1, DEFAULT_MESSAGE_RULE).max(14, "Limite de 14 caracteres."),
        // sexo: z.string().min(1, DEFAULT_MESSAGE_RULE).max(1, "Limite de 1 caracter."),
        // rua: z.string().min(1, DEFAULT_MESSAGE_RULE),
        // bairro: z.string().min(1, DEFAULT_MESSAGE_RULE),
        // cidade: z.string().min(1, DEFAULT_MESSAGE_RULE),
        // estado: z.string().min(1, DEFAULT_MESSAGE_RULE),
        // numero: z.string().min(1, DEFAULT_MESSAGE_RULE),
        // complemento: z.string().min(1, DEFAULT_MESSAGE_RULE),


    })

    type FormType = z.infer<typeof regras>

    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm<FormType>({
        resolver: zodResolver(regras)
    })
    function onSubmit(data: FormType) {

    }

    // Nome
    // Endereço (Cep, Rua, Bairro, Cidade, Estado, Numero e complemento)
    // CPF/CNPJ
    // Email
    // Sexo
    return (
        <>
            <div className='w-full flex items-center justify-center'>
                <form onSubmit={handleSubmit(onSubmit)} noValidate className='grid grid-cols-12 gap-8'>
                    {/* <div className='relative col-span-12 flex flex-col'>
                        <label>Nome: </label>
                        <input {...register('nome')} className='border rounded-sm px-2 py-1 text-zinc-100' />
                        <span className='absolute top-14 text-xs text-red-500'>{errors.nome?.message}</span>
                    </div> */}
                    <Input
                        errors
                        label='nome'
                        
                        />
                    <button>enviar</button>
                </form>
            </div>
        </>
    )
}
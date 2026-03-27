import {FieldErrors, FieldValues, UseFormRegister} from 'react-hook-form'
import { size } from 'zod'
interface IInput{
    required: boolean
    label: string
    nome: string
    register: UseFormRegister<T>
    errors: FieldErrors<T>
    size: number
}

export function Input({
    return(

        <div className={`relative col-span-${size} flex flex-col`}>
            <label>Nome{required && (<span className="text-red-500">*</span>)}: </label>
            <input {...register(name)} className='border rounded-sm px-2 py-1 text-zinc-100' />
            <span className='absolute top-14 text-xs text-red-500'>{errors.nome?.message}</span>
        </div>
    )
})
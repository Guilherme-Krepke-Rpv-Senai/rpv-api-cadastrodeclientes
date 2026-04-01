import { FormType } from "@/pages/clientes/criar"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

const sizeClassMap = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
    7: 'col-span-7',
    8: 'col-span-8',
    9: 'col-span-9',
    10: 'col-span-10',
    11: 'col-span-11',
    12: 'col-span-12'
} as const

type TInput<T extends FieldValues> = {
    required: boolean
    label: string
    name: keyof T
    register: UseFormRegister<T>
    errors: FieldErrors<T>
    size: keyof typeof sizeClassMap
}

export function Input({
    errors,
    label,
    name,
    register,
    required,
    size
}: TInput<FormType>) {
    console.log('eerors component', name)

    return(
        <div className={`${sizeClassMap[size]} relative flex flex-col my-5`}>
            <label>{label}{required && (<span className='text-red-500'>*</span>)}: </label>
            <input {...register(name)} className='border rounded-md px-2 py-1 text-zinc-100'/>
            <span className='absolute top-16 text-xs text-red-500'>{errors[name]?.message}</span>
        </div>
    )
}
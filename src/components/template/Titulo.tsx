
interface TituloProps {
    titulo: string 
    subtitle: string 

}

export default function Titulo(props: TituloProps){
    return(
        <div>
            <h1 className={`
            font-black text-3xl 
            text-gray-900 dark:text-gray-100`
            }>{props.titulo}</h1>
            <h1 className={`font-light text-sm dark:text-gray-300`}>{props.subtitle}</h1>
        </div>
    )
}
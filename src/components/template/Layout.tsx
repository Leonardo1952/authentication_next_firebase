import MenuLateral from './MenuLateral'
import Cabecalho from './Cabecalho'
import Conteudo from './Conteudo'
import type { Metadata } from 'next'
import useAppData from '../../data/hook/useAppData'
import ForcarAutenticacao from '../auth/ForcarAutenticacao'

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

interface LayoutProps {
    titulo: string
    subtitulo: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    const { tema } = useAppData()
    return (
        <ForcarAutenticacao>
            <div className={`${tema} flex h-screen w-screen`}>
                <MenuLateral />
                <div className={`
                flex flex-col w-full p-7 
                bg-gray-300 dark:bg-gray-800
            `}>
                    <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
                    <Conteudo>
                        {props.children}
                    </Conteudo>
                </div>
            </div>
        </ForcarAutenticacao>
    )
}
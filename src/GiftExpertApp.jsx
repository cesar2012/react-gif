import { useState } from "react"
import { AddCategoria, GifGrid } from './components'




export const GiftExpertApp = () => {
    
    const [ categorias, setCategorias] = useState(['montaña','desierto'])
    


    const onAddCategoria = (newCategoria) => {
  
        if(categorias.includes(newCategoria)) return;

        setCategorias([newCategoria , ...categorias ])
    }

    return(
        <>
        <h1>GiftExpertApp</h1>

        <AddCategoria 
            onNewCategoria = { onAddCategoria }
        />


            { categorias.map( (categoria)=>(
                <GifGrid 
                key={categoria}
                categoria={categoria}
                />
            )
                
            )}



        </>


    )

}
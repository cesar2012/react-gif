import { useState } from "react"


export const AddCategoria = ({ onNewCategoria }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {

        setInputValue(event.target.value)

    }


    const onSubmit = (event) => {

        event.preventDefault();

        if(inputValue.trim().length <= 1 ) return;

        onNewCategoria(inputValue.trim())
        setInputValue('')
    }



    return(
        <>
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gift"
                value = { inputValue}
                onChange = {  onInputChange }
             />   
        </form>

        
        </>

    )

}


export default function ButtonConfirmar({useCor,useText,useP,useClick}){

    return(
    
        <button style={{backgroundColor :useCor}} className={useP} onClick={useClick}>
            {useText}
        </button>
        
    )
        
}
const sumarEntre =(numUno, numDos)=> {
    let retorno = 0
    
    if(numUno < numDos){
        let i = (numUno % 2) == 0 ? numUno : numUno + 1

        while(i <= numDos){
            retorno = retorno + i 
            i = i +2
        }
    }
    
    return retorno
}

export default sumarEntre

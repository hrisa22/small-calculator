    let a = prompt("Please enter number A:");
    let operator = prompt("please enter operator +,-,*,/:")
    let b = prompt("Please enter number B:");



    if(operator == "+"){
    let c = parseInt(a) + parseInt(b)
    alert(" The result is: " + c)

    }else if (operator == "-"){
    let d = parseInt(a) - parseInt(b)
    alert(" The result is: " + d)

    }else if (operator == "*"){
    let e = parseInt(a) * parseInt(b)
    alert(" The result is: " + e)
    
    }else{
    let f =parseInt(a) / parseInt(b)
    alert(" The result is: " + f)
        
    }
    



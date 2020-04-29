function register(){

    event.preventDefault();

    let cpf = document.getElementById("cpf").value;
    let email = document.getElementById("email").value;
    let feminino = document.getElementById("feminino").checked;

    console.log(cpf);

    if(feminino){
        console.log("feminino");
    }else{
        console.log("masculino");
    }
    
    console.log(email);
    
    }

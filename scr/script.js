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
    function textCase(){

        event.preventDefault();
        
        let nome = document.getElementById("nome");
        nome.value = nome.value.toUpperCase();

        nome = document.getElementById("nome").value;

        console.log(nome);
    }

    function validarSenha(){

        event.preventDefault();

        var senha = document.getElementById("senha").value;

        if(senha =="" || senha.length <= 7){
            document.getElementById("erroSenha").innerHTML = "<span style='color: #ff0000'> Preencha o campo senha com no minimo 8 caracteres</span>";
        }else{
            document.getElementById("erroSenha").innerHTML = "<span style='color: #00ff00'>Senha Válida</style>";
        }
        console.log(senha);
    }
$(function () {
        loginSubmit();

        transactionSubmit();
})

function loginSubmit(){

    $('#login-form').on('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Cria um objeto FormData com os dados do formulário
        let formData = {
            'email' : $("#username").val(),
            'password' : $("#password").val() 
        }

        let headers = {
            "Authorization": "8A9B362F-E744-4BEE-8031-39A23FA67E63"
        }

        let url = 'https://southti.com.br/desafio-front-end/user/auth';

        $.ajax({
            type: 'POST',
            url: url,
            headers: headers,
            data: JSON.stringify(formData),
            contentType: "application/json",
            beforeSend: function(){

                console.log(formData)
            },
            success: responseSuccessSubmitForm,
            error: function(response) {
                // Manipula erros
                responseErrorSubmitForm();
            }
        });
    }); 
}

// remove mensagens anteriores de erro (reseta para o estado inicial de mensagens da tela)
function resetMessages(){

    $(".welcome-message").show()

    $(".error-message, #username-error, #password-error").hide();
}


function responseSuccessSubmitForm(response){

     // Manipula a resposta do servidor
     if (response.status == "200"){
        $(".welcome-message").show();
        $(".error-message").hide();

        localStorage.setItem("token", response.token);

        retreatLoginContainer();
    }
    else{
        responseErrorSubmitForm();
    }
}


function responseErrorSubmitForm(){

        $(".welcome-message, #username-done, #password-done").hide();

        $(".error-message, #username-error, #password-error").show();
}


function displayLoading(){
    $("#submit-form").hide();


}

function checkInput(input, doneImage){

    let element = $(input);

    resetMessages();

    /* checa apenas se tem alguma coisa diferente de vazio no input, ou seja, se o usuário digitou alguma coisa. Se digitou, 
    mostro o simbolo de check e adiciono a classe que faz com que o traço abaixo do input seja verde*/ 

     if (element.val() && !element.hasClass('validElement')){

        console.log(doneImage)
        $(doneImage).show();  // mostra o simbolo de check no input

        element.addClass('validElement'); //adiciona a classe no elemento
     }    
        
    else {
        // se o elemento for vazio, esconde o simbolo verde de check e remove a classe que gera uma borda verde do elemento
        if (!element.val()){

            $(doneImage).hide();  

            element.removeClass('validElement'); 
        }
    }
        
}

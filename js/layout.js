
/* modifica todo o layout uma vez que é feito o login, para ir para a tela de sistema */
function retreatLoginContainer(){

    $(".login-container").addClass('login-container-retreat');

    $("body").addClass('body-transition');

    $("body").css('display', 'flex');

    $(".logo > p, .login-box").hide();
    
    $(".icons").addClass('show-icons');

    $(".layout").show();

    loadUserData();

    listTransactions();
}

/* carrega dados do usuario logado */
function loadUserData(){

    let url = 'https://southti.com.br/desafio-front-end/user/profile';

    let headers = {
        "Authorization": localStorage.getItem('token')
    };

    $.ajax({
        type: 'GET',
        url: url,
        headers: headers,
        contentType: "application/json",
        success: function(response){
            $(".layout-name-user").text(response.name);
        },
        error: function(response) {
            // Manipula erros
            console.log(response)
        }
    });
    
}


/*adiciona um novo elemento na transação */
function transactionSubmit(){
    $('#layout-submit-form').on('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

    let formData = {
        'value' : $("#value").val(),
        'description' : $("#description").val() 
    }

    let headers = {
        "Authorization": localStorage.getItem('token')
    }

    let url = 'https://southti.com.br/desafio-front-end/transaction/create';

        $.ajax({
            type: 'POST',
            url: url,
            headers: headers,
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function(response){
                if (response.status == '201'){
                    alert('Elemento adicionado com sucesso!');

                    $("#value, #description").val('');
                }
                else{
                    alert('Erro ao adicionar elemento!');
                }
            },
            error: function(response) {
                // Manipula erros
                console.log(response)
            }
        });
    });
}

/* lista todas as transações correntes */
function listTransactions(){
    let headers = {
        "Authorization": localStorage.getItem('token')
    }

    let url = 'https://southti.com.br/desafio-front-end/transaction/list';

    $.ajax({
        type: 'GET',
        url: url,
        headers: headers,
        contentType: "application/json",
        success: function(response){
                let template = $.templates("#resume-template").render(response);

                $(".layout-resume-body").html(template);
        },
        error: function(response) {
            // Manipula erros
            console.log(response)
        }
    });
}


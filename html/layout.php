<!-- o template abaixo é para o resumo das transações -->
<script id="resume-template" type="text/x-jsrender">
	<div class='resume-detail'>

        <svg class='resume-circle' height="10" width="10">
            <circle r="3" fill="gray" cx="3" cy="3"></circle>
        </svg>

        {{if (value > 0)}}
            <div class='positive-transaction'>

                + R${{:value.replace('.',',')}} 

                <p class='transaction-text'>{{:description}}</p>

            </div>
        {{else}}
            <div class='negative-transaction'>

                - R${{:value.replace('.',',')}} 

                <p class='transaction-text'>{{:description}}</p>
            </div>
        {{/if}}

	</div>
</script>

<div class='layout'>
    <div class='layout-header'>
        <p class='layout-title'>Titulo</p>

        <div class='layout-exit'>
            <p class='layout-name-user'>...</p>
            <img src='./assets/layout-assets/arrow_right_in.png'>
        </div>
    </div>

    <div class='layout-boxes'>
        <div class='layout-transactions'>
            <div class='layout-transactions-header'>
                <p>Cadastrar Transações</p>
            </div>

            <div class='layout-transactions-body'>

                <form id='layout-submit-form' action='.' method='POST'>
                    <input id='value' name='value' placeholder='Valor' required type="number" step="0.01">

                    <textarea id='description' rows="4" cols="50" name='description' placeholder='Descrição' required></textarea>

                    <button id='register' type='submit'>Registrar</button>
                </form>
            </div>
        </div>

        <div class='layout-resume'>
            <div class='layout-resume-header'>
                <p>Resumo</p>
            </div>

            <!-- será utilizado o template acima para preencher essa div -->
            <div class='layout-resume-body'></div>
        </div>
    </div>
</div>
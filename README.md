
# Desafio Front End

Para rodar a aplicação, baixe o Docker Desktop em https://www.docker.com/products/docker-desktop/ e tenha uma conta.

Após, baixe a imagem de docker de tomsik68: https://hub.docker.com/r/tomsik68/xampp/

Essa imagem terá o WAMP configurado para servir os arquivos.
Para baixar a imagem, vá no terminal e digite 

```bash
  docker run --name myXampp -p 41061:22 -p 41062:80 -d -v ~/my_web_pages:/opt/lampp/htdocs tomsik68/xampp:8
```

No lugar de "~/my_web_pages", colocar o caminho absoluto de onde está a pasta com os arquivos, pois assim o docker irá mapear
essa pasta para a pasta do container. Exemplo no meu caso:
C:\Users\luiza\OneDrive\Desktop\desafioFrontEnd
Após, digite no browser http://localhost:41062/, que é aonde a aplicação irá rodar.

Não é necessário configurar mais nada.
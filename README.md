# YoutubeMusic-Clone
Um clone do player de músicas do Youtube, APENAS O PLAYER, sem sistema de recomendação e etc.... (Isso fica para outro projeto, no momento, meu foco é desenvolver o player de modo fiel e funcional).

O player está sem músicas porque o Github não permitiu o envio das mesmas. Para adicionar suas próprias músicas, clone o repositório no seu computador.

Baixe o áudio em .mp3, a capa da música em .jfif e o clipe em .mp4.

Para conversão de qualquer arquivo caso haja necessidade, utilize o site: https://cloudconvert.com/.
Para o download das músicas (tanto em mp4 quanto em mp3), eu recomendo o site: https://y2-mate.tools/pt1/.

Após isso, coloque os arquivos em suas respectivas pastas e atualize as informações em ´./src/script.js´.

O seguinte campo deve ser alterado:

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const Musica1 = {
    nomemusica: 'Nome da música',
    nomeartista: 'Nome do artista',
    file: 'Nome do arquivo (tanto o mp3 quanto do mp4 precisam ser iguais)',
};
const Musica2 = {
    nomemusica: 'Nome da música',
    nomeartista: 'Nome do artista',
    file: 'Nome do arquivo (tanto o mp3 quanto do mp4 precisam ser iguais)',
};
const Musica3 = {
    nomemusica: 'Nome da música',
    nomeartista: 'Nome do artista',
    file: 'Nome do arquivo (tanto o mp3 quanto do mp4 precisam ser iguais)',
};
const playlist = [
    Musica1,
    Musica2,
    Musica3
]; 

-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

Altere de acordo com as músicas de sua preferência e pronto, o player está funcionando como deve!

O código ainda irá passar por alterações e caso haja a necessidade de atualização do método de envio de músicas, eu avisarei.
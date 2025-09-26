// Crie uma estrutura de dados completa para uma playlist de músicas
// em seguida, use uma função para exibir todas as músicas de forma organizada no console.

const minhaPlaylist = {
    nome: "As Melhores do Rock",
    musicas: [
        { titulo: "Rockzin", artista: "Marcelin" },
        { titulo: "Rockzão", artista: "Mimizinha" }
    ]
}

function mostrarPlaylist(playlist) {
    console.log("Playlist: " + playlist.nome);

    for (const musica of playlist.musicas) {
        console.log("Título: " + musica.titulo + ", Artista: " + musica.artista);
    }
}

mostrarPlaylist(minhaPlaylist);
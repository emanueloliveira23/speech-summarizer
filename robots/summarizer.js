
async function summarizer(content) {

  const summary = [
    'Michael Joseph Jackson foi um cantor, compositor, dançarino, produtor, empresário, arranjador vocal, filantropo, pacifista e ativista estadunidense.',
    'Faturou em vida cerca de sete bilhões de dólares',
    'Começou a cantar e a dançar aos cinco anos de idade',
    'cinco de seus álbuns de estúdio se tornaram os mais vendidos mundialmente de todos os tempos',
    'Michael Jackson foi o o maior artista de todos os tempos segundo o Guinness Book'
  ]

  content.summary = summary

}

module.exports = summarizer

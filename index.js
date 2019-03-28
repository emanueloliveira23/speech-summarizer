const speechSummarizer = require('./speech-summarizer');

async function main() {

  console.log('Hi! I\'m the Speech Summarizer Robot 🎤 ➡ 🤖 ➡ 📑')

  const result = await speechSummarizer({ uri: 'file:///home/emanuel/speech-summarizer/resources/test.ogg', language: 'pt-BR' })

  console.log(result)

}

main()
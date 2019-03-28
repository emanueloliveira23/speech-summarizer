
const robots = {
  conversor: require('./robots/conversor'),
  summarizer: require('./robots/summarizer'),
}

async function speechSummarizer({ uri, language }) {
  const content = { uri, language };
  await robots.conversor(content);
  await robots.summarizer(content);
  return content;
}

module.exports = speechSummarizer
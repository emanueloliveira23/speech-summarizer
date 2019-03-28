// Using Google Cloud Platform - Speech to Text service https://cloud.google.com/speech-to-text/

const speech = require('@google-cloud/speech')
const getUri = require('get-uri')
const streamToBuffer = require('stream-to-buffer')
const gcpProjectId = require('../credentials/gcp-project-id')
const gcpKeyFilename = {
  keyFilename: './credentials/gcp.json'
}

const speechClientDefaults = {
  enableAutomaticPunctuation: true,
  // encoding: 'LINEAR16',
  encoding: 'OGG_OPUS',
  model: 'default',
  sampleRateHertz: 16000
}

async function conversor(content) {

  console.log('Converting audio to text...')

  const { uri, language } = content

  const client = new speech.SpeechClient({
    ...gcpProjectId,
    ...gcpKeyFilename
  })
  
  const audioBytes = await getBytesFromURI(uri)
  
  const audio = {
    content: audioBytes
  }
  const config = {
    languageCode: language,
    ...speechClientDefaults
  }
  const request = {
    audio: audio,
    config: config,
  }

  const [response] = await client.recognize(request)

  const transcription = response.results
    .map(result => result.alternatives[0].transcript)
    .join('\n')

  // updating content
  content.text = transcription

  async function getBytesFromURI(uri) {
    const stream = await getStreamFromURI(uri)
    const bytes = await mapStreamToBytes(stream)
    return bytes

    async function getStreamFromURI(uri) {
      return new Promise((resolve, reject) => {
        getUri(uri, function (err, stream) {
          if (err) reject(err)
          resolve(stream)
        })
      })
    }

    async function mapStreamToBytes(stream) {
      return new Promise((resolve, reject) => {
        streamToBuffer(stream, function (err, buffer) {
          if (err) reject(err)
          const bytes = buffer.toString('base64')
          resolve(bytes)
        })
      })
    }
  }

  

}

module.exports = conversor
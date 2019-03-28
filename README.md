# speech-summarizer
Summarizes the main points of an speech audio. 

## Credentials

* Google Clould Platform:
  * `credentials/gcp.json`
  * `credentials/gcp-project-id.json`:
  
```json

{
  "projectId": "<your project id on gcp>",
  "keyFilename": ".credentials/google-gcp.json"
}
```

  * First time (only once): `sh gcp-setup.sh`
  * Every tun time: `sh gcp-init.sh`
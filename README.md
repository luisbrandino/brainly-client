<h1 align="center"><span style="font-size:75px;">🧠</span><br>✨ brainly-client ✨</h1> 
<p align="center">
<img alt="Package Version" src="https://img.shields.io/github/package-json/v/luisbrandino/brainly-client?style=flat-square">
<img alt="Top language" src="https://img.shields.io/github/languages/top/luisbrandino/brainly-client?style=flat-square">
<img alt="License" src="https://img.shields.io/github/license/luisbrandino/brainly-client?style=flat-square">
</p>

<p align="center">An unofficial API for Brainly.</p>

<hr>

## 🚀 Installation

Use the package manager [npm](https://nodejs.org/en/download/) to install brainly-client.

Simply run:

```bash
npm install brainly-client
```

<hr>

## 💻 Quickstart

A simple example of usage:

```js
const Client = require('brainly-client')
const brainly = new Client()

brainly.search('Test')
  .then(questions => {
    const question = questions[0]
    const answer = question.answers[0]

    console.log(question)
    console.log(answer)
  })
```

You can specify the number of questions you want to receive:

```js
const Client = require('brainly-client')
const brainly = new Client()

brainly.search({ query: 'Test', first: 10 })
  .then(questions => {
    console.assert(questions.length <= 10)
  })
```

You can also define a different server (BR is default):

```js
const Client = require('brainly-client')
const brainly = new Client({ server: 'ES' }) // Spain server
```

There are currently 9 servers you can use:

| Country     | Code | URL                    |
|-------------|------|------------------------|
| Spain       | ES   | https://brainly.lat    |
| Romania     | RO   | https://brainly.ro     |
| India       | HI   | https://brainly.in     |
| Poland      | PL   | https://brainly.pl     |
| Philippines | PH   | https://brainly.ph     |
| Indonesia   | ID   | https://brainly.co.id  |
| Turkey      | TR   | https://eodev.com      |
| Russia      | RU   | https://znanija.com    |
| Brazil      | BR   | https://brainly.com.br |

⚠️ Be aware that some of them may be deprecated 

<hr>

## 📜 License

[MIT](https://choosealicense.com/licenses/mit/)
const convertQuestions = (client, data) => {   
  const Question = require('../structures/Question') 

  const convertedQuestions = data.map(({ node }) => {
    return new Question(client, node)
  })

  return convertedQuestions
}

const convertAnswers = (client, data) => {
  const Answer = require('../structures/Answer')

  const convertedAnswers = data.map(answerData => {
    return new Answer(client, answerData)
  })

  return convertedAnswers
}

module.exports = {
  convertQuestions,
  convertAnswers
}
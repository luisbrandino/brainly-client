const convertQuestions = data => {   
  const Question = require('../structures/Question') 

  const convertedQuestions = data.map(({ node }) => {
    return new Question(node)
  })

  return convertedQuestions
}

const convertAnswers = data => {
  const Answer = require('../structures/Answer')

  const convertedAnswers = data.map(answerData => {
    return new Answer(answerData)
  })

  return convertedAnswers
}

module.exports = {
  convertQuestions,
  convertAnswers
}
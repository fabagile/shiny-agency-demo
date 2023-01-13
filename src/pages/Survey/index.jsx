import { useParams, Link } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prev = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const next = questionNumberInt + 1

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>

      <Link rel="stylesheet" to={`/survey/${prev}`} >Précédent</Link> 
      {questionNumberInt === 10 ? (
      <Link rel="stylesheet" to="/results" >
        Résultats
      </Link>) : (
        <Link rel="stylesheet" to={`/survey/${next}`} >
        Suivant
      </Link>

      )}
    </div>
  )
}

export default Survey

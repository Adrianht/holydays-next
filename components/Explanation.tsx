import { ExplanationContainer } from '@/styles'

const Explanation: React.FC = () => {
  return (
    <ExplanationContainer>
      <div>
        <div className="green" />
        <span>Holyday or weekend</span>
      </div>
      <div>
        <div className="yellow" />
        <span>Need to use vacation day</span>
      </div>
    </ExplanationContainer>
  )
}

export default Explanation

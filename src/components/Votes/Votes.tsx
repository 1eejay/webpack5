import React from 'react'

import { useGlobal } from 'contexts/global'

const Votes: React.FC = () => {
  const [state, { addVotes, decreaseVotes }] = useGlobal()

  return (
    <div>
      <p>{state.votes}</p>
      <button onClick={addVotes}>add</button>
      <button onClick={decreaseVotes}>decrease</button>
    </div>
  )
}

export default Votes

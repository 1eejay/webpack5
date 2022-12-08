import React from 'react'

interface stateType {
  votes: number
  list: number[]
}
interface actionType extends Partial<stateType> {
  type: string
}
type actionsType = {
  [K: string]: () => void
}
type reduceType = (state: stateType, action: actionType) => stateType

const initialValues: stateType = {
  votes: 0,
  list: [],
}

const GlobalContext = React.createContext<[stateType, actionsType]>([
  initialValues,
  {},
])

const reducer: reduceType = (state, { type, ...payload }) => {
  const handles = {
    updateVotes: ({ votes }: Partial<stateType>) => {
      return { ...state, votes: votes ?? state.votes }
    },
  }

  if (handles[type as keyof typeof handles]) {
    const newState = handles[type as keyof typeof handles](payload)

    console.group('context change')
    console.log('prevState', state)
    console.log('type', type)
    console.log('payload', payload)
    console.log('newState', newState)
    console.groupEnd()

    return newState
  }

  return state
}

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(reducer, initialValues)

  const actions = React.useMemo(() => {
    return {
      addVotes: () => {
        dispatch({ type: 'updateVotes', votes: state.votes + 1 })
      },
      decreaseVotes: () => {
        dispatch({ type: 'updateVotes', votes: state.votes - 1 })
      },
    }
  }, [state])

  return (
    <GlobalContext.Provider value={[state, actions]}>
      {children}
    </GlobalContext.Provider>
  )
}

export default Provider

export const useGlobal = () => React.useContext(GlobalContext)

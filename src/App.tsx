import React, { useState } from 'react'
import tw from 'twin.macro'
import { Input, Logo } from './components'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-blue-200 to-white`,
  ],
}

const App = () => {
  const {
    objective,
    sourceUp,
    sourceLow,
    up,
    low,
    err,
    setObjective,
    setSourceUp,
    setSourceLow
  } = useFlour()

  return (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <span>{err}</span>
      <Input type="number" placeholder="W" onChange={(e) => setObjective(+e.target.value) } />
      <Input type="number" placeholder="WF" onChange={(e) => setSourceUp(+e.target.value)} />
      <Input type="number" placeholder="Wf" onChange={(e) => setSourceLow(+e.target.value)} />
      <div tw="flex flex-col">
        <div><strong>W:</strong> {objective || " "}</div>
        <div><strong>WF:</strong> {sourceUp || " "} ~ {up || " "} %</div>
        <div><strong>Wf:</strong> {sourceLow || " "} ~ {low || " "} %</div>
      </div>
    </div>
    <Logo />
  </div>
)}

const useFlour = () => {
  const [objective, setObjective] = useState<number>(0)
  let [sourceUp, setSourceUp] = useState<number>(0)
  let [sourceLow, setSourceLow] = useState<number>(0)
  const low = percentageLow(objective, sourceUp, sourceLow)
  const up = percentageUp(objective, sourceUp, sourceLow)
  let err = ""

  if (objective === 0 || sourceUp === 0 || sourceLow === 0) {
    err = "Introduce todos los valores:"
  }

  return {
    objective,
    sourceUp,
    sourceLow,
    up,
    low,
    err,
    setObjective,
    setSourceUp,
    setSourceLow
  }
}

const percentageLow = (objective: number, sourceUp: number, sourceLow: number) => {
  if (objective === 0) return 0
  if (sourceUp === 0 ) return 0
  if (sourceLow === 0 ) return 0

  const value = 100 * (sourceUp - objective) / (sourceUp - sourceLow )

  return value.toFixed(2)
}

const percentageUp = (objective: number, sourceUp: number, sourceLow: number) => {
  if (objective === 0) return 0
  if (sourceUp === 0 ) return 0
  if (sourceLow === 0 ) return 0

  const value = 100 * (objective - sourceLow) / (sourceUp - sourceLow )

  return value.toFixed(2)
}

export default App

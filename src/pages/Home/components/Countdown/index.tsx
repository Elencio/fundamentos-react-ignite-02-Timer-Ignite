import { CountdownContainer, Separator } from './styles'
import { useContext, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../..'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsfinished,
    amountSecondsPassed,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let Interval: number

    if (activeCycle) {
      Interval = setInterval(() => {
        const SecondsDiferrence = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )
        if (SecondsDiferrence >= totalSeconds) {
          markCurrentCycleAsfinished()
          setSecondsPassed(totalSeconds)
          clearInterval(Interval)
        } else {
          setSecondsPassed(SecondsDiferrence)
        }
      }, 1000)
    }

    return () => {
      clearInterval(Interval)
      setSecondsPassed(0)
    }
  }, [
    activeCycle,
    totalSeconds,
    activeCycleId,
    markCurrentCycleAsfinished,
    setSecondsPassed,
  ])

  const CurrentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(CurrentSeconds / 60)
  const secondsAmount = CurrentSeconds % 60
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}

import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em </label>
      <TaskInput
        id="task"
        type="text"
        disabled={!!activeCycle}
        placeholder="De um nome para o seu projecto"
        list="task-suggestions"
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="Projecto-1" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        id="minutesAmount "
        type="number"
        placeholder="00"
        step={5}
        disabled={!!activeCycle}
        min={5}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}

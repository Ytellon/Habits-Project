import { Check } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { FormEvent, useState } from 'react'

const availabeWeekDays = [
  'Domingo',
  'Segunda-Feira',
  'Terça-Feira',
  'Quarta-Feira',
  'Quinta-Feira',
  'Sexta-Feira',
  'Sábado',
]

export function NewHabitForm() {
  const [title, setTitle] = useState<string>('');
  const [week, setWeekDays] = useState<number[]>([]);

  function createNewHabit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(title, week)
  }

  function handleToggleWeekDay(weekDay: number) {
    if (week.includes(weekDay)) {
      const filteredWeek = week.filter(day => day !== weekDay)
      setWeekDays(filteredWeek)
    } else {
      setWeekDays([...week, weekDay])
    }
  }

  return (
    <form onSubmit={createNewHabit} className="w-full flex flex-col mt-6">
      <label htmlFor="habit-name" className="font-semibold leading-tight">
        qual o seu comprometimento?
      </label>
      <input
        type="text"
        id="title"
        name="title"
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        placeholder="Ex: Estudar React"
        autoFocus
        onChange={event => setTitle(event.target.value)}
      />

      <label
        htmlFor="habit-description"
        className="font-semibold leading-tight mt-4"
      >
        Qual a recorrencia?
      </label>

      <div className="flex flex-col gap-3 mt-2">
        {availabeWeekDays.map((weekDay, index) => {
          return (
            <Checkbox.Root
              onCheckedChange={() => handleToggleWeekDay (index)}
              key={weekDay}
              className="flex items-center gap-3 group"
            >
              <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-date-[state=checked]:border-green-500">
                <Checkbox.Indicator>
                  <Check size={20} className="text-white" />
                </Checkbox.Indicator>
              </div>

              <span className=" text-white leading-tight">{weekDay}</span>
            </Checkbox.Root>
          );
        })}
      </div>

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500"
      >
        <Check size={20} />
        Confirmar
      </button>
    </form>
  );
}
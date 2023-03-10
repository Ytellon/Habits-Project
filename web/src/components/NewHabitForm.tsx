import { Check } from 'phosphor-react'
import * as Checkbox from '@radix-ui/react-checkbox'
import { FormEvent, useState } from 'react'
import { api } from '../lib/axios'

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
  const [weekDays, setWeekDays] = useState<number[]>([]);

  async function createNewHabit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!title || weekDays.length === 0) {
      return;
    }

    await api.post("/habits", {
      title,
      weekDays,
    })

    setTitle('');
    setWeekDays([]);

    alert("Habito Criado com sucesso!");
  }

  function handleToggleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      const filteredWeek = weekDays.filter(day => day !== weekDay)
      setWeekDays(filteredWeek)
    } else {
      setWeekDays([...weekDays, weekDay])
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
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
        placeholder="Ex: Ler 30 minutos por dia, Exercitar-se 3 vezes por semana"
        autoFocus
        value={title}
        onChange={(event) => setTitle(event.target.value)}
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
              onCheckedChange={() => handleToggleWeekDay(index)}
              key={weekDay}
              checked={weekDays.includes(index)}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-date-[state=checked]:border-green-500 transition-colors group-focus:ring-2 group-focus:ring-violet-600 group-focus:ring-offset-2 group-focus:ring-offset-zinc-900">
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
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500
        transition-colors duration-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
      >
        <Check size={20} />
        Confirmar
      </button>
    </form>
  );
}
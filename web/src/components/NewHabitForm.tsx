import { Check } from 'phosphor-react'

export function NewHabitForm() {
  return (
    <form className="w-full flex flex-col mt-6">
      <label htmlFor="habit-name" className="font-semibold leading-tight">
        qual o seu comprometimento?
      </label>
      <input
        type="text"
        id="title"
        name="title"
        className="p-4 rouded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        placeholder="Ex: Estudar React"
        autoFocus
      />

      <label
        htmlFor="habit-description"
        className="font-semibold leading-tight mt-4"
      >
        Qual a recorrencia?
      </label>

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
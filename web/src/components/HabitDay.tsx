import * as Popover from "@radix-ui/react-popover"; 
import { ProgressBar } from "./ProgressBar";
import clsx from "clsx";

interface HabitDayProps {
  completed: number;
  amount: number;
}

export function HabitDay({ completed, amount }: HabitDayProps) {
  const completedHabitDay = Math.round((completed / amount) * 100)
  
  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          "w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg",
          { 'bg-zinc-900 border-violet-800': completedHabitDay === 0,
            'bg-violet-800 border-violet-700': completedHabitDay > 0 && completedHabitDay < 20,
            'bg-violet-700 border-violet-500': completedHabitDay >= 60 && completedHabitDay < 80,
            'bg-violet-600 border-violet-500': completedHabitDay >= 60 && completedHabitDay < 80,
            'bg-violet-500 border-violet-400': completedHabitDay >= 80,
          },
        )
      }
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">Terça-Feira</span>
          <span className="nt-1 font-extrabold leading-tight text-3xl">
            20.02
          </span>

          <ProgressBar progress={75} />

          <Popover.Arrow width={16} height={8} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

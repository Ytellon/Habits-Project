import * as Popover from "@radix-ui/react-popover"; 
import { ProgressBar } from "./ProgressBar";
import clsx from "clsx";
import dayjs from "dayjs";
import { HabitsList } from "./HabitsList";
import { useState } from "react";

interface HabitDayProps {
  date: Date;
  defaultCompleted?: number;
  amount?: number;
}

export function HabitDay({ defaultCompleted = 0, amount = 0, date}: HabitDayProps) {

  const [completed, setCompleted] = useState(defaultCompleted);

  const completedHabitDay = amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayAndMonth = dayjs(date).format("DD/MM");
  const dayOfWeek = dayjs(date).format("dddd");

  function handleCompletedChanged(completed: number) {
    setCompleted(completed);
    }
  
  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx("w-10 h-10 border-2 rounded-lg", {
          "bg-zinc-900 border-zinc-800": completedHabitDay === 0,
          "bg-violet-900 border-violet-700":
            completedHabitDay > 0 && completedHabitDay < 20,
          "bg-violet-800 border-violet-600":
            completedHabitDay >= 20 && completedHabitDay < 40,
          "bg-violet-700 border-violet-500":
            completedHabitDay >= 40 && completedHabitDay < 60,
          "bg-violet-600 border-violet-500":
            completedHabitDay >= 60 && completedHabitDay < 80,
          "bg-violet-500 border-violet-400": completedHabitDay >= 80,
        })}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">{dayOfWeek}</span>
          <span className="nt-1 font-extrabold leading-tight text-3xl">
            {dayAndMonth}
          </span>

          <ProgressBar progress={completedHabitDay} />

          <HabitsList date={date} onCompletedChanged={handleCompletedChanged} />

          <Popover.Arrow width={16} height={8} className="fill-zinc-900" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}

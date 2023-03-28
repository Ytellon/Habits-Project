import { Dimensions, TouchableOpacity } from "react-native";

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = ( 32 * 2 )

export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SYZE = Dimensions.get('screen')


export function HabitDay() {
  return (
    <TouchableOpacity
      className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800"
    />
  )
}
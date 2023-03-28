 import { View, Text } from 'react-native';
import { HabitDay, DAY_SYZE } from '../components/HabitDay';
 import { Header } from '../components/Header';
 
 const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];


 export function Home() {
  return (
    <View className="flex bg-background px-8 pt-16">
      <Header />

      <View className='flex-row mt-6 mb-2'>
        {
          weekDays.map((weekDay, i) => (
            <Text
              key={`${weekDay}-${i}`}
              className="text-zinc-400 text-xl font-bold text-center"
              style={{ width: DAY_SYZE }}
            >
              {weekDay}
            </Text>
          ))
        }
      </View>
      <HabitDay />
    </View>
  );
 }
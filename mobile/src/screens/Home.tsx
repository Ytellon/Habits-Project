import { useState, useEffect } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { api } from "../lib/axios"

import { generateRangeDatesFromYearStart } from "../utils/generate-range-between-dates";

import { HabitDay, DAY_SYZE } from "../components/HabitDay";

import { Header } from "../components/Header";
import { useNavigation } from "@react-navigation/native";

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
const datesFromYearStart = generateRangeDatesFromYearStart();
const minimumSummaryDatesSizes = 18 * 5;
const amountOfDaysToFill = minimumSummaryDatesSizes - datesFromYearStart.length;

export function Home() {
  const [ loading, setLoaging ] = useState(true);
  const [ summary, setSummary ] = useState(null);
  const { navigate } = useNavigation();

  useEffect(() => {
    fetchdata();
  },[]);

  async function fetchdata() {
    try {
      setLoaging(true);
      const response = await api.get('/summary');
      console.log(response.data);
      setSummary(response.data);
    } catch (error) {
      console.log(error);
      Alert.alert('Ops', 'não foi possível carregar o súmario de hábitos.');
    } finally {
      setLoaging(false);
    }
  }

  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <Header />

      <View className="flex-row mt-6 mb-2">
        {weekDays.map((weekDay, index) => (
          <Text
            key={`${weekDay}-${index}`}
            className="text-zinc-400 text-xl font-bold text-center"
            style={{ width: DAY_SYZE }}
          >
            {weekDay}
          </Text>
        ))}
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <View className="flex-row flex-wrap">
          {
          datesFromYearStart.map((date, index) => (
            <HabitDay
              key={index}
              onPress={() => navigate("habit", { date: date.toISOString() })}
            />
          ))
          }

          {
          amountOfDaysToFill > 0 && Array
            .from({ length: amountOfDaysToFill })
            .map((_, index) => (
              <View
                className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                style={{ width: DAY_SYZE, height: DAY_SYZE }}
              />
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

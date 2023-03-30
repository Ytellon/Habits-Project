import { TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from 'tailwindcss/colors';

interface Props {
  checked?: boolean;
}

export function CheckBox({ checked = false }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="flex-row mb-2 items-center"
      >
    <View className="h-8 bg-green rounded-lg items-center justify-center">
      <Feather
        name="check"
        size={20}
        color={colors.white}
      />
    </View>
    </TouchableOpacity>
  );
}
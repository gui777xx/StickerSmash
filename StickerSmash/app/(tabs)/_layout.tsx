import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#8B0000", // Vermelho vinho para o item ativo
        tabBarInactiveTintColor: "#a1a1a1", // Cinza para itens inativos
        headerStyle: {
          backgroundColor: "#1c1c1e", // Fundo cinza escuro para o cabeçalho
        },
        headerShadowVisible: false,
        headerTintColor: "#8B0000", // Vermelho vinho para o texto do cabeçalho
        tabBarStyle: {
          backgroundColor: "#1c1c1e", // Fundo cinza escuro para a barra de navegação
          borderTopWidth: 0, // Remove a borda superior
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Configurações",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "settings-sharp" : "settings-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
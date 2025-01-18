import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>index screen.</Text>
      <Link href="/details">Go to details</Link>
      <Pressable
        onPress={() => router.push({ pathname: "/[id]", params: { id: 2 } })}
      >
        <Text>with id 1</Text>
      </Pressable>
    </View>
  );
}

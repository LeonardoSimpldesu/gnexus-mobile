import { Header } from "@components/Header";
import { SafeAreaView } from "react-native";
import { styles } from "./styles";

export function Dashboard() {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
        </SafeAreaView>
    )
}
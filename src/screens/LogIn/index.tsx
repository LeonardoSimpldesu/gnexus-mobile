import { Input } from "@components/Input";
import { useRef, useState } from "react";
import { Image, SafeAreaView, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import Checkbox from "expo-checkbox";
import { Button } from "@components/Button";
import logo from '@assets/logo.png'


export function LogIn() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [isKeepConected, setIsKeepConected] = useState(false)
    const newEmailInputRef = useRef<TextInput>(null)
    const newSenhaInputRef = useRef<TextInput>(null)

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={logo}
                style={styles.logo}
            />
            {/* <View>
                <Text style={styles.title}>Acessar Painel</Text>
                <Text style={styles.description}>Evoca a conexão entre as dimensões ambiental, social e de governará.</Text>
            </View> */}
            <View style={styles.form}>
                <View style={styles.input}>
                    <Text style={styles.label}>Email</Text>
                    <Input placeholder="Digite seu email" autoCorrect={false} onChangeText={setEmail} value={email} inputRef={newEmailInputRef} onSubmitEditing={() => { }} returnKeyType="done" />
                </View>
                <View style={styles.input}>
                    <Text style={styles.label}>Senha</Text>
                    <Input placeholder="Digite sua senha" autoCorrect={false} onChangeText={setEmail} value={email} inputRef={newSenhaInputRef} onSubmitEditing={() => { }} returnKeyType="done" />
                </View>
                <Text style={styles.forgetPassword}>Esquecu a senha?</Text>
                <View style={styles.checkbox}>
                    <Checkbox value={isKeepConected} onValueChange={setIsKeepConected} />
                    <Text style={styles.label}>Manter-me conectado</Text>
                </View>
                <Button title="Entrar" />
                <Text style={styles.registerButton}>Ainda não possui cadastro?</Text>
            </View>
        </SafeAreaView>
    )
}
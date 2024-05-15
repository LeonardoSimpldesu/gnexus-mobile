import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        width: '100%',
        padding: 24,
    },
    logo: {
      alignSelf: "center",  
    },
    title:{
        fontSize: 24,
        textAlign: "center",
        fontWeight: "700",
        marginTop: 18,
    },
    description: {
        textAlign: "center",
        fontStyle: "italic",
        marginTop: 8,
    },
    form: {
        gap: 24,
    },
    label: {
        color: '#0D6511',
        letterSpacing: 1,
    },
    input: {
        gap: 6,
        marginTop: 30,
    },
    forgetPassword: {
        color: '#0D6511',
        letterSpacing: 1,
        alignSelf: "flex-end",
    },
    checkbox: {
        flexDirection: "row",
        gap: 12,
    },
    registerButton: {
        alignSelf: "center",
        color: '#0D6511',
        textDecorationLine: "underline",
    }
})
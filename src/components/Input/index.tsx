import { TextInput, TextInputProps } from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
    inputRef?: React.RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: Props) {
    return (
        <TextInput
            style={styles.container}
            ref={inputRef}
            {...rest}
            placeholderTextColor={'#c1c1c1'}

        />
    )
}
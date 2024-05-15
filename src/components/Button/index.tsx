import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { styles } from "./styles"

type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

type Props = TouchableOpacityProps & {
    title: string
    type?: ButtonTypeStyleProps
}

export function Button({ title, ...rest }: Props) {
    return (
        <TouchableOpacity style={styles.container} {...rest}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}
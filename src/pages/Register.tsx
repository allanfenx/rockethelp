import { VStack } from "native-base";
import { Header } from "../components/Header";
import { MyButton } from "../components/MyButton";
import { MyInput } from "../components/MyInput";


export function Register() {

    return (
        <VStack flex={1} p={6} bg="gray.600" >
            <Header title="Nova solicitação" />

            <MyInput placeholder="Número do patrimonio"
                mt={4} />

            <MyInput placeholder="Descrição do problema"
                flex={1} mt={5} multiline textAlignVertical="top" />

            <MyButton title="Cadastrar" mt={5} />
        </VStack>
    )
}
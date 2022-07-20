import { Heading, Icon, VStack, useTheme } from "native-base";
import { Envelope, Key } from "phosphor-react-native";
import { useState } from "react";

import Logo from "../assets/logo_primary.svg";
import { MyButton } from "../components/MyButton";
import { MyInput } from "../components/MyInput";

export function Signin() {

    const { colors } = useTheme();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <VStack flex={1} alignItems="center" bg="gray.600" px={8} pt={24}>
            <Logo />
            <Heading color="gray.100" fontSize="xl" mt={20} mb={6} >
                Acesse sua conta
            </Heading>

            <MyInput placeholder="E-mail" mb={4}
                keyboardType="email-address"
                onChangeText={setEmail}
                InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} />} ml={4} />} />

            <MyInput placeholder="Senha"
                mb={12}
                secureTextEntry
                onChangeText={setPassword}
                InputLeftElement={<Icon as={<Key color={colors.gray[300]} />} ml={4} />} />

            <MyButton title="Entrar" w="full" isLoading={true} />
        </VStack>
    )
}
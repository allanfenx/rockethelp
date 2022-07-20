import { useState } from "react";
import { HStack, IconButton, VStack, useTheme, Text, Heading, FlatList, Center } from "native-base";
import { ChatTeardropText, SignOut } from "phosphor-react-native";


import Logo from "../assets/logo_secondary.svg";
import { Filter } from "../components/Filter";
import { Order, OrderProps } from "../components/Order";
import { MyButton } from "../components/MyButton";
import { useNavigation } from "@react-navigation/native";
import { Loading } from "../components/Loading";

export function Home() {

    const { navigate } = useNavigation();

    const [isLoading, setIsloading] = useState(false);
    const [statusSelected, setStatusSelected] = useState<"open" | "closed">("open");
    const [orders, setOrders] = useState<OrderProps[]>([
        {
            id: "1",
            patrimony: "1575",
            when: "18/07/2022 às 10:00",
            status: "open"
        },
        {
            id: "2",
            patrimony: "1575",
            when: "18/07/2022 às 10:00",
            status: "open"
        },
        {
            id: "3",
            patrimony: "1575",
            when: "18/07/2022 às 10:00",
            status: "open"
        },
        {
            id: "4",
            patrimony: "1575",
            when: "18/07/2022 às 10:00",
            status: "open"
        }
    ])

    const { colors } = useTheme();

    return (
        <VStack flex={1} pb={6} bg="gray.700">
            <HStack w="full" justifyContent="space-between"
                alignItems="center" bg="gray.600"
                pt={12} pb={5} px={6} >

                <Logo />

                <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
            </HStack>

            <VStack flex={1} px={6}>
                <HStack w="full" mt={8} mb={4} justifyContent="space-between"
                    alignItems="center" >
                    <Heading color="gray.100" >
                        Meus chamados
                    </Heading>
                    <Text color="gray.200">
                        4
                    </Text>
                </HStack>

                <HStack space={3} mb={8} >
                    <Filter type="open" title="Em andamento"
                        onPress={() => setStatusSelected("open")}
                        isActive={statusSelected === "open"} />

                    <Filter type="closed" title="Finalizados"
                        onPress={() => setStatusSelected("closed")}
                        isActive={statusSelected === "closed"} />
                </HStack>

                {isLoading ? <Loading />
                    : <FlatList
                        data={orders}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <Order data={item} onPress={() => navigate("Datails", { id: item.id })} />}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: 50 }}
                        ListEmptyComponent={() => (
                            <Center>
                                <ChatTeardropText color={colors.gray[300]} size={40} />
                                <Text color="gray.300" fontSize="xl" mt={6} textAlign="center" >
                                    Você ainda não posui {"\n"}
                                    solicitações {statusSelected === "open" ? "em andamento" : "finalizadas"}
                                </Text>
                            </Center>
                        )} />}

                <MyButton onPress={() => navigate("New")} title="Nova solicitação" />
            </VStack>

        </VStack>
    )
}
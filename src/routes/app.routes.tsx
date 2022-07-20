import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Datails } from "../pages/Datails";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";



const { Navigator, Screen } = createNativeStackNavigator();


export function AppRoutes() {

    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="Home" component={Home} />
            <Screen name="New" component={Register} />
            <Screen name="Datails" component={Datails} />
        </Navigator>
    )
}
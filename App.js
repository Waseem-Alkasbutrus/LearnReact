import { NavigationContainer } from "@react-navigation/native";
import { DrawerNav } from "./navigation/DrawerNav";

export default function AppendMode() {
    return (
        <NavigationContainer>
            <DrawerNav></DrawerNav>
        </NavigationContainer>
    )
}
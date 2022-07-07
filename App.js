import { NavigationContainer } from "@react-navigation/native";
import { GlobalStackNav } from "./navigation/GlobalStackNav";

export default function AppendMode() {
    return (
        <NavigationContainer>
            <GlobalStackNav></GlobalStackNav>
        </NavigationContainer>
    )
}
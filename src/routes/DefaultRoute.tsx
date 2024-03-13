import { SoccerInfoProvider } from "../state/soccerInfo";
import { UiProvider } from "../state/ui";
import DefaultPage from "./DefaultPage";

export default function DefaultRoute() {
    return (
        <SoccerInfoProvider>
            <UiProvider>
                <DefaultPage />
            </UiProvider>
        </SoccerInfoProvider>
    );
}

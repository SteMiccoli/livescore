import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useUiCtx } from "../state/ui";

export default function ThemeEditor() {
    const {
        uiState: { isThemeLight },
        uiDispatch,
    } = useUiCtx();

    function toggleTheme() {
        uiDispatch({ type: "TOGGLE_THEME" });
    }

    return (
        <>
            {isThemeLight ? (
                <SunIcon
                    className="w-8 h-8 cursor-pointer"
                    onClick={toggleTheme}
                />
            ) : (
                <MoonIcon
                    className="w-8 h-8 cursor-pointer dark:text-[#a6adbb]"
                    onClick={toggleTheme}
                />
            )}
        </>
    );
}

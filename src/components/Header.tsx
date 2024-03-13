import {
    Input,
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
} from "@nextui-org/react";
import ThemeEditor from "./ThemeEditor";
import { useUiCtx } from "../state/ui";

export default function Header() {
    const {
        uiState: { selectedDate },
        uiDispatch,
    } = useUiCtx();
    return (
        <>
            <Navbar shouldHideOnScroll>
                <NavbarBrand>
                    <p className="font-bold text-inherit dark:text-white">
                        MiccoScore
                    </p>
                </NavbarBrand>
                <NavbarContent
                    className="hidden sm:flex gap-4"
                    justify="center"
                >
                    <NavbarItem>
                        <Input
                            type="date"
                            variant="underlined"
                            value={selectedDate}
                            onChange={(e) =>
                                uiDispatch({
                                    type: "SET_DATE",
                                    payload: { date: e.target.value },
                                })
                            }
                        />
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>
                        <ThemeEditor />
                    </NavbarItem>
                </NavbarContent>
            </Navbar>
        </>
    );
}

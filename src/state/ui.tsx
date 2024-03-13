/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useReducer } from "react";
import { IUiContext, UiActionType } from "../types";

const UiContext = createContext<IUiContext>(null as unknown as IUiContext);

const initialState: IUiContext["uiState"] = {
    isThemeLight: true,
    selectedDate: new Date().toISOString().split("T")[0],
};

const uiReducer = (state: IUiContext["uiState"], action: UiActionType) => {
    switch (action.type) {
        case "TOGGLE_THEME":
            return { ...state, isThemeLight: !state.isThemeLight };
        case "SET_DATE":
            return { ...state, selectedDate: action.payload.date };
        default:
            return state;
    }
};

export const useUiCtx = () => {
    const context = useContext(UiContext);
    if (!context) {
        throw new Error("Context is not in the provider");
    }
    return context;
};

export const UiProvider = ({ children }: { children: ReactNode }) => {
    const [uiState, uiDispatch] = useReducer(uiReducer, initialState);
    return (
        <UiContext.Provider value={{ uiState, uiDispatch }}>
            {children}
        </UiContext.Provider>
    );
};

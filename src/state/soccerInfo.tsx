/* eslint-disable react-refresh/only-export-components */
import { ReactNode, createContext, useContext, useReducer } from "react";
import { ILiveScoreInfos, ISoccerInfoContext, SoccerInfoType } from "../types";

const SoccerInfoContext = createContext<ISoccerInfoContext>(
    null as unknown as ISoccerInfoContext
);

const initialState: ISoccerInfoContext["soccerInfoState"] = {
    infos: [] as unknown as ILiveScoreInfos,
};

const soccerInfoReducer = (
    state: ISoccerInfoContext["soccerInfoState"],
    action: SoccerInfoType
) => {
    switch (action.type) {
        case "SET_INFOS":
            return { ...state, infos: action.payload.infos };
        default:
            return state;
    }
};

export const useSoccerInfoCtx = () => {
    const context = useContext(SoccerInfoContext);
    if (!context) {
        throw new Error("Context is not in the provider");
    }
    return context;
};

export const SoccerInfoProvider = ({ children }: { children: ReactNode }) => {
    const [soccerInfoState, soccerInfoDispatch] = useReducer(
        soccerInfoReducer,
        initialState
    );
    return (
        <SoccerInfoContext.Provider
            value={{ soccerInfoState, soccerInfoDispatch }}
        >
            {children}
        </SoccerInfoContext.Provider>
    );
};

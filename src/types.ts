import { Dispatch } from "react";

export interface IUiContext {
    uiState: {
        isThemeLight: boolean;
        selectedDate: string;
    };
    uiDispatch: Dispatch<UiActionType>;
}

export type UiActionType =
    | { type: "TOGGLE_THEME" }
    | { type: "SET_DATE"; payload: { date: string } };

export interface ISoccerInfoContext {
    soccerInfoState: {
        infos: ILiveScoreInfos;
    };
    soccerInfoDispatch: Dispatch<SoccerInfoType>;
}

export type SoccerInfoType = {
    type: "SET_INFOS";
    payload: { infos: ILiveScoreInfos };
};

export interface ILiveScoreInfos {
    Stages: IStage[];
}

export interface IStage {
    /**
     * Stage ID
     */
    Sid: string;
    /**
     * Country Name ex. Germany
     */
    Cnm: string;

    /**
     * Country code
     */
    Ccd: string;

    /**
     * Competition Badge URL ex. 2023-germany-dfb-cup.png
     */
    badgeUrl: string;

    /**
     * Stage Name ex. DFB Cup: Quarter-Finals
     */
    Snm: string;

    /**
     * Competition name ex. DFB Cup
     */
    CompN: string;

    /**
     * Color representing competition ex.d20515
     */
    firstColor: string;

    /**
     * List of events of the competition
     */
    Events: IEvent[];
}

export interface IEvent {
    /**
     * Event ID
     */
    Eid: string;
    /**
     * Home Team infos
     */
    T1: ITeam[];

    /**
     * Away Team infos
     */
    T2: ITeam[];

    /**
     * Match start time ex. 20240206210000
     */
    Esd: number;

    /**
     * Elapsed time ex. 56'
     */
    Eps: string;

    /**
     * Home Team goals
     */
    Tr1: string;

    /**
     * Away Team goals
     */
    Tr2: string;

    /**
     * Home Team goals 1st half
     */
    Trh1: string;

    /**
     * Away Team goals 1st half
     */
    Trh2: string;
}

export interface ITeam {
    /**
     * Team Name Abrevation
     */
    Abr: string;

    /**
     * Team ID
     */
    ID: string;

    /**
     * Team Image URL
     */
    Img: string;

    /**
     * Team Name
     */
    Nm: string;
}

export interface IEnvironmentVars {
    VITE_RAPID_API_KEY: string;
    VITE_RAPID_API_HOST: string;
}

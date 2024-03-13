/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Routes } from "react-router-dom";
import { useUiCtx } from "../state/ui";
import { useEffect } from "react";
import Homepage from "../pages/Homepage";
import NotFoundPage from "../pages/NotFoundPage";
import { useSoccerInfoCtx } from "../state/soccerInfo";
import axios from "axios";
import { IEnvironmentVars, ILiveScoreInfos } from "../types";

export default function DefaultPage() {
    const { VITE_RAPID_API_HOST, VITE_RAPID_API_KEY } = import.meta
        .env as unknown as IEnvironmentVars;
    const {
        uiState: { selectedDate, isThemeLight },
    } = useUiCtx();
    const { soccerInfoDispatch } = useSoccerInfoCtx();

    useEffect(() => {
        axios
            .get("https://livescore6.p.rapidapi.com/matches/v2/list-by-date", {
                //REPLACE ALL
                params: {
                    Category: "soccer",
                    Timezone: "1",
                    Date: selectedDate.replaceAll("-", ""),
                },
                headers: {
                    "X-RapidAPI-Key": VITE_RAPID_API_KEY,
                    "X-RapidAPI-Host": VITE_RAPID_API_HOST,
                },
            })
            .then((res) => {
                soccerInfoDispatch({
                    type: "SET_INFOS",
                    payload: { infos: res.data as ILiveScoreInfos },
                });
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [selectedDate]);

    return (
        <div className={`${isThemeLight ? "" : "dark"}`}>
            <div className="bg-[#faf7f5] dark:bg-[#1d232a] min-h-screen">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </div>
        </div>
    );
}

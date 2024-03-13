import { Card, CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
import Header from "../components/Header";
import { useSoccerInfoCtx } from "../state/soccerInfo";

export default function Homepage() {
    const {
        soccerInfoState: { infos },
    } = useSoccerInfoCtx();
    return (
        <>
            <Header />
            <div className="px-7 py-3 flex flex-row flex-wrap gap-3 justify-center">
                {infos.Stages?.map((stage) => (
                    <Card className="w-[400px] bg-default-200" key={stage.Sid}>
                        <CardHeader className="flex gap-3">
                            <Image
                                alt="nextui logo"
                                height={40}
                                radius="sm"
                                src={`https://static.livescore.com/i2/fh/${stage.Ccd}.jpg`}
                                width={40}
                            />
                            <div className="flex flex-col">
                                <p className="text-md">{stage.Snm}</p>
                                <p className="text-small text-default-500">
                                    {stage.Cnm}
                                </p>
                            </div>
                        </CardHeader>
                        <Divider />
                        <CardBody>
                            {stage.Events.map((match) => (
                                <div
                                    className="first:rounded-t-lg last:rounded-b-lg p-1 odd:bg-secondary-50 even:bg-primary-100 text-primary-content"
                                    key={match.Eid}
                                >
                                    <div className="flex justify-between">
                                        <p className="w-1/3 my-auto">
                                            {match.T1[0].Nm}
                                        </p>
                                        {match.Eps === "NS" ? (
                                            <p className="w-1/3 text-center">
                                                {match.Esd.toString()
                                                    .slice(-6)
                                                    .replace(
                                                        /(\d{2})(\d{2})(\d{2})/,
                                                        "$1:$2:$3"
                                                    )}
                                            </p>
                                        ) : (
                                            <div className="flex flex-col w-1/3 items-center justify-center">
                                                <p>
                                                    {match.Tr1} - {match.Tr2}
                                                </p>
                                                <p>{match.Eps}</p>
                                            </div>
                                        )}
                                        <p className="w-1/3 text-end my-auto">
                                            {match.T2[0].Nm}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </CardBody>
                    </Card>
                ))}
            </div>
        </>
    );
}

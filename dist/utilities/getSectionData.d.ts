import IData from "../interfaces/IData";
declare const getSectionData: (data: IData[]) => {
    index: number;
    title: string;
    data: IData[];
}[];
export default getSectionData;

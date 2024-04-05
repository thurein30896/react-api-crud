import { api } from "./baseUrl";

export const GetCourse = async() => {
    try{
        const {data} = await api.get("courses");
        return data;
    }catch(e){
        throw new Error(e.message);
    }
}
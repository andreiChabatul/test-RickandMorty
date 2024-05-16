import type { IRequestApi, IResponeApi } from "@/types";
import axios from "axios";

export const RaMApiServices = {

    URL_API: 'https://rickandmortyapi.com/api/character/',

    async getAllCharacters({ page, name, status }: IRequestApi): Promise<IResponeApi | undefined> {
        try {
            const response = await axios.get<IResponeApi>(this.URL_API, {
                params: {
                    page,
                    name,
                    status
                }
            });
            return response.data;

        } catch (error) {
            console.log(error);
        }
    }

}


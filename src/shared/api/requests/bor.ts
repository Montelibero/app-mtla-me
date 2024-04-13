import axios from "axios";

const getBorData = async () => {
    const responce = await axios.get('https://bor.mtla.me/json');

    return responce.data;
}

export const borRequests = {
    getBorData
};

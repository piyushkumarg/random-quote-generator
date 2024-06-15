import axios from "axios";

const url = "https://api.quotable.io";

export const randomQuote =  async () => {
    const quote = await axios.get(`${url}/random`);
    return quote.data;
}


export const getTags = async () => {
    const tags = await axios.get(`${url}/tags`);
    return tags.data;
}


export const randomQuoteBytag = async (tag) => {
    const res = await axios.get(`${url}/random?tags=${tag}`)
    return res.data;
}
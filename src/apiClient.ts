import axios from "axios";

export const callGetAuthors = () => {
    return axios.get("https://poetrydb.org/author")
}

export const callGetAuthorWorks = (author: string) => {
    return axios.get("https://poetrydb.org/author/" + author + "/title")
}
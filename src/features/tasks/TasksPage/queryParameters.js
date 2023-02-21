import { useHistory, useLocation } from "react-router-dom";
import searchQueryParamName from "./searchQueryParamName";

export const useQueryParameter = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(searchQueryParamName);
};

export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    return (target) => {
        const searchParams = new URLSearchParams(location.search);

        if (target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`)
    }
};
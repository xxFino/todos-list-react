import React from "react";
import Input from "../../Input";
import { useQueryParameter, useReplaceQueryParameter } from "../queryParameters";
import { Wrapper } from "./styled";

export default () => {  
    const query = useQueryParameter();
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter(target);
    };

    return (
        <Wrapper>
            <Input
                placeholder="Filtruj zadania"
                value={query || ""}
                onChange={onInputChange}
            />
        </Wrapper>
    )
};
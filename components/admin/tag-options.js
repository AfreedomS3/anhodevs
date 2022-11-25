import React from "react";
import { useEffect, useState } from "react";
import getTags from '../../libs/api-requests/get-tags';

function TagOptions() {
    const [tagOptions, setTagOptions] = useState(false);

    useEffect(() => {
        let ignore = false;

        async function startFetching() {
            const data = await getTags(); 
            if (data) {
                const tagList = data.map((option) => 
                    <option key={option.id} value={option.id}>{option.name}</option>
                );
                if (!ignore) {
                    setTagOptions(tagList);
                }
            }
        }

        startFetching();

        return () => {
            ignore = true;
        };
    }, []);

    return (
        <>
            {tagOptions && tagOptions}
        </>
    );
}

export default React.memo(TagOptions);

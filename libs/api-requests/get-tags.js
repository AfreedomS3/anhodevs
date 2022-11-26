async function getTags() {
    try {
        const res = await fetch(process.env.NEXT_PUBLIC_TAG_LIST_API);
        const data = await res.json();

        if (res.ok) {
            return data;
        } else {
            console.log(res.status + ' - ' + res.statusText);
        }
    } catch (error) {
        console.log(error);
    }
}

export default getTags;

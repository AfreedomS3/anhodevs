async function getTags() {
    let attempt = 5;

    while (attempt > 0) {
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_TAG_LIST_API);
            const data = await res.json();
    
            if (res.ok) {
                return data;
            } else {
                console.log(res.status + ' - ' + res.statusText);
                attempt = 0;
            }
        } catch (error) {
            console.log(error);
            attempt--;
        }
    }
}

export default getTags;

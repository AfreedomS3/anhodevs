async function getTags() {
    try {
        const res = await fetch('http://localhost:8000/tags/');
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

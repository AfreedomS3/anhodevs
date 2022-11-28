async function postTag(tag) {
    let attempt = 5;

    while (attempt > 0) {
        try {
            const token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null;
            const res = await fetch(process.env.NEXT_PUBLIC_TAG_LIST_API, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Token ${token}`,
                },
                body: JSON.stringify(tag),
            });
    
            const data = await res.json();
    
            if (res.ok) {
                return {
                    message: 'Tag agregada!',
                    success: true,
                };
            } else {
                console.log(data);
                return {
                    message: 'Error al agregar tag',
                    success: false,
                };
            }
        } catch (error) {
            console.log(error);
            attempt--;
        }
    }
}

export default postTag;

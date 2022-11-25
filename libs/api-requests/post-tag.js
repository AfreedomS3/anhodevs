async function postTag(tag) {
    try {
        const token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null;
        const res = await fetch('http://localhost:8000/tags/', {
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
        return {
            message: 'Error al agregar tag',
            success: false,
        };
    }
}

export default postTag;

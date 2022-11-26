async function postProject(postData) {
    try {
        const token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : null;
        const res = await fetch(process.env.NEXT_PUBLIC_PROJECT_LIST_API, {
            method: 'POST',
            headers: {
                'Authorization': `Token ${token}`,
            },
            body: postData,
        });

        const data = await res.json();

        if (res.ok) {
            return {
                message: '¡Proyecto agregado!',
                success: true,
            };
        } else {
            console.log(data);
            return {
                message: 'Error al agregar proyecto',
                success: false,
            };
        }
    } catch (error) {
        console.log(error);
        return {
            message: 'Error al agregar proyecto',
            success: false,
        };
    }
}

export default postProject;

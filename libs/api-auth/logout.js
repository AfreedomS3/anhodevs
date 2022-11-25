export default function logout() {
    if (sessionStorage.getItem('token')) {
        sessionStorage.removeItem('token');
    }
}

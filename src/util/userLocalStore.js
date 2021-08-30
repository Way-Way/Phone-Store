const KEY_USER = 'user-store'
const userLocalStorage = {
    get() {
        return JSON.parse(localStorage.getItem(KEY_USER)) || []
    },
    set(user) {
        localStorage.setItem(KEY_USER, JSON.stringify(user))
    }
}
export default userLocalStorage
let defaultCity = '北京'
try {
    if (localStorage.city) {
        defaultCity = localStorage.city
    }
} catch (e) {}

export default {
    city: defaultCity
        // 逻辑运算符 A||B 若A能取到，则A，若A是false则peking！
}
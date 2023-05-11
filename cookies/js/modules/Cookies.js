export class Cookies {

    constructor() {
        this.checkCookieEnabled()
    }

    checkCookieEnabled() {
        if(!navigator.cookieEnabled) {
            alert("no coke fo u")
        }
    }

    setCookie(options) {

    }

    getCookie(name) {

    }

    removeCookie(name) {
        
    }
}
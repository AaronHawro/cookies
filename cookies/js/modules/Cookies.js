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
        const cookieSettings = []
        cookieSettings.push(`${options.name} = ${options.value}`)

        if(typeof options.expiresInDays === 'number') {
            const date = new Date()
            date.setTime(date.getTime() + (options.expiresInDays * 86400000))
            cookieSettings.push(`expires = ${date.toGMTString()}`)
        }

        document.cookie = cookieSettings.join(';')
    }

    getCookie(name) {
        if(document.cookie != '') {
            const cookies = document.cookie.split(/; */) //obecnie to samo co (';')

            for(let i = 0; i < cookies.length; i++) {
                const cookieName = cookies[i].split("=")[0]
                const cookievalue = cookies[i].split("=")[1]

                if(cookieName === name) {
                    return cookievalue
                }
            }
        }
    }

    removeCookie(name) {
        this.setCookie({
            name: name,
            expiresInDays: -1
        })
    }
}
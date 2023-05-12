import { Cookies } from "./Cookies.js";

export class InfoCookies extends Cookies {
    constructor() {
        super()

        this.infoPlace = document.querySelector('.cookies')

        if(!this.getCookie('accept')) {
            this.showInfo()
        }
    }

    showInfo() {
        this.infoPlace.classList.add('show')
        this.infoPlace.classList.remove('hide')
    }

    hideInfo() {
        this.infoPlace.classList.add('hide')
        this.infoPlace.classList.remove('show')
    }
}
import {Observable} from 'rxjs'

declare interface loopingo_uplift {
    mount(element: HTMLElement) : void
    unmount() : void
    pushEmailAddress(val: string) : void
    pushCartValue(val: number) : void
    pushBasketItem() : void
    completeTransaction(val: string) : void
    setToken(val: string) : void
    setCampaignId(val: string) : void
    onReady(cb: () => void) : void
    maximize() : void
    minimize() : void
    getConfig() : WidgetConfigService
    onOfferSelection() : Observable<void>
}

declare interface WidgetConfigService {
    getActionColor() : string
    getDangerColor() : string
    getSuccessColor() : string
    getThemeColor() : string
    setThemeColor(value: string) : this
    setSuccessColor(value: string) : this
    setActionColor(value: string) : this
    setDangerColor(value: string) : this
}

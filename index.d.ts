import {Observable} from 'rxjs'

declare interface loopingo_uplift {
    mount(element: HTMLElement)
    unmount()
    pushEmailAddress(val: string)
    pushCartValue(val: number)
    pushBasketItem()
    completeTransaction(val: string)
    setToken(val: string)
    setCampaignId(val: string)
    onReady(cb: () => void)
    maximize()
    minimize()
    getConfig() : WidgetConfigService
    onOfferSelection() : Observable<void>
}

declare interface WidgetConfigService {
    getActionColor() : string
    getDangerColor() : string
    getSuccessColor() : string
    getThemeColor() : string
    setThemeColor(value: string) : string
    setSuccessColor(value: string) : string
    setActionColor(value: string) : string
    setDangerColor(value: string) : string
}

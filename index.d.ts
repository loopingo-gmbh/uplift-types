declare namespace loopingo_uplift {
    function mount(element: HTMLElement)
    function unmount()
    function pushEmailAddress(val: string)
    function pushCartValue(val: number)
    function pushBasketItem()
    function completeTransaction(val: string)
    function setToken(val: string)
    function setCampaignId(val: string)
    function onReady(cb: () => void)
    function maximize()
    function minimize()
    function getConfig() : WidgetConfigService
    function asd() : Rx.Observable<void>
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

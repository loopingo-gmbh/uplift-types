import {Observable} from 'rxjs'

declare interface loopingo_uplift
{
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
    getConfig(): WidgetConfigService
    deselectReward() : void    
    campaignRewardSelection$(): Observable<CampaignReward>
    getSelectionProgressState$() : Observable<ProgressState>
}

declare interface CampaignReward
{
    offer: Offer
    target_cart_value: number
    position: number
    id: string
    min_basket: number
}

declare interface Offer
{
    voucher_group: VoucherGroup
    title: string
    one_liner: string
    description: string
    url: string
    info_1: string
    info_2: string
    info_3: string
    terms: string
    terms_extended: string
    logo_image_link: string
    mood_image_link: string
    email_image_link: string
    id: string
    supplier_domain : string
}

declare interface VoucherGroup
{
    discount: string
    discount_description: string
    minimum_order_value: string
}

declare interface WidgetConfigService
{
    getActionColor(): string
    getDangerColor(): string
    getSuccessColor(): string
    getThemeColor(): string
    setThemeColor(value: string): this
    setSuccessColor(value: string): this
    setActionColor(value: string): this
    setDangerColor(value: string): this
}

declare interface ProgressState
{
    completed : boolean
    target : number
    current : number
    percentage : number
}

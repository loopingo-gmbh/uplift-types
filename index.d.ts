import {Observable} from 'rxjs'

declare interface loopingo_uplift
{
    createSession( data : SessionData) : void
    mount(element: HTMLElement) : void
    unmount() : void
    pushEmailAddress(val: string) : void
    pushCartValue(val: number) : void
    pushBasketItem() : void
    completeTransaction(val: string) : void
    onReady(cb: () => void) : void
    registerDisplay() : void
    registerMetaData(meta_data : any) : Promise<Response>
    deselectReward() : void
    selectReward(reward : CampaignReward) : void
    activateReward(reward : CampaignReward) : void
    rewardSelection$(): Observable<CampaignReward>
    selectionProgressState$() : Observable<ProgressState>
    getConfig(): WidgetConfigService
    getState() : State
    getCampaign() : Campaign
    hasActiveSession() : boolean
}

declare interface SessionData {
    auth_token : string
    campaign_candidates : CampaignCandidate[]
}

declare interface CampaignCandidate {
    weight : number
    campaign_id : string
}

declare interface Campaign {
    id: string
    promo_title: string
    promo_text: string
    rewards: CampaignReward[]
    is_baseline : boolean
}

declare interface State {
    get<T>(key : string) : T|null,
    set<T>(key : string, value : T): T,
    has(key : string) : boolean,
}

declare interface CampaignReward
{
    offer: Offer
    target_cart_value: number
    position: number
    id: string
    min_basket: number
    description : string    
}

declare interface Offer
{
    voucher_group: VoucherGroup
    one_liner: string
    description: string
    url: string
    info_1: string
    info_2: string
    info_3: string
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
    getFontSize(): string
    getBorderRadius(): string
    setThemeColor(value: string): this
    setSuccessColor(value: string): this
    setActionColor(value: string): this
    setDangerColor(value: string): this
    setFontSize(value: string) : this
    setBorderRadius(value: string) : this
}

declare interface ProgressState
{
    is_available : boolean
    current_cart_value : number
    target_cart_value : number
    percentage : number
    missing_amount : number
}

import stripe from "stripe";

export interface UserDetails {
    id:string;
    first_name :string;
    last_name :string;
    full_name?:string;
    billing_address?:stripe.Address;
    payment_method?:stripe.PaymentMethod[stripe.PaymentMethod.Type];
}

export interface Product {
    id:string;
    active?:boolean;
    name?:string;
    description?:string;
    image?:string;
    metadata?:stripe.Metadata;
}

export interface Price{
    id:string;
    product_id?:string;
    active?:boolean;
    description?:string;
    unit_amount?:number;
    currency?:string;
    type?:stripe.Price.Type;
    interval?:stripe.Price.Recurring.Interval;
    interval_count?:number;
    trial_period_days?:number | null;
    lookup_key?:string | null;
    metadata?:stripe.Metadata;
    products?:Product;
}

export interface Subscription {
    id : string;
    user_id:string;
    status?: stripe.Subscription.Status;
    metadata?:stripe.Metadata;
    price_id?:string;
    quantity?:number;
    cancel_at_period_end?:boolean;
    current_period_start?:string;
    current_period_end?:string;
    ended_at?:string;
    cancel_at?:string;
    trial_start?:string;
    trial_end?:string;
    prices?:Price;
}
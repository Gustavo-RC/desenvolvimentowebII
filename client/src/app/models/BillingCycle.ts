import { Credit } from "./Credit";
import { Debit } from "./Debit";

export class BillingCycle{
    _id?: string;
    date: Date;
    credits: [Credit];
    debits: [Debit];
    CreatedAt?: Date;
}
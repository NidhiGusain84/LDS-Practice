import { LightningElement, api, wire } from 'lwc';
import ACCOUNT_NAME from "@salesforce/schema/Account.Name";
import ACCOUNT_REVENUE from "@salesforce/schema/Account.AnnualRevenue";
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';

export default class GetRecordDemo extends LightningElement {
    @api recordId;
    accountName;
    accountRevenue;

    @wire (getRecord, {
        recordId: "$recordId",
        fields : [ACCOUNT_NAME, ACCOUNT_REVENUE]
    })
    outputFunction({data, error}){
        if (data) {
            console.log("data", data);
            // this.accountName = data.fields.Name.value;
            // this.accountRevenue = data.fields.AnnualRevenue.value;
            this.accountName = getFieldValue(data, ACCOUNT_NAME);
            this.accountRevenue = getFieldValue(data, ACCOUNT_REVENUE);
        }else if(error){
            console.log("error", error);
        }
    }

}
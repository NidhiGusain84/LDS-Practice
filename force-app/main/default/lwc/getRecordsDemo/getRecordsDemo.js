import { LightningElement, wire } from 'lwc';
import ACCOUNT_NAME_FIELD from "@salesforce/schema/Account.Name";
import CONTACT_NANE_FIELD from "@salesforce/schema/Contact.Name";
import { getRecords } from "lightning/uiRecordApi";

export default class GetRecordsDemo extends LightningElement {
    outputs;
    errors;

    @wire(getRecords, {
        records : [
            {
                recordIds: ["001aj00000BurUoAAJ", "001aj00000BurUjAAJ"],
                fields: [ACCOUNT_NAME_FIELD]
            },
            {
                recordIds: ["003aj000001dnbeAAA"],
                fields: [CONTACT_NANE_FIELD]
            }
        ]
    })
    outputFuntion({data, error}){
        if(data){
        console.log("data", data);
        this.outputs = data;
        this.errors = null;
        }else if(error){
        console.log("error", error);
        this.outputs = null;
        this.errors = error;
        }
    };
}
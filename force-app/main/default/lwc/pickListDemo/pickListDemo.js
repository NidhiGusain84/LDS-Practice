import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import ACCOUNT_INDUSTRY from "@salesforce/schema/Account.Industry";
import ACCOUNT_OBJECT from "@salesforce/schema/Account";

export default class PickListDemo extends LightningElement {

    value;

    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    accountInfo;

    @wire(getPicklistValues, {
        recordTypeId: "$accountInfo.data.defaultRecordTypeId",
        fieldApiName: ACCOUNT_INDUSTRY
    })industryPicklist;
    // industryPicklist({data, error}){
    //     if(data){
    //         console.log("data", data);
    //     }else if(error){
    //         console.log("error", error);
    //     }
    // }

    @wire(getPicklistValuesByRecordType, {
        objectApiName: ACCOUNT_OBJECT,
        recordTypeId : "$accountInfo.data.defaultRecordTypeId"
    })accountAllPicklist;
    // accountPicklistFunction({data, error}){
    //     if(data){
    //         console.log("data", data);
    //     }else if(error){
    //         console.log("error", error);
    //     }
    // }

    handleChange(event){
        this.value = event.target.value;
    }

}
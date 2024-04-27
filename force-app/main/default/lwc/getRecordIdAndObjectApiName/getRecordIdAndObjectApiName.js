import { LightningElement, api } from 'lwc';

export default class GetRecordIdAndObjectApiName extends LightningElement {
    @api recordId;
    @api objectApiName;
}
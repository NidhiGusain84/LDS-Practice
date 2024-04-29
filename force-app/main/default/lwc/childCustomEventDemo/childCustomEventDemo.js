import { LightningElement } from 'lwc';

export default class ChildCustomEventDemo extends LightningElement {
    clickHandler(event){
        let mycustomEvent = new CustomEvent("displaymsg");
        this.dispatchEvent(mycustomEvent);
    }
}
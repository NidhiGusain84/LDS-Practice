import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';
import Industry from '@salesforce/schema/Account.Industry';
import Rating from '@salesforce/schema/Account.Rating';

export default class NavigationDemo extends NavigationMixin(LightningElement) {

    navHomeClickHandler() {
        let pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home',
            },
        }
        this[NavigationMixin.Navigate](pageReference);
    }

    navAccountListClickHandler(event) {
        let pageReference = // Navigates to account list with the filter set to Recent.
        {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: 'PlatinumandGoldSLACustomers'
            }
        }
        this[NavigationMixin.Navigate](pageReference);
    }

    navCreateNewAccountClickHandler() {
        let pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            }
        }
        this[NavigationMixin.Navigate](pageReference);
    }
    createNewAcctWithDefaultValuesHandler() {
        const defaultValues = encodeDefaultFieldValues({
            Industry: "Energy",
            Rating: "Hot"
        });
        let pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            },
            state: {
                defaultFieldValues: defaultValues
            }
        }
        this[NavigationMixin.Navigate](pageReference);

    }

    editAccountHandler() {
        let pageReference = {
            type: 'standard__recordPage',
            attributes: {
                recordId: '001aj00000BurUjAAJ',
                objectApiName: 'Account',
                actionName: 'edit'
            }
        }
        this[NavigationMixin.Navigate](pageReference);
    }

}
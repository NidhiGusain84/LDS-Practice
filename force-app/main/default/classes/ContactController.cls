public with sharing class ContactController{
    @AuraEnabled(cacheable = true)
    public static List<Contact> getContactList(){
        List<Contact> contactList = [SELECT Id, Name, FirstName, LastName, Title, Email, Phone, PhotoUrl
                                     FROM Contact
                                     WHERE PhotoUrl != NULL
                                     WITH USER_MODE
                                     LIMIT 10];
        return contactList;
    }

}
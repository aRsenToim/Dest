class LocalStorageUtilits{
    constructor(){
        this.keyIsAccount = 'isAccount'
        this.defaultIsAccount = {
            account: false,
            idAccount: null,
        };
    }
    isAccountGet(){
        const result = localStorage.getItem(this.keyIsAccount)
        if (result == null) {
            isAccount = {
                account: false,
                idAccount: null,
            };   
        }
        isAccount = JSON.parse(result)
    }
    isAccountSet(Element){
        localStorage.setItem(this.keyIsAccount, JSON.stringify(Element))
    }
}
const localStorageUtilits = new LocalStorageUtilits()

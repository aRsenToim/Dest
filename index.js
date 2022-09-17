let isAccount = {
    account: false,
    idAccount: null,
};
localStorageUtilits.isAccountGet()
if (isAccount.account) {
    header.render(false)
}else{
    header.render(true)
}
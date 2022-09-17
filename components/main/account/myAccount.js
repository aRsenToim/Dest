class MyAccount{
    render(){
        const accountResult = Accounts.find(item => item.idAccount == isAccount.idAccount)
        const articles = account.renderCatalogArticles(accountResult.info.MyArticles)
        if (!accountResult) {
            return;
        }
        const html = `
        <div class="mainBody">
            <div class="wrapper">
                <div class="main__app">
                    <div class="main__myAccount">
                        <div class="myAccount__header">
                            <div class="account__img">
                                <img src="${accountResult.info.img}" alt="" srcset="">
                                <h1>${accountResult.info.name}</h1>
                                <div class="myAccount__setting" onclick='setting.render()'>Настройки аккаунта</div>
                            </div>
                            <div class="myAccount__info">
                                <div class="MyAccount__sections subscribers">
                                    <h1>${accountResult.info.subscribers.length}</h1>
                                    <span>Подписчиков</span>
                                </div>
                                <div class="MyAccount__sections subscriptions">
                                    <h1>${accountResult.info.subscriptions.length}</h1>
                                    <span>Подписки</span>
                                </div>
                                <div class="MyAccount__sections subscribers">
                                    <h1>${accountResult.info.friends.length}</h1>
                                    <span>Друзей</span>
                                </div>
                            </div>
                        </div>
                        <div class="myAccount__main">
                            ${articles}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        ROOT_MAIN.innerHTML = html;
    }
}
const myAccount = new MyAccount() 
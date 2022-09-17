class Account{
    subscribersAccount(ElemidAccount){
        const UserAccount = Accounts.find(Account => Account.idAccount == ElemidAccount)
        const IndexUser = Accounts.indexOf(UserAccount)
        let indexAccount = UserAccount.info.subscriptions.indexOf(`idAccount: ${isAccount.idAccount}`);
        if (indexAccount == -1) {
            // UserAccount.info.subscriptions.push(`idAccount: ${isAccount.idAccount}`)
            UserAccount.info.name = 'add'
        }else{
            // UserAccount.info.subscriptions.splice(indexAccount, 1)
            UserAccount.info.name = 'noAdd'  
        }
        Accounts.splice(IndexUser, 1, UserAccount)
        console.log(Accounts[IndexUser])
        this.render(ElemidAccount)
    }
    renderCatalogArticles(articles){
        let ArticleHtml = ``; 
        articles.forEach(({title, idAccount, idArticle, imgBanner, autor, description, time}) => {
            ArticleHtml += `
                <div class="articles__article article">
                    <div class="img">
                        <img src="${imgBanner}" id='${idArticle}' onclick='articleHtml.render(this.id)' alt="">
                    </div>
                    <div class="description">
                        <h3 class="description__title">${title}</h3>
                        <div class="description__autor">
                            <a id='${idAccount}' onclick='account.render(this.id)'>${autor}</a>
                        </div>
                        <p class="article__description">
                            ${description} 
                        <p>
                        <div class="Statistics">
                            <span class="time">${time}</span>
                        </div>
                    </div>
                </div>
            `
        })
        return ArticleHtml;
    }
    render(idElem){
        const obj = Accounts.find(item => item.idAccount == idElem)
        const MyArticles = this.renderCatalogArticles(obj.info.MyArticles)
        let account__button = `
            <span class="btn_subscribers" onclick="account.subscribersAccount(${idElem})">
            +
            </span>
        `
        if (idElem == isAccount.idAccount) {
            account__button = ``
        }
        const html = `
        <div class="mainBody">
            <div class="wrapper">
                <div class="main__app">
                    <div class="main__account">
                        <div class="account flex">
                            <div class="account__header">
                                <div class="account__img">
                                    <img src="${obj.info.img}" alt="">
                                </div>
                                <div class="account__info">
                                    <div class="account__name">
                                        <h1>${obj.info.name}</h1>
                                    </div>
                                    <div class="account__subscriber">
                                        <span>${obj.info.subscribers.length} подписчиков</span>
                                    </div>
                                </div>
                            </div>
                            ${account__button}
                        </div>
                        <div class='MyArticle'>
                            <div class='banner'>
                                <h1>Статьй ${obj.info.name}:</h1>
                            </div>
                            <div class='articleCatalog'>
                                ${MyArticles}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        ROOT_MAIN.innerHTML = html;
    }
}
const account = new Account()
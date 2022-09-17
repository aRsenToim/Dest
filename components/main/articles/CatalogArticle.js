class Article{
    renderArticlesHtml(){
        let html = ``;
        let ArticleHtml = ``
        CatalogArticle.forEach(({idCatalog, mode, type, articles}) => {
            if(type == 'catalog'){
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
                html += `
                <div class="articles__mode">
                    <div class="articles_title">
                        <h2>${mode}</h2>
                    </div>
                    <div class="articles__line">
                        ${ArticleHtml}
                    </div>
                </div>
                `
                ArticleHtml = ``
            }
        })
        return html;
    }
    renderArticles(){
        const html = this.renderArticlesHtml()
        ROOT_MAIN.innerHTML = `
        <div class="mainBody">
            <div class="wrapper">
                <div class="main__app">
                    <div class="main__articles">
                        <div class="banner">
                            <h1>Добро, пожаловать!</h1>
                            ${html}
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        `
    }
}
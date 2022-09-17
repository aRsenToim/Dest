class ArticleHtml{
    render(idElem){
        const obj = Articles.find(item => item.idArticle == idElem)
        if(!obj) return;
        const articleHtml = obj.article
        const html = `
        <div class="mainBody">
            <div class="wrapper">
                <div class="main__app">
                    <div class="main__article">
                            <div class="article">
                                <div class="article__info">
                                    <div class="article__title">
                                        <h1>${articleHtml.title}</h1>
                                    </div>
                                    <div class="flex">
                                        <div class="article__infoAutor">
                                            <div class="article__img">
                                                <img src="${articleHtml.autor.img}" alt="">
                                            </div>
                                            <div class="article__info">
                                                <div class="article__namaAutor">
                                                    <h2 id='${articleHtml.autor.idAccount}' onclick='account.render(this.id)'>${articleHtml.autor.name}</h2>
                                                    <div class="verifedAutor"></div>
                                                </div>
                                            </div>
                                        </div>  
                                    </div>
                                    <div class="article__text">
                                        ${articleHtml.textHtml}
                                    </div>
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
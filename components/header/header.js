class Header{
    OnComein(){
        document.querySelector('.header__button').classList.remove('header__button-active')
    }
    comein(){
        document.querySelector('.header__button').classList.add('header__button-active')
    }
    render(meaning){
        let html = `
            <div class="headerbody">
                <div class="wrapper">
                    <div class="header__navbar">
                        <a href="#" onclick='articlesCatalog.renderArticles()' class="header__logo logo">DEST</a>
                        <ul class="header__nav">
                            <li onclick='articlesCatalog.renderArticles(), header.OnComein()'>Статьй</li>
                            <li onclick='searchHtml.render(), header.OnComein()'>Поиск</li>
                            <li onclick='helpedHtml.render(), header.OnComein()'>FAQ</li>
                            <li class="header__button comein" onclick='comeinHtml.render(), header.comein()'>Войти</li>
                        </ul>
                    </div>
                </div>
            </div>
        `
        if (meaning == false) {
            html = `
                <div class="headerbody">
                    <div class="wrapper">
                        <div class="header__navbar">
                            <a href="#" onclick='articlesCatalog.renderArticles()' class="header__logo logo">DEST</a>
                            <ul class="header__nav">
                                <li onclick='articlesCatalog.renderArticles()'>Статьй</li>
                                <li onclick='searchHtml.render()'>Поиск</li>
                                <li onclick='helpedHtml.render()'>FAQ</li>
                                <li onclick='myAccount.render()'>Мой аккаунт</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        }
        ROOT_HEADER.innerHTML = html
    }
}
const header = new Header()
class Comein{
    GoComein(phone, password){
        if (phone == '' || password == '') return;
        const phonePas = phone + password;
        let idResult = null;
        Accounts.forEach(({idAccount, infoAccount, info}) => {
            if(infoAccount.phonePassword == phonePas){
                idResult = idAccount
            }
        })
        if (idResult == null) return;
        isAccount = {
            account: true,
            idAccount: idResult,
        };
        localStorageUtilits.isAccountSet(isAccount)
        header.render(false)
        myAccount.render()
    }
    render(){
        const html = `
        <div class="mainBody">
            <div class="wrapper">
                <div class="main__app">
                    <div class="main__comein">
                        <div class="comein__banner banner">
                            <h1>Войти:</h1>
                        </div>
                        <div class="comein__conteiner">
                        <form class="comein__form">
                            <input type="text" placeholder="Номер телефона" id="comeinPhone" class="comein__input input-phone">
                            <input type="text" placeholder="Пароль" id="comeinPassword" class="comein__input input-password">
                            <button class="comein-button" onclick="comeinHtml.GoComein(document.getElementById('comeinPhone').value, document.getElementById('comeinPassword').value)" type="button">Войти</button>
                        </form>
                            <div class="description">
                                <a href="" class="reset-password">Восстоновить Пароль</a>
                                или
                                <a href="" class="regist">Зарегестрироваться</a>
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
const comeinHtml = new Comein()
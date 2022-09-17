class Setting{
    outAccount(){
        localStorageUtilits.isAccountSet(localStorageUtilits.defaultIsAccount)
        location.reload() 
    }
    render(){
        const html = `
        <div class="mainBody">
            <div class="wrapper">
                <div class="main__app">
                    <div class="main__settingAccount">
                        <div class="banner">
                            <h1>Настройки аккаунта</h1>
                        </div>
                        <div class="main__settingBody">
                            <span class="outAccount_button" onclick='setting.outAccount()'>
                                Выйти из аккаунта
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        ROOT_MAIN.innerHTML = html;
    }
}
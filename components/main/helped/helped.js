class HelpedHtml{

    accordion(){
        const components = Array.from(document.querySelectorAll(".components"))
        components.forEach(elem => {
            elem.addEventListener("click", boxOpen)
        })
        function boxOpen(event) {
            if(event.target.className != "label") return;
            let nextNeighbor = event.target.nextElementSibling;
            nextNeighbor.classList.toggle("active")
        }
    }
    render(){
        const html = `
        <div class="mainBody">
            <div class="wrapper">
                <div class="main__app">
                    <div class="helped">
                        <div class="helped__banner">
                            <h1>Чем мы можем вам помочь?</h1>
                        </div>
                        <div class="helped__input">
                            <input type="text" placeholder="Опишите проблему">
                        </div>
                        <div class="header__accordion">
                            <div class="components">
                                <div class="label">Что такое Dest?</div>
                                <div class="text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum consectetur magnam adipisci? Quos ut et, quo repudiandae repellendus a dolorum, recusandae pariatur eum ipsa, nobis vitae error ratione laudantium laboriosam? Culpa aut omnis quis similique commodi voluptates architecto corporis, modi ea earum odio laborum consectetur assumenda laboriosam sunt obcaecati, accusamus ipsum totam voluptatibus recusandae repellat? Tempora molestias, at maxime soluta ad ipsam, maiores suscipit molestiae enim dolores ratione cupiditate itaque nostrum voluptas dolorem accusantium aliquam!
                                </div>
                            </div>
                            <div class="components">
                                <div class="label">Как создать аккаунт?</div>
                                <div class="text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum consectetur magnam adipisci? Quos ut et, quo repudiandae repellendus a dolorum, recusandae pariatur eum ipsa, nobis vitae error ratione laudantium laboriosam? Culpa aut omnis quis similique commodi voluptates architecto corporis, modi ea earum odio laborum consectetur assumenda laboriosam sunt obcaecati, accusamus ipsum totam voluptatibus recusandae repellat? Tempora molestias, at maxime soluta ad ipsam, maiores suscipit molestiae enim dolores ratione cupiditate itaque nostrum voluptas dolorem accusantium aliquam!
                                </div>
                            </div>
                            <div class="components">
                                <div class="label">Как удалить аккаунт?</div>
                                <div class="text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum consectetur magnam adipisci? Quos ut et, quo repudiandae repellendus a dolorum, recusandae pariatur eum ipsa, nobis vitae error ratione laudantium laboriosam? Culpa aut omnis quis similique commodi voluptates architecto corporis, modi ea earum odio laborum consectetur assumenda laboriosam sunt obcaecati, accusamus ipsum totam voluptatibus recusandae repellat? Tempora molestias, at maxime soluta ad ipsam, maiores suscipit molestiae enim dolores ratione cupiditate itaque nostrum voluptas dolorem accusantium aliquam!
                                </div>
                            </div>
                            <div class="components">
                                <div class="label">Как создать статью?</div>
                                <div class="text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum consectetur magnam adipisci? Quos ut et, quo repudiandae repellendus a dolorum, recusandae pariatur eum ipsa, nobis vitae error ratione laudantium laboriosam? Culpa aut omnis quis similique commodi voluptates architecto corporis, modi ea earum odio laborum consectetur assumenda laboriosam sunt obcaecati, accusamus ipsum totam voluptatibus recusandae repellat? Tempora molestias, at maxime soluta ad ipsam, maiores suscipit molestiae enim dolores ratione cupiditate itaque nostrum voluptas dolorem accusantium aliquam!
                                </div>
                            </div>
                            <div class="components">
                                <div class="label">Как получить монетезацию?</div>
                                <div class="text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum consectetur magnam adipisci? Quos ut et, quo repudiandae repellendus a dolorum, recusandae pariatur eum ipsa, nobis vitae error ratione laudantium laboriosam? Culpa aut omnis quis similique commodi voluptates architecto corporis, modi ea earum odio laborum consectetur assumenda laboriosam sunt obcaecati, accusamus ipsum totam voluptatibus recusandae repellat? Tempora molestias, at maxime soluta ad ipsam, maiores suscipit molestiae enim dolores ratione cupiditate itaque nostrum voluptas dolorem accusantium aliquam!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        ROOT_MAIN.innerHTML = html;
        this.accordion()
    }
}
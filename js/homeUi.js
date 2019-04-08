class HomeUI {
    constructor () {
        this.userName = document.querySelector('.user-name');
        this.projectsContainer = document.querySelector('.project-list-wrapper .container .row');
    }

    setUserName(email) {
        this.userName.textContent = email;
    }

    //generate project card template
    generateProjectCards (projects) {
        this.projectsContainer.innerHTML = '';
        //show alert
        if(!projects.length) return this.projectsContainer.insertAdjacentHTML('afterbegin', HomeUI.projectListEmpty());
        projects.forEach(project => this.projectsContainer.insertAdjacentHTML('afterbegin', HomeUI.projectCardTemplate(project)));
    }

    //show alert if projects are empty
    static projectListEmpty() {
        const template = `
            <div class="col-12 alert alert-warning">Empty project list</div>
        `;
        return template;
    }

    // html template for project card
    static projectCardTemplate(project) {
        const template = `
            <div class="col-4">
                <div class="card" data-id="${project.id}">
                    ${project.img ? `<img class="card-img-top" src="${project.img}" alt="card img cap">` : ''}
                  <div class="card-body">
                    <h5 class="card-title">${project.name}</h5>
                    <p class="card-text">${project.description}</p>
                    <a href="#" class="btn btn-primary edit ml-5 w-25" data-toggle="modal" data-target="#changeProject">Edit</a>
                    <a href="#" class="btn btn-danger delete-btn ml-5 w-25">Delete</a>
                  </div>
                </div>
            </div>
        `;
        return template;
    };
}
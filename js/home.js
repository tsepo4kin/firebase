//init auth
const auth = new Auth();

//init user
const user = User.getInstance();

//init projects
const projects = new Projects();

//init homeUi
const ui = new HomeUI();

// init id
const id = Id;

// init elements
const signOut = document.querySelector('.sign-out');
const projectsContainers = document.querySelector('.project-list-wrapper');
const addProject = document.querySelector('.add_project');
const changeProject = document.querySelector('.change_project');
const cards = document.querySelector('.card-body');
let idChang;

// auth.checkAuth()
firebase.auth().onAuthStateChanged(function(authUser) {
    if (!user) {
        //redirect
        window.location = 'login.html';
    }
    else {
        //set user
        user.setUser({email: authUser.email});
        ui.setUserName(authUser.email);
    }
});



signOut.addEventListener('click', (e) => {
    auth.signOut()
        .then(status => {
            if(status) {
                window.location = 'login.html';
            }
        })
        .catch(er => console.log(er));
});

// get projects
projects.getAllProgects()
    .then(prArr => ui.generateProjectCards(prArr))
    .catch(err => console.log(err));

//delete project
projectsContainers.addEventListener('click', (e) =>{
    if(e.target.classList.contains('edit')) {
        e.preventDefault();
        idChang = e.target.closest('.card').dataset.id;
    }

    //Check e.target === btn-delete
    if(e.target.classList.contains('delete-btn')) {
        const id = e.target.closest('.card').dataset.id;
        //delete project
        projects.deleteProject(id)
            .then(projects.getAllProgects)
            .then((prArr) => ui.generateProjectCards(prArr))
            .catch((err) => console.log(err));
    }
})

addProject.addEventListener('click', function(e) {
    e.preventDefault();
    // init fields
    const prName = document.getElementById('projectName').value;
    const prDescription = document.getElementById('projectDescription').value;
    const prPrice = document.getElementById('projectPrice').value;
    const prImg = document.getElementById('projectImg').value;
    const pr = {
        id: id.generate(),
        name: prName,
        description: prDescription,
        price: prPrice,
        img: prImg
    };
    console.log(pr);

    projects.addProject(pr)
        .then(projects.getAllProgects)
        .then((prArr) => ui.generateProjectCards(prArr))
        .catch(err => console.log(err));
})

changeProject.addEventListener('click', function(e) {
    e.preventDefault();
    // init fields
    const prName = document.getElementById('changepProjectName').value;
    const prDescription = document.getElementById('changepProjectDescription').value;
    const prPrice = document.getElementById('changepProjectPrice').value;
    const prImg = document.getElementById('changepProjectImg').value;
    const pr = {
        id: idChang,
        name: prName,
        description: prDescription,
        price: prPrice,
        img: prImg
    };
    console.log(pr);

    projects.changeProject(pr)
        .then(projects.getAllProgects)
        .then((prArr) => ui.generateProjectCards(prArr))
        .catch(err => console.log(err));
})












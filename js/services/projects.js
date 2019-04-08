//Init FireBase
const db = FireBase.getInstance().getDb();

class Projects {
    async getAllProgects () {
        const projects = [];
        await db.collection("projects").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let project = Object.assign(doc.data(), {id: doc.id});
                projects.push(project);
            });
        });

        return projects;
    }

    async changeProject (changePr) {
        await db.collection("projects").doc(changePr.id).set({
            name: changePr.name,
            description: changePr.description,
            price: changePr.price,
            img: changePr.img
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }

    async addProject (prAdd) {
        await db.collection("projects").doc(prAdd.id).set({
            name: prAdd.name,
            description: prAdd.description,
            price: prAdd.price,
            img: prAdd.img
        })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
    }

    async deleteProject (id) {
        await db.collection("projects").doc(id).delete().then(()=> {
                console.log('Document successfully deleted!');
                return Promise.resolve();
            }).catch(err => Promise.reject(err));
    }
}
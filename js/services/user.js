const User = (function () {

    let currentUser;
    let instance;

    const getUser = function() {
        return currentUser;
    };

    const setUser = function (user) {
        return currentUser = user
    }

    const createInstace = function () {
        return {
            getUser,
            setUser
        }
    };

    return {
        getInstance: function() {
            return instance || (instance = createInstace());
        }
    }

}());
module.exports = {
    isAuthed: (req, res, next) => {
        if (req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/login');
        }
    },
    hasRole: (role) => (req, res, next) => {
        if (req.isAuthenticated() &&
            req.user.roles.indexOf(role) > -1) {
            next();
        } else {
            res.redirect('/login');
        }
    },
	isAnonymous: (req, res, next) => {
        if (!req.isAuthenticated()) {
            next();
        } else {
            res.redirect('/');
        }
    },
    isSameUser: (req, res, next) => {
        if (req.user.id !== req.params.id) {
            res.redirect('/');
            return;
        }

        next();
    }
}
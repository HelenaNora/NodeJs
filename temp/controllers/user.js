exports.sayUser = (req, res, next) => {
    res.send('<h1>Hello User</h1>');
};

exports.sayExpress = (req, res, next) => {
    res.render('welcome', {
        pageTitle:"Hello Express"
    });
};
module.exports = {

    printFirst: function () {
        console.log("print this value # First");
    },

    printSecond: function () {
        console.log("print the value # second")
    },
    favoriteMovie: "Ichigo"
};

function printAvatar() {
    console.log("Avatar: PGa");
}

function printHello() {
    console.log("Hello -y12");
}

module.exports.avatar = printAvatar;
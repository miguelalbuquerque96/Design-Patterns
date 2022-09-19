//imediate anonymous function
var Singleton = (function () {
    var instance; //private instance

    function createInstance() {
        var object = new Object("I am the instance");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) { //lazy loading only creates instance when needed
                instance = createInstance();
            }
            return instance;
        }
    };
})();



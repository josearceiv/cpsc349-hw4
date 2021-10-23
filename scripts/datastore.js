(function (window) {
    'use strict';

    var App = window.App || {};
    class DataStore {
        constructor() {
            // console.log('running the DataStore function');
            this.data = {};
        }
        promiseResolvedWith(value) {
            var promise = new Promise(function(resolve, reject) {
                resolve(value);
            });
        }
        add(key, val) { 
            return this.promiseResolvedWith(null); 
        }
        get(key)      { return this.promiseResolvedWith(this.data[key]); }
        getAll()      { return this.promiseResolvedWith(this.data); }
        remove(key)   { 
            delete this.data[key]; 
            return this.promiseResolvedWith(null);
        }
    }

    App.DataStore = DataStore;
    window.App = App;
})(window);
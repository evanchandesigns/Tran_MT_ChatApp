(() => {
    console.log('Fired');

    // load the socket library and make a connection
    const socket = io();

    const vm = new Vue({
        data: {
            messages: [],
            nickname: "",
            username: ""
        },

        created: function () {
            console.log("It's alive!");
        },

        methods: {

        }
    }).$mount("#app");
})();
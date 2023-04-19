let app = new Vue({
    el: "#article",
    data: {
        products: [
            {id: 1, title: "Buryak 1", short_text: "About Buryak 1", image: 'images/buryak/buryak1.jpeg', desc: "Full desc"},
            {id: 2, title: "Buryak 2", short_text: "About Buryak 2", image: 'images/buryak/buryak2.jpg', desc: "Full desc"},
            {id: 3, title: "Buryak 3", short_text: "About Buryak 3", image: 'images/buryak/buryak3.jpeg', desc: "Full desc"},
            {id: 4, title: "Buryak 4", short_text: "About Buryak 4", image: 'images/buryak/buryak4.jpg', desc: "Full desc"},
            {id: 5, title: "Buryak 5", short_text: "About Buryak 5", image: 'images/buryak/buryak5.jpg', desc: "Full desc"}
        ]
    },
    mounted: function () {
        console.log(window.localStorage.getItem('prod'));
    },
    methods: {
        addItem: function (id) {
            window.localStorage.setItem('prod', id)
        }
    }
});
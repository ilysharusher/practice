let app = new Vue({
    el: "#article",
    data: {
        products: [
            {
                id: 1,
                title: "Buryak 1",
                short_text: "About Buryak 1",
                image: 'images/buryak/buryak1.jpeg',
                desc: "Full desc"
            },
            {
                id: 2,
                title: "Buryak 2",
                short_text: "About Buryak 2",
                image: 'images/buryak/buryak2.jpg',
                desc: "Full desc"
            },
            {
                id: 3,
                title: "Buryak 3",
                short_text: "About Buryak 3",
                image: 'images/buryak/buryak3.jpeg',
                desc: "Full desc"
            },
            {
                id: 4,
                title: "Buryak 4",
                short_text: "About Buryak 4",
                image: 'images/buryak/buryak4.jpg',
                desc: "Full desc"
            },
            {
                id: 5,
                title: "Buryak 5",
                short_text: "About Buryak 5",
                image: 'images/buryak/buryak5.jpg',
                desc: "Full desc"
            }
        ],
        product: [],
        butVisible: 0
    },
    mounted: function () {
        this.getProduct();
    },
    methods: {
        getProduct: function () {
            if (window.location.hash) {
                let id = window.location.hash.replace('#', '');
                console.log(id);
                if (this.products && this.products.length > 0) {
                    for (let i in this.products) {
                        console.log(this.products[i].id, id);
                        if (this.products[i] && this.products[i].id && id == this.products[i].id) {
                            console.log(this.products[i]);
                            this.product = this.products[i];
                        }
                    }
                }
            }
        }
    }
});
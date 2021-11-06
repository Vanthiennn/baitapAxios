function ProductService() {
    this.array = [] ;

    this.getListProductApi = function() {
        return axios({
            url:"https://618561dc23a2fe0017fff5e9.mockapi.io/api/products" ,
            method: "GET" ,
        })
    }
}
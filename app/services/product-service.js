function ProductService() {
    this.array = [] ;

    this.getListProductApi = function() {
        return axios({
            url:"https://61927954d3ae6d0017da811c.mockapi.io/api/products" ,
            method: "GET" ,
        });
    };

    this.deleteProductApi = function(id) {
        return axios({
            url:`https://61927954d3ae6d0017da811c.mockapi.io/api/products/${id}`,
            method:"DELETE"
        });
    };

    this.addProductApi = function(product) {
        return axios({
            url : "https://61927954d3ae6d0017da811c.mockapi.io/api/products" ,
            method: "POST",
            // post phải có thêm data 
            data: product
        });
    };

    this.getProductById = function(id) {
        return axios({
            url : `https://61927954d3ae6d0017da811c.mockapi.io/api/products/${id}` ,
            method: "GET",
        })
    }
    this.updateProductApi = function(product) {
        return axios({
            url : `https://61927954d3ae6d0017da811c.mockapi.io/api/products/${product.id}` ,
            method: "PUT",
            data:product
        })
    }

}
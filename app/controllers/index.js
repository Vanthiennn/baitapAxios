var service = new  ProductService()


function getListProduct(){
    service
    .getListProductApi()
    .then(function(result){
        renderData(result.data)
    })
    .catch(function(error){
        console.log(error)
    })
}
getListProduct()

function getELE(id) {
    return document.getElementById(id)
}

function renderData(data) {
    var html = "" ;
    data.forEach(function(item,index){
        html += `<tr>
            <td style="vertical-align:middle">${index + 1}</td>
            <td style="vertical-align:middle">${item.tenSP}</td>
            <td style="vertical-align:middle">${item.gia}</td>
            <td style="vertical-align:middle"><img src="../../assets/img/${item.hinhAnh}" alt="..." width="50"></td>
            <td style="vertical-align:middle">${item.moTa}</td>
            <td style="vertical-align:middle">
                <button data-toggle="modal" data-target="#myModal" class="btn btn-info" onclick="editProduct(${item.id})">Edit</button>
                <button class="btn btn-danger" onclick="deleteProduct(${item.id})">Delete</button>
            </td>
        </tr>` ;
    })
    getELE("tblDanhSachSP").innerHTML = html
}

function deleteProduct(id) {
    service
    .deleteProductApi(id)
    .then(function(result){
        console.log(result)
        // làm mới dữ liệu mới nhất từ server
        getListProduct()
    })
    .catch(function(error){
        console.log(error)
    })
}




getELE("btnThemSP").addEventListener("click",function(){
    document.getElementsByClassName("modal-title")[0].innerHTML = "Add products" ;
    var footerModal = `<button class="btn btn-success" onclick="addProduct()">Add product</button>`
    document.getElementsByClassName("modal-footer")[0].innerHTML = footerModal
})

/**
 * Add Product
 * */ 

function addProduct() {
    // lấy value từ các thẻ input
    var tenSP = getELE("TenSP").value ;
    var gia = getELE("GiaSP").value ;
    var hinhAnh = getELE("HinhSP").value ;
    var moTa = getELE("moTa").value ; 

    var product = new Product("",tenSP, gia, hinhAnh, moTa);
    service
    .addProductApi(product)
    .then(function(result){
        // Tắt modal
        document.getElementsByClassName("close")[0].click();
        // làm mới data
        getListProduct()
    })
    .catch(function(error){
        console.log(error)
    })
}

function editProduct(id){
    document.getElementsByClassName("modal-title")[0].innerHTML = "Edit products" ;
    var footerModal = `<button class="btn btn-success" onclick=updateProduct(${id})>Edit products</button>`
    document.getElementsByClassName("modal-footer")[0].innerHTML = footerModal

    service
    .getProductById(id)
    .then(function(result){
        // hiển thị product ra UI
      getELE("TenSP").value = result.data.tenSP ;
      getELE("GiaSP").value = result.data.gia ;
      getELE("HinhSP").value = result.data.hinhAnh ;
      getELE("moTa").value = result.data.moTa ;
    }) 
    .catch(function(error){
        console.log(error)
    })
}

function updateProduct(id) {
    var tenSP = getELE("TenSP").value ;
    var gia = getELE("GiaSP").value ;
    var hinhAnh = getELE("HinhSP").value ;
    var moTa = getELE("moTa").value ; 
    var product = new Product(id,tenSP,gia,hinhAnh,moTa) ;
    service
    .updateProductApi(product)
    .then(function(result){
        // Tắt modal
        document.getElementsByClassName("close")[0].click();
        // làm mới data
        getListProduct()
    })
    .catch(function(error){
        console.log(error)
    })
}


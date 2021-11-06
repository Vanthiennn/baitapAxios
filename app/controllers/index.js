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
    data.forEach(function(item){
        html += `<tr>
            <td style="vertical-align:middle">${item.soThuTu}</td>
            <td style="vertical-align:middle">${item.tenSP}</td>
            <td style="vertical-align:middle">${item.gia}</td>
            <td style="vertical-align:middle"><img src="../../assets/img/${item.hinhAnh}" class="card-img-top" alt="..."></td>
            <td style="vertical-align:middle">${item.moTa}</td>
            <td style="vertical-align:middle">Action</td>
        </tr>` ;
    })
    getELE("tblDanhSachSP").innerHTML = html
}


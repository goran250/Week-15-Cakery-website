
function getQueryString() {
    const params = new URLSearchParams(window.location.search);
    
    if (params.has('product') && params.has('price')) {
        var product = params.get('product');
        var price = params.get('price');
        document.getElementById("message").innerHTML = product + "  " + price + " kr";
    }
}
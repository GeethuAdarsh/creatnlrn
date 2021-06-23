package helloworld.app

class InventoryController {

    def index() {
        render "Here is a sample text"
    }
    def edit() {
        def productName = "Breakfast Blend"
        def sku = "BB01"
        [product : productName, sku : sku]
    }
    def remove() {
        render "Your text has been removed"
    }
    def list() {
        def allProducts = Product.list()
        [allProducts : allProducts]
    }
}

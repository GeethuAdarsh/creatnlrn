package helloworld.app

class CustomerController {

    def calculationsService

    static scaffold = Customer


    def lookup() {
//        def customerInstance = Customer.list(sort:"lastName" , order:"desc" , max : 5, offset : 5)
        //def customerInstance = Customer.list()
        //def customerInstance = Customer.findAllByLastName("Foster")
        //def customerInstance = Customer.findByPhone(345834975,[sort : "lastName"]
        //def customerInstance = Customer.findByPhone(params.id)

        //comparators
//        def customerInstance = Customer.findAllByLastNameLike("B%")
       //def customerInstance = Customer.findAllByLastNameIlike("B%") //Insensitive
       // def customerInstance = Customer.findAllByTotalPointsGreaterThanEquals(3,[sort : "TotalPoints" , order : "desc"])
        //def customerInstance = Customer.findAllByFirstNameAndTotalPoints("Bo",3)
        //def customerInstance = Customer.findAllByFirstNameIlikeAndTotalPointsGreaterThanEquals("B%",3)
        [customerInstanceList : customerInstance]
    }

    def checkin() {}

    def index(){
        params.max=5
       // params.offset = 0
      // [customerInstanceList: Customer.list(params) , customerInstanceCount : Customer.count()]
        respond Customer.list() , [customerInstanceCount : Customer.count()]
    }

    def create(){
        respond new Customer()
    }
    def save(Customer customerInstance){
        customerInstance.save()
        redirect(action:"show", id : customerInstance.id)
    }
    def show(Long id){
        def customerInstance = Customer.get(id)
        customerInstance = calculationsService.getTotalPoints(customerInstance)
        respond customerInstance
    }
    def edit(Long id){
        def customerInstance = Customer.get(id)
        respond customerInstance
    }
    def update(Long id){
        def customerInstance = Customer.get(id)
      //  customerInstance.properties = params
        customerInstance.save()
        redirect(action:"show", id : customerInstance.id)
    }
    def delete(Long id){
        def customerInstance = Customer.get(id)
        customerInstance.delete()
        redirect(action:"index")
    }

}

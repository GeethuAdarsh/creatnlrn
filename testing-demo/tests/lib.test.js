const lib = require('../lib')

describe('absolute' , ()=>{

    it('should return a positive number if the input is positive', ()=>{
        const result = lib.absolute(1);
        expect(result).toBe(1)
     })
     
     it('should return a positive number if the input is negative', ()=>{
         const result = lib.absolute(-1);
         expect(result).toBe(1)
      })
     
     it('should return 0 number if the input is 0', ()=>{
         const result = lib.absolute(0);
         expect(result).toBe(0)
      })
})

describe('greet' , () =>{
    
    it('should return a message with the name', ()=>{
        const result = lib.greet('geethu');
        expect(result).toMatch(/geethu/);
        expect(result).toContain('geethu') //if we dont use regex can use tocontain
    })
})

describe('getCurrencies' , ()=>{
    it('should return supported currencies' , ()=>{
        const result = lib.getCurrencies();

        //Too general
        expect(result).toBeDefined();
       // expect(result).toBeNull();

        //Too specific
        expect(result[0]).toBe('INR');
        expect(result[1]).toBe('EUR');
        expect(result[2]).toBe('USD');
        expect(result.length).toBe(3);

        //Proper way
        expect(result).toContain('INR');
        expect(result).toContain('EUR');
        expect(result).toContain('USD');

        //Ideal way
        expect(result).toEqual(expect.arrayContaining(['INR','EUR','USD']))
    })
})

describe('getProduct' , ()=>{
    it('should return the product with given id' , ()=>{
        const result = lib.getProduct(1);
       // expect(result).toBe({id:1,price:10}); //dont use too specific
        //expect(result).toEqual({id:1,price:10})  //dont use too specific

        expect(result).toMatchObject({id:1,price:10}); //better
        expect(result).toHaveProperty('id',1)
    })
})

describe('registerUser' , ()=>{
    it('should throw if username is falsy' , ()=>{
        const args = [null,undefined,NaN,0,'',false];
        args.forEach(a =>{
            expect(()=> {lib.registerUser(a)}).toThrow();
        })
    })
    it('should return a user if valid username is passed' , ()=>{
        const result = lib.registerUser('geethu');
        expect(result).toMatchObject({username :'geethu'})
        expect(result.id).toBeGreaterThan(0);
    })
})

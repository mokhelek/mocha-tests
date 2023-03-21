describe('Test my greet function' , function(){
    it("it should return 'Hello Katleho' " , function(){
        assert.equal("Hello Katleho", greet("Katleho") );
    });
    it("it should return 'Hello Malebo' " , function(){
        assert.equal("Hello Malebo", greet("Malebo") );
    });
    it("it should return 'Hello Mthunzi' " , function(){
        assert.equal("Hello Mthunzi", greet("Mthunzi") );
    });
});
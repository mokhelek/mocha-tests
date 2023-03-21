describe('Test my greet function' , function(){
    it("it should return 'Hello Katleho' " , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
    it("it should return 'Hello Katleho' " , function(){
        assert.equal(countRegNumber('CA 182736'), 1);
    });
    
});
describe('Test my regCheck function' , function(){
    it("it should return 3 because there are 3 registrations " , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
    it("it should return 1 because there is one registration " , function(){
        assert.equal(countRegNumber('CA 182736'), 1);
    });
    
});
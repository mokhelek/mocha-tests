describe('Test my isFromBellville function' , function(){
    it("it should return true " , function(){
        assert.equal(isFromBellville('CY 123'), true);
    });

    it("it should return false " , function(){
        assert.equal(isFromBellville('CJ 123'), false);
    });
   
});
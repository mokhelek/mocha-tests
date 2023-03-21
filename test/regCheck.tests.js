describe('Test my regCheck function' , function(){
    it("it should return true " , function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

    it("it should return true " , function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it("it should return false " , function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    });

    it("it should return false " , function(){
        assert.equal(regCheck('5566 L', 'M'), false);
    });

    it("it should return true " , function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });

    it("it should return false" , function(){
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });


    it("it should return true " , function(){
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });


    it("it should return false" , function(){
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });


});
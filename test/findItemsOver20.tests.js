describe('Test my FindItemsOver20 function' , function(){
    it(`should return a list of items` , function(){
        assert.deepEqual(results, findItemsOver20(itemList));
    });
    it(`should return no list`  , function(){
        assert.deepEqual(results2, findItemsOver20(itemList2));
    });
    it(`should return a list of items`  , function(){
        assert.deepEqual(results3, findItemsOver20(itemList3));
    });
});

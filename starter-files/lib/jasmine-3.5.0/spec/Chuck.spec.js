describe('Chuck', function(){
    let chuck; 
    const joke = 'Chuck Norris can divide by zero';
    const mockMath = Object.create(window.Math);
    mockMath.random = function(){
        return 0.5;
    }
    window.Math = mockMath;
    beforeEach(function(){
        chuck = new Chuck();
    })

    describe('methods', function(){
        it('Should add a joke', function(){
            chuck.addJoke(joke);
            expect(chuck.jokes).toContain(joke);
        });
  });
     describe('get Joke', function(){
         it ('should return 0.5', function(){
             expect(Math.random()).toEqual(0.5);
         });
        it('Should get a random joke', function(){
            expect(chuck.getRandomJoke()).toEqual('Chuck Norris is the only man to ever defeat a brick wall in a game of tennis');
        });
    });

});
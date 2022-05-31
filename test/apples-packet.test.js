describe('The apple packet price widget', function() {

	it ('should allow apple cost of the box of apples to be set', function() {
        var applePacket = ApplePacket();

        applePacket.setBoxAppleCost(150);
        assert.equal(150, applePacket.getBoxAppleCost())
		
	});

        it ('should allow number of apple in the box to be set', function() {
        var applePacket = ApplePacket();

        applePacket.setNumberOfApples(100);
        assert.equal(100, applePacket.getNumberOfApples())
                        
        });

        it ('should set the packet size the apple are sold in', function() {
         var applePacket = ApplePacket();

         applePacket.setSizePacket(1.75);
         assert.equal(1.75, applePacket.getSizePacket())
                                
        });

        it ('should allow to set the required profit', function() {
          var applePacket = ApplePacket();
          
          applePacket.setProfit(30);
          assert.equal(30, applePacket.getProfit())
                                       
        });

        it ('should calculate the number of packets', function() {
                var applePacket = ApplePacket();

                applePacket.setSizePacket(3);
                applePacket.setNumberOfApples(60)
                assert.equal(20, applePacket.getNumberOfPackets())
                                       
               });

               it ('should calculate the price per apple', function() {
                var applePacket = ApplePacket();

                applePacket.setBoxAppleCost(100);
                applePacket.setNumberOfApples(50);
                assert.equal(2, applePacket.getPricePerApple())
                                       
               });
               it ('should calculate the price per packet', function() {
                var applePacket = ApplePacket();

                applePacket.setBoxAppleCost(2);
                applePacket.setSizePacket(4);
                assert.equal(8, applePacket.getPricePerPacket())
                                       
               });it ('should calculate the recommended packet price', function() {
                var applePacket = ApplePacket();

                applePacket.getPricePerPacket();
                applePacket.getProfit(20);
                assert.equal(0, applePacket.getRecommendedPrice())
                                       
               });


})
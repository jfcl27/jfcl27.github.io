(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        createPlatform(100, 345, 0.5);           // normal platform
        createPlatform(350, 550, 0.5)       // small horizontal platform (30% the normal width)
        createPlatform(500, 500, 0.3, 10)   // tall vertical wall (30% the normal width and 10x the height)
        createPlatform(99,600)
        createPlatform(425, 375)
        createPlatform(600,550, 0.3 , 10)
        createPlatform(650, 600, 0.3, 10)
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE

        // example:
        createPlatform(200, 250);
        createPlatform(100, 460, 0.8);
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);
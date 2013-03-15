describe('A split will find the split index and then show and hide on click', function () {  
	
	var $testContainer = $("<div class='testPlayGround' />");
	// this piece of html is grabed from test site
	var testHtml = '<section class="fn-split" data-split-text="More DynamicColl1" data-split="5"><article class="image-none"><a href="/news/servlet/mobile/news/2009-01-29/census-figures-reveal-quarter-of-population-born/85236"><h3> Census figures reveal quarter of population born overseas </h3></a></article><article class=""><a href="/news/servlet/mobile/news/2012-01-16/live-blog-2012-golden-globes/38136"><h3> As it happened: Golden Globes 2012 </h3><img width="220" height="147" title="Iron Lady performance nets Streep Golden Globe" alt="Meryl Streep" src="http://localhost:8001/news/servlet/news/image/38464-3x2-220x147.jpg"/></a></article><article class=""><a href="/news/servlet/mobile/news/2011-08-21/pip-courtney-remembers-john-bean/40120"><h3> So lucky: Wife Pip Courtney remembers John Bean </h3><img width="220" height="147" title="ABC cameraman John Bean with wife, Pip Courtney" alt="ABC cameraman John Bean with wife, Pip Courtney" src="http://localhost:8001/news/servlet/news/image/49988-3x2-220x147.jpg"/></a></article><article class="image-omit"><a href="/news/servlet/mobile/news/2007-06-08/preliminary-work-on-launceston-flood-levee/89916"><h3> Preliminary work on Launceston flood levee </h3></a></article><article class="image-omit"><a href="/news/servlet/mobile/news/2011-08-19/paul-lockyer-video/46374"><h3> Paul Lockyer: one of the best </h3></a></article><a class="split">More DynamicColl1</a><article class="image-omit"><a href="/news/servlet/mobile/news/2009-03-17/family-guy-wins-court-battle-over-song/76036"><h3> Family Guy wins court battle over song </h3></a></article><article class="image-omit"><a href="/news/servlet/mobile/news/2007-11-12/murdered-uk-students-body-flown-home-from-italy/55564"><h3> Murdered UK student s body flown home from Italy </h3></a></article><article class="image-omit"><a href="/news/servlet/mobile/news/2009-06-02/north-korea-a-secretive-regime-with-nuclear/43904"><h3> North Korea: A secretive regime with nuclear ambitions </h3></a></article><nav><a href="?page=1">Prev</a><span>2 of 3</span><a href="?page=3">Next</a></nav></section>';
	function setUp(){
		$('body').append($testContainer);
		$testContainer.html(testHtml);
		//call split function
		//assume all the js bind is happend
		//ABC.Mobile.News.splitHandler(".fn-split");
	};
	
	function tearDown(){
		$('body').html('');
		console.log("removed");
	};
	
	beforeEach(function(){
		setUp();
		//console.log ("set up");
	});
	
	afterEach(function(){
		tearDown();
		//console.log ("tear down");
	});
	
    it('adds two numbers together', function () {
    	//making sure there's split element
        expect($('section.fn-split').length).toEqual(1);
    });
    
    it('should attached a menu trigger',function(){
    	//console.log($('a.split').length);
    	expect($('a.split').length).toBe(1);
    });
    
    it('should attached a menu trigger',function(){
    	console.log($('a.split').length);
    	//expect($('a.split').length).toBeGreater(1);
    });
    
}); 
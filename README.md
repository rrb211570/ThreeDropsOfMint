# ThreeDropsOfMint

Web-based video game, based off of a space opera world I created. There's a Netflix episode worth of screenplay, a bunch of world-building tidbits, as well as a couple separate plotlines for the universe. Not sure if I'm gonna follow through and make this happen tho, cuz priorities.

Since part of the intended gameplay would involve creating a rendering engine that would reveal objects/enemies as the character is scrolling, I decided to make a toy project to test out this feature. 

Since I did not have a landing page yet, I chose to use [Datafolio](https://datafolio.net) (code for this is stored in separate private repo) as my testbed to implement a prototype of the rendering engine.

The result was a minimal framework that would support adding/removing CSS classes and triggering JS functions, based on crossing scroll-thresholds in either direction. Since dynamic rendering would be necessary for a video game, the framework requires the website to be built in "scenes". Each scene contains its own "anchoring div" for relatively calculating internal scroll thresholds. It also contains details of the scroll animations (and JS functions) that would be scroll-triggered by HTML objects contained in the scene. This way, we can dynamically load a sliding window of scenes from data.

Over-engineering for a landing page (though the animations are nice) and still missing details/edge cases, but the framework is ultimately a good prototype for a video game renderer.

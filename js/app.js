/*
* This function will reveal the project sections while scroll reaches to 
* the particular section
*/

function RevealOnScroll (elements, offset) {
	// this.itemToReveal = $(".project-item");
	this.itemToReveal = elements;
	this.offset = offset;
	this.createWaypoints(this.offset);
};

RevealOnScroll.prototype.createWaypoints = function (offset) {
	// console.log(this.itemToReveal);
	// console.log(this);
	var self = this;
	var offset = offset;
	this.itemToReveal.each(function () {
		// console.log(this);
		var currentItem = this;
		new Waypoint({
			element: currentItem,
			handler: function () {
				$(currentItem).addClass('reveal-element');
			},
			offset: self.offset
		});
	});
};

new RevealOnScroll($(".project-item"), "85%");
new RevealOnScroll($(".about-me-content"), "85%");
new RevealOnScroll($(".skill-items"), "85%");
new RevealOnScroll($(".contact-items"), "85%");
new RevealOnScroll($('form'), "90%")
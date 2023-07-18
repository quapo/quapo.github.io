// Function for weighting arrays built like [[value, weight]]
Array.prototype.weight = function() {
    return this.flatMap(e => Array(e[1]).fill(e[0], 0, e[1]));
}

class glitchAnimationRandomization {

	// Constructor for animated text
	constructor(element) {
		// Get the element that should be animated
		this.element = element;

		// Create randomization arrays
        this.fwArray = [[100, 1], [300, 1], [400, 2], [500, 3], [700, 3], [900, 3]].weight();
        this.fsArray = [['normal', 1], ['italic', 2]].weight();
        this.tdlArray = [['none', 3], ['underline', 1], ['overline', 1], ['line-through', 3]].weight();
        this.ttArray = [['none', 3], ['uppercase', 2], ['lowercase', 1]].weight();
	}

    // Function for randomizing the animation
    randomize() {
        // Randomize animation speed curve
        this.element.style.animationTimingFunction = `cubic-bezier(${Math.random() * 2 - 1}, ${Math.random() * 2 - 1}, ${Math.random() * 2 - 1}, ${Math.random() * 2 - 1})`;
        
        // Randomize CSS vars
        for(const i in [10, 33, 40, 75, 100]){
            // font-weight
            this.element.style.setProperty(`--anim-${i}p-fw`, this.fwArray[Math.floor(Math.random() * this.fwArray.length)]);
            // font-style
            this.element.style.setProperty(`--anim-${i}p-fs`, this.fsArray[Math.floor(Math.random() * this.fsArray.length)]);
            // text-decoration-line
            this.element.style.setProperty(`--anim-${i}p-tdl`, this.tdlArray[Math.floor(Math.random() * this.tdlArray.length)]);
            // text-transform
            this.element.style.setProperty(`--anim-${i}p-tt`, this.ttArray[Math.floor(Math.random() * this.ttArray.length)]);
        }
    }

    // Start the animation
    start() {
        this.randomize();
        this.element.addEventListener('animationiteration', this.randomize.bind(this));
    }
}
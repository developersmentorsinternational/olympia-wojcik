class Carousel {
    constructor(carousel) {
    //references, properties, event handlers
        this.carousel = carousel;

        //grab references to the DOM images, left, & right buttons
        this.leftBtn = this.carousel.querySelector('.left-button')
        this.rightBtn = this.carousel.querySelector('.right-button')
        this.imgList = this.carousel.getElementsByTagName('img')  //returns HTML Collection
        this.index = 0;
        this.imgList[this.index].style.display="block";

        //click handlers
        this.leftBtn.addEventListener('click', () => this.cycleLeft());
        this.rightBtn.addEventListener('click', () => this.cycleRight());
        
    }
    //methods
    //first, reset all or current image to display: none
    //next, loop index either backwards or forwards
    //set image at new index to display:block

    cycleLeft() {
        this.imgList[this.index].style.display = 'none';
        //index can't be negative one, it has to loop fully through. so if index is zero, then set the index
        //equal to the LAST photo in the imgList collect. That means we need its length!

        if (this.index === 0) {
            this.index = this.imgList.length-1
        } else {
            //else set the index equal to this.index minus one (or decrement)
            this.index--;
        }
        //set image at new index to display:block
        this.imgList[this.index].style.display = 'block';
    }

    cycleRight () {
        this.imgList[this.index].style.display = 'none';
        
        //index has to be 0, 1, 2, or 3. SO if we are on image index 3, set the index equal to 0 or first photo in collection
        //use imgList.length so this code still works even if the # of images grows
        
        if (this.index === this.imgList.length-1) {
            this.index = 0;
        } else {
            //else set the index equal to this.index plus one (add)
            this.index ++;
        }
        this.imgList[this.index].style.display = 'block';
    } 
} /* -----------CAROUSEL CLASS -----------------*/


// class Card {
//     constructor(img) {
//         this.img = img;
//     }
//     select() {

//     }
// } /* -----------CARD CLASS -----------------*/
// let carousel = document.querySelector();

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/


let carouselList = document.querySelectorAll('.carousel');
//use querySelectorAll so that this component can be *replicated* and if you add future <divs> where class='carousel'
//they will *ALL* get picked up in this list

carouselList.forEach(carousel => new Carousel(carousel));


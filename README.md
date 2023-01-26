# Frontend Mentor - Coding bootcamp testimonials slider

![Design preview for the Coding bootcamp testimonials slider coding challenge](./design/desktop-preview.jpg)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
- [Author](#author)

## Overview
This project is built with HTML5, CSS, Tailwind,Vanilla JS (ES6), Test driven development and Mocha. 

The HTML has:

- Two sections- .quote--section and .image--section
- A button to switch to the next testimonial or go to the previous slide

The CSS has: 

- Mobile first development
- Tailwind - only used for general styling like margin and padding
- BEM convention 
- Prefers light or dark mode
- Variables
- The organization of the styles.css will be (in descending order):

    - Variables
    - Resets
    - All typography
    - Media query for typography
    - General styles
    - The main tag will have the background image pattern-curve.svg(left bottom)
    - Media query for General styles 
    - The .image--section (will have the background image pattern-bg.svg)
    - Media query for .image--section
    - The .quote--section (will have the background image pattern-quotes.svg(left top))
    - Media query for .quote--section
    

The JavaScript has:

- Onclick to go to next slide / go to previous slide
- addClass function to add a transition for slide movement
- removeClass function to remove the class added for transition

## The challenge

users should be able to: 

- View the optimal layout for the component depending on their device's screen size
- Navigate the slider using either their mouse/track pad or keyboard

### Screenshot

![screen shot of full screen webpage]()
![screen shot of mobile webpage]()
### Links

- Solution URL: [GitHub]()
- Live Site URL: [live site]()

### Built with



- [Semantic HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) - HTML5 with clear and descriptive tags for better accessibility and search engine optimization
- [Tailwind](https://tailwindcss.com/) - A utility-first CSS framework
- Mobile-first workflow
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html) - A utility-first CSS framework
- Mobile-first workflow
- [Vanilla JavaScript](https://js.org/) - JavaScript
- [Mocha](https://mochajs.org/) - JavaScript testing framework 
- [TDD](https://testdriven.io/test-driven-development/) - Test driven development

## Author

- Frontend Mentor - [@Eileenpk](https://www.frontendmentor.io/profile/Eileenpk)
- LinkedIn - [@Eileenpk](www.linkedin.com/in/eileen-dangelo)

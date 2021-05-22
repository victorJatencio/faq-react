# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

No photo.

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

This project was created with react.js and regular css. Of course I'm usinf flexbox to make the layout adjust and media queries to control the layout on different breakpoints. Finally I deployed the roject with Netlify.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

In this case it was a little tricky to control the size of the svg and I have limited knowledge of svg. Instead I decided to create empty divs with special classes and then passing the svgs as background images and latter control the parent div properties to lace it where needed. Since Im learning React, I used "useState" hook to toggle the accordion.

To see how you can add code snippets, see below:

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js - Accordion component
import React, { useState } from "react";
import "./Accordion.css";
import data from "../data";
import SingleQuestion from "./SingleQuestion";

import { ReactComponent as Box } from "../images/illustration-box-desktop.svg";

const Accordion = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="accordion">
      <Box className="box" />
      <div className="mobile__box"></div>
      <div className="image">
        <div className="woman__container"></div>
        <div className="pattern"></div>
      </div>
      <div className="accordion__items">
        <h1>FAQ</h1>
        <div className="questions">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
```

```js - Single accordion component
import React, { useState } from "react";
import "./SingleQuestion.css";
import { ReactComponent as Arrow } from "../images/icon-arrow-down.svg";

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="single__question">
      <div className="title">
        {showInfo ? (
          <h4 className="question__header" style={{ fontWeight: "bold" }}>
            {title}
          </h4>
        ) : (
          <h4 className="question__header">{title}</h4>
        )}

        <button className="arrow" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <Arrow className="arrow_top" />
          ) : (
            <Arrow className="arrow_down" />
          )}
        </button>
      </div>
      <div className="info">{showInfo && <p>{info}</p>}</div>
    </div>
  );
};

export default SingleQuestion;
```

### Continued development

I had some issues trying to use svgs in these divs and later control them with css, so I had to set them as background images. It works great now, but Im sure there's a better way to use svgs.

```html
<div className="woman__container"></div>
<div className="pattern"></div>
```

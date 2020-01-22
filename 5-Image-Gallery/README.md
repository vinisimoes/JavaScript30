# Image gallery

Project 5/30: Image gallery with animation

<p align="center">
  <img src="img-gallery.gif">
</p>

## Key concepts:

### CSS:
- Overflow: scroll bar
  - `overflow: visible`: standard, content is not sliced and a scroll bar appears;
  - `overflow: hidden`: content is sliced but no scroll bar appears;
  - `overflow: scroll`: scroll bar appears even if not necessary.

- Flex: 
  - `justify-content: ...` : along the main axis;
  - `align-items: ...`: along the cross axis.
  
- Accessing flex children items:
  ```
  .flexClassName > * { }
  ```
  To change flex items options, use `flex: 1 0 auto; /* flex-grow | flex-shrink | flex-basis */`.
  
- Add additional classes to characterize the style after the animation (and toggle them using JavaScript).

### JS:
- Toggle a class: 
  ```
  function toggleClass() {
    this.classList.toggle('additionalClass');
  }
  ```

- Identify mouse over and mouse out events:
  ```
  panels.forEach(panel => panel.addEventListener('mouseover', toggleAll));
  panels.forEach(panel => panel.addEventListener('mouseout', toggleAll));
  ```

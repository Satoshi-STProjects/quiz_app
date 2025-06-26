<!--
These are personal learning notes from building a simple quiz app.
It's a casual Dev Log-style record, not a polished tutorial.
-->

# Learning Notes for Quiz App (Dev Log Style)

## HTML & CSS
- `id` vs `class`: 
  - `id` is unique per page, better for JS targeting.
  - `class` can be used multiple times, better for CSS styling and reusable.
- Inline styles (`style="..."`) are used in HTML for immediate effects, such as hiding elements before CSS loads.
- Inline styles override external CSS styles due to higher specificity.
- `*`, `*::before`, `*::after`: Universal selector with pseudo-elements; useful for resetting box-sizing.
- `box-sizing: border-box`: Makes padding and border included in the element's total width/height.
- `background` vs `background-color`: 
  - `background` can handle gradients and images.
  - `background-color` is for solid color.
- `min-height: 100vh`: Ensures minimum height of 100% of the viewport.
- `display: flex`, `align-items: center`, `justify-content: center`: Flexbox for centering content.
- `transition: all 0.3s ease`: Smooth CSS transitions.
- `transform: translateY(-2px)`: Moves element 2px upwards.
- `:disabled`, `:hover`, `:focus`: Pseudo-classes for UI states.
- `max-width: 600px`, `width: 90%`: Helps responsive design.
- `font-family`: Multiple fonts for fallback support.
- `font-weight: 700`: Bold font weight.
- `rem`, `em`, `%`, `vh`, `vw`: Relative CSS units.
- `grid`, `repeat(...)`: CSS Grid layout for responsive column layout.

## JavaScript
- `[]` = Array, `{}` = Object (like Python list and dict).
- `const`: Immutable variable (can't be reassigned).
- `NodeList`: Array-like object returned by querySelectorAll.
- `document.querySelectorAll(...)`: Selects multiple DOM elements.
- `classList.add(...)` vs `className`: classList is preferred for modifying individual classes.
- `disabled`: Makes button unclickable.
- `addEventListener('DOMContentLoaded', init)`: Triggers `init` function after HTML is fully loaded.
- `setTimeout(() => { ... }, 1500)`: Runs code after a delay; takes a callback.
- `score++`: Increments score by 1.
- `quizData.length`: Number of quiz items (Array length).
- `Math.round(...)`: Rounds number to nearest integer.
- `forEach((item, index) => { ... })`: Iterates with element and index.

## General Tips
- JS reads top to bottom, but entry point (e.g., `DOMContentLoaded`) is often last.
- Understanding call chain (e.g., `init → showQuestion → selectAnswer → nextQuestion`) helps trace logic.
- It's okay to loop through code multiple times to grasp structure.

#6/27/25


## New Learnings from Fixes / Feature Additions

### Logic for Displaying Choice States
- The `.selected` class can sometimes take precedence over `.correct` / `.incorrect`, causing the UI to not reflect the intended state.
- By clearly separating the conditions into three cases—"selected and correct," "selected and incorrect," and "not selected but correct"—you can apply the expected styles reliably.

### Adding Elements to the DOM (`span`)
- You can dynamically add a `span` element inside a button using `createElement()` and `append()` in JS.
- Applying `display: flex` to the button allows you to place the text and `span` on opposite sides (`justify-content: space-between` is effective).

### Button Layout Adjustment with Flexbox
- Adding `align-items: center` enables vertical centering.
- Applying this to `.choice-btn` gives all buttons a consistent appearance.

### Animation Effect for Perfect Score
- Load the `canvas-confetti` library via CDN and use the `confetti()` function to implement a confetti effect.
- Use `Math.round((score / quizData.length) * 100)` to check for a perfect score and trigger it inside `showResult()`.

### Other Notes
- The `<span>` element is inline and can be treated like text.
- Adding the `disabled` attribute makes form elements like buttons unclickable and unfocusable.
- `NodeList` is the return value of `querySelectorAll` and can be manipulated like an array with methods such as `forEach`.
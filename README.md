# Web Development 101 - Getting started with JavaScript

Pupilfirst has open sourced the [course](https://www.pupilfirst.school/courses/1087)

There are 8 levels in this course. Here, are a few key personal takeways, or should I, rather say notes 😅, from each of those levels.

## Level 1 - Welcome to the course!

- Brief introduction to the Pupilfirst LMS and discussion forum modeled after Stack overflow
- Introduction to Web: Internet, Client & Server model, IP address and WWW
- Why Unix based systems? and Installation of Ubuntu, if not a Mac User
- Dev Environment Setup - Prettier Extension Setup

## Level 2 - Let's create our own websites!

- Introduction to HTML
- More into "Inspect element"
- Hosting on [glitch](https://glitch.com/)

- Visit my [creation](https://farm-story.glitch.me/) hosted on glitch

## Level 3 - Style Matters

- Using Cascading Style Sheets(CSS)

  - Inline
  - Embedded
  - External

- Tailwind CSS: a CSS framwork
- Note: [Reboot, Resets, and Reasoning](https://css-tricks.com/reboot-resets-reasoning/)
  - `undohtml.css`: Tantek Çelik - strip default styling
  - **Meyer reset**: Updated for HTML5 elements, else similar approach to Tantek's idea; one of the more popular resets
  - **Richard Clark's HTML5 Reset**: modified version of the Meyer reset, and the retained that spirit
  - **Minimal Approach**: plenty of developers who went minimal by just zapping margin and padding from everything
    ```
    * {
    padding: 0;
    margin: 0;
    }
    ```
  - 🤡: `CSS-tricks` logo was insipired by the universal selector
  - `Normalize.css`:
    - didn’t remove any styling from elements that were already consistent across browsers
    - accommodating to the idea of altering it, rather than just including it
    - It calls itself, "modern, HTML5-ready alternative to CSS resets"
  - **Resets can be opinionated**
  - **Vanilla CSS Un-Reset**: meant to re-style elements after you un-style then with a reset
  - `MiniReset.css`: It does wipe out type styles “so that using semantic markup doesn’t affect the styling”, but leaves some defaults in place on purpose “so that buttons and inputs keep their default layout”, puts in some things that don’t have cross-browser problems but are useful globally (box-sizing), and adds some minor responsive design helpers.
  - Jonathan Neal created a reset called `santize.css` that is very clear about it’s opinions. Search for the word “opinionated” in the source code and you’ll see it 19 times. Sanitize calls itself a CSS library and doesn’t use the word “reset” anywhere except to cite the Meyer reset.
  - **Reboot**:
    - builds upon Normalize, providing many HTML elements with somewhat opinionated styles using only element selectors. Additional styling is done only with classes.
    - doesn’t have its own repo, it’s a part of Bootstrap.
    - It’s definitely opinionated, but in a way that rolls with Bootstrap nicely. The fact that it’s buried within Bootstrap is pretty good signaling this is designed for that world, not as a drop-in for any project.
- Explained a few Tailwind CSS classes: p-[tailwind unit], m-[tailwind unit], bg-[color (standardColors)]-[intensity (50,100...800)], container

# Lab #4: Event Delegation - Zalain Spain

## Overview
This repository contains my solutions for Lab #4, which focuses on building interactive UI components using **Event Delegation** in JavaScript. 
Instead of attaching multiple event listeners to individual child elements, this project demonstrates how to attach a single listener to a parent container to manage events efficiently.

## Exercises Completed
This project includes four distinct interactive components, all running on a single HTML page:

1. **Exercise 1: Accordion Menu** (`exercise1.js`)
   - A fully functional accordion that opens a clicked panel and automatically closes any previously opened panels.
2. **Exercise 2: Live Tag Builder** (`exercise2.js`)
   - A dynamic input that generates styled tags when the user presses 'Enter'. Tags can be individually deleted by clicking their 'X' button.
3. **Exercise 3: Filterable Card Grid** (`exercise3.js`)
   - A filter bar that shows and hides specific cards based on their data categories.
4. **Exercise 4: Inline Edit List** (`exercise4.js`)
   - A list where double-clicking an item turns it into an active text input. Users can save their edits by pressing 'Enter' or clicking away, or cancel by pressing 'Escape'.

## Key Concepts Practiced
* **Event Delegation:** Attaching one listener to a parent element to handle events for all current and future child elements.
* **`closest()`:** Traversing up the DOM tree to find the nearest ancestor that matches a specific CSS selector.
* **`matches()`:** Checking if an element matches a specific CSS selector before executing code.
* **Dynamic DOM Manipulation:** Creating, appending, and removing HTML elements dynamically with JavaScript.
* **Git Feature Branching:** Using separate Git branches (`exercise-1`, `exercise-2`, etc.) to build and merge features individually.

## How to Run
1. Clone this repository to your local machine.
2. Open the `index.html` file in any modern web browser.
3. Interact with the UI components and check the DevTools Console to see the clean, error-free execution.

## Video Demonstration
https://youtu.be/ZsA_06szEAQ

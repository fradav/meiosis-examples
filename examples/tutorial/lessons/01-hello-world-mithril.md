# Meiosis Tutorial

[Table of Contents](toc.html)

## 01 - Hello World

The first thing that we will do is render something onto the page - a "Hello, world" message,
of course. With Mithril, this is accomplished using `m.render`. When calling this function, we
must pass two parameters:

1. The DOM element into which we want to render, and
1. What we want to render. This is a virtual-DOM node, or **vnode** for short.

We can use the `m()` function to describe the HTML structure of what we want to render and
produce a vnode suitable for passing to `m.render`.

### Our First Example

Here is the code to render a message onto the page:

@flems mithril/01-hello-world.js,app.html mithril

Notice that the `element` into which we render is the element that has the `app` id. You can
see this element in the `app.html` file. This file represents our HTML page.

![The Render Function](01-hello-world-01.svg)

You can also use `document.body` as the element. The reason I am using an HTML file with an
element inside it is that this enables you to render other things on the page, and have your
app (or multiple apps) occupy specific places on the page.

### Exercises

Edit the code above and try out these exercises. You can see the output on the right, so you
can confirm that your code works as expected.

1. Change the `h1` tag to something else, and change the message.
1. In `app.html`, add something before and after the `id` element, and confirm that they are
displayed before and after the message that you are rendering.
1. Change the `element` into which to render, to `document.body`. Notice that your message
now overwrites anything that you had in the `app.html` file.

When you are ready, move on to the next lesson: [02 - View Function](02-view-function-mithril.html).

[Table of Contents](toc.html)
# 1.2 - CSS: Page Layout - Workshop

## Exercise 1 - Use Flexbox

Create an `index.html` file and a `style.css` file that reproduces the following:

![exercise-1 goal](../../__1-lecture/assets/ex-1-goal.png)

### Reference

Your HTML should have the following structure:

```html
<!DOCTYPE html>
<html>
    <head>
        <link
            href="https://fonts.googleapis.com/css?family=Poppins"
            rel="stylesheet"
        />
        </head>
        <body>
        <div class="container">
            <div class="Navigation">
              <p> Nav </p>
            </div>
            <div class="content">
              <p> CONTENT </p>
            </div>
            <div class="footer">
              <p> Footer </p>
            </div>
        </div>
    </body>
</html>
```

- Give the `<body>` a `0` margin.
- Use HTML5 tags whenever possible.
- To ensure that the content height is at least as tall as the viewport, you will need to set the height on your `<div class="container">`
  - `min-height: 100vh`
- Use the Poppins font (google fonts) _optional_

### Some helpful suggestions

```
  font-family
  flex-direction
  min-height
  height
  background-color
  color
  display
  align-items
  justify-content
  flex
```

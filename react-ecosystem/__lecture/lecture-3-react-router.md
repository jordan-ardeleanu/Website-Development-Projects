---
marp: true
---

# React Router

Modern JS apps use "client-side routing".

---

# Routes

All routes are defined in the React application.

```jsx
import {Route} from 'react-router-dom';

<Route path = "/About" element = {<About />} />
<Route path="/blog" element = { <Blog />} />

```

---

A `<Route>` component consists of at least two things:

- The path to match (eg. "/about")
- What to render when the path matches (the `element` prop)

---

# Exercise

What gets rendered in the following snippets?

---

```jsx
<div>
  <Route path="/" element={"Home"} />
  <Route path="/about" element={"About"} />
</div>
```

Current URL: http://localhost:3000/about

---

```jsx
<div>
  <Route path="/items/:itemId" element={"Item detail page"} />
  <Route path="/items" element={"Items"} />
  <Route path="*">404 not found</Route>
</div>
```

Current URL: http://localhost:3000/items/abc

---

# `<Routes>`

Renders the route with the path that is the closest match to the url

---

# `<Router>`

All routes must be nested under a router.
It is common to write `import BrowserRouter as Router` in your imports.
This allows you to name the BrowserRouter component `<Router>`
instead of `<BrowserRouter>` )

---

```jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/shop/:itemId" element={<Homepage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
```

---

# Link

Use the provided `<Link>` component to get from one route to another.

```jsx
import { Link } from "react-router-dom";

<Link to="/shop/abc123">View item details</Link>;
```

---

# Question

Why use `<Link to="...">` instead of `<a href="...">`?

---

# Question

Is this "real" navigation?

---

### Accessing URL params

```jsx
<Route path="/items/:itemId" element={<ItemDetails />} />
```

`ItemDetails` has no props!

How will it access the `itemId` URL parameter?

---

# Hooks

Hooks are a relatively modern addition to the React framework.

They let us "hook in" to React internals.

We'll learn much more about them in the next few lectures.

---

```jsx
import { useParams } from "react-router-dom";

const ItemDetails = () => {
  // `useParams` is the hook.
  // Hooks always start with `use`.
  const { itemId } = useParams();

  return <h3>Item ID: {itemId}</h3>;
};
```

[Documentation](https://reactrouter.com/docs/en/v6/hooks/use-params)

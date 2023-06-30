# WORLD WISE APP WITH REACT ROUTER

## DESCRIPTION

## FEATURES

## SCREENSHOTS

# WHAT I LEARNED

## REDUCER METHOD

- The reducer method is a built-in JavaScript function that is used to `reduce an array to a single value`.
- It takes two arguments: an `accumulator` and a `current value`.

  - The accumulator is the value that is returned after each iteration.
  - The current value is the value of the current element in the array.

- The reducer method is commonly used with the `reduce()` function to perform operations on arrays.

Here's an example of a reducer method that takes an array of objects and returns a new array with only one object per unique country:

```js
const countries = cities.reduce((accumulator, currentvalue) => {
  if (!accumulator.map((item) => item.country).includes(currentvalue.country)) {
    return [...accumulator, currentvalue];
  }
  return accumulator;
}, []);
```

- In this example, the `reduce()` function is used to iterate over the `cities` array and accumulate the unique countries into the `countries` array.
- The `map()` function is used to extract the `country` property from each object in the `accumulator` array and check if it includes the `country` property of the `currentvalue` object.
- If it does not include the `country` property, the `currentvalue` object is added to the `accumulator` array.

## REACT ROUTER

- React Router is a collection of navigational components that compose declaratively with your application.
- You can install it using `npm install react-router-dom`.

### use `<NavLink>` instead of `<Link>`

- `<NavLink>` is a special version of the `<Link>` that will add styling attributes to the rendered element when it matches the current URL.
- For example, if current URL is `/about`, then the element will receive the `active` class name.
- We can select that using CSS (pseudo class) and style it however we want.

### rested routing

- Actually, it is very easy to implement rested routing. All we need to add related nested routes wrapped around parent route.

```js
<Route path='app' element={<AppLayout />}>
  <Route index element={<p>Dashboard</p>} />
  <Route path='cities' element={<p>List of cities</p>} />
  <Route path='countries' element={<p>List of countries</p>} />
  <Route path='form' element={<p>Form</p>} />
</Route>
```

- `index element` is the default route. It will be rendered when the parent route is rendered.
- Now, Where these routes will be rendered? We need to add `<Outlet />` in the relavant component.

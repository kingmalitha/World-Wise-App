# WORLD WISE APP WITH REACT ROUTER

## DESCRIPTION

## FEATURES

## SCREENSHOTS

## WHAT I LEARNED (REACT ROUTER)

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

# SPORTRADAR TEST CASE

## Reqirements

- Node: v18.15.0

## Libraries

My used Libraries Are: 

- [NextJS](https://nextjs.org/): NextJS is basically a React framework that helps you build server-side rendered React applications. It is a framework that is built on top of React and it is used to build server-side rendered React applications. IF you need to check NEXTJS documentation you can check it [here](./README.next.md).
- [Storeon](https://github.com/storeon/storeon): That library is a tiny (1.2 KB) event-based state manager for React, Preact, Angular, Vue, Svelte, and other frameworks. It is a simple and fast alternative to Redux, MobX, and other state managers. And has localstorage support.
- [Tailwind](https://tailwindcss.com/): A utility-first CSS framework for rapidly building custom designs. This css framework is so easy to use and it has a lot of components that can be used in the project. Thats whyi choose it.
- [Cypress](https://www.cypress.io/): Cypress is a front end testing framework that is used to test the front end of the application. It is a very easy to use and it has a lot of features that can be used to test the application. It is also very fast and it has a lot of plugins that can be used to test the application.

## How IT Works

When you click "Show Match Form"; you will see form. If (you dont fill inputs it will work anyway). When you click "Add Match" button in form; it will send data to store. And data will stored like { home: "home team", away: "away team" }. Then Match List component will get data from store and it will show the match in list. Match List Component has a useEffect that will wait store changes. Thats means if which matches total scores changes than others it comes first.
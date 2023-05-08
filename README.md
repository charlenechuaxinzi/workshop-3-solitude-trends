# Week 5 — Svelte & APIs


## 1. Deploy to Vercel

_Goal: Fork and deploy a web app to Vercel._

1. Fork this repo!

2. Create an account on Vercel (use SSO with your GitHub account)

3. Add the project to Vercel:

    Vercel Dashboard → Add New → Project → Import Git Repository → Continue with GitHub → Select your forked repo -> Deploy (leave settings as default)
   
   _You may need to grant Vercel access to your GitHub account (or at least your forked repo)_

4. Wait for deploy (around ~10-20 seconds)

5. Open the project in your browser (click on the link in the Vercel dashboard)

## 2. Make a change

_Goal: Update your deployed web app._

1. Clone the repo (your forked version, not the original!)

2. Run the project locally: `npm i && npm run dev`

3. Make a small change to the project (e.g. change the text in the `<h1>` tag)

4. Commit and push your changes

5. Wait for Vercel to re-deploy and check the changes

## 3. API callls

_Goal: use `fetch` to retrieve data from the OpenAQ API and then transform it to display it on a web page._


1. Install the [Thunder Client](vscode:extension/rangav.vscode-thunder-client) VSCode extension recommended in this repo

2. Use __Thunder Client__ to test an API call to the [OpenAQ `averages` endpoint](https://docs.openaq.org/reference/averages_v2_get_v2_averages_get) and see what parameters it takes.

    _hint: You can open Thunder Client using the lightning icon in your lefthand sidebar. Here's a fully working query you can copy-paste into Thunder Client to get started:_

    `https://api.openaq.org/v2/averages?parameter=pm25&limit=365&spatial=location&temporal=day&location=141&date_from=2022-01-01`

3. In [App.svelte](./src/App.svelte), try using `fetch` to request this URL and log the json response to the console.

    _hint: see [javascript.info](https://javascript.info/fetch#summary) or [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) for example fetch usage._

4. Try transforming the response data you get into a format to pass to the `<LinePlot>` component. This component expects the `data` parameter to be an array of objects where each object has two properties, `date` (a date object) and `value` (a number). Some questions to think about to help solve this:

    - Which property in the API response data holds the results? _(hint: try using `console.log` or Thunder Client to inspect the response data.)_
    - Which keys within this represent the date and value we are interested in?
    - How might you convert a date string into a `Date` object? _(hint: [MDN docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date) are a good reference for this)_
    - How can you perform this transformation using the Array methods we've learned in the past few weeks?

## 4. Experiment

_Goal: experiment with the OpenAQ API_

- How might you change your query above to retrieve data for a different date range, or averaged over a different period (e.g. month, year)?

- In Thunder Client, try to use the [locations endpoint](https://docs.openaq.org/reference/locations_get_v2_locations_get) to find location ids near you (e.g. `https://api.openaq.org/v2/locations?limit=100&page=1&offset=0&sort=desc&radius=1000&country=GB&order_by=lastUpdated&city=London&parameter=pm25`). Try plugging a new `location` id into your `averages` query above.

- How could you use the [location_id endpoint](https://docs.openaq.org/reference/locations_get_v2_locations__location_id__get) to fetch and display the name of the city and location on the page.

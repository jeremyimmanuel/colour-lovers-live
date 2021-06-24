# Colour Lovers Live

This project is a part of [TenantBase](https://cors-anywhere.herokuapp.com/)'s interview process.

![image](https://user-images.githubusercontent.com/35509768/123183044-8985a080-d445-11eb-87aa-508f70113522.png)

![image](https://user-images.githubusercontent.com/35509768/123183067-94d8cc00-d445-11eb-9e8c-5d9b9c0fd34e.png)

I chose not to implemented tests for now since the purpose of this project is to just showcase my skills with react and also I went in to this project with not a lot of react experience. In real life, I'd also implement tests for the project.

## Dependencies

### Tailwind

Why tailwind? I personally like using low-utility css libraries as it speeds up development by letting me configure the css without leaving the main js file. For more complex css rules, I'd still use a traditional css approach.

### Craco

Dependecies for attaching tailwind.

### Axios

Http library to call api.

## Differences

This project has some minor difference compared to the [mockup](https://github.com/TenantBase/hiring-frontend-challenge/tree/master/mockups).

### Grid items have separation

I noticed this while developing that when the display is a grid, the proximity among cards may mislead of incorrect info to palette matching. So a solution would be making the card have more significant borders.

I went with a neumorphic design because I just wanted to try it out.

### API failed

I tried calling the API but I couldn't get the expected response. After I fixed the CORS issue, I keep getting a 403 response saying that I need to verify my identity with a captcha (which I couldn't since the captcha page was a static page in the response).

Following is the response that I get:
![image](https://user-images.githubusercontent.com/35509768/123182993-6ce96880-d445-11eb-9a50-9385c51e39f0.png)

I personally have never seen this before, so if anyone knows the solution, please let me know, thanks! :)

I still implemented a function that calls the api though, just to showcase how I'd implemented and api request.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

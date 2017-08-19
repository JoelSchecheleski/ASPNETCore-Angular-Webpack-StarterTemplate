# Angular // Webpack // ASP.NET CORE WebAPI Starter Template

This is a starter template for developing Angular with ASP.NET Core WebAPI Applications using webpack for bundling. It has the webpack dev server included as well as css styles in webpack, hashes for your files, automatic injection into the index.html etc.

## NPM Taskrunner

Make sure you have the npm Taskrunner installed

[NPM Task Runner](https://marketplace.visualstudio.com/items?itemName=MadsKristensen.NPMTaskRunner)

This template is an Angular application with an http-service getting values from an ASP.NET CORE WebAPI.

## Blogpost

[How to set up Angular and Webpack in Visual Studio with ASP.NET Core](http://offering.solutions/blog/articles/2016/08/27/how-to-set-up-angular-2-and-webpack-in-visual-studio-with-asp-net-core/)

## Start

![alt text](.github/f09e144a-a5fe-4025-9d79-e939a58ea792.jpg "Screenshot")

Start by typing

`npm start`

at the level of the "package.json" file and browse to

`localhost:5000`

### Option 2 (Frontend and backend running)

Now you can just press "play" inside Visual Studio to get started.

If you change the *.ts-files you need to run the `tsc` command manually.

### Option 4 (frontend and backend running)

You can type `npm run build:dist` and browse to `localhost:5000` to see the page. This will trigger an webpack build and an `dotnet run`. Changes will not automatically appear in the browser.

![alt text](.github/e86cea01-b880-4eae-9a81-df6af6180ca2.jpg "Screenshot")

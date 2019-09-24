## Description

This Plugin is creating a multi-layered component with background images.
The images are in full width and cover the whole wrapper element.
It's showen one image at a time. 
While moving the mouse in any direction the images are beeing iterated and exchanged.
On touch devices only the x-axis is beeing tracked for iterating the images.

Open example of [`gatsby-plugin-image-map`](https://paulastoll.de)

### Dependencies

To use this plugin correctly you should have installed `gatsby-transformer-sharp`.

1. Install `gatsby-transformer-sharp`
   ```shell
   yarn add gatsby-transformer-sharp
   # or
   npm i gatsby-transformer-sharp --save-dev
   ```

2. Configure `gatsby-config.js`
  ```js
  module.exports = {
    plugins: [
      `gatsby-transformer-sharp`,
      // ...
    ]
    // ...
  }
  ```

<!-- ### Learning Resources (optional)

If there are other tutorials, docs, and learning resources that are necessary or helpful to someone using this plugin, please link to those here. -->

## How to install

1. Install `gatsby-plugin-image-map`
   ```shell
   yarn add gatsby-plugin-image-map
   # or
   npm i --save-dev gatsby-plugin-image-map
   ```

2. Configure `gatsby-config.js`
  ```js
  module.exports = {
    plugins: [
      `gatsby-plugin-image-map`,
      `gatsby-transformer-sharp`, // dependency that should be installed aswell
      // ...
    ],
    // ...
  }
  ```

## Available options

These are the default options and can/should be modified.
`nodes` is the only required property.
All the rest is optional.

```js
nodes:        [],          // list of your images
activeClass:  `--active`,  // (optional) class of an active element
itemClass:    ``,          // (optional) wrapper class of images
threshold:    100          // (optional) the bigger the threshold, the longer
                           // the mouse movement has to be to change an image
```

## When do I use this plugin?

This plugin is perfect to have an interactive first impression of your website.
The images are in the background so you can easily put content in front of them.
It is a kind of interactice slide show.

## Examples of usage

This usually shows a code example showing how to include this plugin in a site's `config.js` file.

    code example

//See this [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#code) on how to format code examples.

This section could also include before-and-after examples of data when the plugin is enabled, if applicable.

<!-- ## How to run tests

## How to develop locally

## How to contribute

If you have unanswered questions, would like help with enhancing or debugging the plugin, it is nice to include instructions for people who want to contribute to your plugin. -->
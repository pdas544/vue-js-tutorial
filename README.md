# A Beginner Friendly Vue-JS-Tutorial

## Installation: 

- Use the official CDN link at vuejs.org and place it at the before the closing body tag. It should be loaded first before loading any additonal javascript file.

## Progress

- Create a Vue instance using Vue.createApp(object).mount("#app") which takes an object as a parameter and calls the mount() method.

- object is a property which in turn can contain other properties. One of the basic properties is the data() property which must return some data to be rendered by the Vue instance.

For eg:
`
const service = {
    data(){
        return{
            'message': 'Hello'
        }
    }
}
`
- this message is rendered using {{}} double curly parenthesis inside the div with an id attribute of app.

- Use v-for directive to loop through the items
- Use v-on or the @ at symbol to bind the events
- Use the v-bind directive (aka :class) for binding classes for styling

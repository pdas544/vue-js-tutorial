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
- Use the event modifier for stop propagation, for eg: @click.stop
- attribute binding, for eg, `:disable = "product.quantity <=0"`
- modifying behavior based on some condition using `v-if` directive, for eg: displaying quantity area only if the product is active `v-if=product.active`
- using `<template v-if="product.active">` to group data
- to perform any complex logic use methods object inside the vue instance, for eg:
`
const service = {
    data(){
        return{
            'message': 'Hello'
        }
    }
},

methods: {
    total : function(){
        //calculate total
    }
}
`

### Two-Way Binding
- send form input to an object using `v-model` directive.
- for eg: 
`git 
<input name="fname" v-model="newMember.fname" />
`
- It is called as two-way binding because the modification works in both ways
- from object to the form and vice-a-versa.

### Life-cycle Hooks
- Reference `https://vuejs.org/guide/essentials/lifecycle.html`
- avoid using arrow function for lifecycle hooks
- hooks or events which gets triggered when the vue instance starts loading
- beforeCreate(): before creating the instance
- created(): after instance is created
- beforeUpdate(): when the data changes
- update(): when the data change is finished

- todo.js: uses both created() hook for loading the saved content (tasks)
- uses update() hook for reflecting the changes for done and clear operations.

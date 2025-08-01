# React

## Props

parameters we can send to a child component.
Add to a child component with key value prop.

## Class Components

Javascript class.
Reusable.
Have constructor to initialize data.

Smarkt, stateful, container components.

When making a ClassComponent you want to override React render function.

Add State and props to a React component class.

In a class you can have inheritance of state.

Probably useful for reusing state.
The component is only reusable by other members in the class.

Props are immutable.
Child component cannot change the prop variable.
You can change state.
States can only be used in Class components, props do not have this limitation.
Props are set by the parent.
State is usually updated by event handlers.

## Event handling

Events can cause state changes.
Event handlers are in camelCase.

Update state with setState().
Do not mutate state directly.
Call setState, this triggers render internally.
React would have to look at the whole property to know what changed.
It is a shallow comparison since it wil know what exactly changed.
React can do batch setState calls into a single update for performance.
So you want to put props into the this.setState function because it is asynchronous.
Or you can Bind it.

## Forms

Controlled vs Uncontrolled.

## Lifecycle

Mount will only be ran once.
Mount.
Updating.
Unmounting.
ErrorHandling.

These are lifecycles.

## Fetching data

Fetch is a javascript method.
Fetch executes a GET request to the endpoint.
then functions chain together.
Response must be cast to json.
Catch to handle errors.

You can also add another parameter to a fetch to add POST PUT and other http methods and add headers and body.
This is the overloaded fetch.
Without the second parameter object it is just a GET.

## Managing State without classes IE Hooks

useState.
The method changes the state and the variable will be updated by react through a scheduling queue.

useState returns an array so denature it with brackets and names.
You can also add an initial state.

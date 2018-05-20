export default `
# Actions

First, let's define some actions.

**Actions** are payloads of information that send data from your application to your store. They are the *only* source of information for the store. You send them to the store using [\`store.dispatch()\`](../api/Store.md#dispatch).

Here's an example action which represents adding a new todo item:

\`\`\`js
const ADD_TODO = 'ADD_TODO'
\`\`\`

\`\`\`js
{
  type: ADD_TODO,
  text: 'Build my first Redux app'
}
\`\`\`

Actions are plain JavaScript objects. Actions must have a \`type\` property that indicates the type of action being performed. Types should typically be defined as string constants. Once your app is large enough, you may want to move them into a separate module.

\`\`\`js
import { ADD_TODO, REMOVE_TODO } from '../actionTypes'
\`\`\`

>##### Note on Boilerplate

>You don't have to define action type constants in a separate file, or even to define them at all. For a small project, it might be easier to just use string literals for action types. However, there are some benefits to explicitly declaring constants in larger codebases. Read [Reducing Boilerplate](../recipes/ReducingBoilerplate.md) for more practical tips on keeping your codebase clean.

Other than \`type\`, the structure of an action object is really up to you. If you're interested, check out [Flux Standard Action](https://github.com/acdlite/flux-standard-action) for recommendations on how actions could be constructed.

We'll add one more action type to describe a user ticking off a todo as completed. We refer to a particular todo by \`index\` because we store them in an array. In a real app, it is wiser to generate a unique ID every time something new is created.

\`\`\`js
{
  type: TOGGLE_TODO,
  index: 5
}
\`\`\`

It's a good idea to pass as little data in each action as possible. For example, it's better to pass \`index\` than the whole todo object.

Finally, we'll add one more action type for changing the currently visible todos.
`

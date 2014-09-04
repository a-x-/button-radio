button-radio
============

Make pushable button radio behaviour.

VanillaJS library without jQuery, bootstrap and etc. dependency.

# Example

```html
<div class="button-radio-group" data-name="radio-group-1">
    <button type="button" value="mode-1" >Mode 1</button>
    <button type="button" value="mode-2" >Mode 2</button>
    <button type="button" value="mode-3" class="checked" >Mode 3</button>
</div>
```

![button-radio Example](/button-radio.png)

```js
    var buttonRadio = new ButtonRadio('.button-radio-group', function (response) {
    // The on change callback.
    // callback code here ...
    console.log(response);
    // response:
    // {
    //      prevButton: Node,
    //      curButton:  Node,
    //      groupNode:  Node,
    //      value:      string,
    //      prevValue:  string
    // }
    });
```

# Status

This is under active development stage **(not production ready)**.
But i already use this library in my own projects.

| **Idea** | Alpha | Beta | RC | Production |
|:--------:|:-----:|:----:|:--:|:----------:|
|  **Ok**  |v.0.1.x|  —   |  — |     —    |

# Using

# Demo


# License

All under MIT license.

# Contribution

You're welcome!
I watch github issues and mailbox (me@invntrm.ru).

English typo-fixes are welcome too.

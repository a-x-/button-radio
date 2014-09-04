/**
 * @param group string|Node
 * @type {Function}
 */
var ButtonRadio = (function () {
    this.group = typeof arguments[0] === 'string' ? document.querySelector(arguments[0]) : arguments[0];
    this.checkedButton = undefined;
    this.options = {};
    this.getMode = function () {
        return this.checkedButton && this.checkedButton.dataset.value;
    }.bind(this);
    if (typeof arguments[1] === 'function') {
        this.options.change = arguments[1];
    }
    else if (arguments[1]) {
        this.options = arguments[1];
    }
    if (!this.options.change) {
        this.options.change = function () {
        };
    }
    // options.change = options.change || function(){};
    // options.change = options.change || function(){};
    // options.change = options.change || function(){};
    [].slice.call(this.group.querySelectorAll('button')).forEach(function (button) {
        button.addEventListener('click', function (event) {
            var prevButton = this.getMode() && this.checkedButton;
            if (this.getMode() === button.dataset.value) { // if current button equal a previous button
                this.checkedButton = undefined;
            }
            else {
                button.classList.add('checked');
                this.checkedButton = button;
            }
            prevButton && prevButton.classList.remove('checked');
            this.options.change({
                prevButton: prevButton,
                curButton: this.checkedButton,
                groupNode: this.group,
                value: this.checkedButton && this.checkedButton.dataset.value,
                prevValue: prevButton && prevButton.dataset.value
            }); // call back
        }.bind(this));
    }.bind(this));
});
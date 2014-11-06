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

    //
    // Add listeners for buttons' click events
    [].slice.call(this.group.querySelectorAll('button:not(.no-radio)')).forEach(function (button) {
        button.addEventListener('click', function (event) {
            var prevButton = this.getMode() && this.checkedButton;
            if (this.getMode() === button.dataset.value) { // if current button equal a previous button
                try {
                    this.checkedButton.blur();
                } catch (e) {
                }
                this.checkedButton = undefined;
            }
            else {
                button.classList.add('checked');
                this.checkedButton = button;
            }
            prevButton && prevButton.classList.remove('checked');
            var response = {
                prevButton: prevButton,
                curButton: this.checkedButton,
                groupNode: this.group,
                value: this.checkedButton && this.checkedButton.dataset.value,
                prevValue: prevButton && prevButton.dataset.value
            };
            //
            // Trigger event tool
            var triggerEvent = function (name, data) {
                this.group.dispatchEvent(new CustomEvent(name, {detail: {response: response, data: data}}));
            }.bind(this);

            //
            // Trigger events and callbacks
            //

            //
            // Trigger event: any general
            triggerEvent('state-changed');
            this.options.change(response); // call back, also
            //
            // Trigger event: any active/passive
            if (!response.prevButton) triggerEvent('radio-enter');
            if (!response.curButton) triggerEvent('radio-out');
            //
            // Trigger event: the mode is active
            if (response.value){
                triggerEvent('state-in-' + response.value);
                triggerEvent('change-state-' + (response.value), {state: 'in'});
            }
            //
            // Trigger event: the previous mode is passive
            if (response.prevValue) {
                triggerEvent('state-out-' + response.prevValue);
                triggerEvent('change-state-' + (response.prevValue), {state: 'out'});
            }
        }.bind(this));
    }.bind(this));
});
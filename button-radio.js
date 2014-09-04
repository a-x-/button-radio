var ButtonRadio = (function(group, options) {
    if (typeof group === 'string') {
        group = document.querySelector(group);
    }
    this.group = group;
    this.checkedButton = undefined;
    this.getMode = function(){return this.checkedButton && this.checkedButton.value;}.bind(this);
    this.options = options || {};
    this.options.change = this.options.change || function(){};
    // options.change = options.change || function(){};
    // options.change = options.change || function(){};
    // options.change = options.change || function(){};
    [].slice.call(group.querySelectorAll('button')).forEach(function(button){
        button.addEventListener('click',function (event) {
            var prevButton = this.getMode() && this.checkedButton;
            if (this.getMode() !== button.value) {
                prevButton && this.checkedButton.classList.remove('checked');
                this.checkedButton = button;
                button.classList.add('checked');
                this.options.change(prevButton, button, group); // call back
            }
        }.bind(this));
    }.bind(this));
});
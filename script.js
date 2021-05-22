const inputs = document.querySelectorAll('input');
// 'this' refers to the object 'input' so we can access it's properties
function handleInputChg() {
    const suffix = (this.dataset.sizing || '');
    // have to add the suffix, the pixels, so the border and blur will display
    // "this" allows us to access whatever property and value we need from the input object
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}


inputs.forEach(input => input.addEventListener('change', handleInputChg));
inputs.forEach(input => input.addEventListener('mousemove', handleInputChg));

// so when the document hears a mouse moving or a change in the position of the sliders in our inputs,
// it will set the properties in the CSS to input {blur: 10px} or whatever we pick
// Returns a NodeList of the inputs
// ForEach method has been added to NodeList, so it's not needed to convert this to an array
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // Dataset: an object containing all data attributes from the element
  const suffix = this.dataset.sizing || '';
  // Updates the suffix value of the input element upon its value being changed
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  //console.log(this.name);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
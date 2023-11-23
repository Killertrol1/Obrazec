/* TODO */
/*document.getElementById('nazivposiljatelja').addEventListener('focus', function() {
    // If the input does not already have a placeholder or if the value is empty, then set a placeholder
    if (!this.placeholder || this.value === "") {
        this.placeholder = "+{7}(000)000-00-00";
    }
});
document.getElementById('nazivposiljatelja').addEventListener('blur', function() {
  // If the input does not already have a placeholder or if the value is empty, then set a placeholder
      this.placeholder = "";
});
var element = document.getElementById('nazivposiljatelja');
var maskOptions = {
  mask: '+{7}(000)000-00-00'
};*/

/* MODEL */ 
document.getElementById('model').addEventListener('focus', function() {
  // If the input does not already have a placeholder or if the value is empty, then set a placeholder
  if (!this.placeholder || this.value === "") {
      this.placeholder = "SI99";
  }
});
document.getElementById('model').addEventListener('blur', function() {
// If the input does not already have a placeholder or if the value is empty, then set a placeholder
    this.placeholder = "";
});
var element = document.getElementById('model');
var maskOptions = {
mask: 'SI99'
};
var element = document.getElementById('model');
var mask = IMask(element, {
  mask: 'aa00',
  definitions: {
    // <any single char>: <same type as mask (RegExp, Function, etc.)>
    // defaults are '0', 'a', '*'
    'a': /[A-Z]/
  }
});

/* REFERENCA */ 
document.getElementById('referenca').addEventListener('focus', function() {
  // If the input does not already have a placeholder or if the value is empty, then set a placeholder
  if (!this.placeholder || this.value === "") {
      this.placeholder = "99-9999-99999";
  }
});
document.getElementById('referenca').addEventListener('blur', function() {
// If the input does not already have a placeholder or if the value is empty, then set a placeholder
    this.placeholder = "";
});
var element = document.getElementById('referenca');
var maskOptions = {
mask: '99-9999-99999'
};
var element = document.getElementById('referenca');
var mask = IMask(element, {
  mask: '00-0000-00000'
});

/* IBAN POŠILJATELJ */ 
document.getElementById('ibanposiljatelja').addEventListener('focus', function() {
  // If the input does not already have a placeholder or if the value is empty, then set a placeholder
  if (!this.placeholder || this.value === "") {
      this.placeholder = "SI99 9999 9999 999";
  }
});
document.getElementById('ibanposiljatelja').addEventListener('blur', function() {
// If the input does not already have a placeholder or if the value is empty, then set a placeholder
    this.placeholder = "";
});
var element = document.getElementById('ibanposiljatelja');
var maskOptions = {
mask: 'SI99 9999 9999 999'
};
var element = document.getElementById('ibanposiljatelja');
var mask = IMask(element, {
  mask: 'aa00 0000 0000 000',
  definitions: {
    // <any single char>: <same type as mask (RegExp, Function, etc.)>
    // defaults are '0', 'a', '*'
    'a': /[A-Z]/
  }
});

/* IBAN PREJEMNIKA */ 
document.getElementById('ibanprejemnika').addEventListener('focus', function() {
  // If the input does not already have a placeholder or if the value is empty, then set a placeholder
  if (!this.placeholder || this.value === "") {
      this.placeholder = "SI99 9999 9999 999";
  }
});
document.getElementById('ibanprejemnika').addEventListener('blur', function() {
// If the input does not already have a placeholder or if the value is empty, then set a placeholder
    this.placeholder = "";
});
var element = document.getElementById('ibanprejemnika');
var maskOptions = {
mask: 'SI99 9999 9999 999'
};
var element = document.getElementById('ibanprejemnika');
var mask = IMask(element, {
  mask: 'aa00 0000 0000 000',
  definitions: {
    // <any single char>: <same type as mask (RegExp, Function, etc.)>
    // defaults are '0', 'a', '*'
    'a': /[A-Z]/
  }
});

/*Znesek */
document.getElementById('znesek').addEventListener('focus', function() {
  // If the input does not already have a placeholder or if the value is empty, then set a placeholder
  if (!this.placeholder || this.value === "") {
      this.placeholder = "100000,00";
  }
});
document.getElementById('znesek').addEventListener('blur', function() {
// If the input does not already have a placeholder or if the value is empty, then set a placeholder
    this.placeholder = "";
});
const elementN = document.getElementById('znesek');
var numberMask = IMask(elementN, {
  mask: Number,  // enable number mask

  // other options are optional with defaults below
  scale: 2,  // digits after point, 0 for integers
  thousandsSeparator: '',  // any single char
  padFractionalZeros: true,  // if true, then pads zeros at end to the length of scale
  normalizeZeros: true,  // appends or removes zeros at ends
  radix: ',',  // fractional delimiter
  mapToRadix: ['.'],  // symbols to process as radix

  // additional number interval options (e.g.)
  min: -100000,
  max: 100000
})

/* DATUM */
document.addEventListener("DOMContentLoaded", function() {
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('datum').setAttribute('min', today);
  document.getElementById('datum').value = today;
});

/* sweet alert */
var i=1;
  if(i==1){
    document.getElementById('myForm').addEventListener('submit', function(event) {
      let inputs = document.querySelectorAll('#myForm input');
      let fields = document.querySelectorAll('#myForm select');
    event.preventDefault(); // Prevent the form from submitting.  
    document.getElementById('placaj').classList.remove("error-class");
    inputs.forEach(function(input) {
        input.disabled = true;
    });
    fields.forEach(function(field) {
      if (field.tagName === "SELECT") {
          field.disabled = true;
      }
    });
    document.getElementById('placaj').disabled = false;
    document.getElementById('shrani').disabled = false;
    i++;
    // Change the submit button value back to "submit".
    document.getElementById('placaj').value = 'PLAČAJ';
    document.getElementById('shrani').value = 'SHRANI  KOT VZOREC';
    })
  }else{
    var mybutton =document.getElementById("shrani");
    mybutton.addEventListener("click", function() {
    mybutton.value = 'KYS';
    let inputs = document.querySelectorAll('#myForm input');
    let fields = document.querySelectorAll('#myForm select');
    inputs.forEach(function(input) {
      input.disabled = false;
    });
    fields.forEach(function(field) {
      if (field.tagName === "SELECT") {
          field.disabled = false;
      }
    });
    });
    document.getElementById('myForm').addEventListener('submit', function(event) {
      let inputs = document.querySelectorAll('#myForm input');
      let fields = document.querySelectorAll('#myForm select');
    event.preventDefault(); // Prevent the form from submitting.  
    Swal.fire({
      title: "Vspesno ste placali",
      text: "",
      icon: "success"
    }).then((result) => {
      if (result.isConfirmed) {   
        // Re-enable the fields.
        fields.forEach(function(field) {
        if (field.tagName === "SELECT") {
            field.disabled = false;
        }
        });
        inputs.forEach(function(input) {
          input.disabled = false;
        });
        // Change the submit button value back to "submit".
        document.getElementById('placaj').value = 'NAPREJ';
        document.getElementById('shrani').value = 'SHRANI  KOT VZOREC';
        document.getElementById('myForm').submit();
      } else {
        // If the user doesn't want to clear fields, change the submit button value back to "submit".
        document.getElementById('placaj').value = 'NAPREJ';
        document.getElementById('shrani').value = 'SHRANI  KOT VZOREC';
        document.getElementById('myForm').submit();
      }
    })
  })
} 

/* sweet alert 
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting.
    
    let inputs = document.querySelectorAll('#myForm input');
    let fields = document.querySelectorAll('#myForm select');
Swal.fire({
  title: 'Ali res želite plačati?',
  text: "",
  icon: 'question',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  cancelButtonText: 'Ne',
  confirmButtonText: 'Da'
  
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire(
      'Your payment went through',
      '',
      'success'
    )
  
    inputs.forEach(function(input) {
        input.disabled = true;
    });
        // Clear all input values.
        inputs.forEach(function(input) {
            input.value = '';
        });
  
        // Re-enable the input fields.
        inputs.forEach(function(input) {
            input.disabled = false;
        });
        fields.forEach(function(field) {
          if (field.tagName === "SELECT") {
              field.selectedIndex = 0;  // reset to the first option for <select>
          } else {
              field.value = '';
          }
      });
  
      // Re-enable the fields.
      fields.forEach(function(field) {
          field.disabled = false;
      });
  
        // Change the submit button value back to "submit".
        document.getElementById('placaj').value = 'NAPREJ';
        document.getElementById('shrani').value = 'SHRANI  KOT VZOREC';
        location.reload(true);
    } else {
        // If the user doesn't want to clear fields, change the submit button value back to "submit".
        document.getElementById('placaj').value = 'NAPREJ';
        document.getElementById('shrani').value = 'SHRANI  KOT VZOREC';
    }
})
});*/

$("#form").validate({
  rules: {
    phonenumber: {
      required: true,
      digits: false,
      minlength: 10,
    },
  },
  messages: {
    phonenumber: {
      required: "Please enter a valid 10-digit mobile number",
      minlength: "length Must Be 10-digit",
      maxLength: "maxlength Must Be 10-digit",
    },
  },

  submitHandler: function (form) {
    alert("submitted!");
    form.submit();
  },
});

export default function validate(values) {
  const errors = {};
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  const pincodeRegex = /^[0-9]{6,}$/;
  const shopRegex = /^(?=.{1,50}$)[a-z]+(?:['_.\s][a-z]+)*$/i;
  const addressRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;


  if (!values.address) {
    errors.address = 'Address field is required';
  } else if (!addressRegex.test(values.address)) {
    errors.address = 'Please, enter a valid address';
  }

  if (!values.shopName) {
    errors.shopName = 'Shop name field is required';
  } else if (!shopRegex.test(values.shopName)) {
    errors.shopName = 'Please, enter a valid shop name';
  }

  if (!values.streetAddress1) {
    errors.streetAddress1 = 'Street address field is required';
  } else if (!addressRegex.test(values.streetAddress1)) {
    errors.streetAddress1 = 'Please, enter a valid street address';
  }

  if (values.streetAddress2 && !addressRegex.test(values.streetAddress2)) {
      errors.streetAddress2 = 'Please, enter a valid street address';
  }

  if (!values.city) {
    errors.city = 'City field is required';
  } else if (!shopRegex.test(values.city)) {
    errors.city = 'Please, enter a valid city';
  };

  if (!values.pincode) {
    errors.pincode = 'Pincode field is required';
  } else if (!pincodeRegex.test(values.pincode)) {
    errors.pincode = 'Please, enter a valid pincode';
  }

  return errors;
}

export default function validate(value) {
  const pincodeRegex = /^[0-9]{1,}$/;

  return pincodeRegex.test(value);
}
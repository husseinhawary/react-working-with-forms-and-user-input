import { useState } from "react";

const BasicForm = (props) => {
  //first name states
  const [fNameEnteredValue, setFNameEnteredValue] = useState("");
  const [isFNameTouched, setIsFNameTouched] = useState(false);

  //last name states
  const [lNameEnteredValue, setLNameEnteredValue] = useState("");
  const [isLNameTouched, setIsLNameTouched] = useState(false);

  //email states
  const [emailEnteredValue, setEmailEnteredValue] = useState("");
  const [isEmailTouched, setIsEmailTouched] = useState(false);

  //valid && invalid first name
  const enteredFNameIsValid = fNameEnteredValue.trim() !== "";
  const fNameInputIsInvalid = !enteredFNameIsValid && isFNameTouched;

  //valid && invalid last name
  const enteredLNameIsValid = lNameEnteredValue.trim() !== "";
  const lNameInputIsInvalid = !enteredLNameIsValid && isLNameTouched;

  //valid && invalid email
  const enteredEmailIsValid = emailEnteredValue.includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && isEmailTouched;

  let formIsValid = false;

  if (enteredFNameIsValid && enteredLNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const fNameChangeHandler = (event) => {
    setFNameEnteredValue(event.target.value);
  };

  const fNameBlurHandler = () => {
    setIsFNameTouched(true);
  };

  const lNameChangeHandler = (event) => {
    setLNameEnteredValue(event.target.value);
  };

  const lNameBlurHandler = () => {
    setIsLNameTouched(true);
  };

  const emailChangeHandler = (event) => {
    setEmailEnteredValue(event.target.value);
  };

  const emailInputBlurHandler = () => {
    setIsEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setIsFNameTouched(true);
    setIsLNameTouched(true);
    setIsEmailTouched(true);

    if (!enteredFNameIsValid) {
      return;
    }

    if (!enteredLNameIsValid) {
      return;
    }

    if (!enteredEmailIsValid) {
      return;
    }

    // first name
    setFNameEnteredValue("");
    setIsFNameTouched(false);

    // last name
    setLNameEnteredValue("");
    setIsLNameTouched(false);

    //email
    setEmailEnteredValue("");
    setIsEmailTouched(false);
  };

  const fNameInputClasses = fNameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const lNameInputClasses = lNameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={fNameInputClasses}>
          <label htmlFor="f-name">First Name</label>
          <input
            type="text"
            id="f-name"
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
            value={fNameEnteredValue}
          />
          {fNameInputIsInvalid && (
            <p className="error-text">First name must be not empty!</p>
          )}
        </div>

        <div className={lNameInputClasses}>
          <label htmlFor="l-name">Last Name</label>
          <input
            type="text"
            id="l-name"
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
            value={lNameEnteredValue}
          />
          {lNameInputIsInvalid && (
            <p className="error-text">Last name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={emailEnteredValue}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;

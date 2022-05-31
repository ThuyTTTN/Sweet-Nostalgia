// Function on page load
window.onload = function pageLoad() {
    addYearOptions();
}

// Function for year-selector 
function addYearOptions()
{
    let today = new Date();  
    const yearSelect = document.getElementById("expiration_year_select"); 

    for (let i = 0; i <= 10; i++)
    {
        const newOption = document.createElement("option");
        newOption.textContent = Number(today.getFullYear()) + i;
        yearSelect.append(newOption);
    } 
}

// Function to change the credit card logo
function identifyCreditCard()
{
    const userInput = document.getElementById("credit_card_number_input");
    const inputString = (userInput.value).toString();
    const inputAddon = document.getElementById("credit_card_logo");
    const errorLabel = document.getElementById("invalid_credit_card_label");

    const firstDigit = Number(inputString[0]);
    const first2Digits = Number(inputString.substring(0,2));
    const first3Digits = Number(inputString.substring(0,3));
    const first4Digits = Number(inputString.substring(0,4));
    const first6Digits = Number(inputString.substring(0,6));

    switch(firstDigit)
    {
        case 1:
            inputAddon.src = "/images/Diners_Club_Logo3.svg";
            inputAddon.setAttribute("title", "Diners Club");

            if ((inputString.length > 15) || ((inputString.length == 2) && (first2Digits != 18))
            || ((inputString.length == 3) && (first3Digits != 180)) 
            || ((inputString.length >= 4) && (first4Digits != 1800)))
            {
                inputAddon.src = "/images/Blue_question_mark_icon.svg";
                inputAddon.setAttribute("title", "Unknown");
            }
            break;

        case 2:
            inputAddon.src = "/images/Mastercard_2019_logo.svg";
            inputAddon.setAttribute("title", "Mastercard");

            if (first2Digits == 21)
            {
                inputAddon.src = "/images/JCB_logo.svg";
                inputAddon.setAttribute("title", "JCB");

                if ((inputString.length > 15)
                || ((inputString.length == 3) && (first3Digits != 212)) 
                || ((inputString.length == 4) && (first4Digits != 2123)))
                {
                    inputAddon.src = "/images/Blue_question_mark_icon.svg";
                    inputAddon.setAttribute("title", "Unknown");
                }
            }

            else if (inputString.length > 16)
            {
                inputAddon.src = "/images/Blue_question_mark_icon.svg";
                inputAddon.setAttribute("title", "Unknown");
            }
            break;

        case 3:
            inputAddon.src = "/images/JCB_logo.svg";
            inputAddon.setAttribute("title", "JCB");

            if ((first2Digits == 34) || (first2Digits == 37))
            {
                inputAddon.src = "/images/American_Express_logo_(2018).svg";
                inputAddon.setAttribute("title", "AMEX");

                if (inputString.length > 15)
                {
                    inputAddon.src = "/images/Blue_question_mark_icon.svg";
                    inputAddon.setAttribute("title", "Unknown");
                }
            }

            else if (((first3Digits >= 300) && (first3Digits <= 305))
            || (first3Digits == 309) || (first3Digits == 36)
            || (first2Digits == 38) || (first2Digits == 39))
            {
                inputAddon.src = "/images/Diners_Club_Logo3.svg";
                inputAddon.setAttribute("title", "Diners Club");

                if (inputString.length > 14)
                {
                    inputAddon.src = "/images/Blue_question_mark_icon.svg";
                    inputAddon.setAttribute("title", "Unknown");
                }
            }

            else if (inputString.length > 16)
            {
                inputAddon.src = "/images/Blue_question_mark_icon.svg";
                inputAddon.setAttribute("title", "Unknown");
            }
            break;

        case 4:
            inputAddon.src = "/images/Visa_2021.svg";
            inputAddon.setAttribute("title", "Visa");

            if (inputString.length > 16)
            {
                inputAddon.src = "/images/Blue_question_mark_icon.svg";
                inputAddon.setAttribute("title", "Unknown");
            }
            break;

        case 5:
            inputAddon.src = "/images/Mastercard_2019_logo.svg";
            inputAddon.setAttribute("title", "Mastercard");

            if (inputString.length > 16)
            {
                inputAddon.src = "/images/Blue_question_mark_icon.svg";
                inputAddon.setAttribute("title", "Unknown");
            }
            break;

        case 6:
            inputAddon.src = "/images/Blue_question_mark_icon.svg";
            inputAddon.setAttribute("title", "Unknown");

            if ((inputString.length <= 16) 
            && ((first2Digits == 65) || (first4Digits == 6011)
            || ((first3Digits >= 644) && (first3Digits <= 649)) 
            || ((first6Digits >= 622126) && (first6Digits <= 622925))))
            {
                inputAddon.src = "/images/Discover_Card_logo.svg";
                inputAddon.setAttribute("title", "Discover");

            }

            else if ((inputString.length <= 19) && (first2Digits == 62))
            {
                inputAddon.src = "/images/UnionPay_logo.svg";
                inputAddon.setAttribute("title", "UnionPay");
            }
            else 
            {
                inputAddon.src = "/images/Blue_question_mark_icon.svg";
                inputAddon.setAttribute("title", "Unknown");
            }
            break;
        
        default:
            inputAddon.src = "/images/Blue_question_mark_icon.svg";
            inputAddon.setAttribute("title", "Unknown");
            break;
    }
}

// Event listener for "submit" button
document.getElementById("submit_button").onclick = function() {
    validateDropdownInputs();
    validateCreditCardInput();
    validateOtherInputs();
};

// Function to check Luhn's Algorithm
function passesLuhnsAlgorithm()
{

    let position = 1;
    var sum = 0;
    
    const creditCardNumber = document.getElementById("credit_card_number_input");
    const creditCardNumberInput = creditCardNumber.value;
    for (let i = (creditCardNumberInput.length - 1); i >= 0; i--)
	{
		if ((position % 2) == 0)
		{
			let digitNum = Number(creditCardNumberInput[i]) * 2;

			if (digitNum >= 10)
			{
				let digit1 = Math.floor(digitNum / 10);
				let digit2 = digitNum % 10;
				sum = sum + digit1 + digit2;
			}
			else
			{
				sum = sum + digitNum;
			}
		}
		else
		{
			sum = sum + Number(creditCardNumberInput[i]);
		}
		position++;
	}
    return !(Math.floor(sum) % 10);
}

// Checks user input and notifies if submissions are valid
function validateCreditCardInput()
{
    const userInput = document.getElementById("credit_card_number_input");
    const inputString = (userInput.value).toString();
    const creditCardErrorLabel = document.getElementById("invalid_credit_card_label");
    if (inputString.length <= 0)
    {
        creditCardErrorLabel.textContent = "Please enter a credit card number";
    }
    else if (!passesLuhnsAlgorithm())
    {
        creditCardErrorLabel.textContent = "Invalid credit card number";
    }
    else
    {
        creditCardErrorLabel.textContent = "";
    }
}

// Checks user input for the other input fields and notifies where input is invalid
function validateOtherInputs()
{
    let emptyInputErrorDetected = 0;
    let invalidInputErrorDetected = 0;
    let noInputErrorText = "Please enter something for: ";
    let invalidInputErrorText = "Please enter valid input for: ";
    
    const cvvInput = document.getElementById("cvv_input");
    const cvvInputText = cvvInput.value;
    if (cvvInputText.length <= 0)
    {
        noInputErrorText += "CVV ";
        emptyInputErrorDetected++;
    }
    else if (cvvInputText.length > 4)
    {
        invalidInputErrorText += "CVV ";
        invalidInputErrorDetected++;
    }
    
    // Test if the First Name field is empty
    const firstNameInput = document.getElementById("first_name_input");
    const firstNameInputText = firstNameInput.value;
    if (firstNameInputText.length <= 0)
    {
        noInputErrorText += "First Name ";
        emptyInputErrorDetected++;
    }

    // Test if the Last Name field is empty
    const lastNameInput = document.getElementById("last_name_input");
    const lastNameInputText = lastNameInput.value;
    if (lastNameInputText.length <= 0)
    {
        noInputErrorText += "Last Name ";
        emptyInputErrorDetected++;
    }

    // Test if the Address field is empty
    const addressInput = document.getElementById("address_input");
    const addressInputText = addressInput.value;
    if (addressInputText.length <= 0)
    {
        noInputErrorText += "Address ";
        emptyInputErrorDetected++;
    }

    // Test if the City field is empty
    const cityInput = document.getElementById("city_input");
    const cityInputText = cityInput.value;
    if (cityInputText.length <= 0)
    {
        noInputErrorText += "City ";
        emptyInputErrorDetected++;
    }

    // Test if the Zip Code field is empty or valid
    const zipCodeInput = document.getElementById("zip_code_input");
    const zipCodeInputText = zipCodeInput.value;
    if (zipCodeInputText.length <= 0)
    {
        noInputErrorText += "Zip Code ";
        emptyInputErrorDetected++;
    }
    else if (zipCodeInputText.length != 5)
    {
        invalidInputErrorText += "Zip Code ";
        invalidInputErrorDetected++;
    }

    // Display empty input errors
    const noInputErrorLabel = document.getElementById("no_input_error_label");
    if (emptyInputErrorDetected)
    {
        noInputErrorLabel.textContent = noInputErrorText;
    }
    else
    {
        noInputErrorLabel.textContent = "";
    }

    // Display invalid input errors
    const invalidInputErrorLabel = document.getElementById("invalid_input_error_label");
    if (invalidInputErrorDetected)
    {
        invalidInputErrorLabel.textContent = invalidInputErrorText;
    }
    else 
    {
        invalidInputErrorLabel.textContent = "";
    }
}

// Checks user inputs for the dropdown inputs and notifies user to do so
function validateDropdownInputs()
{
    let errorText = "Please make a choice for: ";
    let errorDetected = 0;
    const monthSelect = document.getElementById("expiration_month_select");
    const monthSelectText = monthSelect.options[monthSelect.selectedIndex].text;
    if (monthSelectText == "Month")
    {
        errorText += "Month ";
        errorDetected++;
    }

    const yearSelect = document.getElementById("expiration_year_select");
    const yearSelectText = yearSelect.options[yearSelect.selectedIndex].text;
    if (yearSelectText == "Year")
    {
        errorText += "Year ";
        errorDetected++;
    }
    
    const stateSelect = document.getElementById("state_select");
    const stateSelectText = stateSelect.options[stateSelect.selectedIndex].text;
    if (stateSelectText == "Choose State")
    {
        errorText += "State ";
        errorDetected++;
    }

    const dropdownsErrorLabel = document.getElementById("dropdowns_error_label");
    if (errorDetected)
    {
        dropdownsErrorLabel.textContent = errorText;
    }
    else
    {
        dropdownsErrorLabel.textContent = "";
    }
}
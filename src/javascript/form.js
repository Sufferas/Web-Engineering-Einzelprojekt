
function component() {

    const headingElement = document.createElement('h2');
    const formElement = document.createElement('form');

    const divElementName = document.createElement('div');
    const labelElementName = document.createElement('label');
    const inputElementName = document.createElement('input');
    const divElementNameError = document.createElement('div');

    const divElementMail = document.createElement('div');
    const labelElementMail = document.createElement('label');
    const inputElementMail = document.createElement('input');
    const divElementMailError = document.createElement('div');

    const divElementNumber = document.createElement('div');
    const labelElementNumber = document.createElement('label');
    const inputElementNumber = document.createElement('input');
    const divElementNumberError = document.createElement('div');

    const divElementPassort = document.createElement('div');
    const labelElementPassort = document.createElement('label');
    const inputElementPassort = document.createElement('input');

    const divElementPassort2 = document.createElement('div');
    const labelElementPassort2 = document.createElement('label');
    const inputElementPassort2 = document.createElement('input');
    const divElementPasswordError2 = document.createElement('div');

    const divElementBotton = document.createElement('div');
    const inputElementBotton = document.createElement('input');

    formElement.setAttribute("name", 'contactForm')
    formElement.setAttribute("onsubmit", 'return validateForm()')
    formElement.setAttribute("action", '')
    //  error page refresch before valid
    formElement.setAttribute("method", 'post')

    headingElement.innerText = "Form"

    divElementName.classList.add('row')
    divElementMail.classList.add('row')
    divElementNumber.classList.add('row')
    divElementPassort.classList.add('row')
    divElementPassort2.classList.add('row')
    divElementBotton.classList.add('row')

    labelElementName.innerText = "Full Name"

    labelElementMail.innerText = "Email Address"
    labelElementNumber.innerText = "Number"
    labelElementPassort.innerText = "Password"
    labelElementPassort2.innerText = "Repeat password"

    inputElementName.setAttribute("type", 'text')
    inputElementName.setAttribute("name", 'name')

    inputElementMail.setAttribute("type", 'text')
    inputElementMail.setAttribute("name", 'email')

    inputElementNumber.setAttribute("type", 'text')
    inputElementNumber.setAttribute("name", 'mobile')
    inputElementNumber.setAttribute("maxlength", '10')

    inputElementPassort.setAttribute("type", 'password')
    inputElementPassort.setAttribute("name", 'password')
    inputElementPassort.setAttribute("minlength", '8')

    inputElementPassort2.setAttribute("type", 'password')
    inputElementPassort2.setAttribute("name", 'password2')
    inputElementPassort2.setAttribute("minlength", '8')

    inputElementBotton.setAttribute("type", 'submit')
    inputElementBotton.setAttribute("value", 'Submit')

    divElementNameError.classList.add("error")
    divElementMailError.classList.add("error")
    divElementNumberError.classList.add("error")
    divElementPasswordError2.classList.add("error")

    divElementNameError.setAttribute("id", 'nameErr')
    divElementMailError.setAttribute("id", 'emailErr')
    divElementNumberError.setAttribute("id", 'mobileErr')
    divElementPasswordError2.setAttribute("id", 'passErr')

    formElement.append(headingElement)

    formElement.appendChild(divElementName)
    divElementName.appendChild(labelElementName)
    divElementName.appendChild(inputElementName)
    divElementName.appendChild(divElementNameError)

    formElement.appendChild(divElementMail)
    divElementMail.appendChild(labelElementMail)
    divElementMail.appendChild(inputElementMail)
    divElementMail.appendChild(divElementMailError)

    formElement.appendChild(divElementNumber)
    divElementNumber.appendChild(labelElementNumber)
    divElementNumber.appendChild(inputElementNumber)
    divElementNumber.appendChild(divElementNumberError)

    formElement.appendChild(divElementPassort)
    divElementPassort.appendChild(labelElementPassort)
    divElementPassort.appendChild(inputElementPassort)


    formElement.appendChild(divElementPassort2)
    divElementPassort2.appendChild(labelElementPassort2)
    divElementPassort2.appendChild(inputElementPassort2)
    divElementPassort2.appendChild(divElementPasswordError2)

    formElement.appendChild(divElementBotton)
    divElementBotton.appendChild(inputElementBotton)

  return formElement;
}

document.body.appendChild(component());

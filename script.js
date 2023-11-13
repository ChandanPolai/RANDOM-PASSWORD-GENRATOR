const Password = document.querySelector("#text");
const CopyBtn = document.querySelector("#copy");
const NumLength = document.querySelector("#lenth");
const Uppercase = document.querySelector("#uppercase");
const Lowercase = document.querySelector("#lowercase");
const SymbolCheckbox = document.querySelector("#symbol");
const NumberCheckbox = document.querySelector("#number");
const GenerateBtn = document.querySelector("#genrate");

const generatePassword = () => {
    const length = NumLength.value;
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const symbolChars = '!@#$%^&*()_-+=<>?';
    const numberChars = '0123456789';
    

    let validChars = '';
    let password = '';

    if (length == "" || length <= 0) {
        alert("Please enter a valid positive number for the password length.");
        return;
    }

    if (!Uppercase.checked && !Lowercase.checked && !SymbolCheckbox.checked && !NumberCheckbox.checked ) {
    alert("✅first you havae to choose which type of password to set")
    return;
}

    
    if (Uppercase.checked) {
        validChars += uppercaseChars;
    }
    if (Lowercase.checked) {
        validChars += lowercaseChars;
    }
    if (SymbolCheckbox.checked) {
        validChars += symbolChars;
    }
    if (NumberCheckbox.checked) {
        validChars += numberChars;
        console.log(validChars);
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars.charAt(randomIndex);
    }

    Password.value = password;
};

GenerateBtn.addEventListener("click", generatePassword);

// the user clicked the copy button
const copyToClipboard = () => {
    Password.select();
    document.execCommand('copy');
};

CopyBtn.addEventListener("click", copyToClipboard);

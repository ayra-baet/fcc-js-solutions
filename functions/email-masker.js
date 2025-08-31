// Email masker

function maskEmail(email) {
 
    const UserName = email.slice(0, email.indexOf("@"));

    const firstChar = UserName.slice(0, 1);

    const middleChars = UserName.slice(1, -1)

    const lastChar = UserName.slice(-1);

    const domainName = email.slice(email.indexOf("@"));

    return firstChar + "*".repeat(middleChars.length) + lastChar + domainName;
}

console.log(maskEmail("john.doe@example.com "));
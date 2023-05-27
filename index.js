//A Javascript Program to illustrate Caesar Cipher Techniqu
     
    // Encrypts text using a shift on s
    function encrypt(text, s)
    {
        let result=""
        for (let i = 0; i < text.length; i++)
        {
            let char = text[i];
            if (char.toUpperCase(text[i]))
            {
                let ch =  String.fromCharCode((char.charCodeAt(0) + s-65) % 26 + 65);
                result += ch;
            }
            else
            {
                let ch = String.fromCharCode((char.charCodeAt(0) + s-97) % 26 + 97);
                result += ch;
            }
        }
        return result;
    }
     
    // Driver code
    let text = "ATTACKATONCE";
    let s = 4;
    console.log("Text  : " + text + "<br>");
    console.log("Shift : " + s + "<br>");
    console.log("Cipher: " + encrypt(text, s) + "<br>");
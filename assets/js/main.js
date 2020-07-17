
// let secretAlphFront = secretAlph


// secretAlphFront = secretAlph.shift(3)
// console.log(secretAlph)


function encrypt() {
    if (document.getElementById("encode").checked == true) {
        console.log('selected:\n\t"encode"')
        document.getElementById("codeType").innerHTML = "Encoding Message:"
        document.getElementById("check").value = "Encode Message"
    }
    else if (document.getElementById("decode").checked == true) {
        console.log('selected:\n\t"decode"')
        document.getElementById("codeType").innerHTML = "Decoding Message:"
        document.getElementById("check").value = "Decode Message"

    }
}


function generate() {
    let clearAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let secretAlph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let encode = document.getElementById("encode").checked
    let decode = document.getElementById("decode").checked
    let message = document.getElementById("message").value
    let key = document.getElementById("key").value


    // Adjust Secret Alphabet with the given key
    if (((key > 0) && (encode == true)) || ((key > 0) && (decode == true))) {
        for (let i = 0; i < key; i++) {
            let letter = secretAlph.shift()
            secretAlph.push(letter)
        }
    }
    else if (((key < 0) && (encode == true)) || ((key < 0) && (decode == true))) {
        for (let i = 0; i > key; i--) {
            let letter = secretAlph.pop()
            secretAlph.unshift(letter)
        }
    }


    // encode or decode message
    let messageArr = message.split(' ')
    for (let i = 0; i < messageArr.length; i++) {
        let word = messageArr[i]
        let wordArr = word.split('')
        for (let j = 0; j < wordArr.length; j++) {
            if (encode == true) {
                wordArr[j] = secretAlph[clearAlph.indexOf(wordArr[j].toLowerCase())]
            }
            else if (decode == true) {
                wordArr[j] = clearAlph[secretAlph.indexOf(wordArr[j].toUpperCase())]
            }
        }
        word = wordArr.join('')
        messageArr[i] = word
    }
    let newMessage = messageArr.join(' ')


    // consol.logs
    if (encode == true) {
        console.log("Type:\n\tencode")
        console.log("Encode-Message:\n\t" + message)
        console.log("Encode-Key:\n\t" + key)
        console.log("Encoded-Message:\n\t" + newMessage)
    }
    else if (decode == true) {
        console.log("Type:\n\tdecode")
        console.log("Decode-Message:\n\t" + message)
        console.log("Decode-Key:\n\t" + key)
        console.log("Decoded-Message:\n\t" + newMessage)
    }


    // return message
    document.getElementById("res").innerHTML = newMessage
}

document.querySelectorAll('input').forEach(function (item) {
    item.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault()
            document.getElementById("check").click()
        }
    })
})



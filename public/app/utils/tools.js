let tools = {};

tools.clip = ($input,$text,maxLength,callbackFn) => {
    let inputValue = $input.val()
    let maxChars = maxLength || 20

    if (inputValue.length > maxChars)
      inputValue = inputValue.substring(0,maxChars)

    let curr = maxChars - inputValue.length

    if($text) $text.innerHTML = inputValue.length.toString()

    callbackFn && callbackFn(inputValue)

    return inputValue
}

export default tools

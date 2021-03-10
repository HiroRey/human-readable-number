
module.exports = function toReadable (number) {

     return numberToEnglish(number);
}



function numberToEnglish(n) {
    let units, tens, scales, start, chunks, chunksLen, chunk, ints, i, word, words;
 
    if (n === 0) {
        return 'zero';
    }

    let string = n.toString();

    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    scales = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion', 'decillion', 'undecillion', 'duodecillion', 'tredecillion', 'quatttuor-decillion', 'quindecillion', 'sexdecillion', 'septen-decillion', 'octodecillion', 'novemdecillion', 'vigintillion', 'centillion'];

    start = string.length;
    
    chunks = [];
  
    while (start > 0) {
        end = start; 
        chunks.push(string.slice((start = Math.max(0, start - 3)), end));
    }

    chunksLen = chunks.length;
    if (chunksLen > scales.length) {
        return '';
    }

    words = [];
    for (i = 0; i < chunksLen; i++) {
    chunk = parseInt(chunks[i]);

        if (chunk) {
            ints = chunks[i].split('').reverse().map(parseFloat);
            /* If tens integer is 1, i.e. 10, then add 10 to units integer */
            if (ints[1] === 1) {
                ints[0] += 10;
            }

        /* Add scale word if chunk is not zero and array item exists */
            if ((word = scales[i])) {
                words.push(word);
            }

            /* Add unit word if array item exists */
            if ((word = units[ints[0]])) {
                words.push(word);
            }
        
            /* Add tens word if array item exists */
            if ((word = tens[ints[1]])) {
                words.push(word);
            }

            /* Add hundreds word if array item exists */
            if ((word = units[ints[2]])) {
                words.push(word + ' hundred');
            }
        }
    }

    
    return words.reverse().join(' ');
}
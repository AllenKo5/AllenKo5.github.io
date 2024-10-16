const deckInput = document.querySelector('#deck-input');
const deckOutput = document.querySelector('#deck-output');
const button = document.querySelector('#button');

const init = () => {
    button.addEventListener('click', () => {
        let output='';
        const lines = deckInput.value.split('\n');
        for (let i = 0; i < lines.length; i++){
            if (lines[i].indexOf('+') > -1) {
                output += `${lines[i].substring(0, lines[i].indexOf('+'))}\n`;
            }
            else if (lines[i].indexOf('|') > -1) {
                output += `${lines[i].substring(0, lines[i].indexOf('|'))}\n`;
            }
        }
        deckOutput.innerHTML = output;
    });
};

init();
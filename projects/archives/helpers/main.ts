const cleanInput = document.querySelector<HTMLInputElement>('#clean-input');
const cleanOutput = document.querySelector<HTMLElement>('#clean-output');
const clean = document.querySelector<HTMLElement>('#clean');

const convertInput = document.querySelector<HTMLInputElement>('#convert-input');
const convertOutput = document.querySelector<HTMLElement>('#convert-output');
const convert = document.querySelector<HTMLElement>('#convert');

function cleanDeck(): void {
    if (cleanOutput) {
        cleanOutput.innerHTML = '';
    }
    let output = '';
    const lines = cleanInput?.value.split('\n') || [];
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].indexOf('+') > -1) {
            output += `${lines[i].substring(0, lines[i].indexOf('+'))}\n`;
        }
        else if (lines[i].indexOf('|') > -1) {
            output += `${lines[i].substring(0, lines[i].indexOf('|'))}\n`;
        }
    }
    if (cleanOutput) {
        cleanOutput.innerHTML = output;
    }
};

function convertDeck(): void {
    let output = '"main": [\n';
    const lines = convertInput?.value.split('\n') || [];
    let i = 0;
    while (lines[i] !== '') {
        output += `"${lines[i]}",\n`;
        i++;
    }
    output = `${output.substring(0, output.length - 2)}\n],\n"sideboard": [\n`;
    i += 2;
    while (i < lines.length) {
        output += `"${lines[i]}",\n`;
        i++;
    }
    output = `${output.substring(0, output.length - 2)}\n]`;
    console.log(output);
    if (convertOutput) {
        convertOutput.innerHTML = output;
    }
};

if (clean) {
    clean.addEventListener('click', cleanDeck);
}
if (convert) {
    convert.addEventListener('click', convertDeck);
}

export { };

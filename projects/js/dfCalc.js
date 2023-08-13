// toggles and buttons
const resetButton = document.querySelector('#reset-button');
const statToggle = document.querySelector('#stat-toggle');
const stats = document.querySelector('#stats');
const modToggle = document.querySelector('#mod-toggle');
const mods = document.querySelector('#modifiers');
const calcToggle = document.querySelector('#calc-toggle');
const calc = document.querySelector('#calc');
const calcButton = document.querySelector('#calc-button');
const dotToggle = document.querySelector('#dot-toggle');
const dot = document.querySelector('#dot');
const dotButton = document.querySelector('#dot-button');

// player modifiers
const str = document.querySelector('#str');
const dex = document.querySelector('#dex');
const int = document.querySelector('#int');
const dmg = document.querySelector('#dmg');
const boost = document.querySelector('#boost');
const baseDamage = document.querySelector('#base-dmg');

// enemy modifiers
const res = document.querySelector('#res');
const dr = document.querySelector('#dr');

// damage calc 
const hits = document.querySelector('#hits');
const totalDamageTaken = document.querySelector('#dmg-total');
const averageDamagePerHit = document.querySelector('#dph-avg');
const expectedDamage = document.querySelector('#exp-dmg');
const percentagePerHit = document.querySelector('#percent-hit');
const totalPercentage = document.querySelector('#percent-total');

// dot calc
const displayedDotDamage = document.querySelector('#dot-dmg');
const dotTickDamage = document.querySelector('#dot-tick');
const expectedDotDmg = document.querySelector('#exp-dot');
const dotTickPercentage = document.querySelector('#dot-percent');

let outgoingDamage, totalDamageReduction, finalDamage, dotDamage, expDotDamage;

// resets all parameters to 0
const reset = () => {
    const inputs = document.querySelectorAll('input');
    for (let i of inputs) {
        i.value = 0;
    }
};

// calculates final damage range
const calcRatios = () => {
    let mainstat = str.value;
    if (parseInt(dex.value) > mainstat) { mainstat = dex.value; }
    if (parseInt(int.value) > mainstat) { mainstat = int.value; }
    const baseDmg = dmg.value - Math.floor(mainstat / 10);
    baseDamage.value = baseDmg;

    // apply damage mods from main stats and boost
    const strMod = str.value / 10;
    const dexMod = dex.value / 40;
    const dotMod = dex.value / 4;
    outgoingDamage = dmg.value * (1 + strMod / 100);
    outgoingDamage *= (1 + dexMod / 100);
    outgoingDamage *= (1 + boost.value / 100);

    // calculate resistance + damage reduction
    totalDamageReduction = (100 - res.value) / 100;
    totalDamageReduction *= (100 - dr.value) / 100;

    // calculate final damage
    finalDamage = outgoingDamage * totalDamageReduction;
    
    // calculate dot damage based on stat mods and defenses
    dotDamage = displayedDotDamage.value * (1 + dotMod / 100);
    dotDamage *= totalDamageReduction;

    // calculate expected dot damage based on stat mods and defenses
    expDotDamage = baseDamage.value * (1 + dotMod / 100);
    expDotDamage *= totalDamageReduction;
};

// calculate hit damage
const calcDamage = () => {
    calcRatios();
    expectedDamage.value = finalDamage.toFixed(2);
    averageDamagePerHit.value = (totalDamageTaken.value / hits.value).toFixed(2);
    percentagePerHit.value = (averageDamagePerHit.value / finalDamage * 100).toFixed(2);
    totalPercentage.value = (totalDamageTaken.value / finalDamage * 100).toFixed(2);
};

// calculate DoT damage
const calcDoT = () => {
    calcRatios();
    dotTickDamage.value = dotDamage.toFixed(2);
    expectedDotDmg.value = expDotDamage.toFixed(2);
    dotTickPercentage.value = (dotTickDamage.value / expectedDotDmg.value * 100).toFixed(2);
};

// init function
const init = () => {
    resetButton.addEventListener('click', () => {
        reset();
    });
    statToggle.addEventListener('click', () => {
        stats.classList.toggle('is-hidden');
    });
    modToggle.addEventListener('click', () => {
        mods.classList.toggle('is-hidden');
    });
    calcToggle.addEventListener('click', () => {
        calc.classList.toggle('is-hidden');
    });
    calcButton.addEventListener('click', () => {
        calcDamage();
    });
    dotToggle.addEventListener('click', () => {
        dot.classList.toggle('is-hidden');
    });
    dotButton.addEventListener('click', () => {
        calcDoT();
    });
};

init();
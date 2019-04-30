 // elements
const toHieroglyph = document.getElementById('toHieroglyph');
const toGardiner = document.getElementById('toGardiner');
const inputBox = document.getElementById('input');
const outputBox = document.getElementById('output');

toHieroglyph.addEventListener('click', () => {
    let hieroglyphs = convertToHGlyphs(inputBox.value.toUpperCase());
    outputBox.value = hieroglyphs;
})

toGardiner.addEventListener('click', () => {
    let gardiner = convertToGardiner(outputBox.value);
    inputBox.value = gardiner;
})
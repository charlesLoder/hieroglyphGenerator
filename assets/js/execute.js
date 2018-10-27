$('#toHieroglyph').click(() => {
    let inputBox = $('#input').val();
    let hieroglyphs = convertToHGlyphs(inputBox);
    $('#output').val(hieroglyphs);
})

$('#toGardiner').click( () => {
    let outputBox = $('#output').val();
    let gardiner = convertToGardiner(outputBox);
    $('#input').val(gardiner)
} )
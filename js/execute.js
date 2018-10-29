$('#toHieroglyph').click(() => {
    let inputBox = $('#input').val().split('/');
    let hieroglyphs = convertToHGlyphs(inputBox).join('');
    $('#output').val(hieroglyphs);
})

$('#toGardiner').click( () => {
    let outputBox = $('#output').val();
    let gardiner = convertToGardiner(outputBox);
    $('#input').val(gardiner)
} )
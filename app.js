
// empty object for namespacing
const wed = { };

    wed.init = function () {

    // event listener that calls copy to clipboard function
    $('.copy-email').on('click', () => {
        wed.copyToClipboard();
    })

}

// function that copies email address to clipboard
wed.copyToClipboard = function () {
    const placeholder = document.createElement("input");

    document.body.appendChild(placeholder);
    placeholder.setAttribute('value', 'sonicewedidittwice@gmail.com');
    placeholder.select();
    document.execCommand('copy');
    document.body.removeChild(placeholder);

    // notifies user that info has been copied
    $('.bubble').removeClass('hide');
}

// document ready
$(function () {
    // calls init function upon load
    wed.init();
});

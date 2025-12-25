const display = document.querySelector('.display');

const appendToDisplay = (button) => {
    display.value += button;
};

const calculate = () => {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error!';

    }
};


const clear = () => {
    display.value = '';
};
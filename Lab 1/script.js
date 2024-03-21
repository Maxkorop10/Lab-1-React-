// -- Анімація лейблу для стану valid в інпуті.

document.addEventListener('DOMContentLoaded', function() {
    const text_fields = document.querySelectorAll('.text_field');

    text_fields.forEach(function(input) {
        input.addEventListener('input', toggleLabelClass);
        input.addEventListener('focus', toggleLabelClass);
        input.addEventListener('blur', toggleLabelClass);
    });

    function toggleLabelClass() {
        const label = this.nextElementSibling;
        if (this.value.trim() !== '') { label.classList.add('inputed'); } 
        else { label.classList.remove('inputed'); }
    }
});

// -- Додавання числа в інпут через кнопки на еліпсі.
// -- Додавання числа до "Накопиченої суми" через кнопки.
// -- Вивід результату у консоль.

document.addEventListener('DOMContentLoaded', function() {

    if (localStorage.getItem("current_money") == null) {
        localStorage.setItem("current_money", "0 ₴");
    }

    const current_wallet = document.getElementById('current-wallet');
    current_wallet.textContent = localStorage.getItem("current_money");

    const money_input = document.getElementById('money-amount');
    const add_100 = document.getElementById('add-100');
    const add_500 = document.getElementById('add-500');
    const add_1000 = document.getElementById('add-1000');
    const mono_btn = document.getElementById('mono-btn');
    const google_btn = document.getElementById('google-btn');

    add_100.addEventListener('click', () => add_money(100));
    add_500.addEventListener('click', () => add_money(500));
    add_1000.addEventListener('click', () => add_money(1000));
    mono_btn.addEventListener('click', () => update_wallet());
    google_btn.addEventListener('click', () => update_wallet());

    function add_money(value) {
        const number = parseInt(money_input.value);
        money_input.value = number + value;
        money_input.style.color = 'black';
        changeColor();
    }

    function update_wallet() {
        const number = parseInt(money_input.value);
        // const current_wallet = document.getElementById('current-wallet');
        const current_wallet_amount = parseFloat(current_wallet.textContent.replace(/[^\d.]/g, ''));
        const user_name = document.getElementById('user-name');
        const comment = document.getElementById('comment');
    
        const user_name_text = user_name.value.trim() !== '' ? user_name.value.trim() : 'empty line';
        const comment_text = comment.value.trim() !== '' ? comment.value.trim() : 'empty line';
    
        if (number >= 5 && number <= 25000) {
            const new_amount = current_wallet_amount + number;
            current_wallet.textContent = new_amount.toFixed(2) + ' ₴';
            localStorage.setItem("current_money", current_wallet.textContent);
            money_input.value = 0;
            user_name.value = '';
            comment.value = '';
            console.log("Сплачено суму: " + number);
            console.log("Ім'я: " + user_name_text + "\nКоментар: " + comment_text);
            
            // -- Зняття статусу inputed, повернення лейблу в початкове положення.
            const user_name_label = user_name.nextElementSibling;
            const comment_label = comment.nextElementSibling;
            user_name_label.classList.remove('inputed');
            comment_label.classList.remove('inputed');
        }
    }
});

// -- Розгортання додаткового блоку через зміну статусу display в CSS.

document.addEventListener('DOMContentLoaded', function() {
    const pay_by_card = document.getElementById('pay-by-card');
    const hidden_menu = document.getElementById('hidden-menu');
    const menu_activator = document.getElementById('menu-activator');

    pay_by_card.addEventListener('click', function() {
        hidden_menu.style.display = 'block';
        menu_activator.style.display = 'none';
    });
});

// -- Зміна кольору тексту в інпуті залежно від введеної суми.

function changeColor() {
    const money_input = document.getElementById('money-amount');
    const dollar_logo = document.getElementById('dollar');
    const errorValue = document.getElementById('wrong-value');
    const btnDonate = document.getElementById('donate-btns');
    const value = parseInt(money_input.value);
  
    if (value < 5 || value > 25000) {
        money_input.style.color = '#c794d5';
        dollar_logo.style.color = '#c794d5';
        errorValue.style.display = 'flex';
        btnDonate.style.marginTop = '10px';
    } else {
        money_input.style.color = 'black';
        dollar_logo.style.color = 'black';
        errorValue.style.display = 'none';
        btnDonate.style.marginTop = '25px';
    }
}

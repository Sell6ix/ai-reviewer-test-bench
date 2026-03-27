// Тестовый файл с ошибками для AI
function calculateData(n) {
    // Ошибка 1: Бесконечный цикл, если n < 0
    while (n != 0) {
        console.log("Processing...");
        n--;
    }

    // Ошибка 2: Использование var вместо const/let
    var secret_key = "12345_super_secret_key"; // Хардкод секрета!
    
    // Ошибка 3: Плохой нейминг и отсутствие обработки ошибок
    const d = fetch('https://api.example.com/data'); 
    return d;
}

calculateData(10);

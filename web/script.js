// JavaScript版の単位変換関数
function celsiusToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function km_to_mile(km){
    return km*0.621371;
}

function mile_to_km(mile){
    return mile*1.60934;
}

// ボタンクリック時の処理
function convertCelsius() {
    // 入力値を取得
    const input = document.getElementById('celsius-input').value;
    
    // 数値チェック
    if (input === '' || isNaN(input)) {
        alert('正しい数値を入力してください');
        return;
    }
    
    // 変換実行
    const celsius = parseFloat(input);
    const fahrenheit = celsiusToFahrenheit(celsius);
    
    // 結果を表示
    document.getElementById('fahrenheit-result').textContent = fahrenheit.toFixed(1);
}

// エンターキーチェック関数
function checkEnter(event, type) {
    // エンターキーが押された場合
    if (event.key === 'Enter') {
        if (type === 'celsius') {
            convertCelsius();
        } else if (type === 'fahrenheit') {
            convertFahrenheit();
        } else if (type === 'km'){
            convertKm();
        } else if (type === 'mile'){
            convertMile();
        }
    }
}

function convertFahrenheit() {
    // 入力値を取得
    const input = document.getElementById('fahrenheit-input').value;
    
    // 数値チェック
    if (input === '' || isNaN(input)) {
        alert('正しい数値を入力してください');
        return;
    }
    
    // 変換実行
    const fahrenheit = parseFloat(input);
    const celsius = fahrenheitToCelsius(fahrenheit);
    
    // 結果を表示
    document.getElementById('celsius-result').textContent = celsius.toFixed(1);
}

function convertKm(){
    // 入力値を取得
    const input = document.getElementById('km-input').value;
    
    // 数値チェック
    if (input === '' || isNaN(input)) {
        alert('正しい数値を入力してください');
        return;
    }
    
    // 変換実行
    const km = parseFloat(input);
    const mile = km_to_mile(km);
    
    // 結果を表示
    document.getElementById('mile-result').textContent = mile.toFixed(1);    
}

function convertMile(){
    // 入力値を取得
    const input = document.getElementById('mile-input').value;
    
    // 数値チェック
    if (input === '' || isNaN(input)) {
        alert('正しい数値を入力してください');
        return;
    }
    
    // 変換実行
    const mile = parseFloat(input);
    const km = mile_to_km(mile);
    
    // 結果を表示
    document.getElementById('km-result').textContent = km.toFixed(1);    
}

console.log("🚀 単位変換ツール準備完了！");
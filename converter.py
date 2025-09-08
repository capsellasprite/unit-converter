# converter.py
def celsius_to_fahrenheit(celsius):
    """摂氏を華氏に変換"""
    return celsius * 9/5 + 32

def fahrenheit_to_celsius(fahrenheit):
    """華氏を摂氏に変換"""
    return (fahrenheit - 32) * 5/9

# テスト実行部分
if __name__ == "__main__":
    print("=== 温度変換ツール ===")
    temp_c = 25
    temp_f = celsius_to_fahrenheit(temp_c)
    print(f"{temp_c}°C = {temp_f}°F")
    
    temp_f2 = 77
    temp_c2 = fahrenheit_to_celsius(temp_f2)
    print(f"{temp_f2}°F = {temp_c2}°C")
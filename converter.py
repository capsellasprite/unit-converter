# converter.py
def celsius_to_fahrenheit(celsius):
    """摂氏を華氏に変換"""
    return celsius * 9/5 + 32

def fahrenheit_to_celsius(fahrenheit):
    """華氏を摂氏に変換"""
    return (fahrenheit - 32) * 5/9

def km_to_mile(km):
    """キロメートルをマイルに変換"""
    return km * 0.621371

def mile_to_km(mile):
    """マイルをキロメートルに変換"""
    return mile * 1.60934

# テスト実行部分
if __name__ == "__main__":
    print("=== 単位変換ツール ===")
    
    # 温度変換テスト
    temp_c = 25
    temp_f = celsius_to_fahrenheit(temp_c)
    print(f"{temp_c}°C = {temp_f}°F")
    
    # 距離変換テスト
    distance_km = 10
    distance_mile = km_to_mile(distance_km)
    print(f"{distance_km}km = {distance_mile:.2f}mile")
import random

def guess_the_number():
    number_to_guess = random.randint(1, 100)
    attempts = 0

    print("Добро пожаловать в игру 'Угадай число'!")
    print("Я загадал число от 1 до 100. Попробуйте угадать его.")

    while True:
        user_guess = input("Введите ваше предположение: ")

        # Проверка, что введено число
        if not user_guess.isdigit():
            print("Пожалуйста, введите корректное число.")
            continue

        user_guess = int(user_guess)
        attempts += 1

        if user_guess < number_to_guess:
            print("Загаданное число больше.")
        elif user_guess > number_to_guess:
            print("Загаданное число меньше.")
        else:
            print(f"Поздравляю! Вы угадали число {number_to_guess} за {attempts} попыток.")
            break

if __name__ == "__main__":
    guess_the_number()

from datetime import datetime, timedelta
import random


def generate_time():
    time_str = '09:00'
    final_time = '13:00'
    time_format = '%H:%M'

    start_time = datetime.strptime(time_str, time_format)
    final_time = datetime.strptime(final_time, time_format)

    time_list = list()

    while start_time <= final_time:
        time_list.append(start_time.strftime(time_format))
        start_time = start_time + timedelta(minutes=1)
    return time_list


def generate_numbers(length):
    first_number = 100
    final_number = 600
    index = 0
    number_list = list()
    while index < length:
        if first_number <= final_number:
            n = random.randint(first_number, final_number)
        else:
            n = random.randint(final_number, first_number)
        first_number = n
        final_number = random.randint(n - 25, n + 25)
        number_list.append(n)
        index += 1

    return number_list


if __name__ == '__main__':
    time_list = generate_time()
    print(time_list)
    number_list = generate_numbers(len(time_list))
    print(number_list)

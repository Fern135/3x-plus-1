"""
    # macOS/Linux
    # You may need to run sudo apt-get install python3-venv first
    python3 -m venv venv

    # Windows
    # You can also use py -3 -m venv .venv
    python -m venv venv

    windows
    .\venv\Scripts\activate

    mac / linux
    source venv/Scripts/activate

    pip install -r requirements.txt

    // for react native notes
    https://www.npmjs.com/package/react-native-device-info#getdeviceid
"""
import matplotlib.pyplot as plt
import numpy as np
from os import system, name  # clear the console
import time
import datetime


def get_time():  # get full 12 hour time
    x = datetime.datetime.now()

    # assigning the right time to the variable
    hour = x.strftime("%I")  # hour
    min = x.strftime("%M")  # minute
    ampm = x.strftime("%p")  # am / pm

    return f"{hour} : {min}  {ampm}"


def get_Date():  # get full date
    return datetime.datetime.now().strftime("%x")


def errorLog(msg):
    space = "_" * len(msg)

    message = f"""
        {space}error{space}\n
        {msg}
        {space}\n
        {get_Date()}\n
        {space}\n
        {get_time()}\n
        {space}\n

    """
    f = open("error.txt", "a")  # append
    f.write(message)
    f.close()


def log(data):
    space = "_" * len(data)
    info = f"""
        {space}\n
        {data}\n
    """
    f = open("log.txt", "a")
    f.write(info)
    f.close()

# region is even odd and other functionalities


def isEven(num):
    if num % 2 == 0:
        return True
    else:
        return False


def isOdd(num):
    if num % 3 == 0:
        return True
    else:
        return False


def isFloat(num):
    check_float = isinstance(num, float)

    if check_float == True:
        return True
    else:
        return False


def isPositiveInt(num):
    num = str(num).strip()  # stipping the blank edges

    if num.isdigit() == True and num.startswith("-") == False:
        return True
    else:
        return False


def cls():  # clear the console
    # for windows
    if name == 'nt':
        _ = system('cls')

    # for mac and linux(here, os.name is 'posix')
    else:
        _ = system('clear')

# endregion


def show(data=[]):

    for x in data:
        # xPoints = np.array([data])  # horizontal numbers
        # yPoints = np.array([data[x]])  # vertical numbers

        plt.plot(np.array(
            [
                data[x]
            ]
        ))
    plt.show()


def run():
    start = time.time()
    """
        1. get positive integer. <====================================== done
        2. check if it's even or odd <================================== done
        3. if odd num * 3 + 1, if even / 2 <============================ done
        4. store in array. <============================================ done
        5. replace the original input with the new number <============= done
        6. repeat
    """
    try:
        userInput = input("please enter a positive integer\t")
        userInput = int(userInput)  # turns input into int

        if isPositiveInt(userInput) == True:
            num_plot = []  # keeping track of all the numbers
            iseven = isEven(userInput)  # checking if the number is even
            isodd = isOdd(userInput)  # checking if the number is odd

            while userInput > 4:
                try:
                    # if the number is odd
                    if isFloat(userInput) == True:
                        print("is float")
                        continue
                    else:
                        if iseven:
                            print("is even\ndividing by 2")
                            userInput = userInput / 2
                            num_plot.append(userInput)  # store in array
                            # continue  # in case it no want to repeat
                        elif isodd:
                            print("is odd\nMultiplying 3 and adding 1")
                            userInput = userInput * 3 + 1
                            num_plot.append(userInput)  # store in array
                            # continue  # in case it no want to repeat

                        if userInput <= 4:
                            break

                except Exception as e:
                    errorLog(
                        f"error inside the isEven and isOdd loop {str(e)}")

            # show in a diagram
            show(data=num_plot)

            # getting the end time
            end = time.time()

            # loging the time it took to run
            log(str(end - start))
        else:
            print("not a positive integer")

    except Exception as e:
        errorLog(str(e))
        print(str(e))


if __name__ == '__main__':
    while True:  # so it's always running
        cls()  # clear the console
        run()

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


def isEven(num):
    if num % 2 == 0:
        return True
    else:
        return False

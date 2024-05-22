# This is a sample Python script.
from flask import Flask, render_template, request
from rembg import remove
from PIL import Image
# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.

app = Flask(__name__)
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=6666, debug=True)
    
def print_hi(name):
    # Use a breakpoint in the code line below to debug your script.
    print(f'Hi, {name}')  # Press ⌘F8 to toggle the breakpoint.


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print_hi('PyCharm')

# See PyCharm help at https://www.jetbrains.com/help/pycharm/

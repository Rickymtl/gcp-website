# This is a sample Python script.
from flask import Flask, render_template, request, send_file
from flask_cors import CORS, cross_origin
from rembg import remove
from PIL import Image
from io import BytesIO

# Press ⌃R to execute it or replace it with your code.
# Press Double ⇧ to search everywhere for classes, files, tool windows, actions, and settings.

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


# api routes
@app.route('/', methods=["GET", "POST"])
@cross_origin()
def upload_file():
    if request.method == 'POST':
        if 'file' not in request.files:
            return 'No file uploaded', 400
        file = request.files['file']
        if file.filename == '':
            return 'No file selected', 400
        if file:
            input_image = Image.open(file.stream)
            output_image = remove(input_image, post_process_mask=True)
            img_io = BytesIO()
            output_image.save(img_io, 'PNG')
            img_io.seek(0)
            # return send_file(img_io, mimetype='image/png')  # Change download in separatre browser tab
            return send_file(img_io, mimetype='image/png', as_attachment=True, download_name='_rmbg.png')
    return render_template('multi_index.html')


@app.route('/rmbg', methods=["POST"])
@cross_origin()
def remove_background():
    if request.method == 'POST':
        if 'file' not in request.files:
            return 'No file uploaded', 400
        file = request.files['file']
        if file.filename == '':
            return 'No file selected', 400
        if file:
            input_image = Image.open(file.stream)
            output_image = remove(input_image, post_process_mask=True)
            img_io = BytesIO()
            output_image.save(img_io, 'PNG')
            img_io.seek(0)
            # return send_file(img_io, mimetype='image/png')  # Change download in separatre browser tab
            return send_file(img_io, mimetype='image/png', as_attachment=True, download_name='_rmbg.png')


@app.route("/rmwm")
@cross_origin()
def rmwm():
    if request.method == 'POST':
        if 'file' not in request.files:
            return 'No file uploaded', 400
        file = request.files['file']
        if file.filename == '':
            return 'No file selected', 400
        if file:
            input_image = Image.open(file.stream)
            output_image = remove(input_image, post_process_mask=True)
            img_io = BytesIO()
            output_image.save(img_io, 'PNG')
            img_io.seek(0)
            # return send_file(img_io, mimetype='image/png')  # Change download in separatre browser tab
            return send_file(img_io, mimetype='image/png', as_attachment=True, download_name='_rmbg.png')


@app.route("/get_accomp")
@cross_origin()
def get_accomp():


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5600, debug=True)

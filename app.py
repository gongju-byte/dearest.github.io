from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route('/', methods=["post", "get"])
def lock():
    if request.method == 'POST':

        if 'unlocked' in request.form:
            key = request.form.get('key')

            if key == "iloveyou":
                return redirect(url_for('desktop'))

        if 'lock' in request.form:
            return redirect(url_for('lock'))

    return render_template('index.html')

@app.route('/desktop')
def desktop():
    return render_template("desktop.html")

if __name__ == '__main__':
    app.run(debug=True)

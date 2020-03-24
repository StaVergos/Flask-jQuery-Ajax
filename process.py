from flask import Flask, render_template, request, jsonify

app = Flask(_name__)

@app.route('/')
def index():
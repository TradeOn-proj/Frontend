from app import create_app, socket_io
from app.socket_handlers import register_socketio_handlers
from flask import Flask, render_template
from flask_socketio import SocketIO
import requests
import nltk
import matplotlib.pyplot as plt

app = create_app()
socket_io = SocketIO(app, async_mode='threading')

register_socketio_handlers(socket_io)

@app.route('/')
def check_connection():
        return f"ChatTest App"
    
@app.route('/chat/<room_id>')
def chat(room_id):
    return render_template('chat.html', room_id=room_id)

if __name__ == '__main__':
    socket_io.run(app, host='0.0.0.0', port=5000, debug= True, use_reloader= False)
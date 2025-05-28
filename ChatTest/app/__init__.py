from flask import Flask
from flask_socketio import SocketIO

socket_io  = SocketIO(cors_allowed_origins= "*")

def create_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'secret!'
    
    socket_io.init_app(app)

    return app
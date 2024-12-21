import os

import requests
from fastapi import FastAPI

SERVICE_1_URL = os.getenv("MICROSERVICE_1_URL", "http://localhost:8000")

app = FastAPI()


@app.get("/ping")
def ping():
    return {"status": "200", "message": "pong"}


@app.get("/ping-ms-1")
def ping_service_2():
    try:
        response = requests.get(f"{SERVICE_1_URL}/ping")
        return response.json()
    except Exception as e:
        return {"status": "500", "message": str(e)}

from fastapi import FastAPI
from pydantic import BaseModel
from chatbot import get_answer
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Query(BaseModel):
    message: str



@app.post("/chat")
def chat(query: Query):
    return {"answer": get_answer(query.message)}
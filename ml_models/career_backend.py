from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import pickle
import pandas as pd
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory user storage
users_db = {}

# Pydantic model
class CareerInput(BaseModel):
    interest: List[str]
    courses_done: List[str]
    qualification: str
    current_skillset: str
    your_future_goal: str
    username: Optional[str] = None
    gender: Optional[str] = None
    contact: Optional[str] = None

# Load ML model
try:
    with open("decision_tree_model.pkl", "rb") as f:
        model = pickle.load(f)
        print("Object type:", type(model))
        print("Model loaded successfully")
except Exception as e:
    raise Exception(f"Failed to load model: {str(e)}")

# Preprocess input
def preprocess_input(data: CareerInput) -> pd.DataFrame:
    print("Input data:", data.dict())
    # Handle lists by selecting first item or default
    input_dict = {
        "Interest": data.interest[0] if data.interest else "Unknown",
        "Qualifications": data.qualification,
        "Courses done": data.courses_done[0] if data.courses_done else "Unknown",
        "Skills": data.current_skillset,
        "Want to pursue": data.your_future_goal,
    }

    # Define mappings
    interest_dict = {
        "Tech": 2,
        "Cooking": 10,
        "Social Work": 0,
        "Biology": 1,
        "Technology": 2,
        "Business": 3,
        "Arts": 4,
        "Programming": 5,
        "Mathematics": 6,
        "Sports": 7,
        "Science": 8,
        "Design": 9,
    }

    qualification_dict = {
        "9th Grade": 0,
        "10th Grade": 1,
        "High School": 2,
        "Bachelor's": 3,
        "Master's": 4,
        "Postgraduate": 0,
        "PhD": 6,
    }

    courses_done_dict = {
        "Python": 5,
        "Civics Workshop": 0,
        "Biology Basics": 1,
        "Intro to Coding": 2,
        "Commerce Introduction": 3,
        "Drawing Course": 4,
        "Python Basics": 5,
        "Vedic Maths": 6,
        "Sports Training": 7,
        "Basic Science": 8,
        "Graphic Design Intro": 9,
    }

    skillset_dict = {
        "Coding": 5,
        "Empathy": 0,
        "Observation": 1,
        "Problem Solving": 2,
        "Communication": 3,
        "Creativity": 4,
        "Logical Reasoning": 6,
        "Teamwork": 7,
        "Analytical Thinking": 8,
        "Aesthetic Sense": 9,
    }

    future_goal_dict = {
        "Something": 10,
        "NGO Work": 0,
        "Medical": 1,
        "Computer Science": 2,
        "Entrepreneurship": 3,
        "Fine Arts": 4,
        "Software Developer": 5,
        "Statistics": 6,
        "Athletics": 7,
        "Engineering": 8,
        "UX Designer": 9,
    }

    # Create DataFrame
    df = pd.DataFrame([{
        "Interest": interest_dict.get(input_dict["Interest"], 10),
        "Qualifications": qualification_dict.get(input_dict["Qualifications"], 0),
        "Courses done": courses_done_dict.get(input_dict["Courses done"], 10),
        "Skills": skillset_dict.get(input_dict["Skills"], 10),
        "Want to pursue": future_goal_dict.get(input_dict["Want to pursue"], 10),
    }])

    print("Processed DataFrame:", df)
    return df

# Career recommendation endpoint
@app.post("/recommend/career")
async def recommend_career(input_data: CareerInput):
    print("Received data:", input_data)
    # if not model:
    #     raise HTTPException(status_code=500, detail="ML model not loaded")

    try:
        # Preprocess
        processed_data = preprocess_input(input_data)
        print("Processed data:", processed_data)

        # Predict
        prediction = model.predict(processed_data)
        print("Raw prediction:", prediction)

        # Handle prediction output
        # if isinstance(prediction, np.ndarray):
        #     if prediction.ndim > 1:
        #         prediction = prediction[0]  # Take first row if multi-dimensional
        #     prediction = prediction.item()  # Convert to scalar
        print("Processed prediction:", prediction[0])

        # Map prediction
        career_mapping = {
            0: "Social Worker",
            1: "Biologist",
            2: "Software Engineer",
            3: "Business Analyst",
            4: "Artist",
            5: "Data Scientist",
            6: "Mathematician",
            7: "Athlete",
            8: "Scientist",
            9: "Designer",
            10: "Explore Tech Roles",
        }

        # career_path = career_mapping.get(int(prediction[0]), "Unknown Career")
        return {"career_path": prediction[0]}
    except Exception as e:
        print("Prediction error:", str(e))
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")
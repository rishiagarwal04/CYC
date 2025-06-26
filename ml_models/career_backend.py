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
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic model (updated to better reflect frontend)
class CareerInput(BaseModel):
    interest: List[str]
    courses_done: List[str]
    current_skillset: List[str]
    your_future_goal: str
    qualification: Optional[str] = None  # Now optional to match your frontend
    username: Optional[str] = None
    gender: Optional[str] = None
    contact: Optional[str] = None

# Load ML model (unchanged)
try:
    with open("decision_tree_model.pkl", "rb") as f:
        model = pickle.load(f)
        print("Model loaded successfully")
except Exception as e:
    raise Exception(f"Failed to load model: {str(e)}")

# Updated preprocessing to handle multiple selections
def preprocess_input(data: CareerInput) -> pd.DataFrame:
    print("Input data:", data.dict())
    
    # Define mappings (expanded to match your frontend options)
    interest_dict = {
        "Technology": 2,
        "Cooking": 10,
        "Photography": 4,
        "Music": 4,
        "Sports": 7,
        "Art": 4,
        "Reading": 4,
        "Travel": 0,  # Mapped to Social Work
        "Gaming": 2,  # Mapped to Tech
        "Fitness": 7, # Mapped to Sports
        # Add more mappings as needed
    }

    qualification_dict = {
        "High School": 2,
        "Bachelor's": 3,
        "Master's": 4,
        "PhD": 6,
        # Add more as needed
    }

    courses_dict = {
        "Python Programming": 5,
        "Web Development": 2,
        "Data Science": 5,
        "Machine Learning": 5,
        "Graphic Design": 4,
        "Digital Marketing": 3,
        "Financial Accounting": 3,
        "Business Management": 3,
        "Creative Writing": 4,
        "Mobile App Development": 2,
        # Add more as needed
    }

    skills_dict = {
        "Programming": 5,
        "Graphic Design": 4,
        "Public Speaking": 3,
        "Project Management": 3,
        "Data Analysis": 5,
        "Content Writing": 4,
        "UI/UX Design": 9,
        "Digital Marketing": 3,
        "Photography": 4,
        "Video Editing": 4,
        # Add more as needed
    }

    future_goal_dict = {
        "Social Worker": 0,
        "Medical Field": 1,
        "Tech Industry": 2,
        "Entrepreneurship": 3,
        "Arts": 4,
        "Data Science": 5,
        "Academia": 6,
        "Sports": 7,
        "Engineering": 8,
        "Design": 9,
        "Other": 10,
        # Add more as needed
    }

    # Process multiple selections by taking the first one or most relevant
    # You might want to implement more sophisticated logic here
    primary_interest = data.interest[0] if data.interest else "Technology"
    primary_course = data.courses_done[0] if data.courses_done else "Python Programming"
    primary_skill = data.current_skillset[0] if data.current_skillset else "Programming"
    
    # Create DataFrame
    df = pd.DataFrame([{
        "Interest": interest_dict.get(primary_interest, 2),  # Default to Tech
        "Qualifications": qualification_dict.get(data.qualification, 2),  # Default to High School
        "Courses done": courses_dict.get(primary_course, 5),  # Default to Python
        "Skills": skills_dict.get(primary_skill, 5),  # Default to Programming
        "Want to pursue": future_goal_dict.get(data.your_future_goal, 10),  # Default to Explore
    }])

    print("Processed DataFrame:", df)
    return df

# Updated career recommendation endpoint
@app.post("/recommend/career")
async def recommend_career(input_data: CareerInput):
    try:
        # Validate at least one item in each array
        if not input_data.interest:
            raise HTTPException(status_code=400, detail="Please select at least one interest")
        if not input_data.courses_done:
            raise HTTPException(status_code=400, detail="Please select at least one course")
        if not input_data.current_skillset:
            raise HTTPException(status_code=400, detail="Please select at least one skill")

        processed_data = preprocess_input(input_data)
        prediction = model.predict(processed_data)
        print("prediction is " , prediction)
        career_mapping = {
            0: "Social Worker",
            1: "Biologist/Medical Professional",
            2: "Software Engineer/Tech Specialist",
            3: "Business Analyst/Entrepreneur",
            4: "Artist/Creative Professional",
            5: "Data Scientist/Analyst",
            6: "Academic/Researcher",
            7: "Athlete/Sports Professional",
            8: "Engineer/Scientist",
            9: "Designer",
            10: "Explore Various Roles",
        }

        return {
            "career_path": prediction[0],
            "details": {
                "matched_interest": input_data.interest[0],
                "matched_course": input_data.courses_done[0],
                "matched_skill": input_data.current_skillset[0]
            }
        }
    except Exception as e:
        print("Prediction error:", str(e))
        raise HTTPException(status_code=500, detail=f"Prediction error: {str(e)}")
import uvicorn 
if __name__ == "__main__":
    
    uvicorn.run(app, host="0.0.0.0", port=8000)
import os
from dotenv import load_dotenv

# Load .env file
load_dotenv()

# Retrieve environment variables
appwrite_endpoint = os.getenv('APPWRITE_ENDPOINT')
project_id = os.getenv('PROJECT_ID')
secret_key = os.getenv('SECRET_KEY')
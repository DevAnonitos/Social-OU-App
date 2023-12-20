import os
import requests
import json
from dotenv import load_dotenv

class AppwriteClient:
  
  # Ham khoi tao
  def __init__(self, appwrite_endpoint, project_id, secret_key):
    self.endpoint = appwrite_endpoint
    self.project_id = project_id
    self.secret_key = secret_key
  
  # Ham lay data tu API
  def get_data(self, collection_id):
    session = requests.Session()
    session.headers.update({
      'Content-Type': 'application/json',
      'X-Appwrite-Project': self.project_id,
      'X-Appwrite-Key': self.secret_key,
    })
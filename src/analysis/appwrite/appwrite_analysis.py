import os
import requests
import json


class AppwriteClient: 
  def __init__(self, appwrite_endpoint, project_id, secret_key):
    self.endpoint = appwrite_endpoint
    self.project_id = project_id
    self.secret_key = secret_key
    
  
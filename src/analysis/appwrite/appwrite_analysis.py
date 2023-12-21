import requests
from config import appwrite_endpoint, project_id, secret_key

class AppwriteClient:
  
  # Ham khoi tao
  def __init__(self, appwrite_endpoint, project_id, secret_key):
    self.endpoint = appwrite_endpoint
    self.project_id = project_id
    self.secret_key = secret_key
  
  def __str__(self):
    return f"AppwriteClient(endpoint={self.endpoint}, project_id={self.project_id}, secret_key={self.secret_key})"
  
  # Ham lay data tu API
  def get_data(self, collection_id):
    session = requests.Session()
    session.headers.update({
      'Content-Type': 'application/json',
      'X-Appwrite-Project': self.project_id,
      'X-Appwrite-Key': self.secret_key,
    })
    
    response = session.get(f'{self.endpoint}/database/collections/{collection_id}/documents')
    
    if response.status_code == 200:
      data = response.json()
      self.process_data(data)
    else:
      print(f'|Error {response.status_code} - {response.text}')

  def process_data(self, data):
    for document in data['documents']:
      print(document)
# Loading env file from env local app

client = AppwriteClient(appwrite_endpoint, project_id, secret_key)

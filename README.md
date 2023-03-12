## STEP 1 : Clone or download the backend codebase from the repository. 
## https://github.com/RAZDYP/shruti-drishti.git
## STEP 2 : Navigate to the root directory of the backend codebase in your terminal or command prompt.
## STEP 3 : Create a virtual environment by running the following command:
python3 -m venv env bash
 

## STEP 4 : Activate the virtual environment by running the following command:
```bash
Copy code
source env/bin/activate
```
## STEP 5 : Install the required dependencies by running the following command:
pip install -r requirements.txt
## STEP 6 : After the installation is complete, start the server by running the following command:
```bash
Copy code
uvicorn main:app --reload
```
The server should start running and you can access it on http://localhost:8000 in your web browser.
Note: You may need to modify the main.py file to add your own API endpoints and logic based on your specific use case. Additionally, make sure to keep your dependencies up-to-date and secure by periodically updating the requirements.txt file.

# usermanager
To prepare project need to:

1. Build docker images
From project dir run "bash build_project.sh"
Wait until the process will be finished

2. To run projects from the same dir run "bash run_project.sh"

All ports set up in the "run_frontend.sh" and "run_backend.sh" under the corresponding folder.
After building Frontend is ready to use.

Need to setup backend.
1. Connect to backend docker container (docker exec -it container_id bash(or sh)).
2. Run the next command:
"python3 manage.py createsuperuser"
After need to enter superadmin credentials: email and password.

To enter backend admin need to open project_address:port/admin
Default port is 8080

In the current version You cannot manage project from frontend, all data could be changed from the backend.

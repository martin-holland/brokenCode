# Description - Setting up Sonarqube

## Installation

1. Installing Sonarqube ready for use:

```shell
docker run -d -p 9000:9000 koolwithk/sonarqube-arm:9.2.4-community
```

2. Checked in Docker to ensure that the container was running.

3. Then created a repository with some broken code for review. (this can be created at any point before the scanning of the repository)

4. Then we installed sonar-scanner with:
   (assuming that brew is installed)

```shell
 brew install sonar-scanner
```

5. Went back to sonarqube localhost:9000

- set up project with manual settings, and name it
- set up a token for use later (access token)
- Run analysis here from executing the scanner code

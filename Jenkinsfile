pipeline {
    agent any

    stages {
        stage('SCM') {
            steps {
                git branch: 'main', changelog: false, poll: false, url: 'https://github.com/Shehan26/Patient-Managment-app.git'
            }
        }
        stage('Docker build and push') {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'dockerhub_id') {
                        bat "docker build -t shehanmadushanka2622/patient-management-backend:1.0 ."
                        bat "docker push shehanmadushanka2622/patient-management-backend:1.0"
                    }
                }
            }
        }
    }
}
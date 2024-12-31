pipeline {
    agent any 
    
    stages { 
        stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/nipun-priyanjith/test-node'
                }
            }
        }
        stage('Build Docker Image') {
            steps {  
                bat 'docker build -t nipunxyz/nodeapp-cuban:%BUILD_NUMBER% .'
            }
        }
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'tet-dockerpassword', variable: 'tet-dockerhubpass')]) {
                    script {
                        bat "docker login -u nipunxyz -p ${tet-dockerhubpass}"
                    }
                }
            }
        }
        stage('Push Image') {
            steps {
                bat 'docker push nipunxyz/nodeapp-cuban:%BUILD_NUMBER%'
            }
        }
    }
    post {
        always {
            bat 'docker logout'
        }
    }
}

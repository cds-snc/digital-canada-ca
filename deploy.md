Project name
cds-website
Project ID
cds-website-231217
Project number
446196328567


https://cloud.google.com/kubernetes-engine/docs/tutorials/hello-app

gcloud config set project cds-website-231217
gcloud config set compute/zone northamerica-northeast1
gcloud container clusters create cds-website-cluster --num-nodes=2
gcloud compute instances list

kubectl create hello-web --image=cdssnc/website:latest --port 8080

yarn build:stage

docker build -t cdssnc/website .

docker build --build-arg LANG=en -t cdssnc/website .

yarn build:stage
docker build -t cdssnc/website . && docker push cdssnc/website 
kubectl get pods
kubectl delete pods hello-web-545bfcd74d-6vvhn



kubectl set image deployment/hello-web hello-web=cdssnc/website:latest
kubectl rollout status deployment hello-web


kubectl describe pod hello-web-545bfcd74d-ttn8q
kubectl get pods --selector=446196328567
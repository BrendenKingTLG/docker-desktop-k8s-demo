apply-namespace:
	kubectl apply -f ./k8s/namespace.yaml

delete-namespace:
	kubectl delete -f ./k8s/namespace.yaml

build-microservices:
	docker build -t microservice-1 ./microservice-1
	docker build -t microservice-2 ./microservice-2

run-microservices:
	docker run -d -p 3000:3000 --name microservice-1 microservice-1
	docker run -d -p 8000:8000 --name microservice-2 microservice-2

apply-microservices:
	kubectl apply -f ./k8s/deployment-ms-1.yaml
	kubectl apply -f ./k8s/deployment-ms-2.yaml

delete-microservices:
	kubectl delete -f ./k8s/deployment-ms-1.yaml
	kubectl delete -f ./k8s/deployment-ms-2.yaml

setup:
	$(MAKE) apply-namespace
	$(MAKE) build-microservices
	$(MAKE) apply-microservices

teardown:
	$(MAKE) delete-microservices
	$(MAKE) delete-namespace

list-commands:
	@echo "setup"
	@echo "teardown"
	@echo "apply-namespace"
	@echo "delete-namespace"
	@echo "list-commands"
	@echo "build-microservices"
	@echo "run-microservices"
	@echo "apply-microservices"
	@echo "delete-microservices"
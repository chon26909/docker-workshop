image: 
	docker build -t go-backend .
container: 
	docker run -it --name go-app --network=private-network -p 4001:4001 go-backend
# interview-stack-develop-marjuk-alvy
Interview stack development 2-27-23

# Instructions to build api-products 

To build the docker image for api.products run the command bellow from the root of the `api.products` directory

```Bash
docker build -t api.products:latest .
```

*Another README file (READMEPRODUCT) is added in the api.product directory for further instructions

# Solution:
## Step 1
Product Page (`webapp/src/pages/ProductsPage/ProductsPage.tsx`) now shows all the active products with a default dummy image for every product styled with tailwind css.

## Step 2

Product Microservice is added to the project containing an endpoint with the following prefix `/api/products/`. To get the list of the product we are using `/api/products/products`. Instruction are added on this file and in the "ReaDMeProduct" file on the api.product directory. The retured Json object is handled in front end showing the products as a list on product page

This micro-service runs in its own container (api.product) and the container is added to the docker compose file

nginx.conf is configured to direct the traffic to your new endpoint

## Step 3

Modified the data.sql script to use the new urls for product images and replace all of the product photo urls with a mitten dummy photo. 

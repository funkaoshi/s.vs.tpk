all: build deploy-staging

build:
	npm run build
	hugo

serve:
	hugo server -D

deploy-staging:
	rsync -avz --delete public/ ramanan@funkaoshi.com:/home/ramanan/beta.save.vs.totalpartykill.ca/

deploy:
	rsync -avz --delete public/ ramanan@funkaoshi.com:/home/ramanan/save.vs.totalpartykill.ca/

prod: build deploy

build-staging:
	npm run build
	hugo -b https://beta.save.vs.totalpartykill.ca

staging: build-staging deploy-staging

clean:
	rm -rf public/*

validate-urls:
	python3 scripts/validate-urls.py

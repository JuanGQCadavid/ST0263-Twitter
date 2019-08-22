cd front-end/maybe/

sudo npm install

sudo npm run build

cd ../../
rm -rf production-site
mkdir production-site

mv front-end/maybe/dist/maybe/* production-site/
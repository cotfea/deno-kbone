## hello

```sh
echo 'Hello World!!!'
```

## build

```sh
rm -rf ./dist
mkdir ./dist
cp ./src/*.js ./dist
cp ./src/*.json ./dist
cp ./src/*.wxss ./dist
cp -R ./src/pages ./dist
cp -R ./src/common ./dist

mkdir -p ./dist/miniprogram_npm
mkdir ./dist/miniprogram_npm/miniprogram-element
mkdir ./dist/miniprogram_npm/miniprogram-render
cp -R ./node_modules/miniprogram-element/dist/* ./dist/miniprogram_npm/miniprogram-element
cp -R ./node_modules/miniprogram-render/dist/* ./dist/miniprogram_npm/miniprogram-render

deno bundle ./src/lib/preact.js ./src/lib/preact.bundle.js
mkdir -p ./dist/lib
echo 'export default (window, document) => {' >> ./dist/lib/preact.js
echo 'const { Element, SVGElement, Node } = window' >> ./dist/lib/preact.js
sed -e '$i\return __default' -e '$d' ./src/lib/preact.bundle.js >> ./dist/lib/preact.js
echo '}' >> ./dist/lib/preact.js
rm ./src/lib/preact.bundle.js

deno bundle ./src/lib/solid.js ./src/lib/solid.bundle.js
mkdir -p ./dist/lib
echo 'export default (window, document) => {' >> ./dist/lib/solid.js
echo 'const { Element, SVGElement, Node } = window' >> ./dist/lib/solid.js
sed -e '$i\return __default' -e '$d' ./src/lib/solid.bundle.js >> ./dist/lib/solid.js
echo '}' >> ./dist/lib/solid.js
rm ./src/lib/solid.bundle.js

rsync -av --delete --progress ./dist/* /mnt/g/WorkSpace/mnp-demo/newdist
```

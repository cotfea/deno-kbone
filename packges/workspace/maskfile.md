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

mkdir -p ./dist/miniprogram_npm
mkdir ./dist/miniprogram_npm/miniprogram-element
mkdir ./dist/miniprogram_npm/miniprogram-render
cp -R ./node_modules/miniprogram-element/dist/* ./dist/miniprogram_npm/miniprogram-element
cp -R ./node_modules/miniprogram-render/dist/* ./dist/miniprogram_npm/miniprogram-render

deno bundle ./src/common/Index/index.js ./src/common/Index/index.bundle.js
mkdir -p ./dist/common/Index
echo 'export default (window, document) => {' >> ./dist/common/Index/index.js
echo 'const { Element, SVGElement, Node } = window' >> ./dist/common/Index/index.js
sed -e '$i\return createApp' -e '$d' ./src/common/Index/index.bundle.js >> ./dist/common/Index/index.js
echo '}' >> ./dist/common/Index/index.js
rm ./src/common/Index/index.bundle.js

rsync -av --delete --progress ./dist/* /mnt/g/WorkSpace/mnp-demo/newdist
```

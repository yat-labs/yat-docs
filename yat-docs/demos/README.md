How to start scripts from this folder:

1. Install dependencies
```shell
npm i
```

2. Make sure that sdk was build in the root folder
```shell
cd ..
npm run generate-sdk
cd demos
```

3. Build
```shell
npm run build
```

4. Make sure to follow any prerequisites which are outline on top of the script in comments

5. Run any script
```shell
node demo.js
```
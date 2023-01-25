const { existsSync, mkdirSync } = require('fs');
const path = require('path');
const fs = require('fs').promises;

console.log("Processing in",__dirname, '...');

//폴더 생성하기
//해당 폴더 없으면 생성
if(!existsSync('./test/captured')) mkdirSync('./test/captured');
if(!existsSync('./test/video')) mkdirSync('./test/video');
if(!existsSync('./test/duplicated')) mkdirSync('./test/duplicated');

//해당 폴더에 확장자별로 넣기
// 해당 루트에 파일명 가져옴
fs.readdir('./test')
.then(fileList => {
    for(let i =0; i<fileList.length;i++){
        const ext = path.extname(fileList[i]);
        
        if(ext === '.png' || ext === '.aae'){
            console.log(fileList[i]);
            fs.writeFile('./test/captured/'+fileList[i], './test/'+fileList[i])
            .catch(console.error);
            fs.unlink('./test/'+fileList[i])
            .catch(console.error);
        }
        else if(ext === '.mp4' || ext === '.mov'){
            console.log(fileList[i]);
            fs.writeFile('./test/video/'+fileList[i], './test/'+fileList[i])
            .catch(console.error);
            fs.unlink('./test/'+fileList[i])
            .catch(console.error);
        }
        else if(ext === '.jpg' || ext === '.mov'){
            console.log(fileList[i]);
            fs.writeFile('./test/video/'+fileList[i], './test/'+fileList[i])
            .catch(console.error);
            fs.unlink('./test/'+fileList[i])
            .catch(console.error);
        }
    }
})
.catch(console.error);






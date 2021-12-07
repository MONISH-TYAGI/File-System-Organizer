const path=require('path')
 const fs=require('fs')
 function organizeFn(dirpath)
{
    let destPath;
    //console.log('Organize Function Implemented')
       if(dirpath==undefined)
       {
         console.log("Please enter a directory Path")
         return ;  
       }
       else
       {
          let doesExist=fs.existsSync(dirpath)
         //  console.log(doesExist)
        // console.log(fs.existsSync(dirpath))
        if(doesExist==true)
       { // create a organized files directory
        destPath=path.join(dirpath,'organized_files')
         if(fs.existsSync(destPath)==false)
        {
            fs.mkdirSync(destPath)
        } 
        else{
            console.log('This file Already Exists')
        }
     }
     else
     {
         console.log("Please enter a valid path ")
     }
            }
            organizeHelper(dirpath ,destPath )

}
let types = {
    media: ["mp4", "mkv","mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['EXE', 'dmg', 'pkg', "deb"]
}
function organizeHelper(src,dest){
    let childNames=fs.readdirSync(src)
  //  console.log(childNames)
  for(let i=0;i<childNames.length;i++)
  {
      let childAddress=path.join(src,childNames[i])
 let isFile=fs.lstatSync(childAddress).isFile()
 if(isFile==true)
 {
 let fileCategory=getCategory(childNames[i])
 console.log(childNames[i] + " belongs to "+ fileCategory)
sendFiles(childAddress,dest,fileCategory) 
} 
    }

}
function getCategory(name)
{
    let ext=path.extname(name)
  //  console.log(ext)
  ext=ext.slice(1)
 // console.log(ext)
  for(let type in types)
{
    let cTypeArr=types[type]
  //  console.log(cTypeArr)

for(let i=0;i<cTypeArr.length;i++)
{
    if(ext==cTypeArr[i])
    {
        return type
    }
}
}
}
function sendFiles(srcFilePath,dest,fileCategory)
{
    let cetPath=path.join(dest,fileCategory)
    if(fs.existsSync(cetPath)==false)
    {
        fs.mkdirSync(cetPath)
    }
    let filename=path.basename(srcFilePath)
    let destFilePath=path.join(cetPath,filename)
    fs.copyFileSync(srcFilePath,destFilePath)
    fs.unlinkSync(srcFilePath)
    console.log(filename+" copied to "+ fileCategory)
}
module.exports={
    organizeFnKey:organizeFn
}
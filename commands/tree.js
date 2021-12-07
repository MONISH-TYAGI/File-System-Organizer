const path=require('path')
 const fs=require('fs')
    function treeFn(dirpath)
{
   if(dirpath==undefined)
    {console.log("Please enter a valid PAth")}
    else
    {
        console.log(dirpath);
        let doesExist=fs.existsSync(dirpath)
        if(doesExist)
        {
            treeHelper(dirpath," ")
        }
    }
}

function treeHelper(dirpath,indent)
{
    let isFile=fs.lstatSync(dirpath).isFile()
    if(isFile==true)
    { 
     //   console.log("a");
     console.log(dirpath)
        let fileName=path.basename(dirpath)
        console.log(dirpath)
        console.log(indent+"|---"+fileName)
    }
    else
    { 
     //   console.log("b");  
     console.log(dirpath) 
        let dirName=path.basename(dirpath)
        console.log(indent+"⇀⇀⇀"+dirName)
        let children=fs.readdirSync(dirpath)
       // console.log(children.length)
        for(let i=0;i<children.length;i++)
        {
            let childPath=path.join(dirpath,children[i])
            treeHelper(childPath,indent+'\t')
        }
    }
}
 module.exports={
treeFnKey:treeFn
 }

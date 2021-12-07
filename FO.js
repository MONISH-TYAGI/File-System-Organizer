// let input=process.argv[2]
 // console.log(input)
 const path=require('path')
 const fs=require('fs')
 const helpObj=require('./commands/help')
 const treeObj=require('./commands/tree')
 const organizeobj=require('./commands/organize')
//const { organizeFnKey } = require('./commands/organize')
let inputArr=process.argv.slice(2)
//console.log(inputArr)
let command =inputArr[0]
// let types = {
//     media: ["mp4", "mkv","mp3"],
//     archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
//     documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
//     app: ['EXE', 'dmg', 'pkg', "deb"]
// }
switch(command)
{
    case 'tree':
        treeObj.treeFnKey(inputArr[1])
        break;
    case 'organize':
        organizeobj.organizeFnKey(inputArr[1])
    break;
    case 'help':
        helpObj.helpFnKey() 
    break;
    default :console.log('Please Enter A valid command')
    break;
}

var findDuplicate = function(paths) {
    var pathObj = {}
    var pathArr = []
    var solution = []

    for (i in paths) {
        let tempArr = paths[i].split(' ')

        for (j  = 1; j < tempArr.length; j++) {
            let tempArr2 = tempArr[j].split('(')
            pathArr.push([tempArr2[1].slice(0, -1), tempArr[0] + '/' + tempArr2[0]])
            pathObj[tempArr2[1].slice(0, -1)] = []
        }
    }

    for (i in pathArr) {
        pathObj[pathArr[i][0]].push(pathArr[i][1])
    }

    let keys = Object.keys(pathObj)
    for (i in keys) {
        if (pathObj[keys[i]].length > 1) {
            solution.push(pathObj[keys[i]])
        }
    }
    
    return solution
};

pathsArr = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]
console.log(findDuplicate(pathsArr))
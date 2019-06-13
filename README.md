多个输入框 进行模糊搜索json信息

for(let key in conditionArr){
                     if(conditionArr[key]!="undefind" && conditionArr[key]!="null" && conditionArr[key] != null && conditionArr !=""){
                         tempFilter[key] = conditionArr[key]
                     }
                }
                
                筛选出有哪些关键字
                
                   let resultArr =data.filter(
                    (item) =>{
                         let flag = false
                        for(let key in tempFilter){
                            if(item[key].toString().indexOf( tempFilter[key].toString()) >=0 ){
                                flag = true
                            }else{
                                flag = false
                                break
                            }
                        }
                        if(flag){
                            return item;
                        }
                    }
                )
                
                进程过滤

 export const Helper=(isStorage,data,navigate,path)=>{
    localStorage.setItem(isStorage,data)
    navigate(path)
}

//  export const Helper1=(isStorage,data,navigate,path,btnFlag,flagValue)=>{
//     localStorage.setItem(isStorage,data)
//     localStorage.setItem(btnFlag,flagValue)
//     navigate(path)
// }
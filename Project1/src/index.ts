const getUserName = document.querySelector('#user') as HTMLInputElement;
const formSubmit:HTMLFormElement | null = document.querySelector(".form");
const main_container = document.querySelector(".main-container") as HTMLElement;

//lets define the properties of an object

interface UserData{
    id: number,
    login:string,
    avatar_url:string,
    location: string,
    url:string,
}

//resuable function
async function myCustomFetcher<T>(url:string, options?:RequestInit):Promise<T>{
    const response = await fetch(url, options)
    if(!response.ok){
        throw new Error(
            `Network response was not ok,${response.status}`
        );
    }
    const data = response.json();
    return data;

}

function fetchUserData(url:string){
    myCustomFetcher<UserData[]>(url,{});
}

//default function call
fetchUserData("https://api.github.com/users");
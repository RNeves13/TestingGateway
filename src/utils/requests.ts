export async function secureRequest(link: string, params: RequestInit | null, method: string) {
    switch(method){
        case "GET":
            return await secureGet(link, params);
        case "POST":
            return await secureGet(link, params);
        case "DELETE":
            return await secureGet(link, params);
        case "PUT":
            return await secureGet(link, params);
        case "PATCH":
            return await secureGet(link, params);
        default:
            return null;
    }
}

async function secureGet(link: string, params: RequestInit | null){
    try{
        const response = await fetch(link, params ?? {});
        const json = await response.json();
        return json;
    }catch(e: any){
        console.log(e.message);
        return null;
    }
}
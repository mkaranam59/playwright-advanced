export function required(name:string):string{
    const value = process.env[name];
    if(!value){
        throw new Error(`Missing ${name}. Add it to the .env in your laptop or as a GitHub secret or variable.`);
    }
    return value;
}
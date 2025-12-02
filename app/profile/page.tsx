
export default function Profile({
    searchParams,
}:{
    searchParams:{
        name?:string;
        email?:string;
        username?:string;
    };
}){

    const name=searchParams?.name;

    const user=searchParams?.username;

    const e=searchParams?.email;

    return(
        <div className="box">
        <h1>The user info</h1>
        <p>Email:{e}</p>
        <p>Name:{name}</p>
        <p>User:{user}</p>
        </div>

    );
}
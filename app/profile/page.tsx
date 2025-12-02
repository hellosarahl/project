"use client";

import {useSearchParams} from "next/navigation";

export default function Profile(){
    const p=useSearchParams();

    const name=p.get("name");

    const user=p.get("username");

    const e= p.get("email");

    return(
        <div className="box">
        <h1>The user info</h1>
        <p>Email:{e}</p>
        <p>Name:{name}</p>
        <p>User:{user}</p>
        </div>

    );
}
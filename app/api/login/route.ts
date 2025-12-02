import {NextResponse} from "next/server";

export function GET(){
    const redirect=process.env.REDIRECT_URI;
    const client=process.env.GITHUB_CLIENT_ID;

    const github="https://github.com/login/oauth/authorize";

    const rest=github+"?client_id="+client+"&redirect_uri="+redirect+"&scope=read:user";

    return NextResponse.redirect(rest);



}
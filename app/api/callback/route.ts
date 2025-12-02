import {NextResponse} from "next/server";


export async function GET(r:Request){
    const c= new URL(r.url).searchParams.get("code");

    const to=await fetch("https://github.com/login/oauth/access_token",

        {method:"POST", headers:{"Content-Type":"application/json",
            Accept:"application/json"},
            body:JSON.stringify({
                code:c,
                client_id:process.env.GITHUB_CLIENT_ID,
                client_secret:process.env.GITHUB_CLIENT_SECRET,
                redirect_uri:process.env.REDIRECT_URI,
            }),

        });
        const t=await to.json();

        const u=await fetch("https://api.github.com/user",
            { headers:{Authorization: "Bearer "+ t.access_token,

            },
        });

        const us=await u.json();



        const p =new URLSearchParams();
        p.append("username",us.login);
        p.append("email", us.email)
        p.append("name",us.name);
 

        return NextResponse.redirect(`/profile?${p.toString()}`);

}


import jwt from "jsonwebtoken";


export const isValidToken = ( token: string ): Promise<string> =>{
    if( !process.env.JWT_SECRET_SEED){
        throw new Error("No hay semilla de jwt - revisar variabels de entorno");
        
    }

    if( token.length <= 10){
        return Promise.reject( 'JWT no es valido')
    }


    return new Promise( (res, rej) =>{

        try {
            jwt.verify( token, process.env.JWT_SECRET_SEED || '', (err, payload)=> {
                if( err) return rej('JWT no es valido')
                    
                const { uid } = payload as { uid: string}

                res(uid);
            })
        } catch (error) {
            rej('JWT no es valido')
        }
    })
}
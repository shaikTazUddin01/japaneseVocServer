import dotenv from 'dotenv'
dotenv.config()


export const config={
    port:process.env.PORT,
    db_url:process.env.DB_URL,
    saltRounds:process.env.SALTROUND
}
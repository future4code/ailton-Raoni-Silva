
type Usuario = {
    name: string,
    email: string,
    role: string
}

enum ROLE {
    USER = "user",
    ADMIN = "admin"
}
const users: Usuario[]=[
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
] 

function buscaAdmin(admins:Usuario[]): string[] {
    const admin = admins.filter((adm:Usuario) => {
        return adm.role !== ROLE.USER
    })

    const list = admin.map((adm: Usuario) => {
        return adm.email
    })

    return list
}

console.table(buscaAdmin(users))
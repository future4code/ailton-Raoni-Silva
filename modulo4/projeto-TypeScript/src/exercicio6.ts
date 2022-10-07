type Cliente = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}


const correntista: Cliente[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

function listaNegativos(lista: Cliente[]): Cliente[] {
    const list = lista.map((client: Cliente) => {
        let saldoAtualizado = 0
        
        for (let divida of client.debitos) {
            saldoAtualizado -= divida
        }

        const clientSaldo: Cliente = {
            cliente: client.cliente,
            saldoTotal: client.saldoTotal + saldoAtualizado,
            debitos: []
        }

        return clientSaldo
    })

    const resultado: Cliente[] = list.filter((item: Cliente) => {
        return item.saldoTotal < 0
    })

    return resultado
}

console.log(listaNegativos(correntista))
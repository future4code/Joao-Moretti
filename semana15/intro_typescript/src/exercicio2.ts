type baseStats = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]): baseStats {

    const numerosOrdenados: number[] = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: baseStats = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

const vetor: number[] = [21, 18, 65, 44, 15, 18]

const ordenacao = obterEstatisticas(vetor)

console.log(ordenacao)


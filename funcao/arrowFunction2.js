function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new Pessoa

// Na função arrow o this não varia, é sempre do contexto em que foi escrito "contexto léxico"
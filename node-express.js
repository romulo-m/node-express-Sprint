import prompt from 'prompt-sync'


const leitura = (arr = [], response = '') => {
    console.log('\n Bem-vindo ao dicionário CSS do dev.\n Digite as propriedades CSS que deseje armazenar. Quando quiser parar, digite: sair. \n')
    const entrada = prompt()
    while (response.toLowerCase() != "sair") { 
        response = entrada('Digite a propriedade CSS: ')
        if (response.toLocaleLowerCase() == 'sair'){ 
            break;
    } 
    
    arr.push(response)
}
    return arr.sort().join('\n')
}

console.log(leitura())
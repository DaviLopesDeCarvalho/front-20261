function InputSenha({senha, erro, mudavalor}) {
    return (
    <>
     <label htmlFor="senha">Senha</label>
        <input 
        className="border rounded-lg" 
        onChange={mudavalor} 
        type="passwoard" 
        id="senha" 
        name="senha" 
        value={senha}/>
        <p className="text-red-500">{erro}</p>
    </>
    )
}

export default InputSenha
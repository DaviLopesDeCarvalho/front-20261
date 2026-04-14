function InputMatricula({ matricula, erro, mudaValor }) {
    return (
        <>
            <label htmlFor="matricula">Matrícula</label>
            <input
                className="border rounded-lg"
                onChange={mudaValor} type="number"
                id="maticula"
                name="matricula"
                value={matricula} />
            <p className="text-red-500">{erro}</p>

        </>
    );
}

export default InputMatricula;
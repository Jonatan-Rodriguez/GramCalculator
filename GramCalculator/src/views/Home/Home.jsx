import { useState } from 'react';
import { ContainerHome } from './home.styled';

const Home = () => {
    const [selectCalculator, setSelectCalculator] = useState("1");
    const [result, setResult] = useState(0);

    const priceMila = 3300;
    const priceAlbondiga = 4500;
    const priceMedallon = 5000;

    const calculator = () => {
        const inputPrice = document.getElementById("inputPrice").value;
        /* const inputGram = document.getElementById("inputGram").value; */

        let unKg = 1000;
        let result = 0;

        if (selectCalculator == "1") {
            let suma = unKg * inputPrice;
            result = suma / priceMila;
            const resultTrunc = Math.trunc(result);
            setResult(resultTrunc);
        }

        if (selectCalculator == "2") {
            let suma = unKg * inputPrice;
            result = suma / priceAlbondiga;
            const resultTrunc = Math.trunc(result);
            setResult(resultTrunc);
        }
        if (selectCalculator == "3") {
            let suma = unKg * inputPrice;
            result = suma / priceMedallon;
            const resultTrunc = Math.trunc(result);
            setResult(resultTrunc);
        }
    }

    const handleSelect = (event) => {
        const select = document.getElementById("selectCalculator").value;

        setSelectCalculator(select);
        console.log(select);
        console.log(event.target.value);
    }

    return (
        <ContainerHome>
            <div class="card">
                <div className='card-info'>
                    <div className='containerSelect'>
                        <span className='selectText'>-Seleccion-</span>
                        <select className='select' name="" id="selectCalculator" onChange={handleSelect}>
                            <option value="1">Milanesa</option>
                            <option value="2">Albondiga</option>
                            <option value="3">Medallones</option>
                        </select>
                    </div>
                    {/* <div>
                        <span>Peso por gramo</span>
                        <input type="text" name="" id="inputGram" />
                    </div> */}
                    <div className='containerInput'>
                        <span className='inputText'>Pesos</span>
                        <input className='input' type="text" name="" id="inputPrice" />
                    </div>
                    <div className='containerBtn'>
                        <button className='btn' onClick={calculator}>Calcular</button>
                    </div>
                    <div className='containerResult'>
                        <span className='result'><b>{result}</b></span>
                        <span className='resultGram'> gramos</span>
                    </div>
                </div>
            </div>
        </ContainerHome>
    )
}

export default Home;
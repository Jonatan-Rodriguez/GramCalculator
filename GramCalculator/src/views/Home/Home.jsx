import { useState } from 'react';

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
            setResult(result);
        }

        if (selectCalculator == "2") {
            let suma = unKg * inputPrice;
            result = suma / priceAlbondiga;
            setResult(result);
        }
        if (selectCalculator == "3") {
            let suma = unKg * inputPrice;
            result = suma / priceMedallon;
            setResult(result);
        }
    }

    const handleSelect = (event) => {
        const select = document.getElementById("selectCalculator").value;

        setSelectCalculator(select);
        console.log(select);
        console.log(event.target.value);
    }

    return (
        <>
            <div>
                <div>
                    <span>-Seleccion-</span>
                    <select name="" id="selectCalculator" onChange={handleSelect}>
                        <option value="1">Milanesa</option>
                        <option value="2">Albondiga</option>
                        <option value="3">Medallones</option>
                    </select>
                </div>
                {/* <div>
                    <span>Peso por gramo</span>
                    <input type="text" name="" id="inputGram" />
                </div> */}
                <div>
                    <span>Pesos</span>
                    <input type="text" name="" id="inputPrice" />
                </div>
                <div>
                    <button onClick={calculator}>Calcular</button>
                </div>
                <div>
                    <span>Son {result} gramos.</span>
                </div>
            </div>
        </>
    )
}

export default Home;
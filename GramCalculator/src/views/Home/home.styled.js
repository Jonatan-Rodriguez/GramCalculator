import styled from 'styled-components';

export const ContainerHome = styled.div`

    .card{
        --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
        width: 400px;
        min-width: 90%;
        height: 500px;
        padding: 5px;
        border-radius: 1rem;
        overflow: visible;
        background: #f7ba2b;
        background: var(--background);
        position: relative;
        z-index: 1;

        .card-info {
            --color: #181818;
            background: var(--color);
            color: #FFFFFF;
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-direction: column;
            width: 100%;
            height: 100%;
            overflow: visible;
            border-radius: .7rem;
        }
    }

    .card::after {
        position: absolute;
        content: "";
        top: 30px;
        left: 0;
        right: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        transform: scale(0.8);
        filter: blur(25px);
        background: #f7ba2b;
        background: var(--background);
        transition: opacity .5s;
    }

    .containerSelect{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        row-gap: 10px;

        .selectText{
            font-size: 1.5em;
        }
        .select{
            height: 40px;
            width: 300px;
            border-radius: 10px;
            font-size: 1.2em;
            text-align: center;

            option{
                font-size: 1.2em;
                border-radius: 10px;
            }
        }
    }
    
    .containerInput{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 10px;

        .inputText{
            font-size: 1.5em;
        }
        .input{
            height: 40px;
            width: 300px;
            border-radius: 10px;
            font-size: 1.5em;
            padding-left: 7px;
        }
    }

    .containerBtn{

        .btn{
            display: flex;
            align-items: center;
            justify-content: center;
            height: 50px;
            width: 300px;
            border-radius: 10px;
            font-size: 1.5em;
            background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
        }
    }

    .containerResult{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 300px;
        border-radius: 10px;
        background-color: #80ed99;
        border: 1px solid #70e000 ;

        .result{
            font-size: 1.9em;
        }
        .resultGram{
            font-size: 1.1em;
        }
    }
    
`
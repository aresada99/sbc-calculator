import { useEffect, useState } from 'react';
import styles from './Sbc.module.css'
import copyImg from './assets/copy.png'
import pasteImg from './assets/paste.png'



const Sbc = () => {

    const [cards, setCards] = useState(
        [
            {
                "cardName": "Card 1",
                "cardValue": 83,
                "hiddenValue": 83
            },
            {
                "cardName": "Card 2",
                "cardValue": 83,
                "hiddenValue": 83
            },
            {
                "cardName": "Card 3",
                "cardValue": 83,
                "hiddenValue": 83
            },
            {
                "cardName": "Card 4",
                "cardValue": 83,
                "hiddenValue": 83
            },
            {
                "cardName": "Card 5",
                "cardValue": 83,
                "hiddenValue": 83
            },
            {
                "cardName": "Card 6",
                "cardValue": 83,
                "hiddenValue": 83
            },
            {
                "cardName": "Card 7",
                "cardValue": 83,
                "hiddenValue": 83
            },
            {
                "cardName": "Card 8",
                "cardValue": 83,
                "hiddenValue": 83
            },
            {
                "cardName": "Card 9",
                "cardValue": 83,
                "hiddenValue": 83
            },
            {
                "cardName": "Card 10",
                "cardValue": 83,
                "hiddenValue": 83
            },
            {
                "cardName": "Card 11",
                "cardValue": 83,
                "hiddenValue": 83
            }
        ]
    );

    const [copiedCard, setCopiedCard] = useState({
        "cardValue": 83,
        "hiddenValue": 83
    })

    const [result, setResult] = useState(83);
    const [fullResult, setFullResult] = useState(83);
    const [showDetails, setShowDetails] = useState(false)


    const handlePlus1Button = (index) => {
        var val = cards[index].cardValue;
        var hiddenVal = cards[index].hiddenValue;
        val++;
        hiddenVal++;
        if (val <= 99) {
            const updatedCards = [...cards];
            updatedCards[index].cardValue = val;
            updatedCards[index].hiddenValue = hiddenVal;
            setCards(updatedCards);
        }
    }

    const handlePlus5Button = (index) => {
        var val = cards[index].cardValue;
        var hiddenVal = cards[index].hiddenValue;
        val = val + 5;
        hiddenVal = hiddenVal + 5;
        if (val <= 99) {
            const updatedCards = [...cards];
            updatedCards[index].cardValue = val;
            updatedCards[index].hiddenValue = hiddenVal;
            setCards(updatedCards);
        }
    }

    const handleMinus1Button = (index) => {
        var val = cards[index].cardValue;
        var hiddenVal = cards[index].hiddenValue;
        val--;
        hiddenVal--;
        if (val >= 1) {
            const updatedCards = [...cards];
            updatedCards[index].cardValue = val;
            updatedCards[index].hiddenValue = hiddenVal;
            setCards(updatedCards);
        }
    }

    const handleMinus5Button = (index) => {
        var val = cards[index].cardValue;
        var hiddenVal = cards[index].hiddenValue;
        val = val - 5;
        hiddenVal = hiddenVal - 5;
        if (val >= 1) {

            const updatedCards = [...cards];
            updatedCards[index].cardValue = val;
            updatedCards[index].hiddenValue = hiddenVal;
            setCards(updatedCards);
        }
    }

    function roundUp(number) {
        const decimalPart = number % 1;
        if (decimalPart >= 0.95) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }


    const handleCalculate = () => {

        var avg, totalRaiting = 0;
        for (var i = 0; i < cards.length; i++) {
            totalRaiting = totalRaiting + cards[i].cardValue;

        }
        avg = totalRaiting / 11;

        var finalAvg, finalTotalRaiting = 0;
        for (var i = 0; i < cards.length; i++) {
            var val = cards[i].cardValue - avg;
            if (val > 0) {
                cards[i].hiddenValue = cards[i].hiddenValue + val;

            }
            finalTotalRaiting = finalTotalRaiting + cards[i].hiddenValue;
        }
        finalAvg = finalTotalRaiting / 11;
        for (var i = 0; i < cards.length; i++) {
            cards[i].hiddenValue = cards[i].cardValue;

        }
        setFullResult(finalAvg)
        setResult(roundUp(finalAvg));




    }


    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }


    const handleCopy = (index) => {

        const copiedCard = { ...cards[index] };

        delete copiedCard.cardName;

        setCopiedCard(copiedCard);
    }


    
    const handlePaste = (index) => {

        const updatedCards = [...cards];
    

        updatedCards[index].cardValue = copiedCard.cardValue;
        updatedCards[index].hiddenValue = copiedCard.hiddenValue;
    

        setCards(updatedCards);
    }



    return (
        <div className={styles['page']}>
            <div className={styles['container']}>
                <div className={styles['header']}>
                    <h1>SBC Raiting Calculator</h1>
                </div>
                <div className={styles['cards']}>
                    <div className={styles['card']}>
                        <div className={styles['copy-paste-div']}>
                            <div onClick={() => handleCopy(0)} className={styles['copy-div']}>
                                <img src={copyImg} alt="" />
                            </div>
                            <div onClick={() => handlePaste(0)} className={styles['paste-div']}>
                                <img src={pasteImg} alt="" />
                            </div>
                        </div>
                        <h3>{cards[0].cardName}</h3>
                        <h4>{cards[0].cardValue}</h4>
                        <div className={styles['buttons']}>
                            <button onClick={() => handleMinus5Button(0)}>-5</button>
                            <button onClick={() => handleMinus1Button(0)}>-1</button>
                            <button onClick={() => handlePlus1Button(0)}>+1</button>
                            <button onClick={() => handlePlus5Button(0)}>+5</button>
                        </div>
                    </div>
                    <div className={styles['card']}>
                    <div className={styles['copy-paste-div']}>
                            <div onClick={() => handleCopy(1)} className={styles['copy-div']}>
                                <img src={copyImg} alt="" />
                            </div>
                            <div onClick={() => handlePaste(1)} className={styles['paste-div']}>
                                <img src={pasteImg} alt="" />
                            </div>
                        </div>
                        <h3>{cards[1].cardName}</h3>
                        <h4>{cards[1].cardValue}</h4>
                        <div className={styles['buttons']}>
                            <button onClick={() => handleMinus5Button(1)}>-5</button>
                            <button onClick={() => handleMinus1Button(1)}>-1</button>
                            <button onClick={() => handlePlus1Button(1)}>+1</button>
                            <button onClick={() => handlePlus5Button(1)}>+5</button>
                        </div>
                    </div>
                    <div className={styles['card']}>
                    <div className={styles['copy-paste-div']}>
                            <div onClick={() => handleCopy(2)} className={styles['copy-div']}>
                                <img src={copyImg} alt="" />
                            </div>
                            <div onClick={() => handlePaste(2)} className={styles['paste-div']}>
                                <img src={pasteImg} alt="" />
                            </div>
                        </div>
                        <h3>{cards[2].cardName}</h3>
                        <h4>{cards[2].cardValue}</h4>
                        <div className={styles['buttons']}>
                            <button onClick={() => handleMinus5Button(2)}>-5</button>
                            <button onClick={() => handleMinus1Button(2)}>-1</button>
                            <button onClick={() => handlePlus1Button(2)}>+1</button>
                            <button onClick={() => handlePlus5Button(2)}>+5</button>
                        </div>
                    </div>
                    <div className={styles['card']}>
                    <div className={styles['copy-paste-div']}>
                            <div onClick={() => handleCopy(3)} className={styles['copy-div']}>
                                <img src={copyImg} alt="" />
                            </div>
                            <div onClick={() => handlePaste(3)} className={styles['paste-div']}>
                                <img src={pasteImg} alt="" />
                            </div>
                        </div>
                        <h3>{cards[3].cardName}</h3>
                        <h4>{cards[3].cardValue}</h4>
                        <div className={styles['buttons']}>
                            <button onClick={() => handleMinus5Button(3)}>-5</button>
                            <button onClick={() => handleMinus1Button(3)}>-1</button>
                            <button onClick={() => handlePlus1Button(3)}>+1</button>
                            <button onClick={() => handlePlus5Button(3)}>+5</button>
                        </div>
                    </div>
                    <div className={styles['card']}>
                    <div className={styles['copy-paste-div']}>
                            <div onClick={() => handleCopy(4)} className={styles['copy-div']}>
                                <img src={copyImg} alt="" />
                            </div>
                            <div onClick={() => handlePaste(4)} className={styles['paste-div']}>
                                <img src={pasteImg} alt="" />
                            </div>
                        </div>
                        <h3>{cards[4].cardName}</h3>
                        <h4>{cards[4].cardValue}</h4>
                        <div className={styles['buttons']}>
                            <button onClick={() => handleMinus5Button(4)}>-5</button>
                            <button onClick={() => handleMinus1Button(4)}>-1</button>
                            <button onClick={() => handlePlus1Button(4)}>+1</button>
                            <button onClick={() => handlePlus5Button(4)}>+5</button>
                        </div>
                    </div>
                    <div className={styles['card']}>
                    <div className={styles['copy-paste-div']}>
                            <div onClick={() => handleCopy(5)} className={styles['copy-div']}>
                                <img src={copyImg} alt="" />
                            </div>
                            <div onClick={() => handlePaste(5)} className={styles['paste-div']}>
                                <img src={pasteImg} alt="" />
                            </div>
                        </div>
                        <h3>{cards[5].cardName}</h3>
                        <h4>{cards[5].cardValue}</h4>
                        <div className={styles['buttons']}>
                            <button onClick={() => handleMinus5Button(5)}>-5</button>
                            <button onClick={() => handleMinus1Button(5)}>-1</button>
                            <button onClick={() => handlePlus1Button(5)}>+1</button>
                            <button onClick={() => handlePlus5Button(5)}>+5</button>
                        </div>
                    </div>
                    <div className={styles['card']}>
                    <div className={styles['copy-paste-div']}>
                            <div onClick={() => handleCopy(6)} className={styles['copy-div']}>
                                <img src={copyImg} alt="" />
                            </div>
                            <div onClick={() => handlePaste(6)} className={styles['paste-div']}>
                                <img src={pasteImg} alt="" />
                            </div>
                        </div>
                        <h3>{cards[6].cardName}</h3>
                        <h4>{cards[6].cardValue}</h4>
                        <div className={styles['buttons']}>
                            <button onClick={() => handleMinus5Button(6)}>-5</button>
                            <button onClick={() => handleMinus1Button(6)}>-1</button>
                            <button onClick={() => handlePlus1Button(6)}>+1</button>
                            <button onClick={() => handlePlus5Button(6)}>+5</button>
                        </div>
                    </div>
                    <div className={styles['card']}>
                    <div className={styles['copy-paste-div']}>
                            <div onClick={() => handleCopy(7)} className={styles['copy-div']}>
                                <img src={copyImg} alt="" />
                            </div>
                            <div onClick={() => handlePaste(7)} className={styles['paste-div']}>
                                <img src={pasteImg} alt="" />
                            </div>
                        </div>
                        <h3>{cards[7].cardName}</h3>
                        <h4>{cards[7].cardValue}</h4>
                        <div className={styles['buttons']}>
                            <button onClick={() => handleMinus5Button(7)}>-5</button>
                            <button onClick={() => handleMinus1Button(7)}>-1</button>
                            <button onClick={() => handlePlus1Button(7)}>+1</button>
                            <button onClick={() => handlePlus5Button(7)}>+5</button>
                        </div>
                    </div>
                    <div className={styles['card']}>
                    <div className={styles['copy-paste-div']}>
                            <div onClick={() => handleCopy(8)} className={styles['copy-div']}>
                                <img src={copyImg} alt="" />
                            </div>
                            <div onClick={() => handlePaste(8)} className={styles['paste-div']}>
                                <img src={pasteImg} alt="" />
                            </div>
                        </div>
                        <h3>{cards[8].cardName}</h3>
                        <h4>{cards[8].cardValue}</h4>
                        <div className={styles['buttons']}>
                            <button onClick={() => handleMinus5Button(8)}>-5</button>
                            <button onClick={() => handleMinus1Button(8)}>-1</button>
                            <button onClick={() => handlePlus1Button(8)}>+1</button>
                            <button onClick={() => handlePlus5Button(8)}>+5</button>
                        </div>
                    </div>
                    <div className={styles['card']}>
                    <div className={styles['copy-paste-div']}>
                            <div onClick={() => handleCopy(9)} className={styles['copy-div']}>
                                <img src={copyImg} alt="" />
                            </div>
                            <div onClick={() => handlePaste(9)} className={styles['paste-div']}>
                                <img src={pasteImg} alt="" />
                            </div>
                        </div>
                        <h3>{cards[9].cardName}</h3>
                        <h4>{cards[9].cardValue}</h4>
                        <div className={styles['buttons']}>
                            <button onClick={() => handleMinus5Button(9)}>-5</button>
                            <button onClick={() => handleMinus1Button(9)}>-1</button>
                            <button onClick={() => handlePlus1Button(9)}>+1</button>
                            <button onClick={() => handlePlus5Button(9)}>+5</button>
                        </div>
                    </div>
                    <div className={styles['card']}>
                    <div className={styles['copy-paste-div']}>
                            <div onClick={() => handleCopy(10)} className={styles['copy-div']}>
                                <img src={copyImg} alt="" />
                            </div>
                            <div onClick={() => handlePaste(10)} className={styles['paste-div']}>
                                <img src={pasteImg} alt="" />
                            </div>
                        </div>
                        <h3>{cards[10].cardName}</h3>
                        <h4>{cards[10].cardValue}</h4>
                        <div className={styles['buttons']}>
                            <button onClick={() => handleMinus5Button(10)}>-5</button>
                            <button onClick={() => handleMinus1Button(10)}>-1</button>
                            <button onClick={() => handlePlus1Button(10)}>+1</button>
                            <button onClick={() => handlePlus5Button(10)}>+5</button>

                        </div>
                    </div>
                </div>
                <button onClick={handleCalculate} className={styles['calculate-btn']}>Calculate</button>
                <div className={styles['result-div']}>
                    <h3 className={styles['result-div-h3']}>Calculated Squad Rating</h3>
                    <h3 className={styles['result-div-h3-main']}>{result}</h3>
                    <button onClick={toggleDetails} className={styles['details-btn']}>Toggle Details</button>
                    {showDetails && (
                        <div className={styles['details']}>
                            <h3 className={styles['result-div-h3']}>Detailed Rating</h3>
                            <h3 className={styles['result-div-h3']}>{fullResult}</h3>
                            <p className={styles['detail-p']}>(Ex. 85.95 rounded to 86, 85.94 rounded to 85.)</p>
                        </div>
                    )}


                </div>
            </div>
        </div>
    );
}

export default Sbc;
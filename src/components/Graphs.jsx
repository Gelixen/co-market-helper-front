import styles from './Graphs.module.css';

import React, {useState, useEffect} from 'react';
import Graph from './Graph.js';

function Graphs() {

    const [data, setData] = useState([])
    const [gemsData, setGemsData] = useState([])
    const [plusData, setPlusData] = useState([])

    useEffect(() => {

        fetch('/demo/others/grouped')
            .then(response => response.json())
            .then(data => {
                setData(data);
            });

        fetch('/demo/gems')
            .then(response => response.json())
            .then(data => {
                setGemsData(data);
            });
        fetch('/demo/plus')
            .then(response => response.json())
            .then(data => setPlusData(data));
    }, [])

    return (
        <>
            <div className={styles.main}>
                <p>dsd</p>
            </div>

            <hr/>
            {
                Object.entries(data)
                    .sort()
                    .filter(value => [
                        "MeteorScroll",
                        "DragonBall",
                        "DBScroll",
                        "ExpPotion",
                        "MoonBox",
                        "VIPToken",
                        "CelestialStone",
                        "CleanWater"
                    ].includes(value[0]))
                    .map(value => <Graph data={value[1]} item={value[0]}/>)
            }
            <hr/>
            {
                Object.entries(gemsData)
                    .sort()
                    .map(value => <Graph data={value[1]} item={value[0]}/>)
            }
            <hr/>
            {
                Object.entries(plusData)
                    .sort()
                    .filter(value => value[0].endsWith(" 1"))
                    .map(value => <Graph data={value[1]} item={value[0]}/>)
            }
        </>
    )
}

export default Graphs;
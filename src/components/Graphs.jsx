import React, {useState, useEffect} from 'react';
import ChartExample from './Graph.js';

function Graphs() {

    const [data, setData] = useState()
    const [gemsData, setGemsData] = useState()
    const [plusData, setPlusData] = useState()

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
            <ChartExample data={data} item="MeteorScroll"/>
            <ChartExample data={data} item="Meteor"/>
            <ChartExample data={data} item="DragonBall"/>
            <ChartExample data={data} item="DBScroll"/>
            <ChartExample data={data} item="ExpPotion"/>
            <ChartExample data={data} item="MoonBox"/>
            <ChartExample data={data} item="VIPToken"/>
            <ChartExample data={data} item="CelestialStone"/>
            <ChartExample data={data} item="CleanWater"/>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <ChartExample data={gemsData} item="DragonGem Super"/>
            <ChartExample data={gemsData} item="DragonGem Normal"/>
            <ChartExample data={gemsData} item="MoonGem Normal"/>
            <ChartExample data={gemsData} item="PhoenixGem Normal"/>
            <ChartExample data={gemsData} item="VioletGem Normal"/>
            <ChartExample data={gemsData} item="KylinGem Normal"/>
            <ChartExample data={gemsData} item="RainbowGem Normal"/>
            <ChartExample data={gemsData} item="FuryGem Normal"/>
            <ChartExample data={gemsData} item="DragonGem Refined"/>
            <ChartExample data={gemsData} item="FuryGem Refined"/>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            <ChartExample data={plusData} item="Ring 1" subtitle="2.5kk - 3kk"/>
            <ChartExample data={plusData} item="Heavy Ring 1" subtitle="~1kk"/>
            <ChartExample data={plusData} item="1-hand 1"/>
            <ChartExample data={plusData} item="2-hand 1"/>

            <ChartExample data={plusData} item="Trojan Coronet 1"/>
            <ChartExample data={plusData} item="Trojan Armor 1"/>

            <ChartExample data={plusData} item="Bow 1"/>
            <ChartExample data={plusData} item="Bow 2"/>
            <ChartExample data={plusData} item="Bow 3"/>
            <ChartExample data={plusData} item="Bow 4"/>
            <ChartExample data={plusData} item="Bow 5"/>
            <ChartExample data={plusData} item="Archer Hat 1"/>
            <ChartExample data={plusData} item="Archer Coat 1"/>

            <ChartExample data={plusData} item="Backsword 1"/>
            <ChartExample data={plusData} item="Taoist Cap 1"/>
            <ChartExample data={plusData} item="Taoist Robe 1"/>
            <ChartExample data={plusData} item="Bag 1"/>
            <ChartExample data={plusData} item="Bracelet 1"/>

            <ChartExample data={plusData} item="Warrior Helmet 1"/>
            <ChartExample data={plusData} item="Warrior Armor 1"/>
            <ChartExample data={plusData} item="Shield 1"/>

            <ChartExample data={plusData} item="Earring 1"/>
            <ChartExample data={plusData} item="Necklace 1"/>
            <ChartExample data={plusData} item="Boots 1"/>


            <ChartExample data={data} item="1-StarDragonBall"/>
            <ChartExample data={data} item="2-StarDragonBall"/>
            <ChartExample data={data} item="3-StarDragonBall"/>
            <ChartExample data={data} item="4-StarDragonBall"/>
            <ChartExample data={data} item="5-StarDragonBall"/>
            <ChartExample data={data} item="6-StarDragonBall"/>
            <ChartExample data={data} item="7-StarDragonBall"/>

        </>
    )
}

export default Graphs;
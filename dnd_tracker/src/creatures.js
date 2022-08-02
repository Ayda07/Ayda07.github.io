import {memo, useState} from "react";

const Creatures = ({ creatures, addCreature }) => {
    console.log("child render");

    const handleChange = (event, index) => {
        const field = event.target.name;
        const value = event.target.value;
        creatures[index][field] = value;
    };

    return(
        <>
            <h1>Combat Tracker</h1>
            {creatures.map((creature, index) => {
                return(
                    <div key={index} className="creature">
                        <input 
                            type="number" 
                            name="init"
                            value={creature.init}
                            onChange={event => handleChange(event, index)}
                        />
                        <input 
                            type="number" 
                            name="ac"
                            value={creature.ac}
                            onChange={event => handleChange(event, index)}
                        />
                        <input 
                            type="number" 
                            name="hp"
                            value={creature.hp}
                            onChange={event => handleChange(event, index)}
                        />
                    </div>
                );
            })}
            <button onClick={addCreature}>Add Creature</button>
        </>
    )
};

export default memo(Creatures);
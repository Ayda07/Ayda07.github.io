import React, {memo} from "react";

const Creatures = ({ creatures, addCreature, update }) => {
    console.log("child render");

    const handleChange = (event, index) => {
        const field = event.target.name;
        const value = event.target.value;
        creatures[index][field] = value; 
        update();   
    };

    return(
        <>
            <h1>Combat Tracker</h1>
            {creatures.map((creature, index) => {
                return(
                    <div key={index} className={ "creature " + creature.type }>
                        <input 
                            type="text"
                            name="name" 
                            value={creature.name} 
                            onChange={(event) => handleChange(event, index)} 
                        /><br />
                        <label for="init">Initiative: </label>
                        <input 
                            type="number" 
                            name="init"
                            id="init"
                            value={creature.init}
                            onChange={event => handleChange(event, index)}
                        />
                        <label for="ac">AC: </label>
                        <input 
                            type="number" 
                            name="ac"
                            id="ac"
                            value={creature.ac}
                            onChange={event => handleChange(event, index)}
                        />
                        <label for="hp">HP: </label>
                        <input 
                            type="number" 
                            name="hp"
                            id="hp"
                            value={creature.hp}
                            onChange={event => handleChange(event, index)}
                        />
                        <select value={creature.type} onChange={event => handleChange(event, index)} name="type">
                            <option value="npc">Neutral</option>
                            <option value="ally">Ally</option>
                            <option value="enemy">Enemy</option>
                        </select>
                    </div>
                );
            })}
            <button onClick={addCreature}>Add Creature</button>
        </>
    )
};

export default memo(Creatures);
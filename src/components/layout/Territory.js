import React, { Component } from 'react';
import BoneShrine from './territories/BoneShrine';
import CorpseFarm from './territories/CorpseFarm';
import RefuseDrift from './territories/RefuseDrift';
import DrinkingHole from './territories/DrinkingHole';
import GamblingDen from './territories/GamblingDen';
import NeedleWays from './territories/NeedleWays';
import NarcoDen from './territories/NarcoDen';
import StingerMouldSprawl from './territories/StingerMouldSprawl';
import SynthStill from './territories/SynthStill';
import FightingPit from './territories/FightingPit';
import SlagFurnace from './territories/SlagFurnace';
import SmeltingWorks from './territories/SmeltingWorks';
import MineWorkings from './territories/MineWorkings';
import TollCrossing from './territories/TollCrossing';
import Tunnels from './territories/Tunnels';
import CollapsedDome from './territories/CollapsedDome';
import OldRuins from './territories/OldRuins';
import PromethiumCache from './territories/PromethiumCache';
import RogueDocShop from './territories/RogueDocShop';
import Settlement from './territories/Settlement';
import SludgeSea from './territories/SludgeSea';
import Wastes from './territories/Wastes';
import Workshop from './territories/Workshop';
import Archaeotech from './territories/Archaeotech';
import Generatorium from './territories/Generatorium';
import TechBazaar from './territories/TechBazaar';
// import PropTypes from 'prop-types';

export class Territory extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      width: '100vw',
      height: '100vh',
      position: 'absolute',
      top: '0',
      left: '0'
      // textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render() {
    return (
      <div style={this.getStyle()} className="territory-wrapper">
        <BoneShrine />
        <CorpseFarm />
        <RefuseDrift />
        <DrinkingHole />
        <GamblingDen />
        <NeedleWays />
        <NarcoDen />
        <StingerMouldSprawl />
        <SynthStill />
        <FightingPit />
        <SlagFurnace />
        <SmeltingWorks />
        <MineWorkings />
        <TollCrossing />
        <Tunnels />
        <CollapsedDome />
        <OldRuins />
        <PromethiumCache />
        <RogueDocShop />
        <Settlement />
        <SludgeSea />
        <Wastes />
        <Workshop />
        <Archaeotech />
        <Generatorium />
        <TechBazaar />
      </div>
    )
  }
}

// PropTypes
// Territory.propTypes = {
//   todo: PropTypes.object.isRequired,
//   markComplete: PropTypes.func.isRequired,
//   delTodo: PropTypes.func.isRequired,
// }

const territoryStyle = {
  border: '2px solid #333333',
  cursor: 'pointer'
}

export default Territory
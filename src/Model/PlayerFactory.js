import EasyPlayer from './EasyPlayer'
import MediumPlayer from './MediumPlayer'
import HardPlayer from './HardPlayer'

export default class PlayerFactory
{
    static newPlayer(level)
    {
        switch(level)
        {
            case 'dummy': return new EasyPlayer();
            case 'medium': return new MediumPlayer();
            case 'impossible': return new EasyPlayer();
            default: return null;
        }
    }
}
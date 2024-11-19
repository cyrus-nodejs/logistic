import {Image} from 'react-bootstrap';
import { bigLoadTrucks } from '../../utils/Vehicles';

const Bigloadtrucks = () => {
  return (
    <section>
    
            {
                bigLoadTrucks.map((vehicle, id) =>{
                    return(
        
                  <Image key={id} src={vehicle.image} className="all" fluid />
                    )
                })
            }

    
</section>
  )
}

export default Bigloadtrucks
import {Image} from 'react-bootstrap';

import { primeTrucks } from '../../utils/Vehicles';

const Primetrucks = () => {
  return (
    <section>
    
            {
                primeTrucks.map((vehicle) =>{
                    return(
        
                  <Image src={vehicle.image} className="all" fluid />
                    )
                })
            }
</section>
  )
}

export default Primetrucks
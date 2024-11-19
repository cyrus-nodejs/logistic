import {Image} from 'react-bootstrap';


import { allVehicles } from '../../utils/Vehicles';


const Allvehicles = () => {
  return (
    <section>
    
                {
                    allVehicles.map((vehicle) =>{
                        return(
            
                      <Image src={vehicle.image} className="all" fluid />
                        )
                    })
                }
</section>
            
  )
}

export default Allvehicles
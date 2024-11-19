import {Image} from 'react-bootstrap';


import { shortTrucks} from '../../utils/Vehicles';


const Shorttrucks = () => {
  return (
    <section>
    
                {
                    shortTrucks.map((vehicle) =>{
                        return(
            
                      <Image src={vehicle.image} className="all" fluid />
                        )
                    })
                }

    </section>
  )
}

export default Shorttrucks;
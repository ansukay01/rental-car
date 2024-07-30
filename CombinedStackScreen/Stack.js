import { createStackNavigator } from '@react-navigation/stack'
import FirstScreen from "../StackScreen/FirstScreen";
import LoginScreen from "../StackScreen/LoginScreen";
import SignUpScreen from "../StackScreen/SignUpScreen";
import AvailableCars from "../StackScreen/AvailableCars";
import SUVCars from '../StackScreen/SUVCars';
import AudiQ8BeneathSlideShowScreen from '../BeneathSlideShowScreen/Audiq8BeneathSlideShowScreen';
import CardsInformation from '../PaymentSuccess/CardsInformation';
import CadillacEscaladeBeneathSlideShowScreen from '../BeneathSlideShowScreen/CadillacEscalladeSlideShowScreen';
import JeepWranglerBeneathSlideShowScreen from '../BeneathSlideShowScreen/JeepWranglerBeneathSlideShowScreen';
import GWagonBeneathSlideShowScreen from '../BeneathSlideShowScreen/GWagonBeneathSlideShowScreen';
import PorscheCayenneBeneathSlideShowScreen from '../BeneathSlideShowScreen/PorscheCayenneBeneathSlideShowScreen';
import FordExplorerBeneathSlideShowScreen from '../BeneathSlideShowScreen/FordExplorerSlideShowScreen';
import CoupeCarss from '../StackScreen/CoupeCarsScreen';
import BentleyGTBeneathSlideShowScreen from '../BeneathSlideShowScreen/BentleyGTBeneathSlideShowScreen';
import AudiTTBeneathSlideShowScreen from '../BeneathSlideShowScreen/AudiTTBeneathSlideShowScreen';
import ToyotaGT86BeneathSlideShowScreen from '../BeneathSlideShowScreen/ToyotaGt86BeneathSlideShowScreen';
import SubaruBRZBeneathSlideShowScreen from '../BeneathSlideShowScreen/SubaruBRZBeneathSlideShowScreen';
import ChevyCorvetteBeneathSlideShowScreen from '../BeneathSlideShowScreen/ChevyCorvetteBeneathSlideShowScreen';
import BMW8SeriesBeneathSlideShowScreen from '../BeneathSlideShowScreen/BMW8SeriesBeneathSlideShowScreen';
import Wagon from '../StackScreen/WagonCarsScreen';
import AudiA6BeneathSlideShowScreen from '../BeneathSlideShowScreen/AudiA6BeneathSlideShowScreen';
import SubaruOutBackBeneathSlideShowScreen from '../BeneathSlideShowScreen/SubaruOutbackBeneathSlideShowScreen';
import VolvoV60BeneathSlideShowScreen from '../BeneathSlideShowScreen/VolvoV60BeneathSlideShowScreen';
import AudiRS6BeneathSlideShowScreen from '../BeneathSlideShowScreen/AudiRS6SlideShowScreen';
import VolvoV90BeneathSlideShowScreen from '../BeneathSlideShowScreen/VolvoV90BeneathSlideShowScreen';
import ECLASSWagonBeneathSlideShowScreen from '../BeneathSlideShowScreen/ECLASSBeneathSlideShownScreen';
import SedanCars from '../StackScreen/SedanCarsScreen';
import HondaCivicBeneathSlideShowScreen from '../BeneathSlideShowScreen/HondaCivicBeneathSlideShowScreen';
import KiaForteBeneathSlideShowScreen from '../BeneathSlideShowScreen/KiaForteBeneathSlideShowScreen';
import HyundaiElantraBeneathSlideShowScreen from '../BeneathSlideShowScreen/HyundaiElantraBeneathSlideShowScreen';
import ToyotaCorollaBeneathSlideShowScreen from '../BeneathSlideShowScreen/ToyotaCorollaBeneathSlideShowScreen';
import NissanSentraBeneathSlideShowScreen from '../BeneathSlideShowScreen/NissanSentraSlideShowScreen';
import BMW2SeriesGranBeneathSlideShowScreen from '../BeneathSlideShowScreen/BMW2SeriesSlideShowScreen';
import HatchBack from '../StackScreen/HatchBackScreen';
import KiaCeedBeneathSlideShowScreen from '../BeneathSlideShowScreen/KiaCeedBeneathSlideShowScreen';
import DaciaSanderoBeneathSlideShowScreen from '../BeneathSlideShowScreen/DaciaSanderoSlideShowScreen';
import VolkswagenGolfBeneathSlideShowScreen from '../BeneathSlideShowScreen/VolkwagonGolfSlideShowScreen';
import SeatLeonBeneathSlideShowScreen from '../BeneathSlideShowScreen/SeatLeonBeneathSlideShowScreen';
import VauxhallAstraBeneathSlideShowScreen from '../BeneathSlideShowScreen/VauxhallAstraBeneathSlideShowScreen';
import PickUpCars from '../StackScreen/PickUpCarsScreen';
import GMCCanyonBeneathSlideShowScreen from '../BeneathSlideShowScreen/GMCCanyonBeneathSlideShowScreen';
import JeepGladiatorBeneathSlideShowScreen from '../BeneathSlideShowScreen/JeepGladiatorBeneathSlideShowScreen';
import HondaRigelineBeneathSlideShowScreen from '../BeneathSlideShowScreen/HondaRigelineBeneathSlideShowScreen';
import FordRangerBeneathSlideShowScreen from '../BeneathSlideShowScreen/FordRangerBeneathSlideShowScreen';
import NissanTitanBeneathSlideShowScreen from '../BeneathSlideShowScreen/NissanTitanSlideShowScreen';
import ToyotaTundraBeneathSlideShowScreen from '../BeneathSlideShowScreen/ToyotaTundraSlideShowScreen';
import SportCars from '../StackScreen/SportCarsScreen';
import Porsche911BeneathSlideShowScreen from '../BeneathSlideShowScreen/Porsche911SlideShowScreen';
import FerrariF8BeneathSlideShowScreen from '../BeneathSlideShowScreen/FerrariF8SlideShownScreen';
import AudiR8BeneathSlideShowScreen from '../BeneathSlideShowScreen/AudiR8BeneathSlideShownScreen';
import BMWZ4BeneathSlideShowScreen from '../BeneathSlideShowScreen/BMWZ4BeneathSlideShowScreen';
import JaguarFTypeBeneathSlideShowScreen from '../BeneathSlideShowScreen/JaguarFTypeBeneathSlideShowScreen';
import LexusLCBeneathSlideShowScreen from '../BeneathSlideShowScreen/LexusLCBeneathSlideShowScreen';
import CrossOverScreen from '../StackScreen/CrossOverCarsScreen';
import KiaSoulBeneathSlideShowScreen from '../BeneathSlideShowScreen/KiaSoulBeneathSlideShowScreen';
import MazdaCX5BeneathSlideShowScreen from '../BeneathSlideShowScreen/MazdaCX5BeneathSlideShowScreen';
import HyundaiTucsonBeneathSlideShowScreen from '../BeneathSlideShowScreen/HyundaiTucsonBeneathSlideShowScreen';
import ChevroletTraverseBeneathSlideShowScreen from '../BeneathSlideShowScreen/ChevroletTtaverseBeneathSlideShowScreen';
import BuickEnclaveBeneathSlideShowScreen from '../BeneathSlideShowScreen/BuickEnclaveBeneathSlideShowScreen';
import FordBroncoBeneathSlideShowScreen from '../BeneathSlideShowScreen/FordBroncoBeneathSlideShowScreen';
import VansCars from '../StackScreen/VansCarsScreen';
import ToyotaSiennaBeneathSlideShowScreen from '../BeneathSlideShowScreen/ToyoytaSiennaBeneathSlideShowScreen';
import FordTransitBeneathSlideShowScreen from '../BeneathSlideShowScreen/FordTransitBeneathSlideShowScreen';
import KiaCarnivalBeneathSlideShowScreen from '../BeneathSlideShowScreen/KiaCarnivalBeneathSlideSHOWScreen';
import HondaOdysseyBeneathSlideShowScreen from '../BeneathSlideShowScreen/HondaOdysseyBeneathSlideShowScreen';
import FordFiestaBeneathSlideShowScreen from '../BeneathSlideShowScreen/FordFiestaBeneathSlideShowScreen';
import SprinterBeneathSlideShowScreen from '../BeneathSlideShowScreen/SprinterBeneathSlideShowScreen';
import ElectricCarsScreen from '../StackScreen/ElectricCarsScreen';
import HyundaiIoniq6BeneathSlideShowScreen from '../BeneathSlideShowScreen/HyundaiIoniq6BeneathSlideShowScreen';
import BMWi4BeneathSlideShowScreen from '../BeneathSlideShowScreen/BMWi4BeneathSlideShowScreen';
import Polestar2BeneathSlideShowScreen from '../BeneathSlideShowScreen/Polestar2BeneathSlideShowScreen';
import TelsaModel3BeneathSlideShowScreen from '../BeneathSlideShowScreen/TelsaModel3BeneathSlideShowScreen';
import VolkswagenID7BeneathSlideShowScreen from '../BeneathSlideShowScreen/WolkwagenBeneathSlideShowScreen';
import NissanLeafBeneathSlideShowScreen from '../BeneathSlideShowScreen/NissanLeafSlideShowScreen';
import Convertible from '../StackScreen/ConvertibleCarsScreen';
import CamaroZL1BeneathSlideShowScreen from '../BeneathSlideShowScreen/CamaroZL1BeneathSlideShowScreen';
import FordMustangBeneathSlideShowScreen from '../BeneathSlideShowScreen/FordMustangBeneathSlideShowScreen';
import MaxdaMX5SlideShowBeneathSlideShowScreen from '../BeneathSlideShowScreen/MazdaMX5BeneathSlideShowScreen';
import AMGC63BeneathSlideShowScreen from '../BeneathSlideShowScreen/AMGC63BeneathSlideShowScreen';
import PorscheBoxsterBeneathSlideShowScreen from '../BeneathSlideShowScreen/PorscheBoxterBeneathSlideShowScreen';
import MiniBeneathSlideShowScreen from '../BeneathSlideShowScreen/MiniBeneathSlideShowScreen';
import ATVCars from '../StackScreen/AtvCarsScreen';
import CommanderBeneathSlideShowScreen from '../BeneathSlideShowScreen/CommanderBeneathSlideShowScreen';
import DefenderBeneathSlideShowScreen from '../BeneathSlideShowScreen/DefenderSlideShowScreen';
import MaverickSportBeneathSlideShowScreen from '../BeneathSlideShowScreen/MaverICKSportBeneathSlideShowScreen';
import MaverickX3BeneathSlideShowScreen from '../BeneathSlideShowScreen/MaverickX3SlideShowScreen';
import MaverickTrailBeneathSlideShowScreen from '../BeneathSlideShowScreen/MaverickTrailSlideShowScreen';
import MaverickRBeneathSlideShowScreen from '../BeneathSlideShowScreen/MaverickRBeneathSlideShowScreen';
import PaymentScreen from '../PaymentSuccess/PaymentScreen';

const Stack = createStackNavigator();
export default function MyStack() {
  return (
    <Stack.Navigator
     screenOptions={{headerShown: false}}>
      <Stack.Screen name="Ansu Car Rental" component={FirstScreen}  />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Home" component={AvailableCars} />
      <Stack.Screen name="SUV" component={SUVCars} />
      <Stack.Screen name="Wagon" component={Wagon} />
      <Stack.Screen name="Coupe" component={CoupeCarss} />
      <Stack.Screen name="Audi Q8" component={AudiQ8BeneathSlideShowScreen} />
      <Stack.Screen name="Cadillac Escalade" component={CadillacEscaladeBeneathSlideShowScreen} />
      <Stack.Screen name="Jeep Wrangler" component={JeepWranglerBeneathSlideShowScreen} /> 
      <Stack.Screen name="G Wagon" component={GWagonBeneathSlideShowScreen} /> 
      <Stack.Screen name="Porsche Cayenne" component={PorscheCayenneBeneathSlideShowScreen} /> 
      <Stack.Screen name="Ford Explorer" component={FordExplorerBeneathSlideShowScreen} /> 
      <Stack.Screen name="Bentley GT" component={BentleyGTBeneathSlideShowScreen} />  
      <Stack.Screen name="Audi TT" component={AudiTTBeneathSlideShowScreen} />  
      <Stack.Screen name="Toyota GT86" component={ToyotaGT86BeneathSlideShowScreen} />  
      <Stack.Screen name="Subaru BRZ" component={SubaruBRZBeneathSlideShowScreen} />  
      <Stack.Screen name="Chevy" component={ChevyCorvetteBeneathSlideShowScreen} /> 
      <Stack.Screen name="BMW 8 Series" component={BMW8SeriesBeneathSlideShowScreen} /> 
      <Stack.Screen name="Audi A6" component={AudiA6BeneathSlideShowScreen} /> 
      <Stack.Screen name="Subaru Outback" component={SubaruOutBackBeneathSlideShowScreen} /> 
      <Stack.Screen name="Volvo V60" component={VolvoV60BeneathSlideShowScreen} /> 
      <Stack.Screen name="Audi RS6" component={AudiRS6BeneathSlideShowScreen} />
      <Stack.Screen name="Volvo V90" component={VolvoV90BeneathSlideShowScreen} />
      <Stack.Screen name="E-Class Wagon" component={ECLASSWagonBeneathSlideShowScreen} />
      <Stack.Screen name="Sedan" component={SedanCars} />
      <Stack.Screen name="Honda Civic" component={HondaCivicBeneathSlideShowScreen} />
      <Stack.Screen name="Kia Forte" component={KiaForteBeneathSlideShowScreen} />
      <Stack.Screen name="Hyundai Elantra" component={HyundaiElantraBeneathSlideShowScreen} />
      <Stack.Screen name="Toyota Corolla" component={ToyotaCorollaBeneathSlideShowScreen} />
      <Stack.Screen name="Nissan Sentra" component={NissanSentraBeneathSlideShowScreen} />
      <Stack.Screen name="BMW 2 Series Gran" component={BMW2SeriesGranBeneathSlideShowScreen} />
      <Stack.Screen name="HatchBack" component={HatchBack} />
      <Stack.Screen name="Kia Ceed" component={KiaCeedBeneathSlideShowScreen} />
      <Stack.Screen name="Dacia Sandero" component={DaciaSanderoBeneathSlideShowScreen} />
      <Stack.Screen name="Volkswagen Golf" component={VolkswagenGolfBeneathSlideShowScreen} />
      <Stack.Screen name="Seat Leon" component={SeatLeonBeneathSlideShowScreen} />
      <Stack.Screen name="Vauxhall Astra" component={VauxhallAstraBeneathSlideShowScreen} />
      <Stack.Screen name="PickUp" component={PickUpCars} />
      <Stack.Screen name="GMC Canyon" component={GMCCanyonBeneathSlideShowScreen} />
      <Stack.Screen name="Jeep Gladiator" component={JeepGladiatorBeneathSlideShowScreen} />
      <Stack.Screen name="Honda Rigeline" component={HondaRigelineBeneathSlideShowScreen} />
      <Stack.Screen name="Ford Ranger" component={FordRangerBeneathSlideShowScreen} />
      <Stack.Screen name="Nissan Titan" component={NissanTitanBeneathSlideShowScreen} />
      <Stack.Screen name="Toyota Tundra" component={ToyotaTundraBeneathSlideShowScreen} />
      <Stack.Screen name="Sport" component={SportCars} />
      <Stack.Screen name="Porsche 911" component={Porsche911BeneathSlideShowScreen} />
      <Stack.Screen name="Ferrari F8" component={FerrariF8BeneathSlideShowScreen} />
      <Stack.Screen name="Audi R8" component={AudiR8BeneathSlideShowScreen} />
      <Stack.Screen name="BMW Z4" component={BMWZ4BeneathSlideShowScreen} />
      <Stack.Screen name="Jaguar F-Type" component={JaguarFTypeBeneathSlideShowScreen} />
      <Stack.Screen name="Lexus LC" component={LexusLCBeneathSlideShowScreen} />
      <Stack.Screen name="CrossOver" component={CrossOverScreen} />
      <Stack.Screen name="Kia Soul" component={KiaSoulBeneathSlideShowScreen} />
      <Stack.Screen name="Mazda CX-5" component={MazdaCX5BeneathSlideShowScreen} />
      <Stack.Screen name="Hyundai Tucson" component={HyundaiTucsonBeneathSlideShowScreen} />
      <Stack.Screen name="Chevrolet Traverse" component={ChevroletTraverseBeneathSlideShowScreen} />
      <Stack.Screen name="Buick Enclave" component={BuickEnclaveBeneathSlideShowScreen} />
      <Stack.Screen name="Ford Bronco" component={FordBroncoBeneathSlideShowScreen} />
      <Stack.Screen name="Van" component={VansCars} />
      <Stack.Screen name="Toyota Sienna" component={ToyotaSiennaBeneathSlideShowScreen} />
      <Stack.Screen name="Ford Transit" component={FordTransitBeneathSlideShowScreen} />
      <Stack.Screen name="Kia Carnival" component={KiaCarnivalBeneathSlideShowScreen} />
      <Stack.Screen name="Honda Odyssey" component={HondaOdysseyBeneathSlideShowScreen} />
      <Stack.Screen name="Ford Fiesta" component={FordFiestaBeneathSlideShowScreen} />
      <Stack.Screen name="Sprinter" component={SprinterBeneathSlideShowScreen} />
      <Stack.Screen name="Electric" component={ElectricCarsScreen} />
      <Stack.Screen name="Hyundai Ioniq 6" component={HyundaiIoniq6BeneathSlideShowScreen} />
      <Stack.Screen name="BMW i4" component={BMWi4BeneathSlideShowScreen} />
      <Stack.Screen name="Polestar 2" component={Polestar2BeneathSlideShowScreen} />
      <Stack.Screen name="Telsa Model 3" component={TelsaModel3BeneathSlideShowScreen} />
      <Stack.Screen name="Volkswagen ID.7" component={VolkswagenID7BeneathSlideShowScreen} />
      <Stack.Screen name="Nissan Leaf" component={NissanLeafBeneathSlideShowScreen} />
      <Stack.Screen name="Convertible" component={Convertible} />
      <Stack.Screen name="Camaro ZL-1" component={CamaroZL1BeneathSlideShowScreen} />
      <Stack.Screen name="Ford Mustang" component={FordMustangBeneathSlideShowScreen} />
      <Stack.Screen name="Mazda MX-5" component={MaxdaMX5SlideShowBeneathSlideShowScreen} />
      <Stack.Screen name="AMG C63" component={AMGC63BeneathSlideShowScreen} />
      <Stack.Screen name="Porsche Boxster" component={PorscheBoxsterBeneathSlideShowScreen} />
      <Stack.Screen name="Mini" component={MiniBeneathSlideShowScreen} />
      <Stack.Screen name="ATV" component={ATVCars} />
      <Stack.Screen name="Commander" component={CommanderBeneathSlideShowScreen} />
      <Stack.Screen name="Defender" component={DefenderBeneathSlideShowScreen} />
      <Stack.Screen name="Maverick Sport" component={MaverickSportBeneathSlideShowScreen} />
      <Stack.Screen name="Maverick X3" component={MaverickX3BeneathSlideShowScreen} />
      <Stack.Screen name="Maverick Trail" component={MaverickTrailBeneathSlideShowScreen} />
      <Stack.Screen name="Maverick R" component={MaverickRBeneathSlideShowScreen} />
      <Stack.Screen name="Payment" component={CardsInformation} /> 
      <Stack.Screen name="Payment Result" component={PaymentScreen} /> 
    </Stack.Navigator>
  );
}

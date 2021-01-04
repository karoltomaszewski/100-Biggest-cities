import React, {Component} from 'react';
import './App.css';

import Card from './Components/Card';
import ModeSwitcher from './Components/ModeSwitcher';
import Filter from './Components/Filter';
import CityNotFound from './Components/CityNotFound';
import GithubMark from './Components/GithubMark';

const cities = [
    {city: " Tokyo",	population: "37,843,000",	country: " Japan"},
    {city: " Jakarta",	population: "30,539,000",	country: " Indonesia"},
    {city: " Delhi",	population: "24,998,000",	country: " India"},
    {city: " Manila",	population: "24,123,000",	country: " Philippines"},
    {city: " Seoul",	population: "23,480,000",	country: " South Korea"},
    {city: " Shanghai",	population: "23,416,000",	country: " China"},
    {city: " Karachi",	population: "22,123,000",	country: " Pakistan"},
    {city: " Beijing",	population: "21,009,000",	country: " China"},
    {city: " New York",	population: "20,630,000",	country: " United States"},
    {city: " Guangzhou-Foshan",	population: "20,597,000",	country: " China"},
    {city: " Sao Paulo",	population: "20,365,000",	country: " Brazil"},
    {city: " Mexico City",	population: "20,063,000",	country: " Mexico"},
    {city: " Mumbai",	population: "17,712,000",	country: " India"},
    {city: " Osaka-Kobe-Kyoto",	population: "17,444,000",	country: " Japan"},
    {city: " Moscow",	population: "16,170,000",	country: " Russia"},
    {city: " Dhaka",	population: "15,669,000",	country: " Bangladesh"},
    {city: " Cairo",	population: "15,600,000",	country: " Egypt"},
    {city: " Los Angeles",	population: "15,058,000",	country: " United States"},
    {city: " Bangkok",	population: "14,998,000",	country: " Thailand"},
    {city: " Kolkata",	population: "14,667,000",	country: " India"},
    {city: " Buenos Aires",	population: "14,122,000",	country: " Argentina"},
    {city: " Tehran",	population: "13,532,000",	country: " Iran"},
    {city: " Istanbul",	population: "13,287,000",	country: " Turkey"},
    {city: " Lagos",	population: "13,123,000",	country: " Nigeria"},
    {city: " Shenzhen",	population: "12,084,000",	country: " China"},
    {city: " Rio de Janeiro",	population: "11,727,000",	country: " Brazil"},
    {city: " Kinshasa",	population: "11,587,000",	country: " Congo (Dem. Rep.)"},
    {city: " Tianjin",	population: "10,920,000",	country: " China"},
    {city: " Paris",	population: "10,858,000",	country: " France"},
    {city: " Lima",	population: "10,750,000",	country: " Peru"},
    {city: " Chengdu",	population: "10,376,000",	country: " China"},
    {city: " London",	population: "10,236,000",	country: " United Kingdom"},
    {city: " Nagoya",	population: "10,177,000",	country: " Japan"},
    {city: " Lahore",	population: "10,052,000",	country: " Pakistan"},
    {city: " Bangalore",	population: "9,807,000",	country: " India"},
    {city: " Chennai",	population: "9,714,000",	country: " India"},
    {city: " Chicago",	population: "9,156,000",	country: " United States"},
    {city: " Bogota",	population: "8,991,000",	country: " Colombia"},
    {city: " Ho Chi Minh City",	population: "8,957,000",	country: " Vietnam"},
    {city: " Hyderabad",	population: "8,754,000",	country: " India"},
    {city: " Dongguan",	population: "8,442,000",	country: " China"},
    {city: " Johannesburg-East Rand",	population: "8,432,000",	country: " South Africa"},
    {city: " Wuhan",	population: "7,509,000",	country: " China"},
    {city: " Taipei",	population: "7,438,000",	country: " China: Taiwan"},
    {city: " Hangzhou",	population: "7,275,000",	country: " China"},
    {city: " Hong Kong",	population: "7,246,000",	country: " China: Hong Kong SAR"},
    {city: " Chongqing",	population: "7,217,000",	country: " China"},
    {city: " Ahmadabad",	population: "7,186,000",	country: " India"},
    {city: " Kuala Lumpur",	population: "7,088,000",	country: " Malaysia"},
    {city: " Quanzhou",	population: "6,710,000",	country: " China"},
    {city: " Essen-Dusseldorf",	population: "6,679,000",	country: " Germany"},
    {city: " Baghdad",	population: "6,625,000",	country: " Iraq"},
    {city: " Toronto",	population: "6,456,000",	country: " Canada"},
    {city: " Santiago",	population: "6,225,000",	country: " Chile"},
    {city: " Dallas-Fort Worth",	population: "6,174,000",	country: " United States"},
    {city: " Madrid",	population: "6,171,000",	country: " Spain"},
    {city: " Nanjing",	population: "6,155,000",	country: " China"},
    {city: " Shenyang",	population: "6,078,000",	country: " China"},
    {city: " Xi'an",	population: "5,977,000",	country: " China"},
    {city: " San Francisco-San Jose",	population: "5,929,000",	country: " United States"},
    {city: " Luanda",	population: "5,899,000",	country: " Angola"},
    {city: " Qingdao",	population: "5,816,000",	country: " China"},
    {city: " Houston",	population: "5,764,000",	country: " United States"},
    {city: " Miami",	population: "5,764,000",	country: " United States"},
    {city: " Bandung",	population: "5,695,000",	country: " Indonesia"},
    {city: " Riyadh",	population: "5,666,000",	country: " Saudi Arabia"},
    {city: " Pune",	population: "5,631,000",	country: " India"},
    {city: " Singapore",	population: "5,624,000",	country: " Singapore"},
    {city: " Philadelphia",	population: "5,570,000",	country: " United States"},
    {city: " Surat",	population: "5,447,000",	country: " India"},
    {city: " Milan",	population: "5,257,000",	country: " Italy"},
    {city: " Suzhou",	population: "5,246,000",	country: " China"},
    {city: " St. Petersburg",	population: "5,126,000",	country: " Russia"},
    {city: " Khartoum",	population: "5,125,000",	country: " Sudan"},
    {city: " Atlanta",	population: "5,015,000",	country: " United States"},
    {city: " Zhengzhou",	population: "4,942,000",	country: " China"},
    {city: " Washington",	population: "4,889,000",	country: " United States"},
    {city: " Surabaya",	population: "4,881,000",	country: " Indonesia"},
    {city: " Harbin",	population: "4,815,000",	country: " China"},
    {city: " Abidjan",	population: "4,800,000",	country: " Ivory Coast"},
    {city: " Yangon",	population: "4,800,000",	country: " Myanmar"},
    {city: " Nairobi",	population: "4,738,000",	country: " Kenya"},
    {city: " Barcelona",	population: "4,693,000",	country: " Spain"},
    {city: " Alexandria",	population: "4,689,000",	country: " Egypt"},
    {city: " Kabul",	population: "4,635,000",	country: " Afghanistan"},
    {city: " Guadalajara",	population: "4,603,000",	country: " Mexico"},
    {city: " Ankara",	population: "4,538,000",	country: " Turkey"},
    {city: " Belo Horizonte",	population: "4,517,000",	country: " Brazil"},
    {city: " Boston",	population: "4,478,000",	country: " United States"},
    {city: " Xiamen",	population: "4,420,000",	country: " China"},
    {city: " Kuwait",	population: "4,283,000",	country: " Kuwait"},
    {city: " Dar es Salaam",	population: "4,219,000",	country: " Tanzania"},
    {city: " Phoenix",	population: "4,194,000",	country: " United States"},
    {city: " Dalian",	population: "4,183,000",	country: " China"},
    {city: " Accra",	population: "4,145,000",	country: " Ghana"},
    {city: " Monterrey",	population: "4,083,000",	country: " Mexico"},
    {city: " Berlin",	population: "4,069,000",	country: " Germany"},
    {city: " Sydney",	population: "4,036,000",	country: " Australia"},
    {city: " Fuzhou",	population: "3,962,000",	country: " China"},
    {city: " Medan",	population: "3,942,000",	country: " Indonesia"}
]


class App extends Component{
    state = {
        mode: "light_mode",
        filterText: ""
    };

    switchModeHandler = () => this.state.mode === "light_mode" ? this.setState({mode: "dark_mode"}) : this.setState({mode: "light_mode"});
    
    filterOnChangeHandler = event => this.setState({filterText: event.target.value}); 

    render(){
        const filteredCities = cities.filter(city => city.city.toLowerCase().includes(this.state.filterText.toLowerCase()));

        let citiesToDisplay = <CityNotFound />;

        if(filteredCities.length !== 0){
            citiesToDisplay = filteredCities.map(city => <Card city={city.city} country={city.country} population={city.population}/>);
        }

        return(
            <div className={"App " + this.state.mode}>
                <h1>100 biggest cities of the world</h1>
                <Filter filterText={this.state.filterText}  change={this.filterOnChangeHandler}/>
                <ModeSwitcher switchModeHandler={this.switchModeHandler} currentMode={this.state.mode}/>
                <div className={"Cities"}>
                {
                    citiesToDisplay
                }
                
                </div>
                <GithubMark mode={this.state.mode}/>
            </div>
        );
    }
}

export default App;
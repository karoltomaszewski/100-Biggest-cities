import React, {Component} from 'react';
import './App.css';

import Card from './Components/Card';
import ModeSwitcher from './Components/ModeSwitcher';
import Filter from './Components/Filter';
import CityNotFound from './Components/CityNotFound';
import GithubMark from './Components/GithubMark';

const cities = [
    {id: "1", city: " Tokyo",	population: "37,843,000",	country: " Japan"},
    {id: "2", city: " Jakarta",	population: "30,539,000",	country: " Indonesia"},
    {id: "3", city: " Delhi",	population: "24,998,000",	country: " India"},
    {id: "4", city: " Manila",	population: "24,123,000",	country: " Philippines"},
    {id: "5", city: " Seoul",	population: "23,480,000",	country: " South Korea"},
    {id: "6", city: " Shanghai",	population: "23,416,000",	country: " China"},
    {id: "7", city: " Karachi",	population: "22,123,000",	country: " Pakistan"},
    {id: "8", city: " Beijing",	population: "21,009,000",	country: " China"},
    {id: "9", city: " New York",	population: "20,630,000",	country: " United States"},
    {id: "10", city: " Guangzhou-Foshan",	population: "20,597,000",	country: " China"},
    {id: "11", city: " Sao Paulo",	population: "20,365,000",	country: " Brazil"},
    {id: "12", city: " Mexico City",	population: "20,063,000",	country: " Mexico"},
    {id: "13", city: " Mumbai",	population: "17,712,000",	country: " India"},
    {id: "14", city: " Osaka-Kobe-Kyoto",	population: "17,444,000",	country: " Japan"},
    {id: "15", city: " Moscow",	population: "16,170,000",	country: " Russia"},
    {id: "16", city: " Dhaka",	population: "15,669,000",	country: " Bangladesh"},
    {id: "17", city: " Cairo",	population: "15,600,000",	country: " Egypt"},
    {id: "18", city: " Los Angeles",	population: "15,058,000",	country: " United States"},
    {id: "19", city: " Bangkok",	population: "14,998,000",	country: " Thailand"},
    {id: "20", city: " Kolkata",	population: "14,667,000",	country: " India"},
    {id: "21", city: " Buenos Aires",	population: "14,122,000",	country: " Argentina"},
    {id: "22", city: " Tehran",	population: "13,532,000",	country: " Iran"},
    {id: "23", city: " Istanbul",	population: "13,287,000",	country: " Turkey"},
    {id: "24", city: " Lagos",	population: "13,123,000",	country: " Nigeria"},
    {id: "25", city: " Shenzhen",	population: "12,084,000",	country: " China"},
    {id: "26", city: " Rio de Janeiro",	population: "11,727,000",	country: " Brazil"},
    {id: "27", city: " Kinshasa",	population: "11,587,000",	country: " Congo (Dem. Rep.)"},
    {id: "28", city: " Tianjin",	population: "10,920,000",	country: " China"},
    {id: "29", city: " Paris",	population: "10,858,000",	country: " France"},
    {id: "30", city: " Lima",	population: "10,750,000",	country: " Peru"},
    {id: "31", city: " Chengdu",	population: "10,376,000",	country: " China"},
    {id: "32", city: " London",	population: "10,236,000",	country: " United Kingdom"},
    {id: "33", city: " Nagoya",	population: "10,177,000",	country: " Japan"},
    {id: "34", city: " Lahore",	population: "10,052,000",	country: " Pakistan"},
    {id: "35", city: " Bangalore",	population: "9,807,000",	country: " India"},
    {id: "36", city: " Chennai",	population: "9,714,000",	country: " India"},
    {id: "37", city: " Chicago",	population: "9,156,000",	country: " United States"},
    {id: "38", city: " Bogota",	population: "8,991,000",	country: " Colombia"},
    {id: "39", city: " Ho Chi Minh City",	population: "8,957,000",	country: " Vietnam"},
    {id: "40", city: " Hyderabad",	population: "8,754,000",	country: " India"},
    {id: "41", city: " Dongguan",	population: "8,442,000",	country: " China"},
    {id: "42", city: " Johannesburg-East Rand",	population: "8,432,000",	country: " South Africa"},
    {id: "43", city: " Wuhan",	population: "7,509,000",	country: " China"},
    {id: "44", city: " Taipei",	population: "7,438,000",	country: " China: Taiwan"},
    {id: "45", city: " Hangzhou",	population: "7,275,000",	country: " China"},
    {id: "46", city: " Hong Kong",	population: "7,246,000",	country: " China: Hong Kong SAR"},
    {id: "47", city: " Chongqing",	population: "7,217,000",	country: " China"},
    {id: "48", city: " Ahmadabad",	population: "7,186,000",	country: " India"},
    {id: "49", city: " Kuala Lumpur",	population: "7,088,000",	country: " Malaysia"},
    {id: "50", city: " Quanzhou",	population: "6,710,000",	country: " China"},
    {id: "51", city: " Essen-Dusseldorf",	population: "6,679,000",	country: " Germany"},
    {id: "52", city: " Baghdad",	population: "6,625,000",	country: " Iraq"},
    {id: "53", city: " Toronto",	population: "6,456,000",	country: " Canada"},
    {id: "54", city: " Santiago",	population: "6,225,000",	country: " Chile"},
    {id: "55", city: " Dallas-Fort Worth",	population: "6,174,000",	country: " United States"},
    {id: "56", city: " Madrid",	population: "6,171,000",	country: " Spain"},
    {id: "57", city: " Nanjing",	population: "6,155,000",	country: " China"},
    {id: "58", city: " Shenyang",	population: "6,078,000",	country: " China"},
    {id: "59", city: " Xi'an",	population: "5,977,000",	country: " China"},
    {id: "60", city: " San Francisco-San Jose",	population: "5,929,000",	country: " United States"},
    {id: "61", city: " Luanda",	population: "5,899,000",	country: " Angola"},
    {id: "62", city: " Qingdao",	population: "5,816,000",	country: " China"},
    {id: "63", city: " Houston",	population: "5,764,000",	country: " United States"},
    {id: "64", city: " Miami",	population: "5,764,000",	country: " United States"},
    {id: "65", city: " Bandung",	population: "5,695,000",	country: " Indonesia"},
    {id: "66", city: " Riyadh",	population: "5,666,000",	country: " Saudi Arabia"},
    {id: "67", city: " Pune",	population: "5,631,000",	country: " India"},
    {id: "68", city: " Singapore",	population: "5,624,000",	country: " Singapore"},
    {id: "69", city: " Philadelphia",	population: "5,570,000",	country: " United States"},
    {id: "70", city: " Surat",	population: "5,447,000",	country: " India"},
    {id: "71", city: " Milan",	population: "5,257,000",	country: " Italy"},
    {id: "72", city: " Suzhou",	population: "5,246,000",	country: " China"},
    {id: "73", city: " St. Petersburg",	population: "5,126,000",	country: " Russia"},
    {id: "74", city: " Khartoum",	population: "5,125,000",	country: " Sudan"},
    {id: "75", city: " Atlanta",	population: "5,015,000",	country: " United States"},
    {id: "76", city: " Zhengzhou",	population: "4,942,000",	country: " China"},
    {id: "77", city: " Washington",	population: "4,889,000",	country: " United States"},
    {id: "78", city: " Surabaya",	population: "4,881,000",	country: " Indonesia"},
    {id: "79", city: " Harbin",	population: "4,815,000",	country: " China"},
    {id: "80", city: " Abidjan",	population: "4,800,000",	country: " Ivory Coast"},
    {id: "81", city: " Yangon",	population: "4,800,000",	country: " Myanmar"},
    {id: "82", city: " Nairobi",	population: "4,738,000",	country: " Kenya"},
    {id: "83", city: " Barcelona",	population: "4,693,000",	country: " Spain"},
    {id: "84", city: " Alexandria",	population: "4,689,000",	country: " Egypt"},
    {id: "85", city: " Kabul",	population: "4,635,000",	country: " Afghanistan"},
    {id: "86", city: " Guadalajara",	population: "4,603,000",	country: " Mexico"},
    {id: "87", city: " Ankara",	population: "4,538,000",	country: " Turkey"},
    {id: "88", city: " Belo Horizonte",	population: "4,517,000",	country: " Brazil"},
    {id: "89", city: " Boston",	population: "4,478,000",	country: " United States"},
    {id: "90", city: " Xiamen",	population: "4,420,000",	country: " China"},
    {id: "91", city: " Kuwait",	population: "4,283,000",	country: " Kuwait"},
    {id: "92", city: " Dar es Salaam",	population: "4,219,000",	country: " Tanzania"},
    {id: "93", city: " Phoenix",	population: "4,194,000",	country: " United States"},
    {id: "94", city: " Dalian",	population: "4,183,000",	country: " China"},
    {id: "95", city: " Accra",	population: "4,145,000",	country: " Ghana"},
    {id: "96", city: " Monterrey",	population: "4,083,000",	country: " Mexico"},
    {id: "97", city: " Berlin",	population: "4,069,000",	country: " Germany"},
    {id: "98", city: " Sydney",	population: "4,036,000",	country: " Australia"},
    {id: "99", city: " Fuzhou",	population: "3,962,000",	country: " China"},
    {id: "100", city: " Medan",	population: "3,942,000",	country: " Indonesia"}
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
            citiesToDisplay = filteredCities.map(city => <Card city={city.city} country={city.country} population={city.population} cardId={city.id} key={city.id} />);
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
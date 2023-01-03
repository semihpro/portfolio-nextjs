import Image from 'next/image'
const page=({data})=>{
    return <>
        <h1>Country name{data.name.common}</h1>
        <Image
        src={data.flags.png}
        width={500}
        height={500}
        alt={'this is and example project'}
        />
    </>
}
export default page;

export async function getServerSideProps({params}) {
    // Fetch data from external API
    console.log("path information",params)
    console.log(JSON.stringify(params))
    const res = await fetch(`https://restcountries.com/v3.1/name/${params.name}?fullText=true`)
    const data = await res.json();
    console.log(data);
    return {props: {data:data[0]}}
}

// Example data
const flagData = [{"name":{"common":"Turkey","official":"Republic of Turkey","nativeName":{"tur":{"official":"Türkiye Cumhuriyeti","common":"Türkiye"}}},"tld":[".tr"],"cca2":"TR","ccn3":"792","cca3":"TUR","cioc":"TUR","independent":true,"status":"officially-assigned","unMember":true,"currencies":{"TRY":{"name":"Turkish lira","symbol":"₺"}},"idd":{"root":"+9","suffixes":["0"]},"capital":["Ankara"],"altSpellings":["TR","Turkiye","Republic of Turkey","Türkiye Cumhuriyeti"],"region":"Asia","subregion":"Western Asia","languages":{"tur":"Turkish"},"translations":{"ara":{"official":"الجمهورية التركية","common":"تركيا"},"bre":{"official":"Republik Turkia","common":"Turkia"},"ces":{"official":"Turecká republika","common":"Turecko"},"cym":{"official":"Republic of Turkey","common":"Turkey"},"deu":{"official":"Republik Türkei","common":"Türkei"},"est":{"official":"Türgi Vabariik","common":"Türgi"},"fin":{"official":"Turkin tasavalta","common":"Turkki"},"fra":{"official":"République de Turquie","common":"Turquie"},"hrv":{"official":"Republika Turska","common":"Turska"},"hun":{"official":"Török Köztársaság","common":"Törökország"},"ita":{"official":"Repubblica di Turchia","common":"Turchia"},"jpn":{"official":"トルコ共和国","common":"トルコ"},"kor":{"official":"터키 공화국","common":"터키"},"nld":{"official":"Republiek Turkije","common":"Turkije"},"per":{"official":"جمهوری ترکیه","common":"ترکیه"},"pol":{"official":"Republika Turcji","common":"Turcja"},"por":{"official":"República da Turquia","common":"Turquia"},"rus":{"official":"Республика Турции","common":"Турция"},"slk":{"official":"Turecká republika","common":"Turecko"},"spa":{"official":"República de Turquía","common":"Turquía"},"swe":{"official":"Republiken Turkiet","common":"Turkiet"},"tur":{"official":"Türkiye Cumhuriyeti","common":"Türkiye"},"urd":{"official":"جمہوریہ ترکی","common":"ترکی"},"zho":{"official":"土耳其共和国","common":"土耳其"}},"latlng":[39.0,35.0],"landlocked":false,"borders":["ARM","AZE","BGR","GEO","GRC","IRN","IRQ","SYR"],"area":783562.0,"demonyms":{"eng":{"f":"Turkish","m":"Turkish"},"fra":{"f":"Turque","m":"Turc"}},"flag":"\uD83C\uDDF9\uD83C\uDDF7","maps":{"googleMaps":"https://goo.gl/maps/dXFFraiUDfcB6Quk6","openStreetMaps":"https://www.openstreetmap.org/relation/174737"},"population":84339067,"gini":{"2019":41.9},"fifa":"TUR","car":{"signs":["TR"],"side":"right"},"timezones":["UTC+03:00"],"continents":["Asia"],"flags":{"png":"https://flagcdn.com/w320/tr.png","svg":"https://flagcdn.com/tr.svg"},"coatOfArms":{"png":"https://mainfacts.com/media/images/coats_of_arms/tr.png","svg":"https://mainfacts.com/media/images/coats_of_arms/tr.svg"},"startOfWeek":"monday","capitalInfo":{"latlng":[39.93,32.87]},"postalCode":{"format":"#####","regex":"^(\\d{5})$"}}]
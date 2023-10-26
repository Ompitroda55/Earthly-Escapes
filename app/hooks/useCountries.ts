import countries from 'world-countries';


// const formattedCountries = countries.map((country) => ({
//   value: country.cca2,
//   label: country.name.common,
//   flag: country.flag,
//   latlng: country.latlng,
//   region: country.region,
// }));

const formattedCountries = [
  {
    value: 'IN',
    label: 'India',
    flag: '🇮🇳',
    latlng: [20.5937, 78.9629],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: ' Jim Corbett National Park',
    flag: '🇮🇳',
    latlng: [29.5240, 78.7718],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Bandipur National Park',
    flag: '🇮🇳',
    latlng: [11.6896, 76.6518],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Munnar, Kerala',
    flag: '🇮🇳',
    latlng:  [10.0889, 77.0595],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Darjeeling, West Bengal',
    flag: '🇮🇳',
    latlng: [27.0360, 88.2627],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Nagaland',
    flag: '🇮🇳',
    latlng: [26.1584, 94.5624],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Andaman and Nicobar Islands',
    flag: '🇮🇳',
    latlng: [11.7401, 92.6586],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Wayanad, Kerala',
    flag: '🇮🇳',
    latlng:  [11.6852, 76.1307],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Coorg, Karnataka',
    flag: '🇮🇳',
    latlng: [12.3375, 75.8069],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Rishuikesh, Uttarakhand',
    flag: '🇮🇳',
    latlng: [30.0862, 78.2676],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Kerala',
    flag: '🇮🇳',
    latlng: [10.8505, 76.2711],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Sundarbans, West Bengal',
    flag: '🇮🇳',
    latlng: [21.9497, 88.8947],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Bhitarkanika, Odisha',
    flag: '🇮🇳',
    latlng: [20.6573, 86.8037],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Manali, Himachal Pradesh',
    flag: '🇮🇳',
    latlng: [32.2396, 77.1887],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Shimla, Himachal Pradesh',
    flag: '🇮🇳',
    latlng: [31.1048, 77.1734],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Kerala',
    flag: '🇮🇳',
    latlng: [10.8505, 76.2711],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Karnataka',
    flag: '🇮🇳',
    latlng: [15.3173, 75.7139],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Sikkim',
    flag: '🇮🇳',
    latlng: [27.5330, 88.6180],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Punjab',
    flag: '🇮🇳',
    latlng: [30.9010, 75.8573],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Varanasi, Uttar Pradesh',
    flag: '🇮🇳',
    latlng: [25.3176, 82.9739],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Khajuraho, Madhya Pradesh',
    flag: '🇮🇳',
    latlng: [24.8526, 79.9227],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Jaisalmer, Rajasthan',
    flag: '🇮🇳',
    latlng: [26.9124, 70.9112],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Bikaner, Rajasthan',
    flag: '🇮🇳',
    latlng:  [28.0229, 73.3119],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Amritsar, Punjab',
    flag: '🇮🇳',
    latlng: [31.5497, 74.3436],
    region: 'Asia',
  },
  {
    value: 'IN',
    label: 'Ludhiana, Punjab',
    flag: '🇮🇳',
    latlng: [30.9002, 75.8573],
    region: 'Asia',
  },
  {
    value: 'Kutch, Gujarat',
    label: 'India',
    flag: '🇮🇳',
    latlng: [23.7336, 69.8608],
    region: 'Asia',
  },
  {
    value: 'Bhuj, Gujarat',
    label: 'India',
    flag: '🇮🇳',
    latlng: [23.2535, 69.6693],
    region: 'Asia',
  },
  {
    value: 'Kaza, Himachal Pradesh',
    label: 'India',
    flag: '🇮🇳',
    latlng: [32.2968, 78.0081],
    region: 'Asia',
  },  {
    value: 'Keylong, Himachal Pradesh',
    label: 'India',
    flag: '🇮🇳',
    latlng: [32.5733, 77.0090],
    region: 'Asia',
  },
  {
    value: 'Coimbatore, Tamil Nadu',
    label: 'India',
    flag: '🇮🇳',
    latlng: [11.0168, 76.9558],
    region: 'Asia',
  },{
    value: 'Udaipur, Rajasthan',
    label: 'India',
    flag: '🇮🇳',
    latlng: [24.5854, 73.7125],
    region: 'Asia',
  },
  

  // Add more custom countries as needed
];

const useCountries = () => {
  const getAll = () => formattedCountries;

  const getByValue = (value: string) => {
    return formattedCountries.find((item) => item.value === value);
  }

  return {
    getAll,
    getByValue
  }
};

export default useCountries;

const exampleData = [
  {
    value: "Sweden",
    key: "SE"
  },
  {
    value: "San Marino",
    key: "SM"
  },
  {
    value: "Mozambique",
    key: "MZ"
  },
  {
    value: "Equatorial Guinea",
    key: "GQ"
  },
  {
    value: "Lithuania",
    key: "LT"
  },
  {
    value: "Guam",
    key: "GU"
  },
  {
    value: "Cape Verde",
    key: "CV"
  },
  {
    value: "Sudan",
    key: "SD"
  },
  {
    value: "Guadeloupe",
    key: "GP"
  },
  {
    value: "Argentina",
    key: "AR"
  },
  {
    value: "Burundi",
    key: "BI"
  },
  {
    value: "Belarus",
    key: "BY"
  },
  {
    value: "Turks and Caicos Islands",
    key: "TC"
  },
  {
    value: "Brazil",
    key: "BR"
  },
  {
    value: "Bermuda",
    key: "BM"
  },
  {
    value: "Gabon",
    key: "GA"
  },
  {
    value: "Liberia",
    key: "LR"
  },
  {
    value: "Venezuela",
    key: "VE"
  },
  {
    value: "Samoa",
    key: "WS"
  },
  {
    value: "Barbados",
    key: "BB"
  },
  {
    value: "Cook Islands",
    key: "CK"
  },
  {
    value: "Mexico",
    key: "MX"
  },
  {
    value: "Cameroon",
    key: "CM"
  },
  {
    value: "Cayman Islands",
    key: "KY"
  },
  {
    value: "Myanmar",
    key: "MM"
  },
  {
    value: "Kuwait",
    key: "KW"
  },
  {
    value: "Aruba",
    key: "AW"
  },
  {
    value: "Spain",
    key: "ES"
  },
  {
    value: "Guatemala",
    key: "GT"
  },
  {
    value: "Benin",
    key: "BJ"
  },
  {
    value: "Cocos (Keeling) Islands",
    key: "CC"
  },
  {
    value: "Norway",
    key: "NO"
  },
  {
    value: "India",
    key: "IN"
  },
  {
    value: "Chad",
    key: "TD"
  },
  {
    value: "Syrian Arab Republic",
    key: "SY"
  },
  {
    value: "Thailand",
    key: "TH"
  },
  {
    value: "Uruguay",
    key: "UY"
  },
  {
    value: "Oman",
    key: "OM"
  },
  {
    value: "Kiribati",
    key: "KI"
  },
  {
    value: "Micronesia, Federated States of",
    key: "FM"
  },
  {
    value: "Swaziland",
    key: "SZ"
  },
  {
    value: "Saint Kitts and Nevis",
    key: "KN"
  },
  {
    value: "Cote D'Ivoire",
    key: "CI"
  },
  {
    value: "Guyana",
    key: "GY"
  },
  {
    value: "Algeria",
    key: "DZ"
  },
  {
    value: "Qatar",
    key: "QA"
  },
  {
    value: "British Indian Ocean Territory",
    key: "IO"
  },
  {
    value: "Dominican Republic",
    key: "DO"
  },
  {
    value: "Belgium",
    key: "BE"
  },
  {
    value: "Serbia and Montenegro",
    key: "CS"
  },
  {
    value: "Slovakia",
    key: "SK"
  },
  {
    value: "Turkmenistan",
    key: "TM"
  },
  {
    value: "Uganda",
    key: "UG"
  },
  {
    value: "South Georgia and the South Sandwich Islands",
    key: "GS"
  },
  {
    value: "Pitcairn",
    key: "PN"
  },
  {
    value: "Saint Vincent and the Grenadines",
    key: "VC"
  },
  {
    value: "Lebanon",
    key: "LB"
  },
  {
    value: "Morocco",
    key: "MA"
  },
  {
    value: "Madagascar",
    key: "MG"
  },
  {
    value: "Denmark",
    key: "DK"
  },
  {
    value: "Malawi",
    key: "MW"
  },
  {
    value: "Yemen",
    key: "YE"
  },
  {
    value: "American Samoa",
    key: "AS"
  },
  {
    value: "Sierra Leone",
    key: "SL"
  },
  {
    value: "Seychelles",
    key: "SC"
  },
  {
    value: "Mauritius",
    key: "MU"
  },
  {
    value: "El Salvador",
    key: "SV"
  },
  {
    value: "Kenya",
    key: "KE"
  },
  {
    value: "Botswana",
    key: "BW"
  },
  {
    value: "Antigua and Barbuda",
    key: "AG"
  },
  {
    value: "Korea, Democratic People'S Republic of",
    key: "KP"
  },
  {
    value: "Congo, The Democratic Republic of the",
    key: "CD"
  },
  {
    value: "Portugal",
    key: "PT"
  },
  {
    value: "Ethiopia",
    key: "ET"
  },
  {
    value: "Australia",
    key: "AU"
  },
  {
    value: "Sri Lanka",
    key: "LK"
  },
  {
    value: "Antarctica",
    key: "AQ"
  },
  {
    value: "Vanuatu",
    key: "VU"
  },
  {
    value: "Czech Republic",
    key: "CZ"
  },
  {
    value: "Maldives",
    key: "MV"
  },
  {
    value: "Peru",
    key: "PE"
  },
  {
    value: "Palau",
    key: "PW"
  },
  {
    value: "Jersey",
    key: "JE"
  },
  {
    value: "Nepal",
    key: "NP"
  },
  {
    value: "Iceland",
    key: "IS"
  },
  {
    value: "Costa Rica",
    key: "CR"
  },
  {
    value: "Paraguay",
    key: "PY"
  },
  {
    value: "Russian Federation",
    key: "RU"
  },
  {
    value: "Virgin Islands, U.S.",
    key: "VI"
  },
  {
    value: "Luxembourg",
    key: "LU"
  },
  {
    value: "Niue",
    key: "NU"
  },
  {
    value: "Grenada",
    key: "GD"
  },
  {
    value: "Tokelau",
    key: "TK"
  },
  {
    value: "Viet Nam",
    key: "VN"
  },
  {
    value: "Kazakhstan",
    key: "KZ"
  },
  {
    value: "Afghanistan",
    key: "AF"
  },
  {
    value: "Pakistan",
    key: "PK"
  },
  {
    value: "Uzbekistan",
    key: "UZ"
  },
  {
    value: "Palestinian Territory, Occupied",
    key: "PS"
  },
  {
    value: "Cambodia",
    key: "KH"
  },
  {
    value: "Djibouti",
    key: "DJ"
  },
  {
    value: "Bangladesh",
    key: "BD"
  },
  {
    value: "Indonesia",
    key: "ID"
  },
  {
    value: "Monaco",
    key: "MC"
  },
  {
    value: "Guernsey",
    key: "GG"
  },
  {
    value: "Mayotte",
    key: "YT"
  },
  {
    value: "Austria",
    key: "AT"
  },
  {
    value: "Wallis and Futuna",
    key: "WF"
  },
  {
    value: "Bulgaria",
    key: "BG"
  },
  {
    value: "Macao",
    key: "MO"
  },
  {
    value: "French Southern Territories",
    key: "TF"
  },
  {
    value: "Bolivia",
    key: "BO"
  },
  {
    value: "Albania",
    key: "AL"
  },
  {
    value: "United States",
    key: "US"
  },
  {
    value: "Taiwan, Province of China",
    key: "TW"
  },
  {
    value: "Greenland",
    key: "GL"
  },
  {
    value: "Jamaica",
    key: "JM"
  },
  {
    value: "Zimbabwe",
    key: "ZW"
  },
  {
    value: "Brunei Darussalam",
    key: "BN"
  },
  {
    value: "Estonia",
    key: "EE"
  },
  {
    value: "Poland",
    key: "PL"
  },
  {
    value: "Åland Islands",
    key: "AX"
  },
  {
    value: "Zambia",
    key: "ZM"
  },
  {
    value: "Solomon Islands",
    key: "SB"
  },
  {
    value: "Norfolk Island",
    key: "NF"
  },
  {
    value: "Faroe Islands",
    key: "FO"
  },
  {
    value: "Moldova, Republic of",
    key: "MD"
  },
  {
    value: "Tunisia",
    key: "TN"
  },
  {
    value: "Papua New Guinea",
    key: "PG"
  },
  {
    value: "France",
    key: "FR"
  },
  {
    value: "Bouvet Island",
    key: "BV"
  },
  {
    value: "Central African Republic",
    key: "CF"
  },
  {
    value: "Mongolia",
    key: "MN"
  },
  {
    value: "Netherlands Antilles",
    key: "AN"
  },
  {
    value: "Latvia",
    key: "LV"
  },
  {
    value: "Nigeria",
    key: "NG"
  },
  {
    value: "RWANDA",
    key: "RW"
  },
  {
    value: "Mauritania",
    key: "MR"
  },
  {
    value: "Malta",
    key: "MT"
  },
  {
    value: "Ukraine",
    key: "UA"
  },
  {
    value: "Ghana",
    key: "GH"
  },
  {
    value: "Netherlands",
    key: "NL"
  },
  {
    value: "Liechtenstein",
    key: "LI"
  },
  {
    value: "Burkina Faso",
    key: "BF"
  },
  {
    value: "Singapore",
    key: "SG"
  },
  {
    value: "Jordan",
    key: "JO"
  },
  {
    value: "Hong Kong",
    key: "HK"
  },
  {
    value: "Lesotho",
    key: "LS"
  },
  {
    value: "Mali",
    key: "ML"
  },
  {
    value: "Azerbaijan",
    key: "AZ"
  },
  {
    value: "Bosnia and Herzegovina",
    key: "BA"
  },
  {
    value: "Turkey",
    key: "TR"
  },
  {
    value: "Virgin Islands, British",
    key: "VG"
  },
  {
    value: "New Zealand",
    key: "NZ"
  },
  {
    value: "Guinea-Bissau",
    key: "GW"
  },
  {
    value: "Gibraltar",
    key: "GI"
  },
  {
    value: "Somalia",
    key: "SO"
  },
  {
    value: "Switzerland",
    key: "CH"
  },
  {
    value: "Iran, Islamic Republic Of",
    key: "IR"
  },
  {
    value: "Tanzania, United Republic of",
    key: "TZ"
  },
  {
    value: "Finland",
    key: "FI"
  },
  {
    value: "French Polynesia",
    key: "PF"
  },
  {
    value: "Honduras",
    key: "HN"
  },
  {
    value: "Holy See (Vatican City State)",
    key: "VA"
  },
  {
    value: "Croatia",
    key: "HR"
  },
  {
    value: "Anguilla",
    key: "AI"
  },
  {
    value: "Marshall Islands",
    key: "MH"
  },
  {
    value: "Iraq",
    key: "IQ"
  },
  {
    value: "Ecuador",
    key: "EC"
  },
  {
    value: "Egypt",
    key: "EG"
  },
  {
    value: "Cuba",
    key: "CU"
  },
  {
    value: "United Kingdom",
    key: "GB"
  },
  {
    value: "Georgia",
    key: "GE"
  },
  {
    value: "Northern Mariana Islands",
    key: "MP"
  },
  {
    value: "Israel",
    key: "IL"
  },
  {
    value: "AndorrA",
    key: "AD"
  },
  {
    value: "Greece",
    key: "GR"
  },
  {
    value: "Hungary",
    key: "HU"
  },
  {
    value: "Lao People'S Democratic Republic",
    key: "LA"
  },
  {
    value: "New Caledonia",
    key: "NC"
  },
  {
    value: "Western Sahara",
    key: "EH"
  },
  {
    value: "Colombia",
    key: "CO"
  },
  {
    value: "Kyrgyzstan",
    key: "KG"
  },
  {
    value: "Angola",
    key: "AO"
  },
  {
    value: "Panama",
    key: "PA"
  },
  {
    value: "Ireland",
    key: "IE"
  },
  {
    value: "Christmas Island",
    key: "CX"
  },
  {
    value: "Heard Island and Mcdonald Islands",
    key: "HM"
  },
  {
    value: "Malaysia",
    key: "MY"
  },
  {
    value: "Korea, Republic of",
    key: "KR"
  },
  {
    value: "United States Minor Outlying Islands",
    key: "UM"
  },
  {
    value: "Libyan Arab Jamahiriya",
    key: "LY"
  },
  {
    value: "Bahamas",
    key: "BS"
  },
  {
    value: "Slovenia",
    key: "SI"
  },
  {
    value: "Trinidad and Tobago",
    key: "TT"
  },
  {
    value: "Romania",
    key: "RO"
  },
  {
    value: "China",
    key: "CN"
  },
  {
    value: "Falkland Islands (Malvinas)",
    key: "FK"
  },
  {
    value: "Dominica",
    key: "DM"
  },
  {
    value: "Timor-Leste",
    key: "TL"
  },
  {
    value: "Fiji",
    key: "FJ"
  },
  {
    value: "Japan",
    key: "JP"
  },
  {
    value: "Germany",
    key: "DE"
  },
  {
    value: "Saudi Arabia",
    key: "SA"
  },
  {
    value: "Belize",
    key: "BZ"
  },
  {
    value: "Saint Pierre and Miquelon",
    key: "PM"
  },
  {
    value: "Gambia",
    key: "GM"
  },
  {
    value: "United Arab Emirates",
    key: "AE"
  },
  {
    value: "Sao Tome and Principe",
    key: "ST"
  },
  {
    value: "Togo",
    key: "TG"
  },
  {
    value: "Canada",
    key: "CA"
  },
  {
    value: "Tajikistan",
    key: "TJ"
  },
  {
    value: "Eritrea",
    key: "ER"
  },
  {
    value: "Senegal",
    key: "SN"
  },
  {
    value: "Montserrat",
    key: "MS"
  },
  {
    value: "Comoros",
    key: "KM"
  },
  {
    value: "Surivalue",
    key: "SR"
  },
  {
    value: "Italy",
    key: "IT"
  },
  {
    value: "Tuvalu",
    key: "TV"
  },
  {
    value: "Namibia",
    key: "NA"
  },
  {
    value: "Reunion",
    key: "RE"
  },
  {
    value: "Haiti",
    key: "HT"
  },
  {
    value: "Nauru",
    key: "NR"
  },
  {
    value: "Philippines",
    key: "PH"
  },
  {
    value: "French Guiana",
    key: "GF"
  },
  {
    value: "Martinique",
    key: "MQ"
  },
  {
    value: "Cyprus",
    key: "CY"
  },
  {
    value: "Isle of Man",
    key: "IM"
  },
  {
    value: "Bhutan",
    key: "BT"
  },
  {
    value: "Nicaragua",
    key: "NI"
  },
  {
    value: "Macedonia, The Former Yugoslav Republic of",
    key: "MK"
  },
  {
    value: "Bahrain",
    key: "BH"
  },
  {
    value: "Congo",
    key: "CG"
  },
  {
    value: "Saint Lucia",
    key: "LC"
  },
  {
    value: "Armenia",
    key: "AM"
  },
  {
    value: "Chile",
    key: "CL"
  },
  {
    value: "Svalbard and Jan Mayen",
    key: "SJ"
  },
  {
    value: "Tonga",
    key: "TO"
  },
  {
    value: "Puerto Rico",
    key: "PR"
  },
  {
    value: "Guinea",
    key: "GN"
  },
  {
    value: "South Africa",
    key: "ZA"
  },
  {
    value: "Niger",
    key: "NE"
  },
  {
    value: "Saint Helena",
    key: "SH"
  }
]

export default exampleData;

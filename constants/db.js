export default db = {
	sydney: {
		restaurants: [
			{
				name: 'Cucina Porto',
				summary: '$$ - $$$, Italian, Pizza, Neapolitan',
				location:
					'92 Hay Street, Sydney, New South Wales 2000 Australia',
				website: 'https://www.star.com.au/sydney/cucina-porto',
				phone: '+61 1800 700 700',
			},
			{
				name: 'Farmhouse Kings Cross',
				summary:
					'$$ - $$$, Australian, Vegetarian, Friendly, Vegan Options',
				location:
					'Shop 4 40 Bayswater Rd, Sydney, New South Wales 2011 Australia',
				website: 'https://farmhousekingscross.com.au/',
				email: 'eat@farmhousekingcross.com.au',
				phone: '+61 448 413 791',
			},
			{
				name: 'Thai Pothong',
				summary: '$$ - $$$, Asian, Thai, Healthy',
				location:
					'U 4 294 King St, Newtown, Sydney, New South Wales 2042 Australia',
				website: 'https://www.thaipothong.com.au/',
				email: 'thaipothong@bigpond.com.au',
				phone: '+61 2 9550 6277',
			},
		],
		hotels: [
			{
				name: 'The Fullerton Hotel Sydney',
				stars: 5,
				summary: 'Classic, City View',
				location:
					'1 Martin Place, Sydney, New South Wales 2000 Australia',
				email: 'fsy.enquiries@fullertonhotels.com',
				phone: '+61 2 8223 1111',
			},
			{
				name: 'QT Sydney',
				stars: 5,
				summary: 'Quirky Hotels, Art Deco Style',
				location:
					'49 Market Street Corner of Market and George Streets, Sydney, New South Wales 2000 Australia',
				website: 'https://www.qthotels.com/rates/#/sydney-cbd',
				email: 'reservations_qtsydney@evt.com',
				phone: '+61 2 8262 0000',
			},
			{
				name: 'Sir Stamford at Circular Quay Hotel Sydney',
				stars: 5,
				summary: 'Classic, Quiet',
				location:
					'93 Macquarie Street, Sydney, New South Wales 2000 Australia',
				email: 'reservations@sscq.stamford.com.au',
				phone: '+61 2 9252 4600',
			},
		],
		attractions: [
			{
				name: 'Sydney Opera House',
				summary:
					'Points of Interest & Landmarks, Architectural Buildings, Theaters, Central Business District',
				location:
					'Bennelong Point Easy walk from Circular Quay Train Station, Sydney, New South Wales 2000 Australia',
				website: 'https://www.sydneyoperahouse.com/',
				phone: '+61 2 9250 7111',
			},
			{
				name: 'Sydney Harbour Bridge',
				summary: 'Bridges',
				location: 'Sydney, New South Wales 2060 Australia',
				website:
					'https://www.sydney.com/destinations/sydney/sydney-city/sydney-harbour/sydney-harbour-bridge',
				phone: '1800 067 676',
			},
			{
				name: 'Royal Botanic Garden Sydney',
				summary: 'Gardens, Central Business District',
				location:
					'Mrs Macquaries Rd, Sydney, New South Wales 2000 Australia',
				website: 'https://www.rbgsyd.nsw.gov.au/',
				phone: '+61 2 9231 8111',
			},
		],
		activities: [
			{
				name: 'Chinese Garden General Admission Ticket',
				summary: 'Parks',
				operatedBy: 'Chinese Garden of Friendship',
				duration: '45-60 minutes',
				price: 'A$8.00',
			},
			{
				name: 'Sydney The Rocks Guided Walking Tour',
				summary: 'City Tours',
				operatedBy: 'The Rocks Walking Tours',
				duration: '1h 30m',
				price: 'A$32.00',
			},
			{
				name:
					'All Inclusive Blue Mountains Small-Group Day Trip from Sydney',
				summary: 'Bus Tours',
				operatedBy: "Anderson's Tours",
				duration: '11h',
				price: 'A$235.00',
			},
		],
	},
	melbourne: {
		restaurants: [
			{
				name: 'Foglia di Fico',
				summary: '$$ - $$$, Italian, European, Vegetarian, Friendly',
				location:
					'585 La Trobe St (Spencer St entrance), Melbourne, Victoria 3000 Australia',
				website: 'http://www.fogliadifico.com.au/',
				email: 'info@fogliadifico.com',
				phone: '+61 3 9642 4394',
			},
			{
				name: 'Scopri',
				summary:
					'$$ - $$$, Italian, Vegetarian, Friendly, Vegan Options',
				location:
					'191 Nicholson St Carlton, Melbourne, Victoria 3053 Australia',
				website: 'https://www.scopri.com.au/',
				email: 'info@scopri.com.au',
				phone: '+61 3 9347 8252',
			},
			{
				name: 'Da Guido La Pasta',
				summary: '$$ - $$$, Italian, Mediterranean, European',
				location:
					'130 Lygon St Carlton, Melbourne, Victoria 3053 Australia',
				website: 'https://www.daguidomelbourne.com/',
				email: 'daguidomelbourne@gmail.com',
				phone: '+61 3 8528 4547',
			},
		],
		hotels: [
			{
				name: 'Park Hyatt Melbourne',
				stars: 5,
				summary: 'Luxury, Classic',
				location:
					'1 Parliament Square off Parliament Place, Melbourne, Victoria 3002 Australia',
			},
			{
				name: 'QT Melbourne',
				stars: 5,
				summary: 'Quirky Hotels, Business',
				location: '133 Russell St, Melbourne, Victoria 3000 Australia',
				website: 'https://www.qthotels.com/rates/#/melbourne',
				email: 'reservations_qtmelbourne@evt.com',
				phone: '+61 3 8636 8800',
			},
			{
				name: 'Crown Towers Melbourne',
				stars: 5,
				summary: 'Luxury, Great View',
				location: '8 Whiteman St, Melbourne, Victoria 3006 Australia',
				website: 'https://www.qthotels.com/rates/#/melbourne',
				email: 'reservations.mct@crownhotels.com.au',
				phone: '+61 3 9292 6868',
			},
		],
		attractions: [
			{
				name: 'Royal Botanic Gardens Victoria',
				summary: 'Gardens',
				location: 'Birdwood Ave, Melbourne, Victoria 3004 Australia',
				website: 'https://www.rbg.vic.gov.au/visit-melbourne',
				phone: '+61 3 9252 2429',
			},
			{
				name: 'Melbourne Cricket Ground (MCG)',
				summary: 'Specialty Museums, Arenas & Stadiums',
				location:
					'Brunton Ave Yarra Park, Jolimont, Melbourne, Victoria 8002 Australia',
				website: 'https://www.mcg.org.au/',
				phone: '+61 3 9657 8888',
			},
			{
				name: 'National Gallery of Victoria',
				summary: 'Art Museums, Southbank',
				location: '180 St Kilda Rd, Melbourne, Victoria 8006 Australia',
				website: 'https://www.ngv.vic.gov.au/',
				phone: '+61 3 8620 2222',
			},
		],
		activities: [
			{
				name: 'Yarra Valley Wine and Winery Tour from Melbourne',
				summary: 'Bus Tours',
				operatedBy: 'Australian Wine Tour Company',
				duration: '8h',
				price: 'A$140.00',
			},
			{
				name: 'SEA LIFE Melbourne Aquarium Admission Ticket',
				summary: 'Aquariums',
				operatedBy: 'SEA LIFE Melbourne Aquarium',
				duration: '1h 30m',
				price: 'A$36.80',
			},
			{
				name: 'Spirit of Melbourne Dinner Cruise',
				summary: 'Dinner Cruises',
				operatedBy: 'Melbourne River Cruises',
				duration: '3h',
				price: 'A$145.00',
			},
		],
	},
};

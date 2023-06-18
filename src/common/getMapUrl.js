
// https://maps.googleapis.com/maps/api/staticmap?key=YOUR_API_KEY&center=20.297449605873503,85.8122523&zoom=18&format=png&maptype=roadmap&style=element:geometry.fill%7Cweight:2.00&style=element:geometry.stroke%7Ccolor:0x9c9c9c&style=element:labels.text%7Cvisibility:on&style=feature:landscape%7Ccolor:0xf2f2f2&style=feature:landscape%7Celement:geometry.fill%7Ccolor:0xffffff&style=feature:landscape.man_made%7Celement:geometry.fill%7Ccolor:0xffffff&style=feature:poi%7Cvisibility:off&style=feature:road%7Csaturation:-100%7Clightness:45&style=feature:road%7Celement:geometry.fill%7Ccolor:0xeeeeee&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x7b7b7b&style=feature:road%7Celement:labels.text.stroke%7Ccolor:0xffffff&style=feature:road.arterial%7Celement:labels.icon%7Cvisibility:off&style=feature:road.highway%7Cvisibility:simplified&style=feature:transit%7Cvisibility:off&style=feature:water%7Ccolor:0x46bcec%7Cvisibility:on&style=feature:water%7Celement:geometry.fill%7Ccolor:0xc8d7d4&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x070707&style=feature:water%7Celement:labels.text.stroke%7Ccolor:0xffffff&size=480x360


const getMapUrl = () => {
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

    const url = `https://maps.googleapis.com/maps/api/staticmap?key=${key}&center=20.297449605873503,85.8122523&zoom=18&format=png&maptype=roadmap&style=element:geometry.fill%7Cweight:2.00&style=element:geometry.stroke%7Ccolor:0x9c9c9c&style=element:labels.text%7Cvisibility:on&style=feature:landscape%7Ccolor:0xf2f2f2&style=feature:landscape%7Celement:geometry.fill%7Ccolor:0xffffff&style=feature:landscape.man_made%7Celement:geometry.fill%7Ccolor:0xffffff&style=feature:poi%7Cvisibility:off&style=feature:road%7Csaturation:-100%7Clightness:45&style=feature:road%7Celement:geometry.fill%7Ccolor:0xeeeeee&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x7b7b7b&style=feature:road%7Celement:labels.text.stroke%7Ccolor:0xffffff&style=feature:road.arterial%7Celement:labels.icon%7Cvisibility:off&style=feature:road.highway%7Cvisibility:simplified&style=feature:transit%7Cvisibility:off&style=feature:water%7Ccolor:0x46bcec%7Cvisibility:on&style=feature:water%7Celement:geometry.fill%7Ccolor:0xc8d7d4&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x070707&style=feature:water%7Celement:labels.text.stroke%7Ccolor:0xffffff&size=480x360`
    console.log(url);
    return url;
};

export default getMapUrl;

